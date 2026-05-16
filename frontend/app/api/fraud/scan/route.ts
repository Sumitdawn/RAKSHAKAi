import { NextResponse } from 'next/server';

type ScanRequest = {
  user_id: number;
  content: string;
  content_type?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ScanRequest;
    if (!body?.content) {
      return NextResponse.json({ error: 'content is required' }, { status: 400 });
    }

    const text = body.content.toLowerCase();
    let verdict = 'Review recommended';
    let probability = 0.42;
    let advice = 'The content appears suspicious. Confirm with welfare authorities before responding.';

    if (text.includes('upi') || text.includes('pay') || text.includes('bank')) {
      verdict = 'High risk';
      probability = 0.88;
      advice = 'Do not share personal banking details; verify sender identity through official channels.';
    }

    const response = {
      verdict,
      fraud_probability: probability,
      confidence: 0.97,
      advice,
    };

    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json({ error: 'invalid request' }, { status: 400 });
  }
}
