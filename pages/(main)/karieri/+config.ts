import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Станете част от екипа на The Barber Shop",
  description: "Присъединете се към екипа на The Barber Shop! Развийте своите умения в мъжкото подстригване и оформяне на брада в динамична и креативна среда.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
