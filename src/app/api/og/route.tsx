import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom right, #6B46C1, #D53F8C)',
            padding: '40px',
          }}
        >
          <div style={{ 
            fontSize: '64px', 
            fontWeight: 700,
            background: 'white',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
            textAlign: 'center',
            lineHeight: 1.2,
          }}>
            Mudipa Kishan
          </div>
          <div style={{ 
            fontSize: '36px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '40px',
            textAlign: 'center',
            lineHeight: 1.4,
          }}>
            Software Engineer
          </div>
          <div style={{ 
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.5,
          }}>
            Full-stack Development • Cloud Computing • Innovation
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // Using system fonts for better edge runtime compatibility
        fonts: [
          {
            name: 'sans-serif',
            data: await fetch(
              new URL('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZ9hiA.woff2')
            ).then((res) => res.arrayBuffer()),
            weight: 400,
            style: 'normal',
          },
        ],
      },
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}