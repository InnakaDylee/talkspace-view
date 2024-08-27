import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "@context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TalkSpace",
  description: "TalkSpace - Empowering Your Mental Health Journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
