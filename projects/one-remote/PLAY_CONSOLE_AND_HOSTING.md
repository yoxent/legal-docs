# Play Console & hosting (One Remote)

## Play Store developer name

Google requires the **developer name on your store listing** to match your privacy policy (or the **app name** must appear in the policy). One Remote’s policy names:

**Vincent Oliver Veran** (Philippines)

### Set it in Play Console

1. Open [Google Play Console](https://play.google.com/console).
2. Go to **Settings** (gear) → **Developer account** → **Account details**.
3. Set **Developer name** to: **`Vincent Oliver Veran`**
4. Save.

For the app itself:

5. **One Remote** → **Store presence** → **Main store listing** — app name stays **One Remote**; developer name comes from account details above.

### If you want “Vorith Studio” on the store

You can use a **trade name** only if it still matches the policy. Either:

- Add to the top of the privacy policy: *“One Remote is offered by Vorith Studio (Vincent Oliver Veran, Philippines)”*, **or**
- Keep developer name **Vincent Oliver Veran** (simplest; matches current policy as-is).

Do **not** use a random studio name on Play that is nowhere in the policy.

---

## Private `legal-docs` repo vs public policy URL

Your **Flutter app** (`one_remote`) can stay **private** — that is where your real source code lives.

This **`legal-docs`** repo only has markdown policies. Google Play still needs a URL anyone can open **without logging in**.

### GitHub Pages + private repo

| GitHub plan | Pages from private repo |
|-------------|-------------------------|
| **Free** | Pages is **not** publicly available from a private repo (or only to you). |
| **Pro** | You can publish Pages from a private repo; the **site URL is still public**. |

**Check:** open https://yoxent.github.io/legal-docs/one-remote/privacy-policy in an **incognito** window while logged out of GitHub. If you get 404, Play cannot use that URL.

### Options if the URL is not public

| Option | Keeps repo private? | Effort |
|--------|---------------------|--------|
| **A. Make `legal-docs` public** | Repo public; **no app code** in it | Low — recommended |
| **B. GitHub Pro** on `legal-docs` | Repo private; Pages public | Paid |
| **C. Second public repo** e.g. `yoxent/one-remote-legal` | Main repo private; only copy `docs/one-remote/` | Medium |
| **D. Cloudflare Pages / Netlify** | Connect repo or upload `docs/` | Medium |
| **E. Notion / Google Sites** | Paste policy; get public link | Low |

**Stealing work:** A public privacy policy does not expose your Flutter project. Competitors only see legal text you already show to every user. Your implementation stays in the private `one_remote` repo.

After hosting works, use the **public** URL in Play Console and in:

`--dart-define=PRIVACY_POLICY_URL=<that-url>`
