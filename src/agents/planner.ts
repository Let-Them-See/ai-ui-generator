import { callLLM } from "@/lib/openai";

export async function runPlanner(input: string) {
  return await callLLM([
    {
      role: "system",
      content: `
You are a UI planning agent.

Your job:
- Interpret the user instruction.
- Decide layout structure.
- Decide which components are needed.
- If existing schema is provided, modify it.

Return a short structured plan in plain text.
Do NOT return JSON schema.
`,
    },
    {
      role: "user",
      content: input,
    },
  ]);
}
