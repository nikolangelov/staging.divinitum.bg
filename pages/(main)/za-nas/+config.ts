import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Запознайте се с екипа на The Barber Shop Sofia",
  description: "Тук ще откриете повече информация за историята, ценностите и интересни факти за всеки бръснар от екипа на The Barber Shop.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
