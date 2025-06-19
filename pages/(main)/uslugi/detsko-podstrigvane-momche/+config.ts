import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Детско подстригване за момчета в The Barber Shop Sofia",
  description: "Детско подстригване за момчета в София? The Barber Shop Sofia предлага уютна атмосфера, внимателно отношение и супер визия за малки и големи джентълмени.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
