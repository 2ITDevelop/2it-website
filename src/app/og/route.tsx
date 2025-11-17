// src/app/og/route.ts
import { ImageResponse } from 'next/og';

export const runtime = 'edge'; // opzionale, ma consigliato

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          color: 'white',
          background: 'linear-gradient(to right, #000, #333)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Ristorante La Terrazza
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
