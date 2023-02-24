import "styled-components";

import * as tokens from "../styles/tokens/variables";

type ThemeType = typeof tokens

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}