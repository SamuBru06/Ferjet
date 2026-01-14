# FERJET - Sito Web

Questo repository contiene un sito web statico per FERJET, con sezioni dedicate a servizi, vantaggi,
galleria, richiesta preventivo e contatti.

## Struttura

- `index.html`: pagina principale con tutte le sezioni richieste.
- `styles.css`: stile moderno e responsive.
- `script.js`: comportamento del menu mobile.
Nessun logo è incluso negli asset del progetto.

## Anteprima locale

```bash
python -m http.server 8000
```

Poi apri `http://localhost:8000/` nel browser.

## Pubblicazione su GitHub Pages

1. Vai in **Settings → Pages**.
2. Seleziona il branch `work` (o `main`) e la root `/`.
3. L'URL tipico sarà `https://<utente>.github.io/<repo>/`.

Se compare “Not Found”, assicurati di aprire la **root** del sito e che `index.html` sia nella root
del repository.