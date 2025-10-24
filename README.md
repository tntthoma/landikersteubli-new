# Landikerstübli - Moderne Restaurant-Webseite

Eine komplett neue, moderne Webseite für das Restaurant Landikerstübli mit aktuellen Web-Technologien.

## 🚀 Features

- **Modernes, responsives Design** - Optimiert für Desktop, Tablet und Mobile
- **Schnelle Performance** - Keine schweren Frameworks, nur reines HTML, CSS und JavaScript
- **SEO-optimiert** - Semantisches HTML5 und Meta-Tags
- **Barrierefreie Navigation** - ARIA-Labels und keyboard-freundlich
- **Smooth Animations** - Elegante Übergänge und Scroll-Effekte
- **Mobile-First Ansatz** - Perfekte Darstellung auf allen Geräten

## 📁 Projektstruktur

```
landikersteubli-new/
│
├── index.html              # Hauptseite (Home)
├── menu.html               # Speisekarte mit interaktiven Kategorien
├── reservationen.html      # Reservierungsformular
├── anfahrt.html            # Standort und Anfahrt
├── galerie.html            # Bildergalerie mit Lightbox
├── kontakt.html            # Kontaktformular (TODO)
│
├── css/
│   ├── style.css           # Haupt-Stylesheet (Design-System, Layout)
│   ├── menu.css            # Menü-spezifische Styles
│   ├── forms.css           # Formular-Styles
│   ├── galerie.css         # Galerie und Lightbox Styles
│   └── anfahrt.css         # Anfahrt-Seite Styles
│
├── js/
│   ├── main.js             # Haupt-JavaScript (Navigation, Validierung)
│   ├── menu.js             # Menü-Kategoriewechsel
│   └── galerie.js          # Galerie-Filter und Lightbox
│
├── images/                 # Bilder-Ordner (TODO: Bilder hinzufügen)
│   └── gallery/            # Galerie-Bilder
│
└── README.md               # Diese Datei
```

## 🎨 Design-System

### Farben
- **Primary**: `#c8773d` (Warmes Orange/Braun)
- **Secondary**: `#2c2416` (Dunkles Braun)
- **Accent**: `#8b4513` (Saddle Brown)
- **Text**: `#1a1a1a` (Fast Schwarz)

### Typografie
- **Überschriften**: Playfair Display (Serif)
- **Fließtext**: Inter (Sans-Serif)
- **Font-Size**: 16px Base

### Spacing
- Konsistentes Spacing-System mit CSS-Variablen
- Mobile-First responsive Breakpoints

## 🛠️ Installation & Verwendung

### 1. Lokale Entwicklung

Die Webseite kann direkt im Browser geöffnet werden:

```bash
# Öffnen Sie index.html in Ihrem Browser
# Oder verwenden Sie einen lokalen Server:

# Mit Python 3:
python -m http.server 8000

# Mit Node.js (http-server):
npx http-server

# Mit PHP:
php -S localhost:8000
```

Dann öffnen Sie: `http://localhost:8000`

### 2. Keine Build-Tools erforderlich

Diese Webseite verwendet keine Build-Tools oder Package-Manager. Alles funktioniert direkt im Browser!

## ✅ Nächste Schritte

### Priorität 1 - Bilder hinzufügen

Die Webseite benötigt noch Bilder in folgenden Ordnern:

```
images/
├── restaurant-interior.jpg     # Für Welcome Section (ca. 1200x800px)
├── pizza-oven.jpg             # Für Opening Hours Section (ca. 1200x800px)
└── gallery/
    ├── restaurant-1.jpg       # Restaurant Innenansicht
    ├── restaurant-2.jpg       # Terrasse
    ├── restaurant-3.jpg       # Bar
    ├── pizza-1.jpg            # Pizza Margherita
    ├── pizza-2.jpg            # Pizza im Ofen
    ├── food-1.jpg             # Pasta Gericht
    ├── food-2.jpg             # Schweizer Spezialität
    ├── food-3.jpg             # Dessert
    └── event-1.jpg            # Event/Feier
```

**Empfohlene Bildgrößen:**
- Hero-Bilder: 1920x1080px
- Gallery-Bilder: 1200x900px (4:3 Format)
- Optimiert für Web (max. 200-300KB pro Bild)

### Priorität 2 - Inhalte anpassen

**Ersetzen Sie die Platzhalter-Inhalte:**

1. **Kontaktdaten** (in allen Dateien):
   - Adresse: Aktuell "Landstrasse 123, 8810 Horgen"
   - Telefon: Aktuell "+41 44 123 45 67"
   - E-Mail: Aktuell "info@landikerstuebli.ch"

2. **Öffnungszeiten** (falls abweichend):
   - In `index.html`, Footer und `anfahrt.html`

3. **Speisekarte** (`menu.html`):
   - Passen Sie Gerichte und Preise an
   - Fügen Sie fehlende Kategorien hinzu

