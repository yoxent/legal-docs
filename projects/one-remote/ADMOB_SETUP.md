# Production AdMob IDs — One Remote

Your app uses **test** IDs today. Production needs a real **AdMob app ID** (in native config) and **ad unit IDs** (in Flutter `dart-define`s).

Official guide: [AdMob — Set up an app](https://support.google.com/admob/answer/9989980?hl=en)

---

## 1. Create an AdMob account

1. Go to [https://admob.google.com](https://admob.google.com).
2. Sign in with the same Google account you use for Play Console (recommended).
3. Accept terms and complete account setup (country, payments if you want paid ads later).

---

## 2. Register the app in AdMob

Do this **once per platform** (Android and iOS are separate apps in AdMob).

### Android

1. AdMob → **Apps** → **Add app**.
2. **Is the app listed on a supported app store?** → Yes (after you have a Play listing) or No for pre-register — follow prompts.
3. Platform: **Android**.
4. App name: **One Remote**.
5. Package name: **`com.vorithstudio.smarttvremote`** (must match Play exactly).
6. Create app.

AdMob shows an **App ID** like:

`ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY`

That is **not** an ad unit — it goes in `AndroidManifest.xml`.

### iOS (when you ship iOS)

Repeat with bundle ID from Xcode / `Info.plist` (your iOS bundle id).

---

## 3. Create ad units

For each app in AdMob:

1. Open the app → **Ad units** → **Add ad unit**.
2. Create:
   - **Banner** (e.g. name `One Remote Android Banner`) → copy **Ad unit ID**  
     `ca-app-pub-XXXXXXXXXXXXXXXX/ZZZZZZZZZZ`
   - **Interstitial** (e.g. `One Remote Android Interstitial`) → copy **Ad unit ID**

Repeat for iOS banner + interstitial if needed.

---

## 4. Put IDs in your Flutter project

### 4.1 Android — App ID in manifest

File: `android/app/src/main/AndroidManifest.xml`

Replace the **test** value:

```xml
<meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="ca-app-pub-3940256099942544~3347511713"/>
```

With your **production App ID** (`~` in the middle):

```xml
android:value="ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY"
```

### 4.2 iOS — App ID in Info.plist

File: `ios/Runner/Info.plist`

Replace test `GADApplicationIdentifier` with your iOS **App ID** from AdMob.

Also replace the placeholder `SKAdNetworkItems` with the [full list from Google](https://developers.google.com/admob/ios/quick-start#update_your_infoplist) before App Store release.

### 4.3 Ad unit IDs — release build flags

`lib/app/ads/ad_config.dart` reads production units from `--dart-define` when `AppEnvironment.production`.

Example **release** command (adjust paths/signing as you already do):

```bash
flutter build appbundle --release \
  --dart-define=APP_ENV=production \
  --dart-define=PRIVACY_POLICY_URL=https://yoxent.github.io/legal-docs/one-remote/privacy-policy \
  --dart-define=ADMOB_BANNER_ANDROID=ca-app-pub-XXXXXXXXXXXXXXXX/1111111111 \
  --dart-define=ADMOB_INTERSTITIAL_ANDROID=ca-app-pub-XXXXXXXXXXXXXXXX/2222222222
```

iOS add:

```text
--dart-define=ADMOB_BANNER_IOS=ca-app-pub-...
--dart-define=ADMOB_INTERSTITIAL_IOS=ca-app-pub-...
```

**Never commit** real IDs to git if you prefer secrets in CI only — pass defines in your build pipeline instead.

---

## 5. Link AdMob to Play Console

1. Play Console → **Monetize** → **AdMob** (or **Setup** → **Link to AdMob**).
2. Link the same Google account and confirm **One Remote** / package name.

This helps approval and reporting; ads can still work with manifest + unit IDs if linking is delayed.

---

## 6. Before you turn on real ads

- [ ] Replace **test** `APPLICATION_ID` in manifest / Info.plist.
- [ ] Use **production** ad unit defines on release builds (not test `ca-app-pub-3940256099942544/...` units).
- [ ] UMP consent flow tested on a real device (EU/California).
- [ ] Play **Data safety** declares ads + device/ad IDs (see `data-inventory.md`).
- [ ] Privacy policy URL is **public** (see `PLAY_CONSOLE_AND_HOSTING.md`).

---

## Test vs production (reference)

| ID type | Test (Google sample) | Your production |
|---------|----------------------|-----------------|
| Android App ID | `ca-app-pub-3940256099942544~3347511713` | From AdMob → App settings |
| Android banner unit | `.../6300978111` | Your banner ad unit |
| Android interstitial | `.../1033173712` | Your interstitial ad unit |

Use **test** IDs only in debug/internal builds; using test IDs in a published app violates AdMob policy.
