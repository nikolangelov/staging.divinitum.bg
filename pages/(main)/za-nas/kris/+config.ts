import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "The Barber Shop Sofia | Бръснар Кристиан",
  description: "Кристиан е опитен бръснар, който чудесно комбинира ретро и модерни техники, като пресъздава пътуване във времето и стила. Запазете час при Кристиан!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
