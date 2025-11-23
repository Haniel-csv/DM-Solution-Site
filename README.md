# DM Solutions — Site vitrine

Site vitrine responsive pour DM Solutions : accueil (hero), services (grille 3x2 sur desktop), carousel clients, section "À propos" avec vidéo et formulaire de contact (Web3Forms).

## Arborescence principale
- `index.html` — page principale
- `style.css` — styles
- `script.js` — comportements (carousel, hamburger, formulaire)
- `img/` — images et logo (`DMSOLUTIONS.png`)
- `video/` — vidéo pour la section À propos
- `README.md` — ce fichier

## Fonctionnalités
- Accueil avec titre et CTA
- Section Services en grille (3x2 sur grand écran)
- Carousel logos clients (responsive)
- Section À propos avec lecture vidéo
- Formulaire de contact connecté à Web3Forms (clé dans le formulaire)
- Menu hamburger pour mobile
- Design responsive (mobile/tablette/desktop)

## Installation et test local (sans PHP)
1. Ouvrir le dossier du projet dans VS Code ou un autre éditeur.
2. Méthode recommandée — Live Server (VS Code) :
   - Installer l'extension Live Server.
   - Clic droit sur `index.html` → "Open with Live Server".
3. Alternative (serveur statique simple) :
   - Avec Python 3 :  
     `python -m http.server 8000`  
     puis ouvrir `http://localhost:8000/`.
   - Avec Node.js + http-server :  
     `npx http-server -p 8000`  

Après démarrage, ouvre `index.html` et teste le site (responsive et formulaire).

## Formulaire de contact (Web3Forms)
- Le formulaire contient une clé `access_key` pour Web3Forms. Pour utiliser ton propre compte :
  1. Crée un compte sur https://web3forms.com/ et crée une inbox.
  2. Remplace la valeur de l'`access_key` dans `index.html` par ta clé fournie.
  3. (Optionnel) Ajoute `action="https://api.web3forms.com/submit"` et `method="POST"` à la balise `<form>` si tu préfères l'envoi direct sans JavaScript.
- Pour tester : envoie un message via le formulaire et vérifie la réception dans ton inbox Web3Forms / l'e‑mail configuré.

## Personnalisation rapide
- Logo : remplacer `img/DMSOLUTIONS.png`.
- Images services / clients : remplacer fichiers dans `img/`.
- Vidéo : placer le fichier MP4 dans `video/` et vérifier le chemin dans `index.html`.
- Couleurs / typographie : modifier `style.css`.

## Déploiement
- Hébergeur statique (Netlify, GitHub Pages, Vercel) OK si tu utilises Web3Forms.
- Si tu veux envoyer des e‑mails via ton propre backend, remplace le handler formulaire par ton endpoint serveur (non inclus ici).

## Contribution & licence
- Remplace/ajoute du contenu selon besoin.  
Licence : à définir (suggestion MIT).

## Contact
dmsercom@gmail.com# DM Solutions — Site vitrine

Site vitrine responsive pour DM Solutions : accueil (hero), services (grille 3x2 sur desktop), carousel clients, section "À propos" avec vidéo et formulaire de contact (Web3Forms).

## Arborescence principale
- `index.html` — page principale
- `style.css` — styles
- `script.js` — comportements (carousel, hamburger, formulaire)
- `img/` — images et logo (`DMSOLUTIONS.png`)
- `video/` — vidéo pour la section À propos
- `README.md` — ce fichier

## Fonctionnalités
- Accueil avec titre et CTA
- Section Services en grille (3x2 sur grand écran)
- Carousel logos clients (responsive)
- Section À propos avec lecture vidéo
- Formulaire de contact connecté à Web3Forms (clé dans le formulaire)
- Menu hamburger pour mobile
- Design responsive (mobile/tablette/desktop)

## Installation et test local (sans PHP)
1. Ouvrir le dossier du projet dans VS Code ou un autre éditeur.
2. Méthode recommandée — Live Server (VS Code) :
   - Installer l'extension Live Server.
   - Clic droit sur `index.html` → "Open with Live Server".
3. Alternative (serveur statique simple) :
   - Avec Python 3 :  
     `python -m http.server 8000`  
     puis ouvrir `http://localhost:8000/`.
   - Avec Node.js + http-server :  
     `npx http-server -p 8000`  

Après démarrage, ouvre `index.html` et teste le site (responsive et formulaire).

## Formulaire de contact (Web3Forms)
- Le formulaire contient une clé `access_key` pour Web3Forms. Pour utiliser ton propre compte :
  1. Crée un compte sur https://web3forms.com/ et crée une inbox.
  2. Remplace la valeur de l'`access_key` dans `index.html` par ta clé fournie.
  3. (Optionnel) Ajoute `action="https://api.web3forms.com/submit"` et `method="POST"` à la balise `<form>` si tu préfères l'envoi direct sans JavaScript.
- Pour tester : envoie un message via le formulaire et vérifie la réception dans ton inbox Web3Forms / l'e‑mail configuré.

## Personnalisation rapide
- Logo : remplacer `img/DMSOLUTIONS.png`.
- Images services / clients : remplacer fichiers dans `img/`.
- Vidéo : placer le fichier MP4 dans `video/` et vérifier le chemin dans `index.html`.
- Couleurs / typographie : modifier `style.css`.

## Déploiement
- Hébergeur statique (Netlify, GitHub Pages, Vercel) OK si tu utilises Web3Forms.
- Si tu veux envoyer des e‑mails via ton propre backend, remplace le handler formulaire par ton endpoint serveur (non inclus ici).


## Contact
hanieldoffou@hotmail.com

## Lien du site live
https://dmsolutionsci.com/
