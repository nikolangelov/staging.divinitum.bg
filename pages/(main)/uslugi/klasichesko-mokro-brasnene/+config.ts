import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Класическо мокро бръснене в The Barber Shop Sofia",
  description: "Традиционно мокро бръснене, изпълнено с професионализъм и прецизност, в The Barber Shop София.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
