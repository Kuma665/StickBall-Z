# StickBall Z – Projektregeln

## Projekt
- Das ganze Spiel steckt in **einer** HTML-Datei: `index.html` (aktueller Titel: „StickBall Z“).
- Ordner: `C:\Users\arams\Documents\GitHub\StickBall-Z` (Git-Repo, Remote: github.com/Kuma665/StickBall-Z, Branch `main`)
- Technik: **Canvas 2D** (bestehend, 960×540 logisch, 16:9). Passt für einen 2D-Strichmännchen-Fighter
  besser als Three.js: kleiner, schneller auf dem Handy, keine externe Bibliothek.
  Wechsel zu Three.js nur nach Rückfrage.
- Spielziel: freier Flugkampf mit Ki-Angriffen, zerstörbarem Boden und einer Welt, die mit der Flugdistanz wächst.

## Zielgerät
- Hauptsächlich Handy: **OnePlus 12, Browser, 120 Hz**, Querformat.
- Eingabe: **PS5-Controller (DualSense)** über die Gamepad-API. Tastatur bleibt als Zweitweg erhalten.
- PS-Symbole (✕ ○ □ △, L1/R1/L2/R2) automatisch anzeigen, wenn ein PlayStation-Controller erkannt wird
  (`gamepad.id` enthält z. B. „DualSense“, „Wireless Controller“, „054c“); sonst Tastatur-/Standardsymbole.
- **HUD klein halten.** Nichts vergrößern (HUD, Schrift, Buttons) ohne Rückfrage.

## Performance – nichts darf laggen
- Keine neuen Objekte/Arrays pro Frame im Spielablauf: **Objekt-Pools** für Partikel, Projektile,
  Banner, Krater usw. (bei Three.js: `InstancedMesh` für viele gleiche Objekte).
- **Feste Obergrenzen** für alle Effekte (z. B. Partikel, Projektile, Banner); bei Erreichen alte Einträge
  wiederverwenden statt neue anlegen.
- Keine teuren Canvas-Operationen pro Objekt (z. B. `shadowBlur`, Filter, ständige Gradient-Neuanlage) ohne Not.

## Spielschleife
- **Feste Physik: 60 Schritte pro Sekunde** (`DT = 1/60`, Akkumulator).
- **Weiche Darstellung auf 120 Hz:** Rendern mit Interpolation zwischen vorherigem und aktuellem
  Physikzustand (`alpha = acc / DT`), keine Logik im Render-Teil.
- Frame-Zeit-Sprünge begrenzen (z. B. max. 0,05 s pro Frame).

## Git
- Git ist in PowerShell nicht im PATH – Git-Befehle über die Bash ausführen.
- Lokal committen nach jedem fertigen Feature ist erlaubt. Commit-Nachricht: `Spiel aktualisiert: …`
- **Pushen nur, wenn ich „pushen ok“ sage.**

## Tests
- Kurze automatische **Headless-Chrome-Tests (1–2 Min.)** sind erlaubt.
- Chrome: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- Python ist **nicht** installiert; Perl und awk sind vorhanden.
- Headless-Tests prüfen nur Laden/Fehler/Logik – nicht Gefühl, Controller-Eingabe am Handy oder echte 120 Hz.

## Abschluss jeder Aufgabe
- Nur die **aktuellen** Änderungen nennen.
- Ehrlich sagen, was geprüft wurde und was nicht (z. B. „headless geladen, keine Konsolenfehler;
  am Handy/mit DualSense nicht getestet“).
