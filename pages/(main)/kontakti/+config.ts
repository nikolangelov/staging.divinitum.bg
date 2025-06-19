import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Свържете се с нас – The Barber Shop Sofia",
  description: "The Barber Shop – грижа за мъжкия външен вид.  Можете да се свържете с нас, а ние с радост ще отговорим на вашите запитвания.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
