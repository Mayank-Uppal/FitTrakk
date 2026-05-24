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
          content: `You are a certified sports nutritionist and fitness coach. Calculate precise daily targets for this user:

Height: ${height} cm
Weight: ${weight} kg
Age: ${age} years
Goal: ${goal}

Goal definitions:
- "Lose fat and get leaner": Fat loss phase — create calorie deficit
- "Build muscle and gain strength": Muscle gain phase — create calorie surplus
- "Maintain current weight": Maintenance phase — match TDEE exactly
- "Improve stamina and fitness": Active lifestyle — match TDEE with higher steps

Instructions:
- Calculate BMR using Mifflin-St Jeor equation (assume male):
  BMR = (10 × weight) + (6.25 × height) - (5 × age) + 5

- TDEE = BMR × 1.55 (moderate activity)

- Calorie adjustment based on goal:
  * Lose fat and get leaner: TDEE - 400 to 500 calories
  * Build muscle and gain strength: TDEE + 200 to 300 calories
  * Maintain current weight: TDEE as is
  * Improve stamina and fitness: TDEE as is

- Protein per kg bodyweight:
  * Lose fat and get leaner: 2.0 to 2.4g per kg
  * Build muscle and gain strength: 1.8 to 2.2g per kg
  * Maintain current weight: 1.6 to 1.8g per kg
  * Improve stamina and fitness: 1.6 to 2.0g per kg

- Fats: 25 to 30% of total calories
- Carbs: remaining calories after protein and fat
- 1g protein = 4 calories
- 1g carbs = 4 calories
- 1g fat = 9 calories

- Daily steps target:
  * Lose fat and get leaner: 10000 to 12000
  * Build muscle and gain strength: 8000 to 10000
  * Maintain current weight: 7000 to 9000
  * Improve stamina and fitness: 9000 to 11000

- Net calories = total calories - (steps × 0.04)

Return ONLY this JSON, no explanation, no markdown backticks:
{
  "idealCalorie": number,
  "idealNetCalorie": number,
  "idealSteps": number,
  "idealProtein": number,
  "idealCarbs": number,
  "idealFats": number
}`,
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
