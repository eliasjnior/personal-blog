import { PropsWithChildren } from "react";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "@/styles/globals.scss";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elias Júnior",
  description:
    "I'm a software engineer specialized in building complex and scalable web apps. I've got more than 9 years of experience working on software development professionally.",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="container mx-auto my-16">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
