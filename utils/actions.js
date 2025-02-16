"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a helpful assistant" },
        ...chatMessages,
      ],
      model: "ft:gpt-3.5-turbo-0125:personal::9ZhNwYO5",
      temperature: 0,
    });
    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};
