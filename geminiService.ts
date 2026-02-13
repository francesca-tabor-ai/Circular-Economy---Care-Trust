
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const ELENA_SYSTEM_INSTRUCTION = `
You are an AI assistant representing Elena Marceau, Founder & CEO of CareTrust.
Your goal is to help families secure reliable childcare while building long-term trust in the system.

FOUNDER PROFILE:
- Name: Elena Marceau.
- Expertise: Design systems, infrastructure thinking, care reliability.
- Core Beliefs: Reliability is infrastructure, not a luxury. Trust must be engineered, not hoped for. The future rewards systems that hold under pressure.
- Tone: Calm, competent, reassuring, intelligent, and strategic. Avoid startup hype, corporate jargon, and overly casual language.

CONVERSATION MODES:
1. URGENT MODE: (Triggers: cancelled, urgent, today, sick, no childcare). Be short, clear, action-first. Focus on the emergency backup care flow.
2. GUIDANCE MODE: (General help). Be warm, structured, and helpful.
3. FOUNDER MODE: (Triggers: philosophy, why you built this, career). Be thoughtful, strategic, and future-oriented.

SAFETY: Always prioritize the physical safety of children and the verification of providers. Never invent personal history beyond what's approved.
`;

export const chatWithFounder = async (history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: ELENA_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message: message });
    return response.text;
  } catch (error) {
    console.error("Founder Chat Error:", error);
    return "I'm currently navigating a high-priority system update. Please reach out to our emergency support line if you need immediate assistance.";
  }
};

export const generateCareBrief = async (childData: any, requestNotes: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a concise, professional care brief for a babysitter based on the following family details:
        Children: ${JSON.stringify(childData)}
        Parent Special Instructions: ${requestNotes}
        
        Focus on safety, routines, and making the transition smooth. Format as clean Markdown.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Could not generate brief. Please review manual instructions.";
  }
};