4. **Google Maps** (`anfahrt.html`):
   ```html
   <!-- Ersetzen Sie den Platzhalter mit Ihrem Google Maps Embed Code -->
   <iframe
       src="https://www.google.com/maps/embed?pb=!IHR_EMBED_CODE"
       width="100%"
       height="100%"
       style="border:0;"
       allowfullscreen=""
       loading="lazy">
   </iframe>
   ```

### Priorität 3 - Fehlende Seiten erstellen

**Noch zu erstellende Seiten:**

1. **kontakt.html** - Allgemeines Kontaktformular
2. **impressum.html** - Rechtliche Pflichtangaben
3. **datenschutz.html** - Datenschutzerklärung

### Priorität 4 - Backend-Integration (Optional)

Derzeit sind die Formulare Frontend-only. Für echte Funktionalität:

1. **Reservierungsformular** (`reservationen.html`):
   - PHP-Script für E-Mail-Versand
   - Oder Integration mit Reservierungssystem (z.B. OpenTable, TheFork)

2. **Kontaktformular**:
   - PHP-Mail-Script
   - Oder externe Services (EmailJS, Formspree, etc.)

**Beispiel PHP-Integration:**
```php
<?php
// process-reservation.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    // ... weitere Felder

    // E-Mail senden
    mail("info@landikerstuebli.ch", "Neue Reservierung", $message);
}
?>
```

## 🔧 Anpassungen & Customization

### Farben ändern

Bearbeiten Sie die CSS-Variablen in `css/style.css`:

```css
:root {
    --color-primary: #c8773d;       /* Hauptfarbe */
    --color-secondary: #2c2416;     /* Sekundärfarbe */
    /* ... weitere Farben */
}
```

### Navigation anpassen

Links hinzufügen/entfernen in allen HTML-Dateien:

```html
<ul class="nav-menu">
    <li><a href="neue-seite.html" class="nav-link">Neue Seite</a></li>
</ul>
```

### Fonts ändern

Google Fonts Link im `<head>` jeder Seite ersetzen:

```html
<link href="https://fonts.googleapis.com/css2?family=IHR+FONT&display=swap" rel="stylesheet">
```

## 📱 Browser-Kompatibilität

Getestet und optimiert für:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Option 1: Shared Hosting (empfohlen)
1. Laden Sie alle Dateien via FTP auf Ihren Webserver
2. Stellen Sie sicher, dass `index.html` im Root-Verzeichnis liegt
3. Fertig!

### Option 2: GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/IHR-USERNAME/landikerstuebli.git
git push -u origin main
```
Dann in GitHub: Settings → Pages → Source: main branch

### Option 3: Netlify
1. Zippen Sie den gesamten Ordner
2. Gehen Sie zu netlify.com
3. Drag & Drop des Zip-Files
4. Fertig!

## 📋 Checkliste vor Live-Gang

- [ ] Alle Bilder hinzugefügt und optimiert
- [ ] Kontaktdaten aktualisiert (Adresse, Telefon, E-Mail)
- [ ] Öffnungszeiten überprüft
- [ ] Speisekarte und Preise aktualisiert
- [ ] Google Maps eingebunden
- [ ] Impressum erstellt (rechtliche Pflicht!)
- [ ] Datenschutzerklärung erstellt (rechtliche Pflicht!)
- [ ] Formulare funktionieren (Backend integriert)
- [ ] Auf verschiedenen Geräten getestet
- [ ] Alle Links funktionieren
- [ ] Meta-Descriptions angepasst

## 💡 Tipps & Best Practices

### Performance
- Komprimieren Sie Bilder vor dem Upload (TinyPNG, ImageOptim)
- Nutzen Sie WebP-Format für moderne Browser
- Lazy Loading für Bilder ist bereits implementiert

### SEO
- Füllen Sie alle Meta-Descriptions aus
- Verwenden Sie aussagekräftige Alt-Texte für Bilder
- Erstellen Sie eine sitemap.xml
- Registrieren Sie die Seite bei Google Search Console

### Wartung
- Aktualisieren Sie regelmäßig die Speisekarte
- Überprüfen Sie saisonale Angebote
- Halten Sie Öffnungszeiten aktuell
- Reagieren Sie zeitnah auf Reservierungsanfragen

## 🆘 Support & Hilfe

Bei Fragen oder Problemen:

1. **HTML/CSS Fragen**: [MDN Web Docs](https://developer.mozilla.org/)
2. **JavaScript Probleme**: Console öffnen (F12) für Fehler
3. **Responsive Design testen**: Chrome DevTools (F12 → Device Toolbar)

## 📄 Lizenz

Dieses Projekt wurde speziell für Landikerstübli erstellt.

---

**Erstellt mit modernen Web-Technologien**
- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Mobile-First Responsive Design

**Keine Frameworks, keine Dependencies, keine Build-Tools!**

Viel Erfolg mit Ihrer neuen Webseite! 🍕
