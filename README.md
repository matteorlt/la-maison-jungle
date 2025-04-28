
# 🌿 La Maison Jungle

Projet fil rouge réalisé dans le cadre de la formation OpenClassrooms "Développeur Web".  
**La Maison Jungle** est une boutique de plantes en ligne, développée avec **React**. Ce projet permet d'apprendre à structurer une application React moderne avec des composants, des hooks, et une gestion propre des états.

## 🌱 Fonctionnalités

- Page d’accueil affichant une liste de plantes
- Filtres par catégorie (intérieur, extérieur, etc.)
- Ajout de plantes au panier
- Suppression individuelle ou complète du panier
- Calcul du total du panier en temps réel
- Design responsive
- Utilisation de composants réutilisables
- Stockage du panier dans le `localStorage`

## 📁 Structure du projet

```
la-maison-jungle/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Banner.js
│   │   ├── Cart.js
│   │   ├── Footer.js
│   │   ├── PlantItem.js
│   │   ├── ShoppingList.js
│   │   ├── Categories.js
│   ├── styles/
│   │   └── app.css
│   ├── assets/
│   │   └── images des plantes
│   ├── App.js
│   ├── index.js
│   └── plantList.js
│
├── package.json
└── README.md
```

## ⚙️ Installation

1. Clone le projet :
   ```bash
   git clone https://github.com/matteorlt/la-maison-jungle.git
   ```
2. Installe les dépendances :
   ```bash
   cd la-maison-jungle
   npm install
   ```
3. Lance le projet en développement :
   ```bash
   npm start
   ```
4. Accède à l'application via `http://localhost:3000`

## 🧰 Technologies utilisées

- React (Create React App)
- JavaScript
- CSS
- JSX
- localStorage

## 🎯 Objectifs pédagogiques atteints

- Créer des composants réutilisables
- Création de commit correct (vaut mieux pas regarder les commits de mon memory game)
- Passer des props entre composants
- Utiliser le `useState` pour gérer les états
- Gérer des événements utilisateurs
- Persister des données dans le `localStorage`
- Décomposer une interface utilisateur

## 🙋‍♂️ Auteur

Mattéo  
Projet réalisé dans le cadre de la formation **OpenClassrooms - Développeur Web**.

---
