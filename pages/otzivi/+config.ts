import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Какво казват клиентите за The BarberShop Sofia",
  description: "Готина атмосфера, точни бръснари и доволни клиенти – виж какво казват хората за нас. Оценяваме всяко мнение и винаги се стремим към още по-добро обслужване.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
