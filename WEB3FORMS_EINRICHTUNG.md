# Web3Forms Einrichtung - Landikerstübli

## Was ist Web3Forms?
Web3Forms ist ein kostenloser Service, der Formulardaten per E-Mail verschickt. Du bekommst jede Reservierung direkt in deine E-Mail-Inbox.

## Schritt-für-Schritt Anleitung

### 1. Web3Forms Account erstellen (2 Minuten)

1. Gehe zu: **https://web3forms.com**
2. Klicke auf "Get Started Free"
3. Erstelle einen Account mit deiner E-Mail: **landikerstuebli@gmail.com**
4. Bestätige deine E-Mail-Adresse

### 2. Access Key erhalten (1 Minute)

1. Nach dem Login siehst du dein Dashboard
2. Klicke auf "Create New Form"
3. Gib einen Namen ein: "Landikerstübli Reservationen"
4. Du erhältst einen **Access Key** - das sieht ungefähr so aus:
   ```
   a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```
5. **KOPIERE DIESEN KEY!**

### 3. Access Key in die Website einfügen (1 Minute)

1. Öffne die Datei: `C:\Users\tntth\Webpages\landikersteubli-new\reservationen.html`
2. Suche nach Zeile 59:
   ```html
   <input type="hidden" name="access_key" value="IHR_WEB3FORMS_ACCESS_KEY">
   ```
3. Ersetze `IHR_WEB3FORMS_ACCESS_KEY` mit deinem echten Access Key:
   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
   ```
4. Speichere die Datei

### 4. Fertig! 🎉

Das war's! Jetzt funktioniert das Reservationsformular:

## Wie es funktioniert

1. **Gast füllt Formular aus** auf deiner Website
2. **Formular wird gesendet** an Web3Forms
3. **Du bekommst eine E-Mail** mit allen Details:
   - Name des Gastes
   - E-Mail & Telefon
   - Datum & Uhrzeit
   - Anzahl Personen
   - Besondere Wünsche

## E-Mail Beispiel

Du erhältst E-Mails in diesem Format:

```
Betreff: Neue Tischreservierung - Landikerstübli

Name: Max Mustermann
E-Mail: max@beispiel.ch
Telefon: +41 44 123 45 67
Datum: 2024-11-15
Uhrzeit: 19:00
Anzahl Personen: 4
Besondere Wünsche: Vegetarische Optionen bitte
```

## Features

✅ **Kostenlos** - unbegrenzte Formulare & E-Mails
✅ **Spam-Schutz** - integriert
✅ **DSGVO-konform** - keine Daten werden gespeichert
✅ **Sofort** - E-Mails kommen innerhalb von Sekunden
✅ **Zuverlässig** - 99.9% Uptime

## Einstellungen in Web3Forms (Optional)

Im Web3Forms Dashboard kannst du:

- **Auto-Response aktivieren**: Gast bekommt automatisch eine Bestätigungs-E-Mail
- **Spam-Filter** konfigurieren
- **Webhook** einrichten (für fortgeschrittene Nutzer)
- **Statistiken** sehen (wie viele Reservationen pro Tag/Woche)

## Notfall-Kontakt

Falls das Formular nicht funktioniert:
- **Telefon**: 043 344 05 36 (ist auf der Website prominent angezeigt)
- **E-Mail**: landikerstuebli@gmail.com (ist auch als Link verfügbar)

## Nächste Schritte

Nach der Einrichtung solltest du:

1. ✅ **Testformular senden** - fülle das Formular selbst aus und prüfe, ob die E-Mail ankommt
2. ✅ **E-Mail-Filter einstellen** - erstelle einen Ordner "Reservationen" in Gmail
3. ✅ **Website deployen** - mit Vercel oder Netlify (siehe DEPLOYMENT.md)

---

**Benötigst du Hilfe?**
Web3Forms Support: https://web3forms.com/help
Web3Forms Dokumentation: https://docs.web3forms.com
