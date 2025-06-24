import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Layout from "../../layouts/LayoutDefault";
import Head from "../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
