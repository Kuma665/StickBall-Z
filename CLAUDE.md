# StickBall Z – Projektregeln

Allgemeine Regeln (Kommunikation, Sicherung, Git, Spielgerät, Performance, Tests) stehen in der globalen CLAUDE.md.

## Projekt
- Ausrichtung: Querformat. Hochformat am Handy gesperrt (Dreh-Hinweis deckt alles ab, nicht wegtippbar, laufendes Spiel pausiert).
- Ordner: `C:\Users\arams\Documents\GitHub\StickBall-Z` (Repo Kuma665/StickBall-Z, Branch `main`).
- Ganzes Spiel in `index.html` (Titel „StickBall Z“).
- Technik: Canvas 2D, 960×540 logisch (16:9). Wechsel zu Three.js nur nach Rückfrage.
- Spielziel: freier Flugkampf mit Ki-Angriffen, zerstörbarem Boden und einer Welt, die mit der Flugdistanz wächst.
- Sicherungen: `C:\Users\arams\Documents\GitHub\StickBall-Z_backup\`
- Pushen nur, wenn ich „pushen ok“ sage.
- PC/Fernseher: Layout noch nicht geprüft (Screenshots 915×412 und 1920×1080 vergleichen, siehe globale Regel „Handy und PC“).
- `sw.js` lädt Seitenaufrufe mit `cache:'no-store'` (seit 15.11.2026), damit nach einem Push sofort die neue Version kommt statt bis zu 10 Min. alter von GitHub Pages; ein neuer Service-Worker greift erst ab dem zweiten Öffnen.

## Eingabe
- DualSense über die Gamepad-API; Tastatur bleibt als Zweitweg erhalten.
- PS-Symbole (✕ ○ □ △, L1/R1/L2/R2), wenn `gamepad.id` z. B. „DualSense“, „Wireless Controller“ oder „054c“ enthält; sonst Tastatur-/Standardsymbole.

## Spielschleife
- Feste Physik mit 60 Schritten pro Sekunde (`DT = 1/60`, Akkumulator).
- Rendern interpoliert zwischen vorherigem und aktuellem Zustand (`alpha = accumulator / DT`), keine Logik im Render-Teil.
- Frame-Zeit-Sprünge begrenzen (max. ca. 0,05 s pro Frame).
- Objekt-Pools mit festen Obergrenzen für Partikel, Projektile, Banner, Krater; volle Pools alte Einträge wiederverwenden.

## Entscheidungen
- Dragon-Ball-Begriffe („Kamehameha“, „Super-Saiyajin“, „SSJ“, „Ki“) und der Name „StickBall Z“ bleiben vorerst (Spiel nur für die Neffen, 22.11.2026). Nicht erneut ansprechen; erst vor einer Veröffentlichung umbenennen.

## Projektwissen
- Stumm-Knopf `#muteBtn` (oben rechts im Spielfeld), `settings.mute`, `toggleMute()`; Taste M, Controller △/Y, nur in Menü/Pause. Lautstärke über `audioMaster` (`MASTER_VOL`).
- Eckhinweis `#padHint` unten rechts, nur mit Controller, gesteuert über `updateCornerUI()` (jeden Frame aufgerufen, ändert DOM nur bei Änderung). Texte in `UI_TXT`.
- Alte Hinweiszeile `#hint` unter dem Spielfeld ist per CSS ausgeblendet.

## Offen (Stand 22.11.2026)
- Erledigt: Stumm-Knopf, Erklärtexte im Hauptmenü entfernt, Eckhinweis „✕ OK · ○ Zurück“.
- Noch offen (gemeldet, nicht ungefragt umbauen): Tastensymbole als `.psg`-Plaketten, kompakte Spielanleitung (aktuell 13 Zeilen), versteckte Credits an der Versionsnummer, zentrale Text-Tabelle für alle Texte (bisher nur `UI_TXT`), Screenshots prüfen (Abstand oben, kein Scrollen bei 915×412).
- Kaputter Umlaut im Kommentar „weiterzÃ¤hlen“ (Spielschleife, Pause-Standbild).
