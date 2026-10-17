'use strict';
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (_) { /* Storage may be disabled. */ }
function setTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  toggle.setAttribute('aria-pressed', String(dark));
  toggle.setAttribute('aria-label', dark ? 'Use light theme' : 'Use dark theme');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#141d19' : '#f7f7f2';
}
setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (systemTheme.matches ? 'dark' : 'light'));
toggle.hidden = false;
toggle.addEventListener('click', () => {
  savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(savedTheme);
  try { localStorage.setItem('theme', savedTheme); } catch (_) { /* Theme still works in this session. */ }
});
systemTheme.addEventListener('change', event => {
  if (!savedTheme) setTheme(event.matches ? 'dark' : 'light');
});
document.getElementById('year').textContent = String(new Date().getFullYear());
const citations = {
  pruning: `@article{tan2026pruning,
  title={Post-Training Neural Network Pruning using Graph Curvature},
  author={Tan, Shuhang and Sia, Jayson and Bogdan, Paul and Ivanov, Radoslav},
  journal={Transactions on Machine Learning Research},
  year={2026},
  url={https://openreview.net/forum?id=kwACVY73Ug}
}`,
  robustness: `@inproceedings{tan2024robustness,
  title={Analyzing Neural Network Robustness Using Graph Curvature},
  author={Tan, Shuhang and Sia, Jayson and Bogdan, Paul and Ivanov, Radoslav},
  booktitle={2024 IEEE International Conference on Assured Autonomy (ICAA)},
  pages={110--113},
  year={2024},
  url={https://arxiv.org/abs/2410.19607}
}`
};
if (window.isSecureContext && navigator.clipboard) {
  document.querySelectorAll('[data-citation]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const status = document.getElementById('copy-status');
      try {
        await navigator.clipboard.writeText(citations[button.dataset.citation]);
        status.textContent = 'BibTeX citation copied to clipboard.';
      } catch (_) {
        status.textContent = 'Clipboard access is unavailable. Citation details are available on the linked paper page.';
      }
    });
  });
}
