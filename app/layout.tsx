import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import Modal from "@/components/Modal/Modal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbbn | Holiday Rentals and Homes",
  description: "An Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Modal actionLabel="Working" title="Auth" isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
