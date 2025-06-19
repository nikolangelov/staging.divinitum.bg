import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Детайлно оформяне на брада в The Barber Shop Sofia",
  description: "Завършете своя стил с прецизно оформяне на брада от The Barber Shop Sofia – експерти в мъжката визия.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
