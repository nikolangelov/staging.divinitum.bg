import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "The Barber Shop Sofia | Бръснар Благовест",
  description: "Благовест е специалист в създаването на традиционни и модерни мъжки прически според желанията на всеки клиент. Запазете час при Благовест!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
