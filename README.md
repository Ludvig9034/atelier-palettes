# Atelier · Brand palette sandbox

Live preview af 10 forskellige brandfarve-paletter i samme moderne layout.
Bygget til at lade kollegaer se og sammenligne brand-retninger i praksis,
før der træffes beslutning om visuel identitet.

## Indhold

- **`index.html`** — Sammenligningsside med alle 10 paletter
- **`preview-*.html`** — Fulde preview-sider, én pr. palette
- **`styles.css`** — Delt stylesheet (alle paletter)
- **`script.js`** — Font-switcher (Heading · Body · Mono)
- **`fonts/`** — Self-hosted PP Neue Montreal (Book + Medium)

## Paletter

### Sober
| Navn | Hex | Karakter |
|------|-----|----------|
| Vermillion | `#CF4118` | Energisk burnt orange, kunstnerisk |
| Klein | `#002FA7` | Yves Kleins blå, intellektuel |
| Forest | `#1F5E3A` | Dyb skovgrøn, organisk |

### Bold
| Navn | Hex | Karakter |
|------|-----|----------|
| Rosso | `#C8102E` | Hermès/Ferrari rød, autoritet |
| Schiap | `#DA1E7F` | Schiaparelli pink, fashion |
| Plum | `#6D28D9` | Electric violet, tech-premium |
| Tangerine | `#EA580C` | Pure energi-orange |
| Solar | `#FACC15` | Yellow maks (mørk tekst på accent) |
| Cinnabar | `#D43616` | Mellem Vermillion og Flame |
| Flame | `#FF3D14` | Mest mættet rød-orange |

## Font-switcher

Top højre hjørne. Tre rækker (Heading · Body · Mono) med 5 valg hver.
Valg persisterer via `localStorage` på tværs af paletter.

**Sans-fonte:** Neue, Space Grotesk, Inter, Plus Jakarta, Instrument Serif
**Mono-fonte:** JetBrains, IBM Plex, Space Mono, Fira Code, DM Mono

## Lokal udvikling

Det er en ren statisk side — åbn `index.html` direkte i en browser eller serv
mappen med en simpel HTTP-server:

```bash
python3 -m http.server 4040
```

Så ligger den på `http://localhost:4040/`.
