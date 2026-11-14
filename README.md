# injetaveis

Loveide, eu quero que cê analise o código que eu vou te mandar de uma página que eu fiz pra doutora Isabela. Eu quero que contenha basicamente as mesmas informações, mas, ééé, altere o layout dessa página. Deixe-a com um estilo elegante. Aí. E é, um aspecto de elegância e de seriedade também. Compatível com uma médica que atende clientes de alto padrão.



<!DOCTYPE html>

<html lang="pt-BR">

<head>

  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Protocolos Injetáveis — Dra. Isabella Tovar</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet" />

  <style>

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }



    :root {

      --cream:    #F9F5EF;

      --warm:     #EDE5D8;

      --gold:     #B89A6A;

      --gold-lt:  #D4B98A;

      --deep:     #1C1A17;

      --charcoal: #2E2B26;

      --muted:    #7A7063;

      --white:    #FFFFFF;

      --radius:   2px;

    }



    html { scroll-behavior: smooth; }



    body {

      background: var(--cream);

      color: var(--deep);

      font-family: 'Jost', sans-serif;

      font-weight: 300;

      line-height: 1.7;

      overflow-x: hidden;

    }



    /* ── NAV ─────────────────────────────────────── */

    nav {

      position: fixed; top: 0; left: 0; right: 0; z-index: 100;

      display: flex; align-items: center; justify-content: space-between;

      padding: 22px 6vw;

      background: rgba(249,245,239,0.88);

      backdrop-filter: blur(12px);

      border-bottom: 1px solid rgba(184,154,106,0.18);

    }

    .nav-logo {

      font-family: 'Cormorant Garamond', serif;

      font-size: 1.15rem;

      font-weight: 500;

      letter-spacing: 0.12em;

      color: var(--deep);

      text-transform: uppercase;

    }

    .nav-logo span { color: var(--gold); }

    .nav-cta {

      font-size: 0.72rem;

      font-weight: 400;

      letter-spacing: 0.18em;

      text-transform: uppercase;

      color: var(--gold);

      border: 1px solid var(--gold);

      padding: 10px 22px;

      text-decoration: none;

      transition: background 0.3s, color 0.3s;

    }

    .nav-cta:hover { background: var(--gold); color: var(--white); }



    /* ── HERO ────────────────────────────────────── */

    .hero {

      min-height: 100vh;

      display: grid;

      grid-template-columns: 1fr 1fr;

      align-items: center;

      padding: 120px 6vw 80px;

      position: relative;

      overflow: hidden;

    }



    /* decorative vertical line */

    .hero::before {

      content: '';

      position: absolute;

      top: 0; bottom: 0;

      left: 50%;

      width: 1px;

      background: linear-gradient(to bottom, transparent, rgba(184,154,106,0.3) 30%, rgba(184,154,106,0.3) 70%, transparent);

    }



    /* background texture circle */

    .hero::after {

      content: '';

      position: absolute;

      top: -10%; right: -8%;

      width: 55vw; height: 55vw;

      border-radius: 50%;

      background: radial-gradient(circle, rgba(212,185,138,0.13) 0%, transparent 70%);

      pointer-events: none;

    }



    .hero-left {

      padding-right: 8vw;

      animation: fadeUp 1s ease both;

    }

    .hero-eyebrow {

      font-size: 0.68rem;

      letter-spacing: 0.28em;

      text-transform: uppercase;

      color: var(--gold);

      margin-bottom: 28px;

      display: flex; align-items: center; gap: 14px;

    }

    .hero-eyebrow::before {

      content: '';

      width: 36px; height: 1px;

      background: var(--gold);

    }

    .hero-headline {

      font-family: 'Cormorant Garamond', serif;

      font-size: clamp(2.8rem, 5vw, 4.6rem);

      font-weight: 300;

      line-height: 1.1;

      color: var(--deep);

      margin-bottom: 28px;

    }

    .hero-headline em {

      font-style: italic;

      color: var(--gold);

    }

    .hero-sub {

      font-size: 0.9rem;

      font-weight: 300;

      color: var(--muted);

      max-width: 420px;

      margin-bottom: 48px;

      letter-spacing: 0.02em;

      line-height: 1.85;

    }

    .btn-primary {

      display: inline-block;

      background: var(--gold);

      color: var(--white);

      font-size: 0.72rem;

      font-weight: 400;

      letter-spacing: 0.22em;

      text-transform: uppercase;

      padding: 18px 42px;

      text-decoration: none;

      transition: background 0.3s, transform 0.2s;

      position: relative;

    }

    .btn-primary::after {

      content: '→';

      margin-left: 10px;

      transition: margin-left 0.3s;

    }

    .btn-primary:hover {

      background: var(--charcoal);

      transform: translateY(-1px);

    }

    .btn-primary:hover::after { margin-left: 16px; }



    .hero-right {

      display: flex; flex-direction: column;

      align-items: flex-start;

      padding-left: 6vw;

      animation: fadeUp 1s 0.2s ease both;

    }

    .hero-badge {

      font-family: 'Cormorant Garamond', serif;

      font-size: 0.85rem;

      font-style: italic;

      color: var(--muted);

      border-left: 2px solid var(--gold);

      padding-left: 18px;

      margin-bottom: 36px;

      line-height: 1.9;

    }

    .hero-stats {

      display: flex; gap: 48px;

    }

    .stat { text-align: left; }

    .stat-number {

      font-family: 'Cormorant Garamond', serif;

      font-size: 2.8rem;

      font-weight: 300;

      color: var(--deep);

      line-height: 1;

    }

    .stat-label {

      font-size: 0.68rem;

      letter-spacing: 0.16em;

      text-transform: uppercase;

      color: var(--muted);

      margin-top: 4px;

    }



    /* ── DIVIDER ─────────────────────────────────── */

    .divider {

      display: flex; align-items: center; gap: 0;

      padding: 0 6vw;

      margin: 20px 0;

    }

    .divider-line { flex: 1; height: 1px; background: rgba(184,154,106,0.25); }

    .divider-ornament {

      font-family: 'Cormorant Garamond', serif;

      font-size: 1.4rem;

      color: var(--gold-lt);

      padding: 0 18px;

    }



    /* ── INTRO SECTION ───────────────────────────── */

    .intro {

      padding: 80px 6vw;

      display: grid;

      grid-template-columns: 1fr 2fr;

      gap: 80px;

      align-items: start;

    }

    .section-label {

      font-size: 0.65rem;

      letter-spacing: 0.28em;

      text-transform: uppercase;

      color: var(--gold);

      padding-top: 8px;

    }

    .intro-text {

      font-family: 'Cormorant Garamond', serif;

      font-size: clamp(1.3rem, 2.2vw, 1.75rem);

      font-weight: 300;

      line-height: 1.65;

      color: var(--charcoal);

    }

    .intro-text strong {

      font-weight: 500;

      color: var(--deep);

    }



    /* ── PROTOCOLS GRID ──────────────────────────── */

    .protocols {

      background: var(--charcoal);

      padding: 100px 6vw;

      position: relative;

      overflow: hidden;

    }

    .protocols::before {

      content: '';

      position: absolute;

      bottom: -20%; left: -10%;

      width: 50vw; height: 50vw;

      border-radius: 50%;

      background: radial-gradient(circle, rgba(184,154,106,0.08) 0%, transparent 70%);

    }

    .protocols-header {

      text-align: center;

      margin-bottom: 70px;

    }

    .protocols-eyebrow {

      font-size: 0.65rem;

      letter-spacing: 0.28em;

      text-transform: uppercase;

      color: var(--gold);

      margin-bottom: 20px;

    }

    .protocols-title {

      font-family: 'Cormorant Garamond', serif;

      font-size: clamp(2rem, 3.5vw, 3rem);

      font-weight: 300;

      color: var(--cream);

      line-height: 1.2;

    }

    .protocols-title em { font-style: italic; color: var(--gold-lt); }



    .grid {

      display: grid;

      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

      gap: 1px;

      background: rgba(184,154,106,0.15);

    }

    .card {

      background: var(--charcoal);

      padding: 48px 36px;

      transition: background 0.35s;

      position: relative;

      overflow: hidden;

    }

    .card::before {

      content: '';

      position: absolute;

      bottom: 0; left: 0; right: 0;

      height: 2px;

      background: var(--gold);

      transform: scaleX(0);

      transform-origin: left;

      transition: transform 0.4s ease;

    }

    .card:hover { background: rgba(255,255,255,0.03); }

    .card:hover::before { transform: scaleX(1); }



    .card-icon {

      font-size: 1.6rem;

      margin-bottom: 20px;

      display: block;

    }

    .card-number {

      font-family: 'Cormorant Garamond', serif;

      font-size: 0.75rem;

      color: var(--gold);

      letter-spacing: 0.2em;

      margin-bottom: 12px;

      display: block;

    }

    .card-title {

      font-family: 'Cormorant Garamond', serif;

      font-size: 1.35rem;

      font-weight: 400;

      color: var(--cream);

      margin-bottom: 12px;

      line-height: 1.3;

    }

    .card-desc {

      font-size: 0.82rem;

      color: rgba(249,245,239,0.55);

      line-height: 1.75;

    }



    /* ── CTA BAND ────────────────────────────────── */

    .cta-band {

      background: var(--gold);

      padding: 70px 6vw;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 40px;

      flex-wrap: wrap;

    }

    .cta-band-text {

      font-family: 'Cormorant Garamond', serif;

      font-size: clamp(1.5rem, 2.5vw, 2.2rem);

      font-weight: 300;

      color: var(--white);

      line-height: 1.3;

    }

    .cta-band-text em { font-style: italic; }

    .btn-light {

      display: inline-block;

      background: transparent;

      border: 2px solid var(--white);

      color: var(--white);

      font-size: 0.72rem;

      font-weight: 400;

      letter-spacing: 0.22em;

      text-transform: uppercase;

      padding: 18px 42px;

      text-decoration: none;

      transition: background 0.3s, color 0.3s;

      white-space: nowrap;

    }

    .btn-light:hover { background: var(--white); color: var(--gold); }



    /* ── ABOUT DRA ───────────────────────────────── */

    .about {

      padding: 110px 6vw;

      display: grid;

      grid-template-columns: 1fr 1fr;

      gap: 100px;

      align-items: center;

    }

    .about-left { position: relative; }

    .about-img-frame {

      width: 100%;

      aspect-ratio: 3/4;

      background: var(--warm);

      position: relative;

      overflow: hidden;

    }

    /* Placeholder for photo — the developer replaces this with <img> */

    .about-img-frame::before {

      content: 'FOTO\A DRA. ISABELA';

      white-space: pre;

      position: absolute; inset: 0;

      display: flex; align-items: center; justify-content: center;

      font-size: 0.7rem;

      letter-spacing: 0.2em;

      text-transform: uppercase;

      color: var(--muted);

      font-family: 'Jost', sans-serif;

      text-align: center;

    }

    .about-img-frame img {

      width: 100%; height: 100%;

      object-fit: cover;

      display: block;

    }

    .about-accent {

      position: absolute;

      bottom: -24px; right: -24px;

      width: 50%; height: 50%;

      border: 1px solid rgba(184,154,106,0.35);

      z-index: -1;

    }

    .about-tag {

      position: absolute;

      top: 32px; left: -28px;

      background: var(--gold);

      color: var(--white);

      font-size: 0.65rem;

      letter-spacing: 0.18em;

      text-transform: uppercase;

      padding: 10px 18px;

      writing-mode: vertical-rl;

      transform: rotate(180deg);

    }



    .about-right {}

    .about-eyebrow {

      font-size: 0.65rem;

      letter-spacing: 0.28em;

      text-transform: uppercase;

      color: var(--gold);

      margin-bottom: 22px;

    }

    .about-name {

      font-family: 'Cormorant Garamond', serif;

      font-size: clamp(2rem, 3vw, 2.8rem);

      font-weight: 300;

      color: var(--deep);

      line-height: 1.15;

      margin-bottom: 28px;

    }

    .about-name em { font-style: italic; color: var(--gold); }

    .about-body {

      font-size: 0.88rem;

      color: var(--muted);

      line-height: 1.9;

      margin-bottom: 36px;

    }

    .specialties {

      display: flex; flex-wrap: wrap; gap: 10px;

      margin-bottom: 48px;

    }

    .tag {

      font-size: 0.68rem;

      letter-spacing: 0.14em;

      text-transform: uppercase;

      color: var(--gold);

      border: 1px solid rgba(184,154,106,0.45);

      padding: 7px 16px;

    }



    .btn-outline {

      display: inline-block;

      border: 1px solid var(--deep);

      color: var(--deep);

      font-size: 0.72rem;

      font-weight: 400;

      letter-spacing: 0.22em;

      text-transform: uppercase;

      padding: 18px 42px;

      text-decoration: none;

      transition: background 0.3s, color 0.3s;

    }

    .btn-outline:hover { background: var(--deep); color: var(--cream); }



    /* ── FINAL CTA ───────────────────────────────── */

    .final-cta {

      background: var(--deep);

      padding: 120px 6vw;

      text-align: center;

      position: relative;

      overflow: hidden;

    }

    .final-cta::before {

      content: '';

      position: absolute;

      top: 50%; left: 50%;

      transform: translate(-50%, -50%);

      width: 60vw; height: 60vw;

      border-radius: 50%;

      border: 1px solid rgba(184,154,106,0.12);

    }

    .final-cta::after {

      content: '';

      position: absolute;

      top: 50%; left: 50%;

      transform: translate(-50%, -50%);

      width: 40vw; height: 40vw;

      border-radius: 50%;

      border: 1px solid rgba(184,154,106,0.08);

    }

    .final-cta-eyebrow {

      font-size: 0.65rem;

      letter-spacing: 0.28em;

      text-transform: uppercase;

      color: var(--gold);

      margin-bottom: 24px;

    }

    .final-cta-title {

      font-family: 'Cormorant Garamond', serif;

      font-size: clamp(2.2rem, 4vw, 3.8rem);

      font-weight: 300;

      color: var(--cream);

      line-height: 1.2;

      margin-bottom: 20px;

    }

    .final-cta-title em { font-style: italic; color: var(--gold-lt); }

    .final-cta-sub {

      font-size: 0.85rem;

      color: rgba(249,245,239,0.5);

      margin-bottom: 52px;

      letter-spacing: 0.04em;

    }

    .btn-gold {

      display: inline-block;

      background: var(--gold);

      color: var(--white);

      font-size: 0.75rem;

      font-weight: 400;

      letter-spacing: 0.24em;

      text-transform: uppercase;

      padding: 20px 54px;

      text-decoration: none;

      transition: background 0.3s, transform 0.2s;

      position: relative; z-index: 1;

    }

    .btn-gold:hover { background: var(--gold-lt); transform: translateY(-2px); }



    /* ── FOOTER ──────────────────────────────────── */

    footer {

      background: var(--charcoal);

      padding: 40px 6vw;

      display: flex;

      align-items: center;

      justify-content: space-between;

      flex-wrap: wrap;

      gap: 20px;

      border-top: 1px solid rgba(184,154,106,0.15);

    }

    .footer-logo {

      font-family: 'Cormorant Garamond', serif;

      font-size: 1rem;

      color: var(--cream);

      letter-spacing: 0.12em;

      text-transform: uppercase;

    }

    .footer-logo span { color: var(--gold); }

    .footer-note {

      font-size: 0.68rem;

      color: rgba(249,245,239,0.35);

      letter-spacing: 0.08em;

      text-align: right;

    }



    /* ── ANIMATIONS ──────────────────────────────── */

    @keyframes fadeUp {

      from { opacity: 0; transform: translateY(30px); }

      to   { opacity: 1; transform: translateY(0); }

    }



    /* ── RESPONSIVE ──────────────────────────────── */

    @media (max-width: 900px) {

      .hero {

        grid-template-columns: 1fr;

        padding-top: 110px;

      }

      .hero::before { display: none; }

      .hero-right { padding-left: 0; margin-top: 60px; }

      .intro { grid-template-columns: 1fr; gap: 28px; }

      .about { grid-template-columns: 1fr; gap: 60px; }

      .about-accent { display: none; }

      .about-tag { display: none; }

      .cta-band { flex-direction: column; text-align: center; }

    }



    @media (max-width: 560px) {

      .hero-stats { gap: 28px; }

      .hero-left { padding-right: 0; }

    }

  </style>

