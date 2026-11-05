# Shuhang Tan — Personal Website

A responsive academic website built with plain HTML and CSS. No package installation or build step is required.

## Publish on GitHub Pages

In this repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then click **Save**.

The public address is https://sh-tan.github.io/ once GitHub Pages finishes deploying.

## Edit the website

- `index.html`: photo, contact links, biography, and research interests.
- `research.html`: research projects, figures, and paper/code links.
- `publications.html`: selected publications.
- `experience.html`: industry experience and engineering toolkit.
- `education.html`: degrees and exchange program.
- `service.html`: teaching and academic reviewing.
- `assets/styles.css`: layout, colors, typography, and responsive styles.
- `assets/favicon.svg`: browser icon.

All pages and navigation work without JavaScript. Each page shares the same navigation, with its current link marked using `aria-current="page"`. When changing navigation, update it in all six HTML files.

## Local preview

Run `python3 -m http.server 8000` from this directory, then visit http://localhost:8000.

## Content sources

Research interests and PhD status are based on information provided by Shuhang Tan. Publication titles, authors, and venues were checked against:

- https://www.cs.rpi.edu/~ivanor/publications.html
- https://openreview.net/pdf?id=kwACVY73Ug
- https://www.cs.rpi.edu/~ivanor/cpub/icaa24-tan.pdf

Biography, contact details, education, and experience are maintained from information provided by Shuhang Tan.
