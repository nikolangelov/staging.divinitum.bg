// /pages/kurs-za-brasnar/+Layout.tsx
// /pages/kurs-za-brasnar/+Layout.tsx
import { JSX } from 'solid-js';
import LayoutCustom from '../../layouts/LayoutCustom';

export { Layout };

function Layout(pageProps: JSX.IntrinsicAttributes & { children: JSX.Element; }) {
  return <LayoutCustom {...pageProps} />;
}

