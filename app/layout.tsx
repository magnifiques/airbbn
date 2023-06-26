import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";
import RegisterModal from "@/components/Modal/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import LoginModal from "@/components/Modal/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";
import RentModal from "@/components/Modal/RentModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbbn | Holiday Rentals and Homes",
  description: "An Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
