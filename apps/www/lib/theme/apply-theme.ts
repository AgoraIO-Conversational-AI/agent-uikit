/**
 * Theme Configuration Type
 * Maps to API config fields that can be customized by users
 */
export type RemoteThemeConfig = {
  PRIMARY_COLOR?: string
  PRIMARY_ACTION_BRAND_COLOR?: string
  FONT_COLOR?: string
  PRIMARY_FONT_COLOR?: string
  SECONDARY_FONT_COLOR?: string
  BACKGROUND_COLOR?: string
  ICON_BG_COLOR?: string
  TOOLBAR_COLOR?: string
  INPUT_FIELD_BACKGROUND_COLOR?: string
  INPUT_FIELD_BORDER_COLOR?: string
  CARD_LAYER_1_COLOR?: string
  CARD_LAYER_2_COLOR?: string
  CARD_LAYER_3_COLOR?: string
  CARD_LAYER_4_COLOR?: string
  CARD_LAYER_5_COLOR?: string
  VIDEO_AUDIO_TILE_COLOR?: string
  VIDEO_AUDIO_TILE_OVERLAY_COLOR?: string
  VIDEO_AUDIO_TILE_TEXT_COLOR?: string
  VIDEO_AUDIO_TILE_AVATAR_COLOR?: string
  SEMANTIC_ERROR?: string
  SEMANTIC_SUCCESS?: string
  SEMANTIC_WARNING?: string
  SEMANTIC_NEUTRAL?: string
}

const CSS_VAR_MAP: Record<keyof RemoteThemeConfig, string> = {
  PRIMARY_COLOR: "--primary",
  PRIMARY_ACTION_BRAND_COLOR: "--primary-brand",
  FONT_COLOR: "--foreground",
  PRIMARY_FONT_COLOR: "--font-high",
  SECONDARY_FONT_COLOR: "--secondary-foreground",
  BACKGROUND_COLOR: "--background",
  ICON_BG_COLOR: "--icon-bg",
  TOOLBAR_COLOR: "--toolbar-color",
  INPUT_FIELD_BACKGROUND_COLOR: "--input-field-bg",
  INPUT_FIELD_BORDER_COLOR: "--input-field-border",
  CARD_LAYER_1_COLOR: "--card_layer_1",
  CARD_LAYER_2_COLOR: "--card_layer_2",
  CARD_LAYER_3_COLOR: "--card_layer_3",
  CARD_LAYER_4_COLOR: "--card_layer_4",
  CARD_LAYER_5_COLOR: "--card_layer_5",
  VIDEO_AUDIO_TILE_COLOR: "--video-tile",
  VIDEO_AUDIO_TILE_OVERLAY_COLOR: "--video-tile-overlay",
  VIDEO_AUDIO_TILE_TEXT_COLOR: "--video-tile-text",
  VIDEO_AUDIO_TILE_AVATAR_COLOR: "--video-tile-avatar",
  SEMANTIC_ERROR: "--semantic-error",
  SEMANTIC_SUCCESS: "--semantic-success",
  SEMANTIC_WARNING: "--semantic-warning",
  SEMANTIC_NEUTRAL: "--semantic-neutral",
}

export function applyCustomTheme(config: RemoteThemeConfig): void {
  if (typeof window === "undefined") return

  const root = document.documentElement

  Object.entries(config).forEach(([apiField, colorValue]) => {
    if (colorValue && typeof colorValue === "string") {
      const cssVar = CSS_VAR_MAP[apiField as keyof RemoteThemeConfig]
      if (cssVar) {
        root.style.setProperty(cssVar, colorValue)
      }
    }
  })
}

export function hexToRgbString(hex: string): string | null {
  let v = hex.trim()
  if (!v.startsWith("#")) return null
  v = v.slice(1)

  if (v.length === 3) {
    const r = parseInt(v[0] + v[0], 16)
    const g = parseInt(v[1] + v[1], 16)
    const b = parseInt(v[2] + v[2], 16)
    return `${r}, ${g}, ${b}`
  }

  if (v.length === 6) {
    const r = parseInt(v.slice(0, 2), 16)
    const g = parseInt(v.slice(2, 4), 16)
    const b = parseInt(v.slice(4, 6), 16)
    return `${r}, ${g}, ${b}`
  }

  return null
}

export function getCurrentTheme(): Record<string, string> {
  const root = document.documentElement
  const computed = getComputedStyle(root)
  const theme: Record<string, string> = {}

  Object.values(CSS_VAR_MAP).forEach((cssVar) => {
    theme[cssVar] = computed.getPropertyValue(cssVar).trim()
  })

  return theme
}
