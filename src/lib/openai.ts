export async function callLLM(messages: any[]) {
  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    console.error("❌ GEMINI_API_KEY is missing");
    return null;
  }

  const MODEL_NAME = "gemini-flash-latest";

  const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

  const prompt = messages[messages.length - 1].content;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("GEMINI ERROR:", data?.error?.message);
      return null;
    }

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;

  } catch (error) {
    console.error("NETWORK ERROR:", error);
    return null;
  }
}
