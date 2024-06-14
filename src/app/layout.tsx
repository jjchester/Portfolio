import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Head from "next/head";
import { Nunito } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { Encode_Sans_Semi_Expanded } from "next/font/google";
import Navbar from "./components/navbar";
import { Box } from "@chakra-ui/react";
import Footer from "./footer/page";

const nunito = Nunito({ subsets: ["latin"] });
const source_code_pro = Source_Code_Pro({ subsets: ["latin"] });
const esse = Encode_Sans_Semi_Expanded({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
export const metadata: Metadata = {
  title: "justinchester.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={esse.className}>
          <Providers>
            <Navbar />
            <Box maxW={{ base: '100%', md: '70%' }}
              mx={"auto"} p={4}
              minH={"calc(100vh - 120px)"}
            >
              {children}
            </Box>
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
