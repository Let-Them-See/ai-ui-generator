import { callLLM } from "@/lib/openai";

export async function runExplainer(plan: string) {
  return await callLLM([
    {
      role: "system",
      content: `
You are a UI explanation agent.

Explain why the chosen layout and components make sense.
Be concise.
`,
    },
    {
      role: "user",
      content: plan,
    },
  ]);
}
