# φ χ ψ a.k.a Phi-Chi-Psy

## Prérequis

- Node JS (v22.14.0) ou plus - [Téléchargement](https://nodejs.org/en)
- VsCode (ou autre) - [Téléchargement](https://code.visualstudio.com/)

## Utilisation avec vscode

- Ouvrir le dossier où se trouve le projet avec vscode
- Ouvrir dans vscode l'invite de commande (`ctrl + j`)

## Installation

Entrer la commande suivante dans vscode

```bash
npm ci
```

Cela va installer l'ensemble des dépendances plus le framework utile au bon fonctionnement du projet

## Lancement du site local

La commande suivante permet de lancer le site en local. Accessible via [localhost:3000](http://localhost:3000)

```bash
npm run dev
```

## Compilation et upload via le FTP

### Fichier .env

Un fichier `.env` doit se trouver à la racine du projet. Il est utilisé par le script `scripts/dist-ftp.mjs` qui permet l'upload automatique du projet après compilation

```.env
FTP_HOST=HOST_FTP_OU_SE_TROUVE_LE_SITE
FTP_PSW=MOT_DE_PASSE_FTP
FTP_PORT=PORT (21)
FTP_USER=NOM_UTILISATEUR
SITE_EMAIL=
SITE_EMAIL_HASH=
SITE_EMAIL_CYHPER=
```

### Protection de l'adresse email

1. Dans le fichier `.env` remplacer la ligne `SITE_EMAIL=` par `SITE_EMAIL={ton@email}`
1. Dans le fichier `.env` remplacer la ligne `SITE_EMAIL_CYHPER=` par `SITE_EMAIL_CYHPER=1234` (1234 est utilisé à titre d'exemple. Une clé plus complexe (charactères alléatoires) est vivement recommandée)
1. Via l'invite de commande (ctrl + j dans vscode), lancer la commande suivante
    ```bash
    node ./scripts/hash-email.mjs
    ```
1. Copier le résultat
1. Remplacer la ligne `SITE_EMAIL_HASH=` dans le ficher `.env` par `SITE_EMAIL_HASH={resultat}`

### Build

```bash
npm run build
```

## Emplacement des pages

- Chaque page a son propre dossier dans le répertoire `app`.
- Chaque dossier (de page) possède un fichier `page.tsx`. Il s'agit d'un composant React. En gros, c'est une fonction javascript qui retourne du code html.

## Création/Suppression d'une page

- Modifier le menu dans `components/Menu.tsx`
- Créer la page dans app. Par ex: `app/ma-nouvelle-page/page.tsx`.

Le contenu de cette dernière peut se baser sur le template suivant:

```tsx
import { Metadata } from "next";
import CitationLayout from "../components/citations/CitationLayout";

export const metadata: Metadata = {
    title: "Ma vouvelle page | φχψ" // Permet d'avoir un tab explicite
};

export default function MaNouvellePage(){
    return <CitationLayout>
        <main className="container">
            <h1 className="my-4 font-2xl font-bold">Ma nouvelle page</h1>
            <p className="my-3">Lorem ipsum...</p>
        </main>
    </CitationLayout>
}
```

> NB: Le compilateur est un peu capricieux en ce qui concerne les caractères spéciaux comme les apostrophes, les guillemets etc...
> Voici la liste des plus courants:
> - &apos; -> `apos;` ex: `L&apos;école` pour L&apos;école
> - &laquo; -> `&laquo;`
> - &raquo; -> `&raquo;`
> - &amp; -> `&amp;`

Et voilà! 😉