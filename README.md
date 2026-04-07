# Étienne 30 ans — Anniversaire Surprise

## Structure
```
etienne-anniversaire/
├── index.html      → Page principale
├── style.css       → Tous les styles
├── script.js       → Animations & formulaire
├── apps-script.gs  → Code Google Apps Script (Google Sheets)
└── README.md       → Ce fichier
```

---

## 📊 Brancher Google Sheets (recevoir les RSVP)

### Étape 1 — Créer le Google Sheet
1. Va sur https://sheets.google.com
2. Crée une nouvelle feuille, nomme-la "RSVP Étienne"

### Étape 2 — Créer le script
1. Dans la feuille : **Extensions → Apps Script**
2. Supprime tout le code existant
3. Copie-colle le contenu de **apps-script.gs**
4. Sauvegarde (Ctrl+S)

### Étape 3 — Déployer
1. Clique **Déployer → Nouveau déploiement**
2. Type : **Application Web**
3. Exécuter en tant que : **Moi**
4. Accès : **Tout le monde**
5. Clique **Déployer** → Autorise l'accès
6. **Copie l'URL** générée (ex: https://script.google.com/macros/s/XXXX/exec)

### Étape 4 — Coller l'URL dans script.js
Ouvre `script.js`, ligne 2 :
```js
const GOOGLE_SCRIPT_URL = 'COLLE_TON_URL_ICI';
```

---

## 🚀 Mise en ligne (Netlify)
1. Va sur https://netlify.com → "Deploy manually"
2. Glisse ce dossier → URL générée instantanément

## 📱 Compatible
Chrome · Safari · Firefox · iOS · Android
