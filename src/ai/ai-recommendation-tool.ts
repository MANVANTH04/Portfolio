'use server';

/**
 * @fileOverview AI-powered recommendation tool for portfolio visitors.
 * 
 * - getRecommendations - A function that analyzes user activity and suggests relevant projects or skills.
 * - RecommendationInput - The input type for the getRecommendations function.
 * - RecommendationOutput - The return type for the getRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendationInputSchema = z.object({
  userActivity: z
    .string()
    .describe("Description of the user's activity on the portfolio site, e.g., pages visited, time spent on each page."),
});
export type RecommendationInput = z.infer<typeof RecommendationInputSchema>;

const RecommendationOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('List of recommended projects or skills based on user activity.'),
});
export type RecommendationOutput = z.infer<typeof RecommendationOutputSchema>;

export async function getRecommendations(input: RecommendationInput): Promise<RecommendationOutput> {
  return recommendationFlow(input);
}

const recommendationPrompt = ai.definePrompt({
  name: 'recommendationPrompt',
  input: {schema: RecommendationInputSchema},
  output: {schema: RecommendationOutputSchema},
  prompt: `You are an AI assistant designed to analyze user activity on a developer portfolio and provide personalized recommendations.

  Based on the user's activity, suggest relevant projects or skills they might be interested in exploring.

  User Activity: {{{userActivity}}}

  Consider the following projects and skills when making recommendations:

  Projects:
  - Second Brain: AI Knowledge Hub (Next.js, Node.js, MongoDB, OpenAI, Pinecone)
  - Crisis Connect: Real-Time Disaster System (React, Node, Supabase, Mapbox, Gemini Vision)
  - Retena: Eye-Controlled Mouse (Python, OpenCV, MediaPipe)

  Skills:
  - Frontend: React, Next.js, Redux, Tailwind CSS
  - Backend: Node.js, Express.js, REST APIs
  - Databases: MongoDB, Supabase, MySQL, Firebase
  - Cloud & DevOps: AWS, GCP, Docker, Kubernetes, CI/CD, Vercel
  - AI/ML: OpenAI API, Pinecone, Semantic Search
  - Languages: JavaScript, TypeScript, Python, Java, C++

  Provide your recommendations in the form of a list of strings.
  `,
});

const recommendationFlow = ai.defineFlow(
  {
    name: 'recommendationFlow',
    inputSchema: RecommendationInputSchema,
    outputSchema: RecommendationOutputSchema,
  },
  async input => {
    const {output} = await recommendationPrompt(input);
    return output!;
  }
);
