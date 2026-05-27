# Data inventory — One Remote

**Package:** `com.vorithstudio.smarttvremote`  
**Source reviewed:** `E:\Projects\Flutter\one_remote` (Android manifest, `pubspec.yaml`, compliance docs)  
**Last reviewed:** May 31, 2026

Must match [`docs/one-remote/privacy-policy.md`](../../docs/one-remote/privacy-policy.md) and Play Console **Data safety**.

---

## A. Overview

| Question | Answer |
|----------|--------|
| User accounts? | **No** |
| Developer backend / user profiles? | **No** |
| In-app feedback to webhook? | **Yes** — category, message, platform, app version, UTC timestamp |
| Ads (AdMob)? | **Yes** — free tier; UMP consent; Pro removes ads |
| In-app purchases? | **Yes** — non-consumable **Pro** (`one_remote_pro`) via Play Billing / App Store |
| First-party analytics server? | **No** |
| Target audience | **Not for under 13** (`tagForUnderAgeOfConsent: false` in UMP) |

---

## B. Data types → Play Console (indicative)

Declare accurately in Console; this table is a worksheet, not legal advice.

| Data type | Collected? | Shared? | Purpose | Notes |
|-----------|------------|---------|---------|-------|
| User IDs | No account IDs | — | — | Store handles purchase identity |
| Device or other IDs | **Yes** (ads) | **Yes** (Google/AdMob) | Advertising | AAID / IDFA via AdMob |
| App interactions | **Yes** (ads) | **Yes** (Google) | Advertising, analytics for ads | Ad impressions/clicks |
| Crash logs | **No** (current) | — | — | No Crashlytics in `pubspec.yaml` |
| Diagnostics | **No** (current) | — | — | |
| Other: feedback message | **If user submits** | **Yes** (webhook/Sheet) | Support | Voluntary free text |
| Purchase history | **Yes** (entitlement) | **Yes** (Google/Apple) | App functionality | Pro unlock |
| Personal info in feedback | **Optional** | **Yes** | Support | User must not send secrets |

**Encrypted in transit:** Yes (HTTPS for feedback; TLS for store/ads).

**Users can request deletion:** Yes — see deletion URL.

---

## C. Android permissions (`android/app/src/main/AndroidManifest.xml`)

| Permission | Declared | Policy § |
|------------|----------|----------|
| `INTERNET` | Yes | 2.4 |
| `com.android.vending.BILLING` | Yes | 2.3 |
| `ACCESS_NETWORK_STATE` | Yes | 2.4 |
| `ACCESS_WIFI_STATE` | Yes | 2.4 |
| `CHANGE_WIFI_MULTICAST_STATE` | Yes | 2.4 |

**Runtime:** Local network prompts may appear per OS version (pairing UI references Wi‑Fi/local network).

**Merged manifests:** Release build may add AdMob-related entries (e.g. `AD_ID`) from `google_mobile_ads` — verify merged manifest before final Data safety submission.

---

## D. SDK / dependency inventory (`pubspec.yaml`)

| Package | Purpose | Declare in Data safety |
|---------|---------|------------------------|
| `google_mobile_ads` | Banner + interstitial ads, UMP consent | **Yes** |
| `in_app_purchase` | Pro non-consumable | **Yes** (via store) |
| `app_tracking_transparency` | iOS ATT before ads | iOS only |
| `http` | Feedback webhook POST | If feedback enabled in build |
| `shared_preferences` | Local TV/layout/pairing storage | On-device only — not “collected” off device |
| `url_launcher` | Open privacy policy URL | No data collection |
| `package_info_plus` | App version in feedback | Bundled in feedback payload |
| `flutter_multicast_lock` | SSDP/mDNS discovery | On-device network only |
| `mqtt_client`, `multicast_dns`, etc. | TV control / discovery | Local network only |

**Not present:** Firebase, Unity Analytics, separate crash SDK.

---

## E. Published URLs (GitHub Pages — user **yoxent**)

| Document | URL |
|----------|-----|
| Privacy Policy | https://yoxent.github.io/legal-docs/one-remote/privacy-policy |
| Data deletion | https://yoxent.github.io/legal-docs/one-remote/account-and-data-deletion |
| Terms of Service | https://yoxent.github.io/legal-docs/one-remote/terms-of-service |

**Flutter release define:**

```text
--dart-define=PRIVACY_POLICY_URL=https://yoxent.github.io/legal-docs/one-remote/privacy-policy
```

(`lib/app/compliance/app_legal_urls.dart`)

---

## F. In-app compliance checklist

| Item | Status |
|------|--------|
| `PRIVACY_POLICY_URL` set on release builds | [ ] |
| Privacy link in Settings | [x] scaffold |
| UMP before ads | [x] `AdConsentCoordinator` |
| Ad privacy options in Settings | [x] when UMP requires |
| Data safety form matches policy | [ ] before submit |
| Production AdMob app ID (not test ID in manifest) | [ ] release blocker per project docs |
