import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { ThemeProvider } from "@/components/theme-provider";
import FooterComponent from "@/components/footer/FooterComponent";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BURNA-made - Web App",
  description:
    "  A real estate  web application for browsing, searching, and learning about housing, in the world, characters, types, stats, and evolutions using the API. Built with Next.js and styled for responsive performance.",
  icons: {
    icon: "https://a0.muscache.com/im/pictures/bced1392-9538-41df-92d9-f058a7188b0f.jpg?aki_policy=x_large",
    apple: "https://a0.muscache.com/im/pictures/bced1392-9538-41df-92d9-f058a7188b0f.jpg?aki_policy=x_large",
    shortcut: "https://a0.muscache.com/im/pictures/bced1392-9538-41df-92d9-f058a7188b0f.jpg?aki_policy=x_large",
  },
  openGraph: {
    title: "BURNA-made - Web App",
    description:
      "Browse, search, and explore real estate properties with real-time data from the PropertiesAPI. Beautiful, fast, and responsive real estate web app built with Next.js.",
    url: "https://a0.muscache.com/im/pictures/bced1392-9538-41df-92d9-f058a7188b0f.jpg?aki_policy=x_large", // update with your actual URL
    siteName: "BURNA-made ",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/bced1392-9538-41df-92d9-f058a7188b0f.jpg?aki_policy=x_large", // change this to your OG image URL
        width: 1200,
        height: 630,
        alt: "BURNA-made Web App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BURNA-made - Web App",
    description:
      "Explore detailed properties info with a modern, responsive web app powered by PropertiesAPI and Next.js.",
    images: ["https://a0.muscache.com/im/pictures/bced1392-9538-41df-92d9-f058a7188b0f.jpg?aki_policy=x_large"], // same image as above
    creator: "@KINGBURNA", // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <NavbarComponent />
        {children}
        <FooterComponent/>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
