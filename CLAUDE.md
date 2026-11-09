# StickBall Z – Projektregeln

Allgemeine Regeln (Kommunikation, Sicherung, Git, Spielgerät, Performance, Tests) stehen in der globalen CLAUDE.md.

## Projekt
- Ordner: `C:\Users\arams\Documents\GitHub\StickBall-Z` (Repo Kuma665/StickBall-Z, Branch `main`).
- Ganzes Spiel in `index.html` (Titel „StickBall Z“).
- Technik: Canvas 2D, 960×540 logisch (16:9). Wechsel zu Three.js nur nach Rückfrage.
- Spielziel: freier Flugkampf mit Ki-Angriffen, zerstörbarem Boden und einer Welt, die mit der Flugdistanz wächst.
- Sicherungen: `C:\Users\arams\Documents\GitHub\StickBall-Z_backup\`
- Pushen nur, wenn ich „pushen ok“ sage.

## Eingabe
- DualSense über die Gamepad-API; Tastatur bleibt als Zweitweg erhalten.
- PS-Symbole (✕ ○ □ △, L1/R1/L2/R2), wenn `gamepad.id` z. B. „DualSense“, „Wireless Controller“ oder „054c“ enthält; sonst Tastatur-/Standardsymbole.

## Spielschleife
- Feste Physik mit 60 Schritten pro Sekunde (`DT = 1/60`, Akkumulator).
- Rendern interpoliert zwischen vorherigem und aktuellem Zustand (`alpha = accumulator / DT`), keine Logik im Render-Teil.
- Frame-Zeit-Sprünge begrenzen (max. ca. 0,05 s pro Frame).
- Objekt-Pools mit festen Obergrenzen für Partikel, Projektile, Banner, Krater; volle Pools alte Einträge wiederverwenden.
