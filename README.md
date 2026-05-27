# legal-docs

Public legal and store-compliance documents for indie apps on **Google Play** (and other stores).

**Developer:** Vincent Oliver Veran (Philippines) · **Contact:** vorithstudio@gmail.com

---

## Projects

| Slug | App | Package | Docs |
|------|-----|---------|------|
| `one-remote` | One Remote | `com.vorithstudio.smarttvremote` | [`docs/one-remote/`](docs/one-remote/) |

Metadata and internal notes live under [`projects/<slug>/`](projects/).

### Add a new app later

1. Copy `docs/one-remote/` → `docs/<new-slug>/` and `projects/one-remote/` → `projects/<new-slug>/`.
2. Edit `projects/<new-slug>/PROJECT.md` and all markdown in `docs/<new-slug>/`.
3. Add the app to [`docs/index.md`](docs/index.md).
4. See [`templates/project/PROJECT.md`](templates/project/PROJECT.md).

---

## Repository layout

```
docs/                          # Published on GitHub Pages
  index.md                     # Lists all apps
  one-remote/
    privacy-policy.md          # Required by Google Play
    terms-of-service.md
    account-and-data-deletion.md
    index.md

projects/                      # Not required for Pages; developer reference
  one-remote/
    PROJECT.md                 # Names, package, URLs
    data-inventory.md          # Drives Play Data safety form

templates/project/             # Scaffold for the next app
PLAY_STORE_CHECKLIST.md
```

---

## Host on GitHub Pages

**Private repo:** On GitHub **Free**, Pages from a private repo is usually **not** a public URL. Verify in an incognito window, or see [`projects/one-remote/PLAY_CONSOLE_AND_HOSTING.md`](projects/one-remote/PLAY_CONSOLE_AND_HOSTING.md). Making **only** this `legal-docs` repo public does not expose your Flutter app code.

1. Push to GitHub.
2. **Settings → Pages** → Source: branch `main`, folder **`/docs`**.
3. URLs for **One Remote** (GitHub user **yoxent**):
   - Privacy: https://yoxent.github.io/legal-docs/one-remote/privacy-policy
   - Deletion: https://yoxent.github.io/legal-docs/one-remote/account-and-data-deletion
   - Terms: https://yoxent.github.io/legal-docs/one-remote/terms-of-service

Use the **privacy-policy** URL in Play Console → **App content** and in Flutter:

`--dart-define=PRIVACY_POLICY_URL=https://yoxent.github.io/legal-docs/one-remote/privacy-policy`

---

## Checklist before publish

See [`PLAY_STORE_CHECKLIST.md`](PLAY_STORE_CHECKLIST.md) and each project’s `projects/<slug>/data-inventory.md`.

---

## Disclaimer

Templates only — not legal advice. Have a lawyer review if you collect sensitive data, target children, or operate in multiple regions.
