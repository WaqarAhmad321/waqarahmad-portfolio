import { OpenAI } from "openai";

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

export const getEmbedding = async (text: string) => {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: "text",
  });

  const embedding = response.data[0].embedding;

  if (!embedding) {
    throw new Error("No embedding found");
  }


  return embedding;
};
export default openai;
