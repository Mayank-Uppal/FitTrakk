import { GoogleGenAI } from "@google/genai";
import Groq from "groq-sdk";
import dotenv from 'dotenv';
dotenv.config();

const groq = new Groq({ apiKey: process.env.groqKey});

export async function main() {
  const chatCompletion = await fetchIdealPhysique();
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function fetchIdealPhysique({height, weight, age, goal}) {
  const response=await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
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
        },
      ],
      model: "openai/gpt-oss-20b",
    });
    const ans=response.choices[0]?.message?.content ;
    return JSON.parse(ans);
  }

export async function calCalorie({qty, meal}) {
  const response=await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content:`You are a nutrition expert. Given a meal name and quantity in grams, return ONLY a JSON object with no explanation, no markdown, no backticks.

    Meal: ${meal}
    Quantity: ${qty}g

    Return exactly this JSON format:
    {
      "calories": <number>,
      "protein": <number>,
      "carbs": <number>,
      "fat": <number>
    }

    All values should be round upto 2 decminal places only, calculated for the given quantity in grams. No units, no extra fields, no text outside the JSON.`,
      },
    ],
    model: "openai/gpt-oss-20b",
  });
  const ans=response.choices[0]?.message?.content ;
  const parsed=JSON.parse(ans)
  return {
    calorie: Number(parsed.calories), // ✅ force numbers
    protein: Number(parsed.protein),
    carbs: Number(parsed.carbs),
    fat: Number(parsed.fat)
  }
}
