# One Remote — project metadata

| Field | Value |
|-------|--------|
| **Slug** (URL path) | `one-remote` |
| **App name** | One Remote |
| **Package name** | `com.vorithstudio.smarttvremote` |
| **Developer (legal)** | Vincent Oliver Veran |
| **Country** | Philippines |
| **Contact email** | vorithstudio@gmail.com |
| **Effective date** | May 31, 2026 |
| **Website** | *(none)* |
| **Flutter project** | `E:\Projects\Flutter\one_remote` |
| **GitHub user** | `yoxent` |
| **Play Console developer name** | **Vincent Oliver Veran** (must match privacy policy) |
| **Repo visibility** | Private — see [PLAY_CONSOLE_AND_HOSTING.md](PLAY_CONSOLE_AND_HOSTING.md) |

## Published URLs (GitHub Pages)

Base: **https://yoxent.github.io/legal-docs/**

| Document | URL |
|----------|-----|
| Privacy Policy | https://yoxent.github.io/legal-docs/one-remote/privacy-policy |
| Terms of Service | https://yoxent.github.io/legal-docs/one-remote/terms-of-service |
| Data deletion | https://yoxent.github.io/legal-docs/one-remote/account-and-data-deletion |

## Flutter app wiring

Set on **release** builds (`AppLegalUrls`):

```bash
--dart-define=PRIVACY_POLICY_URL=https://yoxent.github.io/legal-docs/one-remote/privacy-policy
```

Optional: document Terms URL in store listings only (no `AppLegalUrls` terms field in app today).

## Product facts (from codebase)

- **Ads:** Google AdMob (`google_mobile_ads`), UMP + iOS ATT; test app ID in manifest until production swap  
- **IAP:** `one_remote_pro` non-consumable Pro via `in_app_purchase`  
- **Feedback:** HTTPS webhook (`FEEDBACK_WEBHOOK_URL`) — category, message, platform, app version, timestamp  
- **No** user accounts or cloud save backend  

See [`data-inventory.md`](data-inventory.md) for Play Data safety mapping.

## Related guides

- [Play Console developer name & private repo hosting](PLAY_CONSOLE_AND_HOSTING.md)
- [Production AdMob setup](ADMOB_SETUP.md)
