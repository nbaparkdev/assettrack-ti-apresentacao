import { GoogleGenAI } from "@google/genai";
import { GeminiResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Uses Gemini 2.5 Flash Image to edit an image based on a prompt.
 * 
 * @param base64Image The base64 string of the image (without the data:image/png;base64, prefix if possible, but the API handles inlineData struct)
 * @param mimeType The mime type of the image (e.g., image/jpeg)
 * @param prompt The user instruction for editing.
 */
export const editImageWithGemini = async (
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<GeminiResponse> => {
  try {
    // Clean base64 string if it contains metadata header
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, "");

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    let result: GeminiResponse = {};
    const parts = response.candidates?.[0]?.content?.parts;

    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
            result.imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        } else if (part.text) {
            result.text = part.text;
        }
      }
    }

    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Falha ao processar imagem com IA.");
  }
};