</head>

<body>



  <!-- ══ NAV ═══════════════════════════════════════ -->

  <nav>

    <div class="nav-logo">Dra. <span>Isabella Tovar</span></div>

    <a href="#consulta" class="nav-cta">Agendar consulta</a>

  </nav>





  <!-- ══ HERO ══════════════════════════════════════ -->

  <section class="hero">

    <div class="hero-left">

      <p class="hero-eyebrow">Protocolos Injetáveis</p>

      <h1 class="hero-headline">

        Maximize a performance<br>

        do seu <em>metabolismo</em><br>

        com ciência e precisão

      </h1>

      <p class="hero-sub">

        Protocolos personalizados de suplementação oral e injetável,

        com indicação médica e acompanhamento especializado —

        para resultados reais com segurança absoluta.

      </p>

      <a href="#consulta" class="btn-primary">Agendar minha consulta</a>

    </div>



    <div class="hero-right">

      <blockquote class="hero-badge">

        "Tratamentos estratégicos,<br>

        seguros e individualizados,<br>

        sob indicação médica exclusiva."<br>

        <strong style="font-family:'Jost',sans-serif; font-size:0.72rem; font-style:normal; letter-spacing:0.12em; color:var(--gold); display:block; margin-top:12px;">— Dra. Isabella Tovar</strong>

      </blockquote>

      <div class="hero-stats">

        <div class="stat">

          <div class="stat-number">+8</div>

          <div class="stat-label">Protocolos ativos</div>

        </div>

        <div class="stat">

          <div class="stat-number">100%</div>

          <div class="stat-label">Indicação médica</div>

        </div>

        <div class="stat">

          <div class="stat-number">∞</div>

          <div class="stat-label">Personalização</div>

        </div>

      </div>

    </div>

  </section>





  <!-- ══ INTRO ══════════════════════════════════════ -->

  <div class="divider">

    <div class="divider-line"></div>

    <div class="divider-ornament">✦</div>

    <div class="divider-line"></div>

  </div>



  <section class="intro">

    <div class="section-label">Sobre os protocolos</div>

    <p class="intro-text">

      A Dra. Isabella Tovar inclui em seus tratamentos <strong>protocolos de suplementação oral

      e injetável</strong>, quando indicados, como estratégia complementar para ampliar

      resultados clínicos de maneira <strong>segura, eficaz e completamente personalizada</strong>

      para cada paciente.

    </p>

  </section>





  <!-- ══ PROTOCOLS GRID ════════════════════════════ -->

  <section class="protocols" id="protocolos">

    <div class="protocols-header">

      <p class="protocols-eyebrow">Objetivos que podem ser maximizados</p>

      <h2 class="protocols-title">

        O que os protocolos<br>

        <em>injetáveis podem oferecer</em>

      </h2>

    </div>



    <div class="grid">



      <div class="card">

        <span class="card-number">01</span>

        <h3 class="card-title">Acelerador Metabólico</h3>

        <p class="card-desc">Estimulação do metabolismo celular para potencializar o processo de emagrecimento, com maior queima calórica e equilíbrio hormonal.</p>

      </div>



      <div class="card">

        <span class="card-number">02</span>

        <h3 class="card-title">Boost Capilar</h3>

        <p class="card-desc">Protocolo de proteção e fortalecimento capilar para combater a queda de cabelo, com nutrientes biodisponíveis de absorção rápida.</p>

      </div>



      <div class="card">

        <span class="card-number">03</span>

        <h3 class="card-title">Ganho de Massa Muscular</h3>

        <p class="card-desc">Suporte nutricional injetável para maximizar a síntese proteica, a recuperação muscular e a composição corporal saudável.</p>

      </div>



      <div class="card">

        <span class="card-number">04</span>

        <h3 class="card-title">Detox Hepático</h3>

        <p class="card-desc">Suporte ao fígado com micronutrientes e antioxidantes que auxiliam na depuração hepática, favorecendo equilíbrio metabólico e disposição.</p>

      </div>



      <div class="card">

        <span class="card-number">05</span>

        <h3 class="card-title">Desinflamação Sistêmica</h3>

        <p class="card-desc">Redução da inflamação crônica de baixo grau, que compromete energia, peso e qualidade de vida

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fdfc7174-eacb-48b1-932b-a0b71485f817).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
