#!/usr/bin/env bash
# Install/refresh the tidcapital systemd service. Run with: sudo bash deploy/install.sh
set -euo pipefail

if [ "$(id -u)" -ne 0 ]; then
  echo "Run this with sudo: sudo bash $0" >&2
  exit 1
fi

DIR="$(cd "$(dirname "$0")/.." && pwd)"
CRED=/etc/credstore/tidcapital-smtp-pass

install -d -m 700 /etc/credstore
if [ ! -s "$CRED" ] || [ "${1:-}" = "--new-password" ]; then
  read -rs -p "SMTP app password: " p
  echo
  (umask 077; printf %s "$p" > "$CRED")
  echo "Saved password to $CRED"
fi

cp "$DIR/deploy/tidcapital.service" /etc/systemd/system/tidcapital.service
systemctl daemon-reload
systemctl enable tidcapital >/dev/null 2>&1
systemctl restart tidcapital
sleep 2
systemctl --no-pager --lines=0 status tidcapital | head -3
