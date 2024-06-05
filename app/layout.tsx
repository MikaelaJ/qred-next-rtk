import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Header } from "./components/Header";

import "./styles/globals.css";
import Footer from "./components/Footer";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className="">
            <Header />

            <header className="">
              <Image
                src="/logo.svg"
                className=""
                alt="logo"
                width={100}
                height={100}
              />
            </header>

            <main className="">{children}</main>
            <Footer />
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
