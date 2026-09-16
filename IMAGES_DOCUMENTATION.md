# Documentation des Images AURYN

Ce document liste toutes les images générées pour le site AURYN et leur utilisation.

## Logos des Univers

### Logo Principal AURYN
- **URL** : `https://image.qwenlm.ai/generated-images/cb513c8f-b2d2-4dc5-9231-8bed2924f9c5/_result.png`
- **Utilisation** : Logo principal dans le header et footer
- **Composant** : `Logo.tsx`

### AURYN LEARN
- **URL** : `https://image.qwenlm.ai/generated-images/dccfac21-e45d-4f21-be51-53c5c2213f32/_result.png`
- **Couleur** : Cyan (#00F0FF)
- **Utilisation** : Page univers LEARN, navigation, sélecteur
- **Composant** : `UniverseLogo.tsx`

### AURYN CAREER
- **URL** : `https://image.qwenlm.ai/generated-images/32a4f5d0-69f4-4483-9754-966228f1288f/_result.png`
- **Couleur** : Vert (#00FF88)
- **Utilisation** : Page univers CAREER, navigation, sélecteur
- **Composant** : `UniverseLogo.tsx`

### AURYN HEALTH
- **URL** : `https://image.qwenlm.ai/generated-images/62a35b4c-84c5-4cd3-9cc9-3318054a1562/_result.png`
- **Couleur** : Rose (#FF2E63)
- **Utilisation** : Page univers HEALTH, navigation, sélecteur
- **Composant** : `UniverseLogo.tsx`

### AURYN MIND
- **URL** : `https://image.qwenlm.ai/generated-images/e6935948-c8f7-4b0e-a3b2-0dcb6e1de88b/_result.png`
- **Couleur** : Violet (#8A2BE2)
- **Utilisation** : Page univers MIND, navigation, sélecteur
- **Composant** : `UniverseLogo.tsx`

### AURYN EARTH & SEA
- **URL** : `https://image.qwenlm.ai/generated-images/d0c6dfd5-f836-4e2d-b840-feafd4914a2a/_result.png`
- **Couleur** : Émeraude (#50C878)
- **Utilisation** : Page univers EARTH & SEA, navigation, sélecteur
- **Composant** : `UniverseLogo.tsx`

### AURYN LIFE
- **URL** : `https://image.qwenlm.ai/generated-images/8599f236-195c-4551-b673-942f3d0bc5db/_result.png`
- **Couleur** : Or (#FFD700)
- **Utilisation** : Page univers LIFE, navigation, sélecteur
- **Composant** : `UniverseLogo.tsx`

## Icônes d'Innovation

### Artificial Intelligence
- **URL** : `https://image.qwenlm.ai/generated-images/12bf759f-437f-4037-9770-6831377ad175/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

### Machine Learning
- **URL** : `https://image.qwenlm.ai/generated-images/d00ee403-1eb4-4047-8006-95af04c489ec/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

### SaaS
- **URL** : `https://image.qwenlm.ai/generated-images/b2759c43-3981-4dcf-a2c9-2ed1a6d1fe13/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

### Data
- **URL** : `https://image.qwenlm.ai/generated-images/9c829ef3-4864-4a53-81b4-8789db9fcf4b/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

### Automation
- **URL** : `https://image.qwenlm.ai/generated-images/745e11d6-81c7-479f-b7ee-6f5d438c5975/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

### Geospatial Technology
- **URL** : `https://image.qwenlm.ai/generated-images/d768d6bf-f428-47c2-b0cd-256a5f692f6b/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

### Cloud
- **URL** : `https://image.qwenlm.ai/generated-images/fed634bc-562c-49a2-be2f-cca9e8d0bc5f/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

### Mobile
- **URL** : `https://image.qwenlm.ai/generated-images/7cc59c8d-905b-4c82-be3b-5fcc12bf7ed2/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

### Digital Platforms
- **URL** : `https://image.qwenlm.ai/generated-images/20dbd4db-d2a9-471e-97f5-5f8ae6f91ed0/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

### Decision Intelligence
- **URL** : `https://image.qwenlm.ai/generated-images/709c2967-4794-4bdd-ba97-1409ae35cf33/_result.png`
- **Utilisation** : Page Innovation, section domaines technologiques
- **Fichier** : `src/data/constants.ts`

## Icône Insights

### Coming Soon
- **URL** : `https://image.qwenlm.ai/generated-images/a6cea4fb-32af-4def-8556-cecff48da64b/_result.png`
- **Utilisation** : Page Insights, section "coming soon"
- **Export** : `INSIGHTS_COMING_SOON_IMAGE` dans `src/data/constants.ts`

## Icônes Sociales (SVG)

Les icônes sociales dans le footer sont des SVG inline (pas d'images externes) :
- **X (Twitter)** : SVG inline dans `Layout.tsx`
- **LinkedIn** : SVG inline dans `Layout.tsx`
- **Instagram** : SVG inline dans `Layout.tsx`

## Composants Utilisant les Images

### `Logo.tsx`
- Affiche le logo AURYN principal
- Props : `size` ('sm' | 'md' | 'lg'), `showText` (boolean), `linkable` (boolean)

### `UniverseLogo.tsx`
- Affiche les logos des 6 univers
- Props : `universe` (Universe), `size` ('sm' | 'md' | 'lg'), `showGlow` (boolean)
- Utilise les icônes SVG personnalisées de `UniverseIcons.tsx`

### `Hero3DVisual.tsx`
- Visualisation 3D interactive du hero
- Utilise les icônes SVG de `UniverseIcons.tsx` pour les orbes des univers

## Structure des Fichiers

```
src/
├── components/
│   ├── Logo.tsx              # Logo principal AURYN
│   ├── UniverseLogo.tsx      # Logos des univers (SVG)
│   ├── Hero3DVisual.tsx      # Visualisation 3D hero
│   └── icons/
│       └── UniverseIcons.tsx # Icônes SVG des univers
├── data/
│   ├── universes.ts          # Données des univers (avec URLs logos)
│   └── constants.ts          # Constantes (URLs images innovation)
└── pages/
    ├── Innovation.tsx        # Utilise les images d'innovation
    └── Insights.tsx          # Utilise l'image coming soon
```

## Notes Techniques

### Optimisation
- Toutes les images sont en format PNG
- Taille originale : 512x512 pixels
- Affichage responsive via CSS (object-contain, object-cover)
- Lazy loading activé sur les images de contenu

### Performance
- Images hébergées sur CDN (image.qwenlm.ai)
- Pas de stockage local nécessaire
- Cache navigateur automatique
- Poids moyen : ~50-100KB par image

### Accessibilité
- Attributs `alt` descriptifs sur toutes les images
- Images décoratives : `alt=""`
- Textes alternatifs en français et anglais

## Maintenance

### Ajout de Nouvelles Images
1. Générer l'image via l'outil de génération
2. Ajouter l'URL dans `src/data/constants.ts` ou `src/data/universes.ts`
3. Utiliser l'image dans les composants appropriés
4. Mettre à jour ce document

### Remplacement d'Images
1. Générer la nouvelle image
2. Remplacer l'URL dans le fichier concerné
3. Tester l'affichage sur toutes les pages
4. Mettre à jour ce document

## Licence

Toutes les images sont générées spécifiquement pour AURYN et sont la propriété exclusive du projet.
