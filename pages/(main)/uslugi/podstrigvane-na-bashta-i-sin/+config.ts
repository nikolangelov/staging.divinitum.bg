import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Подстригване на баща и син в The Barber Shop Sofia",
  description: "Подстригване на баща и син в The Barber Shop Sofia – качествена услуга и незабравимо преживяване за двама. Възползвайте се!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
