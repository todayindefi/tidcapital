# TID Capital website

Marketing site for TID Capital: a React (Vite + Tailwind/shadcn) single page served by a small Express server. The only backend feature is the contact form, which emails submissions to `CONTACT_TO` over SMTP.

## Develop

```
npm install
cp .env.example .env   # fill in SMTP settings
npm run dev            # http://localhost:5000 (or $PORT)
```

## Deploy (self-hosted)

Runs on the home server as a systemd service behind the existing Cloudflare tunnel.

```
npm ci && npm run build
sudo cp deploy/tidcapital.service /etc/systemd/system/
sudo systemctl daemon-reload && sudo systemctl enable --now tidcapital
```

Then add the hostname to `~/.cloudflared/config.yml` (above the 404 catch-all), route DNS, and restart the tunnel:

```
  - hostname: tidcapital.com
    service: http://localhost:8510
```

```
cloudflared tunnel route dns lending-dashboard tidcapital.com
sudo systemctl restart cloudflare-tunnel
```

To ship changes: `git pull && npm ci && npm run build && sudo systemctl restart tidcapital`.

## Brand notes

- Blue color scheme matching the logo set in `attached_assets/` (white-bg logo in nav, black-bg logo in footer, monogram as favicon).
- Focus: research-driven DeFi yield farming and proprietary trading for institutional and sophisticated investors; vault curation is secondary.
