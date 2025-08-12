// src/app/page.tsx
export default function HaddangseSite() {
  // ---- Brand/Config ----
  const BRAND = {
    name: "Theatre Haddangse",
    tagline: "하늘부터 땅끝까지 세게 간다",
    primary: "#0ea5e9",
    instagram: "https://instagram.com/",
    email: "hello@haddangse.org",
    phone: "+82-10-0000-0000",
  };

  // ---- Data ----
  const SHOWS = [
    {
      id: "time-painter",
      title: "시간을 칠하는 사람 (The Time Painter)",
      dateRange: "2025.08.01 – 08.24",
      venue: "Edinburgh Korean Season (예시)",
      desc: "오브제와 종이를 활용한 하땅세의 대표작. 관객과 함께 시간을 색칠합니다.",
      ctaText: "예매하기",
      bookingLink: "https://example.com/tickets/time-painter",
      image:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "byeon",
      title: "그때, 변홍례 (SNL Ver.)",
      dateRange: "2025.09 예정",
      venue: "하땅세 극장 (성북동)",
      desc: "실화 모티프 블랙코미디. 관객 참여형 무성영화 콘셉트로 재창작된 버전.",
      ctaText: "예매 오픈 알림",
      bookingLink: "https://example.com/waitlist/byeon",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const PRODUCTS = [
    {
      id: "poster-2025",
      name: "2025 공식 포스터 (A2)",
      priceKRW: 15000,
      desc: "친환경 잉크, 고급 매트지. 한정 수량.",
      paymentLink: "https://buy.stripe.com/test_XXXXXXXXXXXXXXXX",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "tshirt-black",
      name: "로고 티셔츠 (Black)",
      priceKRW: 29000,
      desc: "유니섹스 핏, 면 100%",
      paymentLink: "https://pay.tosspayments.com/XXXXXXXXXXXXXXXX",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "donation",
      name: "창작 후원 (任意금액)",
      priceKRW: null,
      desc: "하땅세의 지속 가능한 창작을 응원해주세요.",
      paymentLink: "https://example.com/donate",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const formatKRW = (n: number | null) =>
    n == null ? "자율" : new Intl.NumberFormat("ko-KR").format(n) + "원";

  return (
    <div style={{ color: "#0f172a" }}>
      {/* --- Simple Global Styles (no Tailwind) --- */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", sans-serif; }
        a { text-decoration: none; color: inherit; transition: opacity .15s ease, transform .15s ease; }
        a:hover { opacity: .85; }
        a:active { transform: translateY(1px); }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        .btn { display:inline-flex; align-items:center; justify-content:center; padding: 12px 16px; border-radius: 999px; font-weight: 700; font-size: 14px; }
        .btn-primary { background:${BRAND.primary}; color:#fff; }
        .btn-outline { border:1px solid #cbd5e1; background:#fff; }
        .card { background:#fff; border:1px solid #e2e8f0; border-radius: 16px; overflow:hidden; box-shadow: 0 4px 14px rgba(0,0,0,.04); }
        .grid { display:grid; gap: 24px; }
        @media(min-width: 768px){ .grid-2 { grid-template-columns: repeat(2, 1fr); } .grid-3 { grid-template-columns: repeat(3, 1fr); } }
        .section { padding: 48px 0; }
        .section.alt { background:#f8fafc; }
        .title { font-size: 24px; font-weight: 900; letter-spacing:-0.02em; margin: 0; }
        .subtitle { color:#64748b; margin-left: 10px; font-size: 14px; }
        .nav { position: sticky; top:0; z-index:50; backdrop-filter: blur(8px); background: rgba(255,255,255,.85); border-bottom: 1px solid #e2e8f0; }
        .nav-inner { height:56px; display:flex; align-items:center; justify-content:space-between; }
        .hero { background: linear-gradient(to bottom, #fff, #e0f2fe); overflow:hidden; }
        .hero-img { aspect-ratio: 4/3; width:100%; height:auto; display:block; object-fit: cover; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,.15); }
        .aspect-5-3 { aspect-ratio: 5/3; width:100%; }
        .aspect-5-4 { aspect-ratio: 5/4; width:100%; }
        .muted { color:#64748b; font-size: 14px; }
        footer { border-top:1px solid #e2e8f0; padding: 40px 0; font-size: 12px; color:#94a3b8; }
      `}</style>

      {/* --- Nav --- */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#home" style={{ fontWeight: 900 }}>{BRAND.name}</a>
          <nav style={{ display: "flex", gap: 18, fontSize: 14 }}>
            <a href="#shows">공연</a>
            <a href="#tickets">예매</a>
            <a href="#shop">굿즈/후원</a>
            <a href="#about">소개</a>
            <a href="#contact">문의</a>
          </nav>
          <a href="#tickets" className="btn btn-primary">티켓</a>
        </div>
      </header>

      {/* --- Hero --- */}
      <section id="home" className="hero section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <h1 style={{ fontSize: 40, fontWeight: 900, margin: 0 }}>{BRAND.name}</h1>
              <p style={{ marginTop: 12, fontSize: 18, color: "#334155" }}>{BRAND.tagline}</p>
              <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                <a href="#tickets" className="btn btn-primary">지금 예매</a>
                <a href="#shop" className="btn btn-outline">굿즈/후원</a>
              </div>
            </div>
            <div>
              <img
                className="hero-img"
                src="https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1600&auto=format&fit=crop"
                alt="Stage"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Shows --- */}
      <section id="shows" className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <h2 className="title">공연</h2>
            <span className="subtitle">Current / Upcoming Shows</span>
          </div>

          <div className="grid grid-2" style={{ marginTop: 16 }}>
            {SHOWS.map((s) => (
              <article key={s.id} className="card">
                <div className="aspect-5-3">
                  <img src={s.image} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900 }}>{s.title}</h3>
                  <p className="muted" style={{ marginTop: 6 }}>{s.dateRange} · {s.venue}</p>
                  <p style={{ marginTop: 12, color: "#334155" }}>{s.desc}</p>
                  <div style={{ marginTop: 14 }}>
                    <a href={s.bookingLink} className="btn btn-primary">{s.ctaText}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- Tickets --- */}
      <section id="tickets" className="section alt">
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <h2 className="title">예매</h2>
            <span className="subtitle">Tickets</span>
          </div>

          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {SHOWS.map((s) => (
              <div key={`t-${s.id}`} className="card" style={{ padding: 20 }}>
                <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{s.title}</h4>
                <p className="muted" style={{ marginTop: 6 }}>{s.dateRange} · {s.venue}</p>
                <a href={s.bookingLink} className="btn btn-primary" style={{ width: "100%", marginTop: 12 }}>
                  {s.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Shop --- */}
      <section id="shop" className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <h2 className="title">굿즈 / 후원</h2>
            <span className="subtitle">Merch & Support</span>
          </div>

          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {PRODUCTS.map((p) => (
              <div key={p.id} className="card">
                <div className="aspect-5-4">
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{p.name}</h3>
                  <p style={{ marginTop: 8, minHeight: 48, color: "#334155" }}>{p.desc}</p>
                  <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 800 }}>{formatKRW(p.priceKRW as any)}</span>
                    <a href={p.paymentLink} className="btn btn-primary">결제하기</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="muted" style={{ marginTop: 10 }}>* 결제 버튼은 안전한 외부 결제 페이지(Stripe / Toss / Naver Pay 등)로 이동합니다.</p>
        </div>
      </section>

      {/* --- About --- */}
      <section id="about" className="section alt">
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <h2 className="title">하땅세 소개</h2>
            <span className="subtitle">About</span>
          </div>

          <div className="grid grid-2" style={{ marginTop: 16, alignItems: "start" }}>
            <div>
              <p style={{ color: "#334155" }}>
                하땅세는 관객과 호흡하는 동시대적 공연을 만드는 창작 집단입니다. 오브제, 유머, 은유를 통해 누구나 즐길 수 있는 무대를 탐구합니다.
              </p>
              <ul style={{ color: "#334155", paddingLeft: 18, lineHeight: 1.8 }}>
                <li>2008년 창단, 서울 성북동 전용극장 운영</li>
                <li>대표작: &lt;시간을 칠하는 사람&gt;, &lt;그때, 변홍례&gt; 등</li>
                <li>교육·워크숍·지역 네트워킹 및 국제 협업</li>
              </ul>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop"
                alt="About"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact --- */}
      <section id="contact" className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <h2 className="title">문의</h2>
            <span className="subtitle">Contact</span>
          </div>

          <div className="grid grid-3" style={{ marginTop: 16 }}>
            <div className="card" style={{ padding: 20, gridColumn: "span 2" }}>
              {/* mailto 폼: 간단한 데모용 */}
              <form action={`mailto:${BRAND.email}`} method="post" encType="text/plain" style={{ display: "grid", gap: 12 }}>
                <input placeholder="이름" style={inputStyle} />
                <input placeholder="이메일" style={inputStyle} />
                <textarea placeholder="메시지" style={{ ...inputStyle, minHeight: 120 }} />
                <button type="submit" className="btn btn-primary" style={{ width: 140 }}>메일 보내기</button>
              </form>
            </div>
            <div className="card" style={{ padding: 20 }}>
              <h4 style={{ margin: 0, fontWeight: 800 }}>연락처</h4>
              <p className="muted" style={{ marginTop: 8 }}>
                Email: <a href={`mailto:${BRAND.email}`} style={{ textDecoration: "underline" }}>{BRAND.email}</a>
              </p>
              <p className="muted">Phone: {BRAND.phone}</p>
              <p className="muted">
                Instagram: <a href={BRAND.instagram} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>{BRAND.instagram}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer>
        <div className="container" style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div>Powered by React (no Tailwind) · External Payment Links</div>
        </div>
      </footer>
    </div>
  );
}

// 공통 input 스타일
const inputStyle: React.CSSProperties = {
  border: "1px solid #cbd5e1",
  borderRadius: 12,
  padding: "12px 14px",
  fontSize: 14,
};
