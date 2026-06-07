---
title: Privacy Policy — One Remote
---

# Privacy Policy

**Last updated:** June 4, 2026  
**App:** One Remote (`com.vorithstudio.smarttvremote`)  
**Developer / data controller:** Vincent Oliver Veran (Philippines), doing business as **Vorith Studio**  
**Contact:** vorithstudio@gmail.com

This Privacy Policy describes how **One Remote** (“the App”, “we”, “us”) accesses, collects, uses, stores, and shares information when you install or use the App on **Android** or **iOS**. It is intended to meet [Google Play’s User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en) and to align with the disclosures you make in Play Console’s **Data safety** section (and equivalent store disclosures elsewhere).

If you do not agree with this policy, do not use the App.

---

## 1. Summary

| Topic | Our practice |
|-------|----------------|
| Account required | No — the App does not offer user accounts |
| Data on our servers | We do not operate a user-profile backend; optional **in-app feedback** is sent to a service we configure (see Section 2.1) |
| On-device data | Saved TVs, pairing secrets, layouts, and settings stay on your device only — not uploaded for remote control |
| Ads | Free tier may show **Google AdMob** ads (banner/interstitial) after consent where required |
| Purchases | Optional **Pro** upgrade via Google Play / App Store removes ads and unlocks features |
| Children | Not directed to children under 13 |
| Not collected | No accounts, GPS/location, contacts, or push notifications. The App uses **Firebase Analytics (events only)** and **Firebase Crashlytics** to help us understand feature usage and improve stability. |
| Delete your data | [Account & data deletion](account-and-data-deletion.md) |

---

## 2. Information we collect

### What we do not collect (current version)

To avoid doubt, we do **not** collect or operate:

- User accounts, usernames, or passwords on our servers  
- Precise **GPS / location** (the App uses local network and Wi‑Fi for TV control, not location tracking for ads or analytics)  
- Contacts, photos, microphone, or calendar data  
- **Push notifications** (we do not send marketing or alert pushes)  
- **Marketing email lists** from in-app use (we only email if you contact us or we reply to support)  
- TV viewing history or what you watch (on our servers)  
- A first-party analytics or crash-reporting backend that we host ourselves

If we add collection later, we will update this policy and store disclosures before the change ships.

### 2.1 Information you provide

**In-app feedback (optional):** If you use **Settings → Feedback**, you may send a category, free-text message, and we automatically include **platform** (Android/iOS), **app version**, and **submission time**. We do **not** attach diagnostic logs or crash dumps automatically. This is sent over HTTPS to a webhook we operate (for example a Google Apps Script endpoint backing a spreadsheet). Do not include passwords, payment details, or other sensitive information in feedback messages.

**Email support:** If you email **vorithstudio@gmail.com**, we receive your email address and message content.

The App does not require registration or a username.

### 2.2 Local TV pairing and connection data

**One Remote** stores information on your device so it can reconnect to TVs you have paired, **without sending that pairing data to our servers**.

#### What we store locally (on your phone or tablet only)

| TV brand / type | What is stored | Where |
|-----------------|----------------|--------|
| **Samsung TVs** | A remote-control authorization token provided by your TV during pairing | Encrypted device storage |
| **LG TVs** | A client key provided by your TV during pairing | App storage |
| **Hisense TVs** | A flag that you completed TV PIN pairing for a given TV (Hisense does not provide a long-lived token) | Encrypted device storage |
| **Android TV** | Cryptographic pairing material (certificates/keys) needed for the Android TV remote protocol | App private storage |
| **Saved TVs** | TV name, brand, network address (for example IP), layout preferences, and which TV was last used | On-device storage |

We also store **custom remote layouts** and general **app preferences** on your device.

#### Why we store it

To let you use the remote after closing the App, switch between saved TVs, and reconnect on your home Wi‑Fi without pairing again every time.

#### When we delete it

- **Per TV:** When you remove a TV in the App (unpair / delete saved device), we clear that TV’s pairing data from the device.
- **All data:** Uninstalling the App removes all locally stored data.

#### What we do not do

We do **not** upload Samsung, LG, Hisense, or Android TV pairing secrets to our servers for remote control. Control commands are sent **directly** between your device and your TV on your local network, except where a separate service applies (for example analytics or ads — see Sections 2.3 and 5).

We do **not** collect what you watch on TV or viewing history on our servers.

#### Security (pairing data)

Sensitive pairing values use platform-protected storage where supported (for example encrypted storage on Android). Connection to TVs may use encrypted channels (for example WSS/TLS) depending on TV brand and firmware.

#### Your choices

