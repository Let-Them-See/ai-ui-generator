import { callLLM } from "@/lib/openai";

export async function runGenerator(plan: string) {
  return await callLLM([
    {
      role: "system",
      content: `
You are a UI schema generator.

Allowed components:
Button, Card, Input, Navbar, Sidebar, Modal, Table, Chart

Output ONLY raw JSON.
No markdown.
No explanations.
`,
    },
    {
      role: "user",
      content: plan,
    },
  ]);
}
