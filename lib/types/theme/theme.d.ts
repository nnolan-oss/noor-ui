import {TypographyConfig} from "../theme/typography";
import {SizeConfig} from "../theme/size";
import {PaletteConfig} from "../theme/palette";
import {ZIndexConfig} from "../theme/zIndex";
import {ShadowsConfig} from "../theme/shadows";
import {SpacingConfig} from "../theme/spacing";
import {ButtonConfig} from "../theme/components/button";

export interface ThemeConfig {
  palette?: PaletteConfig
  typography?: TypographyConfig,
  size?: SizeConfig,
  components?: {
    Button?: ButtonConfig
  },
  zIndex?: ZIndexConfig
  spacing?: SpacingConfig,
  direction?: "ltr" | "rtl",
  shape?: {
    className: string
  },
  shadows?: ShadowsConfig
}
