# Argos Détection - Site Web

Site web professionnel pour Argos Détection, expert en tests d'intrusion et cybersécurité.

## 🚀 Déploiement Rapide

### Option 1: GitHub Pages (Recommandé - Gratuit)

1. **Créer un repository GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Argos Détection website"
   ```

2. **Pousser vers GitHub:**
   ```bash
   git remote add origin https://github.com/VOTRE-USERNAME/argos-detection.git
   git branch -M main
   git push -u origin main
   ```

3. **Activer GitHub Pages:**
   - Allez dans Settings > Pages
   - Source: "GitHub Actions"
   - Le site sera automatiquement déployé à: `https://VOTRE-USERNAME.github.io/argos-detection/`

### Option 2: Netlify (Alternative - Gratuit)

1. **Via Netlify Drop:**
   - Allez sur [netlify.com/drop](https://app.netlify.com/drop)
   - Glissez-déposez le dossier du projet
   - Votre site sera en ligne instantanément!

2. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Option 3: Vercel (Alternative - Gratuit)

```bash
npm install -g vercel
vercel --prod
```

## 📁 Structure du Projet

```
argos/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript
├── .github/
│   └── workflows/
│       └── deploy.yml  # Configuration GitHub Actions
└── README.md           # Ce fichier
```

## 🎨 Personnalisation

### Ajouter votre logo:
Remplacez la section logo dans `index.html` (ligne ~13):
```html
<div class="logo-placeholder">
    <img src="votre-logo.png" alt="Argos Détection" height="50">
</div>
```

### Modifier les couleurs:
Éditez les variables CSS dans `styles.css` (lignes 8-16):
```css
:root {
    --primary-dark: #1a2332;
    --accent-gold: #d4af37;
    /* ... */
}
```

## 🌐 Domaine Personnalisé

Pour utiliser votre propre domaine (ex: argosdetection.com):

1. **GitHub Pages:**
   - Ajoutez un fichier `CNAME` avec votre domaine
   - Configurez les DNS chez votre registrar

2. **Netlify/Vercel:**
   - Suivez les instructions dans leur dashboard

## 📱 Technologies Utilisées

- HTML5
- CSS3 (avec variables CSS et Grid/Flexbox)
- JavaScript Vanilla (pas de dépendances)
- GitHub Actions pour le déploiement automatique

## 📞 Contact

David Bilodeau
- Email: davidbilodeau1@hotmail.com
- Téléphone: 581-235-4178
- LinkedIn: [davidbilodeau1](https://www.linkedin.com/in/davidbilodeau1/)

## 📄 Licence

© 2024 Argos Détection. Tous droits réservés.

