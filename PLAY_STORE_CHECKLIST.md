# Google Play legal & privacy checklist

Per-app steps. Official references:

- [User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)
- [Data safety form](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en)

---

## One Remote (`com.vorithstudio.smarttvremote`)

| Item | Status | URL / file |
|------|--------|------------|
| Privacy policy hosted | [ ] | https://yoxent.github.io/legal-docs/one-remote/privacy-policy |
| Privacy policy in Play Console | [ ] | Same URL |
| Privacy policy linked in app | [ ] | Settings / About |
| Data safety form | [ ] | Match [`projects/one-remote/data-inventory.md`](projects/one-remote/data-inventory.md) |
| Deletion page | [ ] | https://yoxent.github.io/legal-docs/one-remote/account-and-data-deletion |
| `PRIVACY_POLICY_URL` on release builds | [ ] | See `projects/one-remote/PROJECT.md` |
| Production AdMob app ID (not test) | [ ] | Replace test ID in Flutter `AndroidManifest.xml` |
| Developer name matches policy | [ ] | Play Console → Settings → Account details → **Vincent Oliver Veran** ([guide](projects/one-remote/PLAY_CONSOLE_AND_HOSTING.md)) |
| Policy URL works logged out | [ ] | Incognito test — required if repo is private ([hosting](projects/one-remote/PLAY_CONSOLE_AND_HOSTING.md)) |
| AdMob production IDs | [ ] | [ADMOB_SETUP.md](projects/one-remote/ADMOB_SETUP.md) |
| [`data-inventory.md`](projects/one-remote/data-inventory.md) completed | [x] | Synced from `E:\Projects\Flutter\one_remote` May 2026 |

---

## Required for every app

| Item | Notes |
|------|--------|
| **Privacy policy** | `docs/<slug>/privacy-policy.md` → public URL |
| **Data safety form** | Must match policy |
| **Policy in app** | Link or text in Settings/About |
| **Developer entity** | Legal name on Play listing = name in policy |

---

## URL pattern (GitHub Pages)

```
https://yoxent.github.io/legal-docs/[slug]/privacy-policy
https://yoxent.github.io/legal-docs/[slug]/account-and-data-deletion
```

Example: `one-remote`.

---

## Before each release

- [ ] New SDK or permission? Update `projects/<slug>/data-inventory.md` + policy + Data safety.
- [ ] Bump “Last updated” if policy changed materially.

---

## Disclaimer

Not legal advice. Review with counsel for children’s apps, ads, health/financial data, or heavy collection.
