# CV Djilali SAHRAOUI

## Projet
Site CV personnel déployé sur GitHub Pages avec domaine personnalisé.

- **URL** : https://djilalisahraoui.com
- **Repo** : https://github.com/mykudo/cv
- **Branche source** : `master` (dossier `light4/`)
- **Branche déploiement** : `gh-pages`

## Structure
```
cv_djilali_sahraoui/
├── light4/                 # Thème actif (déployé)
│   ├── index.html          # Page principale
│   ├── css/style.css       # Styles
│   ├── js/
│   │   ├── main.js         # Interactions & animations
│   │   └── i18n.js         # Traductions FR/EN
│   ├── img/logos/          # Logos clients
│   ├── favicon.ico         # Favicons
│   ├── CNAME               # Domaine: djilalisahraoui.com
│   ├── sitemap.xml         # SEO
│   └── robots.txt          # SEO
└── CV Djilali SAHRAOUI.pdf # CV téléchargeable
```

## Déploiement
```bash
# Depuis la racine du repo
git add . && git commit -m "message" && git push

# Déployer sur GitHub Pages (subtree vers gh-pages)
git push origin `git subtree split --prefix light4`:gh-pages --force
```

## Fonctionnalités
- **i18n** : FR/EN avec détection automatique de la langue navigateur
- **Formulaire contact** : Formspree + reCAPTCHA v3
- **SEO** : Meta tags, Open Graph, Schema.org (Person), sitemap
- **Logos clients** : Grayscale par défaut, couleur au hover

## Technologies
- HTML5 / CSS3 (variables CSS, flexbox, grid)
- JavaScript vanilla (pas de framework)
- Font Awesome 6.4
- Google Fonts (Inter, JetBrains Mono)

## Clé reCAPTCHA v3
- Site key: `6LfPMyQsAAAAAFgrYIzv9woeDlTPxNj35jAeYf5g`

## Contact
- Email: djilali.sahraoui@mykudo.fr
- Téléphone: +33 7 81 64 78 14
