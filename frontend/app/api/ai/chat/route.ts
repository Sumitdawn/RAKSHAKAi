import { NextResponse } from 'next/server';

type ChatRequest = {
  user_id: number;
  message: string;
  language?: string | null;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ChatRequest;
    if (!body?.message) {
      return NextResponse.json({ error: 'message is required' }, { status: 400 });
    }

    const text = body.message.toLowerCase();
    let score = 0.7;
    if (['panic', 'urgent', 'help', 'danger'].some((w) => text.includes(w))) {
      score = 0.92;
    }
    const urgency = score > 0.8 ? 'high' : 'medium';

    const reply = `Your concern has been identified as ${urgency} priority. Rakshak AI is preparing immediate guidance.`;
    const response = {
      reply,
      urgency,
      emotion_score: score,
      confidence: 0.94,
      follow_up: ['Please share more details about the support needed.'],
    };

    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json({ error: 'invalid request' }, { status: 400 });
  }
}
