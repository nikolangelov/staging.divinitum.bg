import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Професионално тониране на мъжка коса в The Barber Shop Sofia",
  description: "Мъжко тониране, което ще придаде цвят, блясък и свежест на вашата коса – The Barber Shop София.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
