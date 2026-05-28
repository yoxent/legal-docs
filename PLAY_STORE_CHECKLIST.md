# Store legal & privacy checklist

Per-app steps for **Google Play** and **Apple App Store**. Official references:

- [Google Play User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)
- [Google Play Data safety form](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [App privacy details on the App Store](https://developer.apple.com/app-store/app-privacy-details/)

---

## One Remote (`com.vorithstudio.smarttvremote`)

### Google Play

| Item | Status | URL / file |
|------|--------|------------|
| Privacy policy hosted | [ ] | https://yoxent.github.io/legal-docs/one-remote/privacy-policy |
| Privacy policy in Play Console → App content | [ ] | Same URL (no `.html` suffix) |
| Privacy policy linked in app | [ ] | Settings → Legal |
| Terms of Service URL (recommended) | [ ] | https://yoxent.github.io/legal-docs/one-remote/terms-of-service |
| Account / data deletion URL | [ ] | https://yoxent.github.io/legal-docs/one-remote/account-and-data-deletion |
| Data safety form matches policy | [ ] | [`projects/one-remote/data-inventory.md`](projects/one-remote/data-inventory.md) |
| Data safety: **Device or other IDs** (ads) | [ ] | AAID / AdMob |
| Data safety: **App interactions** (ads) | [ ] | If declared in inventory |
| Merged release manifest reviewed (`AD_ID`, etc.) | [ ] | See policy §2.4; `data-inventory.md` §C |
| `PRIVACY_POLICY_URL` on release builds (no `.html`) | [ ] | `projects/one-remote/PROJECT.md` |
| Production AdMob app ID in Android manifest | [ ] | Not Google test ID |
| Developer name matches policy | [ ] | Play Console → **Vincent Oliver Veran** ([guide](projects/one-remote/PLAY_CONSOLE_AND_HOSTING.md)) |
| Policy URLs work logged out (incognito) | [ ] | Required if repo is private ([hosting](projects/one-remote/PLAY_CONSOLE_AND_HOSTING.md)) |
| AdMob production ad unit IDs | [ ] | [ADMOB_SETUP.md](projects/one-remote/ADMOB_SETUP.md) |
| [`data-inventory.md`](projects/one-remote/data-inventory.md) reviewed | [x] | Synced from Flutter app May 2026 |

### Apple App Store

| Item | Status | URL / file |
|------|--------|------------|
| Privacy Policy URL in App Store Connect | [ ] | Same as Play privacy URL |
| **App Privacy** nutrition labels match policy | [ ] | Align with `data-inventory.md` |
| Support URL | [ ] | Privacy or deletion page, or support email page |
| Terms of Use (EULA) | [ ] | Standard Apple EULA or custom Terms URL |
| `NSUserTrackingUsageDescription` in Info.plist | [ ] | ATT for ads |
| `NSLocalNetworkUsageDescription` in Info.plist | [ ] | TV discovery — required for local network |
| Production `GADApplicationIdentifier` (not test ID) | [ ] | `ios/Runner/Info.plist` |
| Age rating questionnaire | [ ] | Not directed to children under 13 |
| In-app purchase (**Pro**) metadata | [ ] | Non-consumable `one_remote_pro` |

---

## Required for every app

| Item | Notes |
|------|--------|
| **Privacy policy** | `docs/<slug>/privacy-policy.md` → public URL |
| **Data safety / App Privacy** | Must match policy and `projects/<slug>/data-inventory.md` |
| **Policy in app** | At minimum privacy link in Settings |
| **Deletion instructions** | Required when you collect user data (feedback, email); URL in Play even without accounts |
| **Developer entity** | Legal name on store listing = name in policy |

---

## URL pattern (GitHub Pages)

Use paths **without** `.html` (Jekyll default for `.md` sources):

```
https://yoxent.github.io/legal-docs/[slug]/privacy-policy
https://yoxent.github.io/legal-docs/[slug]/terms-of-service
https://yoxent.github.io/legal-docs/[slug]/account-and-data-deletion
```

Example: `one-remote`.

**Flutter:** `--dart-define=PRIVACY_POLICY_URL=https://yoxent.github.io/legal-docs/one-remote/privacy-policy`  
Do **not** use `privacy-policy.html` unless your host requires it.

---

## Before each release

- [ ] New SDK or permission? Update `projects/<slug>/data-inventory.md` + policy + store forms.
- [ ] Bump “Last updated” in `docs/<slug>/` if policy changed materially.
- [ ] Re-run incognito URL check after deploy.
- [ ] If adding Crashlytics/analytics: update policy §“What we do not collect”, inventory, and Data safety **before** shipping.

---

## Disclaimer

Not legal advice. Review with counsel for children’s apps, ads, health/financial data, or heavy collection.
