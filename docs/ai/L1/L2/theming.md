# Theming

> **When to Read This:** Use this document when changing runtime theme variables, `RemoteThemeConfig`, or how consumers customize styling.

## Main Files

| File | Role |
| --- | --- |
| `packages/uikit/src/lib/theme/apply-theme.ts` | `RemoteThemeConfig`, `CSS_VAR_MAP`, `applyCustomTheme()`, `getCurrentTheme()`, `hexToRgbString()` |
| `apps/www/lib/theme/apply-theme.ts` | demo-app copy of theme helpers — must stay aligned |

## Two Theming Paths

### Build-Time Styling

- Consumers customize via Tailwind config and `className`.
- `cn()` merges consumer classes with component defaults using `clsx` + `tailwind-merge`.
- This is the right path for static or app-specific styling overrides.

### Runtime Theming

- `applyCustomTheme()` writes CSS custom properties to `document.documentElement`.
- The input contract is `RemoteThemeConfig`.
- Missing fields leave existing defaults unchanged.

## Runtime Theme Mapping

Correct field-to-variable mapping from `CSS_VAR_MAP` in `apply-theme.ts`:

| `RemoteThemeConfig` Field | CSS Variable |
| --- | --- |
| `PRIMARY_COLOR` | `--primary` |
| `PRIMARY_ACTION_BRAND_COLOR` | `--primary-brand` |
| `FONT_COLOR` | `--foreground` |
| `PRIMARY_FONT_COLOR` | `--font-high` |
| `SECONDARY_FONT_COLOR` | `--secondary-foreground` |
| `BACKGROUND_COLOR` | `--background` |
| `ICON_BG_COLOR` | `--icon-bg` |
| `TOOLBAR_COLOR` | `--toolbar-color` |
| `INPUT_FIELD_BACKGROUND_COLOR` | `--input-field-bg` |
| `INPUT_FIELD_BORDER_COLOR` | `--input-field-border` |
| `CARD_LAYER_1_COLOR` | `--card_layer_1` |
| `CARD_LAYER_2_COLOR` | `--card_layer_2` |
| `CARD_LAYER_3_COLOR` | `--card_layer_3` |
| `CARD_LAYER_4_COLOR` | `--card_layer_4` |
| `CARD_LAYER_5_COLOR` | `--card_layer_5` |
| `VIDEO_AUDIO_TILE_COLOR` | `--video-tile` |
| `VIDEO_AUDIO_TILE_OVERLAY_COLOR` | `--video-tile-overlay` |
| `VIDEO_AUDIO_TILE_TEXT_COLOR` | `--video-tile-text` |
| `VIDEO_AUDIO_TILE_AVATAR_COLOR` | `--video-tile-avatar` |
| `SEMANTIC_ERROR` | `--semantic-error` |
| `SEMANTIC_SUCCESS` | `--semantic-success` |
| `SEMANTIC_WARNING` | `--semantic-warning` |
| `SEMANTIC_NEUTRAL` | `--semantic-neutral` |

## Utility Functions

| Function | Purpose |
| --- | --- |
| `applyCustomTheme(config)` | sets provided CSS custom properties on `:root` |
| `getCurrentTheme()` | reads current computed values of all mapped variables |
| `hexToRgbString(hex)` | converts `#RGB` or `#RRGGBB` into `"r, g, b"` string |

## Important Repo Detail

- Theme helper logic exists in both:
  - `packages/uikit/src/lib/theme/apply-theme.ts`
  - `apps/www/lib/theme/apply-theme.ts`
- Keep those copies aligned when the theme contract changes.

## Consumer Styling Expectations

- Consumers still need to include the built package in Tailwind content scanning.
- Runtime CSS variables and Tailwind theme config solve different problems and coexist.
- `className` overrides remain the per-instance escape hatch.

## High-Risk Changes

- renaming CSS variables without auditing component usage
- updating the library mapping but forgetting the demo-app copy
- broadening theme input to arbitrary style injection

## Related Files

- [04_conventions.md](../04_conventions.md)
- [06_interfaces.md](../06_interfaces.md)
- [07_gotchas.md](../07_gotchas.md)
- [08_security.md](../08_security.md)