You can remove a paired TV at any time in the App. Without pairing, the App cannot control that TV. You can also clear all on-device data via system app settings or by uninstalling; see [Account & data deletion](account-and-data-deletion.md).

### 2.3 Information collected automatically

**Local network control:** The App discovers and controls TVs on the same Wi‑Fi or local network (SSDP, mDNS, and related protocols). Commands go between your phone and your devices; we do not receive the content of those commands on our servers.

**Advertising (free tier):** If you have not purchased **Pro**, the App may use **Google Mobile Ads (AdMob)**. Google and its partners may collect or receive device identifiers (such as the **Android Advertising ID** or **IDFA** on iOS where applicable), IP address, ad interaction data, and similar technical data to serve and measure ads. We use Google’s **User Messaging Platform (UMP)** on Android (and **App Tracking Transparency** on iOS where applicable) to gather consent before personalized ads where required.

**Purchases:** **Google Play Billing** (Android) and **Apple In-App Purchase** (iOS) process payments. We receive purchase/entitlement signals (for example that **Pro** is active) to unlock features. We do not receive your full card number. **Refunds** are handled only by Google or Apple; see [Terms of Service — Refunds](terms-of-service.md#refunds).

**Google Play / App Store:** Store platforms may collect information per their own policies when you install or update the App.

**Analytics & crash reporting (Firebase):** The App uses **Firebase Analytics** and **Firebase Crashlytics** (Google) to help us understand feature usage and improve stability:

- **Firebase Analytics (events only):** We log app events about feature usage (for example pairing and purchase/restore flows). Event properties may include **TV brand** (for pairing success), **purchase/entitlement status**, and an **approximate country/region derived from your device locale** (not GPS). We do **not** enable automatic screen-view tracking and we do not log `screen_view` events.
- **Firebase Crashlytics:** We collect crash reports and related diagnostic information (such as stack traces and device/app metadata) to diagnose crashes and improve reliability.

We do not include your TV’s local network identifiers (for example IP address, Wi‑Fi SSID, or MAC address) in analytics events.

We do not run our own first-party analytics server; these services are provided by Google/Firebase.

### 2.4 Android permissions

The App declares these permissions in its Android manifest:

| Permission | Purpose |
|------------|---------|
| `INTERNET` | Local network TV control, ads, feedback webhook, store services |
| `ACCESS_NETWORK_STATE` | Check network connectivity |
| `ACCESS_WIFI_STATE` | Wi‑Fi / local network discovery and control |
| `CHANGE_WIFI_MULTICAST_STATE` | SSDP/mDNS device discovery (with multicast lock) |
| `com.android.vending.BILLING` | Google Play **Pro** in-app purchase |

**SDK-added permissions:** Release builds that include **Google Mobile Ads** may also declare `com.google.android.gms.permission.AD_ID` so ads can use the advertising ID where allowed. Verify your merged release manifest before submitting Play **Data safety**.

Your device may also prompt for **local network** or related access on some Android versions so discovery can work; allow these when asked if you want to find TVs on your network.

### 2.5 iOS permissions and prompts

| Permission / prompt | Purpose |
|---------------------|---------|
| **Local network** | Discover and control TVs on your Wi‑Fi (system dialog when required) |
| **App Tracking Transparency (ATT)** | Optional permission before personalized ads on the free tier |
| **In-App Purchase** | **Pro** purchase and restore |
| **Internet** | Ads, feedback, store services, and network control as on Android |

Behavior matches the Android description in Sections 2.2–2.3 where applicable.

---

## 3. How we use information

We use information to:

- Provide remote-control, pairing, discovery, and layout features  
- Store your on-device pairings and settings  
- Show ads on the free tier and measure ad performance (via AdMob)  
- Honor **Pro** entitlements and restore purchases  
- Submit and review voluntary in-app feedback  
- Respond to support requests  
- Comply with law and enforce our [Terms of Service](terms-of-service.md)  

We do not sell your personal information.

**Automated decisions:** We do not use your information for automated decision-making that produces legal or similarly significant effects about you.

**Legal bases (EEA/UK):** Where GDPR applies, we rely on:

| Processing | Typical legal basis |
|------------|---------------------|
| Providing the App (pairing, control, **Pro**) | **Contract** |
| Voluntary in-app feedback and email support | **Legitimate interests** (improve and support the App) or **consent** where required |
| Ads on the free tier | **Consent** where required (UMP/ATT); otherwise non-personalized ads as configured |
| Legal compliance | **Legal obligation** |

You may withdraw ad consent through in-app **Ad privacy settings** (when shown) or device settings. You may object to other legitimate-interest processing as described in Section 8.

---

## 4. How we share information

We do not sell personal information. We may share information with:

### 4.1 Service providers

| Provider | Purpose | Privacy information |
|----------|---------|---------------------|
| **Google** (Play, Play Billing, AdMob, UMP) | Distribution, billing, ads, consent | https://policies.google.com/privacy |
| **Google Firebase** (Analytics, Crashlytics) | App analytics (events only), crash reporting | https://policies.google.com/privacy |
| **Apple** (App Store, In-App Purchase) | iOS distribution and billing | https://www.apple.com/legal/privacy/ |
| **Feedback webhook host** (e.g. Google Apps Script / Google Sheets) | Store voluntary feedback you submit | https://policies.google.com/privacy |

Ad partners participating through AdMob are disclosed in Google’s ad technology provider list and your consent choices.

### 4.2 Legal and safety

We may disclose information if required by law or to protect rights, safety, and security.

### 4.3 Business transfers

If we are involved in a merger, acquisition, or asset sale, information may be transferred subject to this policy.

---

## 5. Advertising and your choices

- **Pro:** Purchasing **Pro** removes banner and interstitial ads.  
- **Consent:** In the EU, UK, California, and other regions where required, we show Google’s consent flow before personalized ads.  
- **Ad privacy settings:** When required by UMP, **Settings** includes **Ad privacy settings** to review or change your choices.  
- **Device controls:** You can reset the advertising ID or limit ad tracking in Android or iOS system settings.  
- **California (CPRA) — “sale” and “share”:** We do not **sell** personal information as defined in the CCPA/CPRA. Ad partners may **receive** identifiers for cross-context behavioral advertising when you consent (or under applicable opt-out rules). Manage choices via **Ad privacy settings** (when shown), device ad settings, and [Google’s ad settings](https://adssettings.google.com/).

---

## 6. Data retention

| Data type | Retention |
|-----------|-----------|
| On-device pairings and settings | Until you remove a saved TV in the App, clear app data, or uninstall |
| In-app feedback records | Up to 2 years in our feedback store, unless you ask us to delete sooner |
| Support emails | Up to 2 years |
| Purchase entitlements | Processed by Apple/Google; we rely on store records to restore **Pro** |
| Firebase Analytics (events only) & Crashlytics | Retained according to our Google/Firebase settings and Google’s policies |

---

## 7. Security

We use reasonable measures including HTTPS for feedback and store-related traffic. For TV pairing data, we use platform-protected and encrypted on-device storage where supported and encrypted local channels where the TV protocol allows (see Section 2.2). No method of transmission or storage is 100% secure.

If we learn of a security incident that affects your personal information and the law requires notification, we will take steps to notify you and regulators as applicable.

---

## 8. Your rights and choices

Depending on where you live, you may have rights to access, correct, delete, restrict, or object to processing, and to portability or withdrawal of consent.

**Philippines (Data Privacy Act):** Contact us to exercise applicable rights.

**EEA/UK:** You may complain to your supervisory authority.

**California (CCPA/CPRA):** See Section 5 for sale/share and opt-out choices.

**Other US states:** Where state privacy laws grant rights (for example Colorado, Virginia, Connecticut), contact us at the email below. We will honor applicable rights for verified requests.

**Data portability:** You may request a copy of personal information we hold from feedback or support (we do not host on-device TV data). See also [Account & data deletion](account-and-data-deletion.md).

Email **vorithstudio@gmail.com** with subject `Privacy request — One Remote`. We will respond within applicable legal timeframes (for example within **30 days** where GDPR or similar laws apply).

---

## 9. Children’s privacy

The App is **not directed to children under 13**. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe a child has provided personal information to us (for example via feedback or support email), contact **vorithstudio@gmail.com** to request deletion.

---

## 10. International transfers

We are based in the **Philippines**. Service providers (Google, Apple, etc.) may process data in other countries with appropriate safeguards where required.

---

## 11. Third-party TV platforms

The App communicates with TVs and devices using manufacturer protocols (for example Samsung, LG, Hisense, and Android TV). **We are not affiliated with or endorsed by those manufacturers or Google.** Their brand names are trademarks of their respective owners. Those devices and manufacturers have their own privacy practices, which we do not control.

---

## 12. Changes to this policy

We may update this policy and change the “Last updated” date. Material changes may be noted in the App or store listing. Continued use after changes means you accept the updated policy.

---

## 13. Contact us

**Vincent Oliver Veran** (Philippines) — doing business as **Vorith Studio**  
Email: **vorithstudio@gmail.com**  
Philippines

For data deletion, see [Account & data deletion](account-and-data-deletion.md).
