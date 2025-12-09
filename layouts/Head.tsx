// Default <head> (can be overridden by pages)
import logoUrl from "../assets/home2/Divinitum-logo-SQUARE-STRAIGHT.svg";

export default function Head() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
}

