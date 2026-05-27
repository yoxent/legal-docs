# [APP_NAME] — project metadata

| Field | Value |
|-------|--------|
| **Slug** (URL path, lowercase, hyphens) | `[slug]` |
| **App name** | [APP_NAME] |
| **Package name** | `[com.example.app]` |
| **Developer (legal)** | Vincent Oliver Veran |
| **Country** | Philippines |
| **Contact email** | [email] |
| **Effective date** | [Month DD, YYYY] |
| **Website** | *(optional — omit line in policies if none)* |

## Published URLs (GitHub Pages)

| Document | URL path |
|----------|----------|
| Privacy Policy | `/[slug]/privacy-policy` |
| Terms of Service | `/[slug]/terms-of-service` |
| Data deletion | `/[slug]/account-and-data-deletion` |

## New project checklist

1. Copy `docs/one-remote/` → `docs/[slug]/` and replace all app-specific text.
2. Copy `projects/one-remote/` → `projects/[slug]/`.
3. Add a row to `docs/index.md`.
4. Complete `projects/[slug]/data-inventory.md`.
5. Enable GitHub Pages from `/docs` if not already.
