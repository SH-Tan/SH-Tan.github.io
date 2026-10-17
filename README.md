# Shuhang Tan — Personal Website

A responsive academic website built with plain HTML, CSS, and JavaScript. No package installation or build step is required.

## Publish on GitHub Pages

In this repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then click **Save**.

The public address is https://sh-tan.github.io/ once GitHub Pages finishes deploying.

## Edit the website

- `index.html`: biography, research interests, publications, and contact links.
- `assets/styles.css`: layout, colors, typography, and responsive styles.
- `assets/site.js`: theme preference and BibTeX citation copying. Update citations here when editing publications.
- `assets/favicon.svg`: browser icon.

Content is readable without JavaScript. Theme preferences follow the operating system until the visitor chooses a theme. Clipboard buttons appear only where the browser supports secure clipboard access.

## Local preview

Run `python3 -m http.server 8000` from this directory, then visit http://localhost:8000.

## Content sources

Research interests and PhD status are based on information provided by Shuhang Tan. Publication titles, authors, and venues were checked against:

- https://www.cs.rpi.edu/~ivanor/publications.html
- https://openreview.net/pdf?id=kwACVY73Ug
- https://www.cs.rpi.edu/~ivanor/cpub/icaa24-tan.pdf

The contact address is listed in these publications. No university affiliation, advisor relationship, CV, or portrait is assumed. Add these details when desired.
