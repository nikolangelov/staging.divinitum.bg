import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "The Barber Shop Sofia | Бръснар Денис",
  description: "В ръцете на Денис всяка подстрижка се превръща в преживяване, което носи увереност и усмивка. Запазете час при Денис!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
