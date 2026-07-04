# 🐻 cybear.fr

Mon site personnel : blog de veille technologique (sysadmin, réseaux, cybersécurité) et CV en ligne.

**→ [cybear.fr](https://cybear.fr)**

## Stack

- [Astro](https://astro.build) — site 100 % statique, quasiment zéro JavaScript côté client
- [Tailwind CSS v4](https://tailwindcss.com) — dark mode par défaut, avec toggle clair/sombre
- MDX — articles en Markdown avec composants (embeds YouTube via `astro-embed`)
- Shiki — coloration syntaxique des blocs de code (thème double clair/sombre)
- Déployé sur Vercel

## Développement

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # build statique dans dist/
npm run preview    # prévisualiser le build
```

## Écrire un article

Créer un fichier `src/content/blog/mon-slug.mdx` :

```mdx
---
title: "Titre de l'article"
description: "Résumé affiché sur les cartes."
pubDate: 2026-07-04
tags: ["veille", "linux"]
---

Contenu en Markdown…
```

Le slug de l'URL correspond au nom du fichier. Les tags génèrent
automatiquement des pages d'archive `/tags/[tag]`, et le flux RSS
est disponible sur `/rss.xml`.
