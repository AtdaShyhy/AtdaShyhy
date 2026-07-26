export default function App() {
  const panels = [
    { title: 'Musulmanyň ilkinji bilmeli zady', arabic: null },
    { title: 'Irdenki we Agşamky zikirler we dogalar', arabic: null },
    { title: 'Tajwid sapaklary', arabic: 'اَلتَّجْوِيدُ' },
    { title: 'Mukaddes Kuran', arabic: 'الْقُرْآنُ الْكَرِيمُ' },
    { title: 'Hadisler', arabic: 'الأَحَادِيثُ النَّبَوِيَّةُ' },
  ];

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Sans:wght@300;400;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Sans', sans-serif; background: #000; }

        .bg {
          position: fixed; inset: 0;
          background: linear-gradient(160deg, #1a0533 0%, #0d1f3c 30%, #0a2e2a 60%, #1a1a2e 100%);
          z-index: 0;
        }
        .blob {
          position: fixed; border-radius: 50%;
          filter: blur(80px); opacity: 0.45;
          pointer-events: none; z-index: 0;
        }
        .blob1 { width: 380px; height: 380px; background: #7c3aed; top: -80px; left: -80px; }
        .blob2 { width: 300px; height: 300px; background: #0ea5e9; bottom: 10%; right: -60px; }
        .blob3 { width: 260px; height: 260px; background: #10b981; bottom: 30%; left: 10%; }
        .blob4 { width: 200px; height: 200px; background: #f59e0b; top: 40%; right: 20%; }

        .container {
          position: relative; z-index: 1;
          max-width: 520px; margin: 0 auto;
          padding: 2.5rem 1.2rem 3rem;
        }
        .site-title { text-align: center; margin-bottom: 2.2rem; }
        .site-title h1 {
          font-size: 1.7rem; font-weight: 700; color: #fff;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 12px rgba(124,58,237,0.4);
        }

        .panel {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 1.2rem 1.4rem;
          margin-bottom: 1rem;
          cursor: pointer;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
          text-align: center;
        }
        .panel:active { transform: scale(0.97); background: rgba(255,255,255,0.12); }
        .panel-arabic {
          font-family: 'Amiri', serif; font-size: 1.15rem;
          color: rgba(255,255,255,0.6); direction: rtl;
          line-height: 1.5; margin-bottom: 0.3rem;
        }
        .panel-title { font-size: 1.1rem; font-weight: 600; color: #fff; line-height: 1.4; }

        @media (hover: hover) {
          .panel:hover {
            background: rgba(255,255,255,0.12);
            border-color: rgba(255,255,255,0.28);
            transform: translateY(-2px);
          }
        }
      `}</style>

      <div className="bg" />
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
      <div className="blob blob4" />

      <div className="container">
        <div className="site-title">
          <h1>AtdaShyhy</h1>
        </div>
        {panels.map((p, i) => (
          <div className="panel" key={i}>
            {p.arabic && <div className="panel-arabic">{p.arabic}</div>}
            <div className="panel-title">{p.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
