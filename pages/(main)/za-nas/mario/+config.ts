import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "The Barber Shop Sofia | Бръснар Марио",
  description: "Страстта на Марио е креативното оформяне на бради,  перфектно съобразено с чертите и личността на клиента. Запазете час при Марио!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
