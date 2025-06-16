import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Курс за бръснар в The Barber Shop Academy",
  description: "Стартирай кариера като бръснар с практически курс в академията на The BarberShop Sofia. Обучение от професионалисти, подходящо за начинаещи и напреднали.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
