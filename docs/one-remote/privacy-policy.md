---
title: Privacy Policy — One Remote
---

# Privacy Policy

**Last updated:** May 31, 2026  
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
| On-device data | Saved TVs, pairing keys, layouts, and settings stay on your device |
| Ads | Free tier may show **Google AdMob** ads (banner/interstitial) after consent where required |
| Purchases | Optional **Pro** upgrade via Google Play / App Store removes ads and unlocks features |
| Children | Not directed to children under 13 |
| Delete your data | [Account & data deletion](account-and-data-deletion.md) |

---

## 2. Information we collect

### 2.1 Information you provide

**In-app feedback (optional):** If you use **Settings → Feedback**, you may send a category, free-text message, and we automatically include **platform** (Android/iOS), **app version**, and **submission time**. This is sent over HTTPS to a webhook we operate (for example a Google Apps Script endpoint backing a spreadsheet). Do not include passwords, payment details, or other sensitive information in feedback messages.

**Email support:** If you email **vorithstudio@gmail.com**, we receive your email address and message content.

The App does not require registration or a username.

### 2.2 Information stored on your device

To work as a remote control, the App stores information **locally** using on-device storage (for example `SharedPreferences`), such as:

- Saved TV / device names, addresses, and connection details for your **local network**
- Custom remote layouts and app preferences
- Brand-specific pairing data (for example LG client keys, Samsung trust material) needed to reconnect to your TVs

This data is not uploaded to our servers for cloud backup in the current version. Delete it by clearing app storage or uninstalling the App.

We do **not** collect what you watch on TV or viewing history on our servers.

### 2.3 Information collected automatically

**Local network control:** The App discovers and controls TVs on the same Wi‑Fi or local network (SSDP, mDNS, and related protocols). Commands go between your phone and your devices; we do not receive the content of those commands on our servers.

**Advertising (free tier):** If you have not purchased **Pro**, the App may use **Google Mobile Ads (AdMob)**. Google and its partners may collect or receive device identifiers (such as the **Android Advertising ID** or **IDFA** on iOS where applicable), IP address, ad interaction data, and similar technical data to serve and measure ads. We use Google’s **User Messaging Platform (UMP)** on Android (and **App Tracking Transparency** on iOS where applicable) to gather consent before personalized ads where required.

**Purchases:** **Google Play Billing** (Android) and **Apple In-App Purchase** (iOS) process payments. We receive purchase/entitlement signals (for example that **Pro** is active) to unlock features. We do not receive your full card number.

**Google Play / App Store:** Store platforms may collect information per their own policies when you install or update the App.

We do not run our own first-party analytics server in the current version.

### 2.4 Android permissions

The App declares these permissions in its Android manifest:

| Permission | Purpose |
|------------|---------|
| `INTERNET` | Local network TV control, ads, feedback webhook, store services |
| `ACCESS_NETWORK_STATE` | Check network connectivity |
| `ACCESS_WIFI_STATE` | Wi‑Fi / local network discovery and control |
| `CHANGE_WIFI_MULTICAST_STATE` | SSDP/mDNS device discovery (with multicast lock) |
| `com.android.vending.BILLING` | Google Play **Pro** in-app purchase |

Your device may also prompt for **local network** or related access on some Android versions so discovery can work; allow these when asked if you want to find TVs on your network.

### 2.5 iOS note

On iOS, local network, tracking (ATT), and store permissions may be requested by the system or plugins when needed for discovery, ads, or purchases. Behavior is equivalent in purpose to the Android description above.

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

**Legal bases (EEA/UK):** Where GDPR applies, we rely on **contract** (to provide the App), **legitimate interests** (security, support, non-ad functionality), and **consent** where required for ads (via UMP/ATT). You may withdraw ad consent through in-app **Ad privacy settings** (when shown) or device settings. You may object to other legitimate-interest processing as described in Section 8.

---

## 4. How we share information

We do not sell personal information. We may share information with:

### 4.1 Service providers

| Provider | Purpose | Privacy information |
|----------|---------|---------------------|
| **Google** (Play, Play Billing, AdMob, UMP) | Distribution, billing, ads, consent | https://policies.google.com/privacy |
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

---

## 6. Data retention

| Data type | Retention |
|-----------|-----------|
| On-device pairings and settings | Until you clear app data or uninstall |
| In-app feedback records | Up to 2 years in our feedback store, unless you ask us to delete sooner |
| Support emails | Up to 2 years |
| Purchase entitlements | Processed by Apple/Google; we rely on store records to restore **Pro** |

---

## 7. Security

We use reasonable measures including HTTPS for feedback and store-related traffic, and we rely on platform security for on-device storage. No method of transmission or storage is 100% secure.

---

## 8. Your rights and choices

Depending on where you live, you may have rights to access, correct, delete, restrict, or object to processing, and to portability or withdrawal of consent.

**Philippines (Data Privacy Act):** Contact us to exercise applicable rights.

**EEA/UK:** You may complain to your supervisory authority.

**California (CCPA/CPRA):** We do not sell personal information as defined in CCPA. Ad personalization uses consent/opt-out mechanisms described in Section 5.

Email **vorithstudio@gmail.com** with subject `Privacy request — One Remote`. We will respond within applicable legal timeframes.

---

## 9. Children’s privacy

The App is **not directed to children under 13**. We do not knowingly collect personal information from children under 13. Contact **vorithstudio@gmail.com** to request deletion if you believe a child provided information to us.

---

## 10. International transfers

We are based in the **Philippines**. Service providers (Google, Apple, etc.) may process data in other countries with appropriate safeguards where required.

---

## 11. Third-party TV platforms

The App communicates with TVs and devices using manufacturer protocols. Those devices and manufacturers have their own privacy practices, which we do not control.

---

## 12. Changes to this policy

We may update this policy and change the “Last updated” date. Material changes may be noted in the App or store listing. Continued use after changes means you accept the updated policy.

---

## 13. Contact us

**Vincent Oliver Veran** (Philippines) — doing business as **Vorith Studio**  
Email: **vorithstudio@gmail.com**  
Philippines

For data deletion, see [Account & data deletion](account-and-data-deletion.md).
