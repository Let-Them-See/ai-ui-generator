import { NextResponse } from "next/server";
import { runGenerator } from "@/agents/generator";

export async function POST(req: Request) {
  console.log("API KEY:", process.env.GEMINI_API_KEY);
  try {
    const { prompt, currentSchema } = await req.json();

    if (!prompt || prompt.trim() === "") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = `
You are a UI generator.

User instruction:
${prompt}

Existing schema:
${currentSchema || "None"}

Rules:
- Allowed components: Button, Card, Input, Navbar, Sidebar, Modal, Table, Chart
- Output ONLY raw JSON
- No markdown
- Format:
{
  "type": "Component",
  "props": {},
  "children": []
}
`;

    let schema = await runGenerator(combinedPrompt);

    if (schema) {
      schema = schema
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
    }

    return NextResponse.json({
      schema,
      explanation: "Generated successfully.",
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "AI generation failed" },
      { status: 500 }
    );
  }
}
