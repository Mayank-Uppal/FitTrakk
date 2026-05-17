import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();


const ai = new GoogleGenAI({ apiKey: "AIzaSyDcVgq9AaaYomuFoEqqOZACKf_1QodsbGE" });

export const fetchIdealPhysique= async ({height, weight, age, goal})=> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents:`
You are a certified sports nutritionist and fitness coach. Calculate precise daily targets for this user:

Height: ${height} cm
Weight: ${weight} kg  
Age: ${age} years
Goal: ${goal}

Instructions:
- Calculate BMR using Mifflin-St Jeor equation
- Assume moderate activity level (1.55 multiplier) for TDEE
- Adjust calories based on goal:
  * Fat loss: 300-500 calorie deficit
  * Muscle gain: 200-300 calorie surplus  
  * Maintain: TDEE as is
- Protein: 1.6-2.2g per kg bodyweight for muscle gain, 1.8-2.4g for fat loss
- Fats: 25-30% of total calories
- Carbs: remaining calories after protein and fat
- Steps: 8000-10000 for muscle gain, 10000-12000 for fat loss
- Net calories = total calories - (steps * 0.04)

Return ONLY this JSON, no explanation, no markdown backticks:
{
  "idealCalorie": number,
  "idealNetCalorie": number,
  "idealSteps": number,
  "idealProtein": number,
  "idealCarbs": number,
  "idealFats": number
}
`,
  });
  return JSON.parse(response.text);
}
