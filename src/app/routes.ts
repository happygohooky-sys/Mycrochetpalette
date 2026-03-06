import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/dashboard";
import { PaletteBuilder } from "./pages/palette-builder";
import { MyPalettes } from "./pages/my-palettes";
import { Admin } from "./pages/admin";
import { StripeGenerator } from "./pages/stripe-generator";
import { GrannySquareGenerator } from "./pages/granny-square-generator";
import { AIColorMatcher } from "./pages/ai-color-matcher";

// Router configuration v2.0
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/palette-builder",
    Component: PaletteBuilder,
  },
  {
    path: "/stripe-generator",
    Component: StripeGenerator,
  },
  {
    path: "/granny-square-generator",
    Component: GrannySquareGenerator,
  },
  {
    path: "/ai-color-matcher",
    Component: AIColorMatcher,
  },
  {
    path: "/my-palettes",
    Component: MyPalettes,
  },
  {
    path: "/admin",
    Component: Admin,
  },
]);