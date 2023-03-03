// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      gray1: string;
      gray2: string;
      gray3: string;
    };
  }
}
