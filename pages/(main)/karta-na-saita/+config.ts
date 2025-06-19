import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "The Barber Shop Sofia – бръснарница за ценители",
  description: "Търсите стилно мъжко подстригване в София? The Barber Shop е вашето място за прецизност, качество, приятна атмосфера и индивидуално обслужване.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
