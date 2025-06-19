import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Бръснене на глава с бръснач в The Barber Shop Sofia",
  description: "Бръснене на глава с бръснач в The Barber Shop Sofia – доверете се на опитните ни бръснари за отличен резултат.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
