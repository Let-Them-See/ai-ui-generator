"use client";

import { useState } from "react";
import styles from "./layout.module.css";
import { renderSchema } from "@/lib/renderSchema";
import { UISchema } from "@/types/uiSchema";

export default function Home() {
  // Version System
  const [versions, setVersions] = useState<string[]>([
    "// Generated UI will appear here",
  ]);
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);

  const currentCode = versions[currentVersionIndex];

  const updateCode = (newCode: string) => {
    const updatedVersions = versions.slice(0, currentVersionIndex + 1);
    updatedVersions.push(newCode);
    setVersions(updatedVersions);
    setCurrentVersionIndex(updatedVersions.length - 1);
  };

  const rollback = () => {
    if (currentVersionIndex > 0) {
      setCurrentVersionIndex(currentVersionIndex - 1);
    }
  };

  // AI State
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState("");

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          currentSchema: currentCode,
        }),
      });

      const data = await response.json();
      console.log("API RESPONSE:", data);

      if (!response.ok) {
        console.error("API error:", data);
        alert("AI generation failed.");
        return;
      }

      if (data.schema) {
        updateCode(data.schema);
      }

      if (data.explanation) {
        setExplanation(data.explanation);
      }
    } catch (error) {
      console.error(error);
      alert("AI generation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* LEFT PANEL */}
      <div className={styles.chatPanel}>
        <h2>AI Chat</h2>

        <textarea
          placeholder="Describe your UI..."
          className={styles.textarea}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className={styles.generateButton}
          onClick={handleGenerate}
        >
          {loading ? "Generating..." : "Generate UI"}
        </button>

        <button
          className={styles.generateButton}
          onClick={rollback}
          style={{ marginTop: 10 }}
        >
          Rollback
        </button>

        {explanation && (
          <div style={{ marginTop: 20 }}>
            <h4>AI Explanation</h4>
            <p>{explanation}</p>
          </div>
        )}
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.rightPanel}>
        {/* CODE PANEL */}
        <div className={styles.codePanel}>
          <h3>Generated Code</h3>
          <textarea
            value={currentCode}
            onChange={(e) => updateCode(e.target.value)}
            className={styles.codeArea}
          />
        </div>

        {/* PREVIEW PANEL */}
        <div className={styles.previewPanel}>
          <h3>Live Preview</h3>
          <div className={styles.previewBox}>
            {(() => {
              try {
                const parsed: UISchema = JSON.parse(currentCode);
                return renderSchema(parsed);
              } catch {
                return <div>Invalid JSON schema</div>;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
