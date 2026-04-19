# ENGINE_GRAMMAR — Hive Station

<GrapplerHook>
engine: HiveStation
version: 1.0.0
governance: QueenBee.MasterGrappler
safety: elevated
multilingual: false
premium: false
</GrapplerHook>

## Engine Identity
- **Name:** Hive Station
- **Domain:** station.hive.baby
- **Repo:** saggarsonny-boop/hive-station
- **Status:** Live (internal — password protected)
- **Stack:** Next.js + TypeScript

## Purpose
Password-protected internal operations hub. Single entry point for all internal Hive tools: Creator Console, Queen Bee, Hive Engine Builder, Production Dashboard. Space aesthetic. Session-based auth (sessionStorage). Not indexed by search engines.

## Inputs
- Password: "hivebees"

## Outputs
- Authenticated dashboard with links to all internal tools
- Production Dashboard: live engine status parsed from DAILY_STATUS.md on GitHub

## Modes
- **Locked:** Password input only
- **Unlocked:** Full ops hub with links + dashboard access
- **Dashboard:** /dashboard — Hive Production Dashboard (fetches DAILY_STATUS.md from GitHub)

## Reasoning Steps
- Password validation: client-side only (sessionStorage)
- Dashboard: fetches raw DAILY_STATUS.md from GitHub, parses markdown tables, renders engine scores

## Safety Templates
- robots: noindex, nofollow
- No public content

## Multilingual Ribbon
- Not applicable (internal tool)

## Premium Locks
- Not applicable

## Governance Inheritance
- Governed by: QueenBee.MasterGrappler (pending)
- Safety level: elevated (internal access)
- Tone: neutral

## API Model Strings
- None (no LLM calls)

## Deployment Notes
- Vercel: auto-deploy on push to main
- Domain: station.hive.baby → Cloudflare CNAME → cname.vercel-dns.com
- Deployment Protection: OFF (password-gated at app level)
