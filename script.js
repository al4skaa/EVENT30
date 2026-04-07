// ── NAVBAR ──
        const navbar = document.getElementById('navbar');
        const stickyCta = document.getElementById('stickyCta');

        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            navbar.classList.toggle('scrolled', y > 60);
            stickyCta.classList.toggle('show', y > window.innerHeight * 0.6);

            let cur = '';
            document.querySelectorAll('section[id]').forEach(s => {
                if (y >= s.offsetTop - 200) cur = s.id;
            });
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
            });
        });

        // ── SOCIAL PROOF ANIMATION ──
        let counterDone = false;
        function animateCounter(target, duration) {
            if (counterDone) return;
            counterDone = true;
            const el = document.getElementById('repondus');
            let start = 0;
            const step = Math.ceil(target / (duration / 40));
            const timer = setInterval(() => {
                start = Math.min(start + step, target);
                el.textContent = start;
                if (start >= target) clearInterval(timer);
            }, 40);
            // Pop emojis
            document.querySelectorAll('.proof-dot').forEach((dot, i) => {
                setTimeout(() => dot.classList.add('popped'), i * 120);
            });
        }

        // ── SCROLL REVEAL ──
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.12 });

        document.querySelectorAll('.reveal, .detail-card, .rsvp-left, .rsvp-form').forEach(el => observer.observe(el));

        // Fetch real respondent count from API
        let realCount = 0;
        fetch('/api/rsvp-count')
            .then(r => r.json())
            .then(data => { realCount = data.count || 0; })
            .catch(() => { realCount = 0; });

        // Déclenche le compteur quand le bloc RSVP gauche arrive à l'écran
        const proofObserver = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) animateCounter(realCount, 1200); });
        }, { threshold: 0.4 });
        const rsvpLeft = document.querySelector('.rsvp-left');
        if (rsvpLeft) proofObserver.observe(rsvpLeft);

        

        // ── TOGGLE ──
        function selectToggle(val) {
            document.getElementById('solo-btn').classList.toggle('active', val === 'solo');
            document.getElementById('plus1-btn').classList.toggle('active', val === 'plus1');
        }

        // ── DATES ──
        function selectDate(el) {
            el.classList.toggle('selected');
            el.querySelector('input').checked = el.classList.contains('selected');
        }

        // ── VALIDATION INLINE ──
        document.getElementById('inp-prenom').addEventListener('blur', function() {
            const g = document.getElementById('grp-prenom');
            g.classList.toggle('has-error', !this.value.trim());
        });

        document.getElementById('inp-tel').addEventListener('blur', function() {
            const g = document.getElementById('grp-tel');
            g.classList.toggle('has-error', !this.value.trim());
        });

        // ── FORM SUBMIT → Netlify Function ──
        document.getElementById('rsvpForm').addEventListener('submit', async function(e) {
            e.preventDefault();

            const prenom = document.getElementById('inp-prenom').value.trim();
            const tel    = document.getElementById('inp-tel').value.trim();
            let valid = true;

            if (!prenom) { document.getElementById('grp-prenom').classList.add('has-error'); valid = false; }
            if (!tel)    { document.getElementById('grp-tel').classList.add('has-error'); valid = false; }
            if (!valid) return;

            const dates = [...document.querySelectorAll('input[name="dates"]:checked')].map(i => i.value);
            const part  = document.getElementById('solo-btn').classList.contains('active') ? 'Seul(e)' : 'Accompagné(e)';
            const msg   = document.getElementById('inp-msg').value;

            const btn = document.querySelector('.btn-confirm');
            btn.textContent = 'Envoi en cours...';
            btn.disabled = true;

            try {
                const res = await fetch('/api/rsvp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        prenom,
                        telephone: tel,
                        participation: part,
                        dates: dates.join(', ') || 'Aucune date cochée',
                        message: msg,
                        timestamp: new Date().toLocaleString('fr-FR')
                    })
                });
                const data = await res.json();
                if (data.count) realCount = data.count;
            } catch(err) {
                console.warn('Envoi RSVP:', err);
            }

            // Confirmation overlay
            document.getElementById('sumNom').textContent   = prenom;
            document.getElementById('sumDates').textContent = dates.length ? dates.join(', ') : 'Aucune date cochée';
            document.getElementById('sumPart').textContent  = part;

            document.getElementById('confirmOverlay').classList.add('show');
            document.body.style.overflow = 'hidden';

            // Update social proof with real count
            const el = document.getElementById('repondus');
            el.textContent = realCount;
        });

        function closeConfirm() {
            document.getElementById('confirmOverlay').classList.remove('show');
            document.body.style.overflow = '';
        }
