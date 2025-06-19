import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Мъжко подстригване в София – The Barber Shop Sofia",
  description: "Професионално мъжко подстригване в центъра на София. Доверете се на The Barber Shop Sofia за своя свеж и безупречен външен вид.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
