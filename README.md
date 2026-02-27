
# Svea Landing Page

En modern, responsiv landningssida byggd med HTML, CSS och lite JavaScript. Projektet inkluderar en mobilvänlig navigationsmeny (hamburger), hero-sektion, flytande kort och en stilren footer.

## Funktioner

- **Responsiv design** – fungerar på desktop, tablet och mobil.
- **Hamburger-meny** – klickbar meny med snygg animation på mobil.
- **Hero-sektion** – stor rubrik, call-to-action-knappar och illustration.
- **Flytande kort** – visuella element som "booking-card" med animation.
- **Footer** – stilren footer med sociala länkar, kontaktinfo och copyright.
- **CSS-variabler** – enkelt att ändra färger och typografi.
- **Lättanpassat** – enkelt att lägga till fler sektioner eller modifiera layouten.

## Teknologier

- **HTML5**
- **CSS3** med variabler och flex/grid layout
- **JavaScript** för klickbar hamburger-meny
- Google Fonts: `Poppins`, `Hind`, `Playfair Display`

## Installation & användning

1. Klona repot:

git clone <din-repo-url>

2. Öppna `index.html` i webbläsaren.

3. För utveckling med live reload kan du använda t.ex. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) i VS Code.

## Struktur

/index.html          # Startsida
/css/style.css       # All CSS inklusive responsivitet
/js/main.js          # JavaScript för hamburgermeny
/images/             # Bilder och illustrationer

## Mobil & Responsivitet

* Desktop: navbar visas alltid
* Tablet: justerad layout, större gaps
* Mobil: hamburger-meny öppnar dropdown med animation, hero-sektion och kort anpassas för mindre skärmar

## Användning av CSS-variabler

Färger och typografi definieras i `:root`, vilket gör det enkelt att ändra tema:

:root {
  --svea-primary: #833EA9;
  --svea-primary-light: #DAA6C9;
  --cream: #faf8f5;
  --ink: #1a1a2e;
}

## Bidra

Om du vill bidra:

1. Forka projektet
2. Skapa en ny branch (`git checkout -b feature-namn`)
3. Commit:a dina ändringar (`git commit -m "Beskrivning av ändring"`)
4. Push:a till din branch (`git push origin feature-namn`)
5. Skapa en Pull Request

## Licens

Detta projekt är licensierat under MIT License.

