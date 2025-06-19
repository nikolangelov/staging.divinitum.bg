import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "2 в 1: Мъжко подстригване и оформяне на брада в The Barber Shop Sofia",
  description: "Спестете време и изглеждайте страхотно с 2 в 1 услуга – подстригване и оформяне на брада в The Barber Shop Sofia.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
