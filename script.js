:root {
            --bg: #0d0d1a;
            --text: #ffffff;
            --muted: rgba(255,255,255,0.5);
            --glass: rgba(255,255,255,0.06);
            --border: rgba(255,255,255,0.1);
            --radius: 14px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg);
            color: var(--text);
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        /* ── NAV ── */
        nav {
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 200;
            padding: 1.5rem 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.4s ease, border-color 0.4s;
        }

        nav.scrolled {
            background: rgba(13,13,26,0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
        }

        .nav-logo {
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--muted);
            letter-spacing: 0.08em;
            opacity: 0;
            animation: fadeDown 0.8s 0.2s ease forwards;
        }

        .nav-links {
            display: flex;
            gap: 3rem;
            list-style: none;
            opacity: 0;
            animation: fadeDown 0.8s 0.4s ease forwards;
        }

        .nav-links a {
            color: var(--muted);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover, .nav-links a.active { color: #fff; }

        /* nav décalée sous bandeau */
        #navbar { top: 2.4rem; }

        /* ── STICKY CTA ── */
        .sticky-cta {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 150;
            padding: 1rem 2.5rem;
            background: #fff;
            color: #0d0d1a;
            border-radius: 50px;
            font-weight: 800;
            font-size: 0.95rem;
            letter-spacing: 0.05em;
            text-decoration: none;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
            opacity: 0;
            transform: translateY(20px);
        }

        .sticky-cta.show {
            opacity: 1;
            transform: translateY(0);
        }

        .sticky-cta:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 60px rgba(255,255,255,0.2);
        }

        /* ── HERO ── */
        .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 3rem 5rem;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
                radial-gradient(ellipse 65% 70% at 10% 55%, #5b21b6 0%, transparent 55%),
                radial-gradient(ellipse 55% 60% at 88% 35%, #9f1239 0%, transparent 55%),
                radial-gradient(ellipse 45% 45% at 50% 85%, #1e1b4b 0%, transparent 50%);
            z-index: 0;
            animation: blobPulse 12s ease-in-out infinite;
        }

        @keyframes blobPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.04); }
        }

        .hero-inner {
            position: relative;
            z-index: 2;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
        }

        .hero-sup {
            font-size: 1rem;
            font-weight: 500;
            color: rgba(255,255,255,0.6);
            letter-spacing: 0.18em;
            text-transform: uppercase;
            margin-bottom: 0.75rem;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.9s 0.3s ease forwards;
        }

        .hero-title {
            font-size: clamp(5.5rem, 17vw, 13rem);
            font-weight: 900;
            line-height: 0.85;
            letter-spacing: -0.04em;
            color: #fff;
        }

        .hero-title .thin {
            font-weight: 300;
            font-size: clamp(2.5rem, 7vw, 5.5rem);
            display: block;
            letter-spacing: -0.02em;
            margin-bottom: 0.2em;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeUp 1s 0.5s ease forwards;
        }

        .hero-title .big {
            display: block;
            opacity: 0;
            transform: translateY(40px);
            animation: fadeUp 1s 0.7s ease forwards;
        }

        .hero-footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: 3.5rem;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 1s 1s ease forwards;
        }

        .hero-desc {
            max-width: 360px;
            font-size: 1.05rem;
            color: rgba(255,255,255,0.55);
            line-height: 1.65;
            font-weight: 300;
        }

        .cta-pill {
            padding: 1.2rem 3.5rem;
            border: 1px solid rgba(255,255,255,0.35);
            border-radius: 50px;
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            transition: all 0.35s ease;
            background: rgba(255,255,255,0.08);
            backdrop-filter: blur(10px);
            white-space: nowrap;
            position: relative;
            overflow: hidden;
        }

        .cta-pill::after {
            content: '';
            position: absolute;
            top: 0; left: -100%;
            width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
            transition: left 0.5s ease;
        }

        .cta-pill:hover::after { left: 100%; }
        .cta-pill:hover {
            background: rgba(255,255,255,0.18);
            border-color: rgba(255,255,255,0.7);
            transform: translateY(-3px);
        }

        /* Scroll indicator */
        .scroll-hint {
            position: absolute;
            bottom: 2.5rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            opacity: 0;
            animation: fadeIn 1s 1.5s ease forwards;
        }

        .scroll-hint span {
            font-size: 0.72rem;
            color: var(--muted);
            letter-spacing: 0.15em;
            text-transform: uppercase;
        }

        .scroll-dot {
            width: 1px;
            height: 40px;
            background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
            animation: scrollDrop 2s ease-in-out infinite;
        }

        @keyframes scrollDrop {
            0% { transform: scaleY(0); transform-origin: top; opacity: 1; }
            50% { transform: scaleY(1); transform-origin: top; }
            51% { transform-origin: bottom; }
            100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }

        

        /* ── SECTIONS ── */
        .section {
            padding: 7rem 3rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-label {
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--muted);
            letter-spacing: 0.22em;
            text-transform: uppercase;
            margin-bottom: 1.25rem;
        }

        .section-title {
            font-size: clamp(2.5rem, 5.5vw, 4.5rem);
            font-weight: 900;
            letter-spacing: -0.03em;
            line-height: 1;
            color: #fff;
            margin-bottom: 3.5rem;
        }

        /* ── DETAIL CARDS ── */
        .details-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
        }

        .detail-card {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 2rem;
            transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
            opacity: 0;
            transform: translateY(30px);
        }

        .detail-card.visible { opacity: 1; transform: translateY(0); }
        .detail-card:nth-child(2) { transition-delay: 0.1s; }
        .detail-card:nth-child(3) { transition-delay: 0.2s; }

        .detail-card:hover {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.22);
            transform: translateY(-6px) !important;
        }

        .detail-icon { font-size: 1.75rem; margin-bottom: 1rem; display: block; }

        .detail-card h3 {
            font-size: 1.05rem;
            font-weight: 700;
            margin-bottom: 0.6rem;
            letter-spacing: -0.01em;
        }

        .detail-card p { font-size: 0.9rem; color: var(--muted); line-height: 1.6; }

        /* ── RSVP ── */
        .rsvp-wrapper {
            display: grid;
            grid-template-columns: 1fr 1.4fr;
            gap: 7rem;
            align-items: start;
        }

        .rsvp-left {
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.8s cubic-bezier(0.23,1,0.32,1);
        }

        .rsvp-left.visible { opacity: 1; transform: translateX(0); }

        .rsvp-left h2 {
            font-size: clamp(2.5rem, 4.5vw, 4rem);
            font-weight: 900;
            letter-spacing: -0.03em;
            line-height: 1.05;
            margin-bottom: 1.75rem;
        }

        .rsvp-left > p {
            font-size: 1rem;
            color: var(--muted);
            line-height: 1.7;
            margin-bottom: 2rem;
        }

        /* Social proof */
        .social-proof {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 2rem;
        }

        .proof-dots {
            display: flex;
            gap: -4px;
        }

        .proof-dot {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid var(--bg);
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: -8px;
            background: rgba(255,255,255,0.12);
            opacity: 0;
            transform: scale(0.3) translateY(10px);
            transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.68,-0.55,0.265,1.55);
        }

        .proof-dot:first-child { margin-left: 0; }

        .proof-dot.popped {
            opacity: 1;
            transform: scale(1) translateY(0);
        }

        @keyframes proofFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
        }

        .proof-dot.popped { animation: proofFloat 3s ease-in-out infinite; }

        .proof-text {
            font-size: 0.88rem;
            color: var(--muted);
            line-height: 1.4;
        }

        .proof-text strong { color: #fff; }

        /* Participation note */
        .participation-note {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            padding: 1.5rem;
            background: rgba(255,200,50,0.06);
            border: 1px solid rgba(255,200,50,0.18);
            border-radius: var(--radius);
        }

        .participation-note span { font-size: 1.4rem; flex-shrink: 0; }

        .participation-note p {
            font-size: 0.88rem;
            color: rgba(255,210,80,0.8);
            line-height: 1.65;
            margin: 0;
        }

        /* Organisateur */
        .organizer {
            margin-top: 2rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.85rem;
            color: var(--muted);
        }

        .organizer a { color: rgba(255,255,255,0.6); }

        /* ── FORM ── */
        .rsvp-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.8s 0.2s cubic-bezier(0.23,1,0.32,1);
        }

        .rsvp-form.visible { opacity: 1; transform: translateX(0); }

        .input-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        .input-group {
            display: flex;
            flex-direction: column;
            gap: 0.55rem;
        }

        .input-group label {
            font-size: 0.78rem;
            font-weight: 700;
            color: var(--muted);
            letter-spacing: 0.15em;
            text-transform: uppercase;
        }

        .input-group input, .input-group textarea {
            padding: 1.1rem 1.25rem;
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            color: #fff;
            font-family: inherit;
            font-size: 0.98rem;
            transition: all 0.3s ease;
        }

        .input-group input:focus, .input-group textarea:focus {
            outline: none;
            border-color: rgba(255,255,255,0.3);
            background: rgba(255,255,255,0.09);
            transform: translateY(-2px);
        }

        .input-group input.error {
            border-color: rgba(255,80,80,0.6);
            box-shadow: 0 0 0 3px rgba(255,80,80,0.1);
        }

        .input-group .error-msg {
            font-size: 0.75rem;
            color: rgba(255,100,100,0.9);
            display: none;
        }

        .input-group.has-error .error-msg { display: block; }
        .input-group.has-error input { border-color: rgba(255,80,80,0.5); }

        .toggle-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
        }

        .toggle-opt {
            padding: 1.1rem;
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            cursor: pointer;
            text-align: center;
            font-weight: 600;
            font-size: 0.95rem;
            color: var(--muted);
            transition: all 0.25s ease;
            user-select: none;
        }

        .toggle-opt.active {
            background: rgba(255,255,255,0.14);
            border-color: rgba(255,255,255,0.35);
            color: #fff;
        }

        .dates-wrap {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.75rem;
        }

        .date-opt {
            padding: 1.5rem 0.75rem;
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            text-align: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
            position: relative;
        }

        .date-opt input { position: absolute; opacity: 0; }

        .date-opt:hover {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.22);
            transform: translateY(-4px);
        }

        .date-opt.selected {
            border-color: rgba(255,255,255,0.5);
            background: rgba(255,255,255,0.13);
            transform: translateY(-4px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .d-day {
            font-size: 2.2rem;
            font-weight: 900;
            letter-spacing: -0.04em;
            color: #fff;
            line-height: 1;
        }

        .d-month {
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--muted);
            letter-spacing: 0.12em;
            text-transform: uppercase;
            margin-top: 0.4rem;
        }

        .d-range { font-size: 0.72rem; color: rgba(255,255,255,0.3); margin-top: 0.3rem; }

        .btn-confirm {
            padding: 1.4rem 2rem;
            background: #fff;
            border: none;
            border-radius: var(--radius);
            color: #0d0d1a;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
            position: relative;
            overflow: hidden;
        }

        .btn-confirm::after {
            content: '';
            position: absolute;
            top: 50%; left: 50%;
            width: 0; height: 0;
            background: rgba(0,0,0,0.08);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .btn-confirm:hover::after { width: 500px; height: 500px; }
        .btn-confirm:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 50px rgba(255,255,255,0.15);
        }

        /* ── CONTACT BUTTON ── */
        .btn-contact {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: var(--radius);
            color: #fff;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
        }

        .btn-contact:hover {
            background: rgba(255,255,255,0.18);
            border-color: rgba(255,255,255,0.35);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(255,255,255,0.08);
        }

        /* ── CONFIRMATION OVERLAY ── */
        .confirm-overlay {
            position: fixed;
            inset: 0;
            background: var(--bg);
            z-index: 300;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3rem;
            text-align: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.6s ease;
        }

        .confirm-overlay.show {
            opacity: 1;
            pointer-events: all;
        }

        .confirm-overlay::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
                radial-gradient(ellipse 60% 60% at 30% 40%, #5b21b620 0%, transparent 60%),
                radial-gradient(ellipse 50% 50% at 70% 60%, #9f123920 0%, transparent 60%);
        }

        .confirm-emoji {
            font-size: 5rem;
            margin-bottom: 2rem;
            position: relative;
            animation: popIn 0.6s 0.3s cubic-bezier(0.68,-0.55,0.265,1.55) both;
        }

        @keyframes popIn {
            from { opacity: 0; transform: scale(0.3); }
            to { opacity: 1; transform: scale(1); }
        }

        .confirm-title {
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 900;
            letter-spacing: -0.04em;
            margin-bottom: 1.5rem;
            position: relative;
            opacity: 0;
            transform: translateY(20px);
            animation-fill-mode: both;
        }

        .confirm-overlay.show .confirm-title {
            animation: fadeUp 0.8s 0.5s ease forwards;
        }

        .confirm-summary {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 2rem 3rem;
            margin: 2rem 0;
            max-width: 500px;
            width: 100%;
            position: relative;
            opacity: 0;
            animation-fill-mode: both;
        }

        .confirm-overlay.show .confirm-summary {
            animation: fadeUp 0.8s 0.7s ease forwards;
        }

        .confirm-summary p {
            font-size: 1rem;
            color: var(--muted);
            margin-bottom: 0.5rem;
        }

        .confirm-summary p strong { color: #fff; }

        .confirm-back {
            margin-top: 2rem;
            font-size: 0.85rem;
            color: var(--muted);
            cursor: pointer;
            background: none;
            border: none;
            font-family: inherit;
            position: relative;
            opacity: 0;
            animation-fill-mode: both;
        }

        .confirm-overlay.show .confirm-back {
            animation: fadeUp 0.8s 0.9s ease forwards;
        }

        /* ── FOOTER ── */
        .footer {
            border-top: 1px solid var(--border);
            padding: 2.5rem 3rem;
            display: flex;
            justify-content: space-between;
            color: var(--muted);
            font-size: 0.85rem;
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0) translateX(0); }
        }

        @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-15px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
            to { opacity: 1; }
        }

        .reveal {
            opacity: 0;
            transform: translateY(25px);
            transition: all 0.8s cubic-bezier(0.23,1,0.32,1);
        }

        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
            nav { padding: 1.2rem 1.5rem; }
            .nav-links { display: none; }
            .hero { padding: 0 1.5rem 4rem; }
            .hero-footer { flex-direction: column; align-items: flex-start; gap: 2rem; }
            .section { padding: 5rem 1.5rem; }
            .details-grid { grid-template-columns: 1fr; gap: 1rem; }
            .rsvp-wrapper { grid-template-columns: 1fr; gap: 3rem; }
            .dates-wrap { grid-template-columns: 1fr; gap: 0.75rem; }
            .input-row { grid-template-columns: 1fr; }
            .footer { flex-direction: column; gap: 0.75rem; padding: 2rem 1.5rem; }
            .sticky-cta { right: 1rem; bottom: 1.5rem; padding: 0.9rem 2rem; font-size: 0.9rem; }
            .scroll-hint { display: none; }
}
