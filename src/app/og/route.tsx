import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// OG image dinamica
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 56,
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#1a1a1a',
          padding: '40px',
        }}
      >
        Food Website – Ristorante La Terrazza
      </div>
    ),
    size
  );
}
