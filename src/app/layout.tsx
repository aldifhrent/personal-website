import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme.provider";

export const metadata: Metadata = {
  title: "Aldi Ahmad Fahrizi Ilmawan | QA Engineer",
  description:
    "Personal website and portfolio of Aldi Ahmad Fahrizi Ilmawan, a passionate Junior Quality Assurance Engineer.",
  keywords: [
    "Aldi Ahmad Fahrizi Ilmawan",
    "Quality Assurance Engineer",
    "Manual Testing",
    "Automation Testing",
    "Software Testing",
    "Test Case Management",
    "Bug Tracking",
    "Regression Testing",
    "API Testing",
    "UI Testing",
    "Selenium",
    "Postman",
    "Test Automation",
    "JIRA",
    "Agile Testing",
    "QA Documentation",
    "Functional Testing",
    "End-to-End Testing",
    "Test Plan",
    "Test Scenario",
  ],
  authors: [
    { name: "Aldi Ahmad Fahrizi Ilmawan", url: "https://aldifhrent.tech" },
    { name: "GitHub", url: "https://github.com/aldifhrent" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aldifahrizi" },
  ],
  creator: "Aldi Ahmad Fahrizi Ilmawan",
  publisher: "Aldi Ahmad Fahrizi Ilmawan",
  openGraph: {
    title: "Aldi Ahmad Fahrizi Ilmawan | Junior QA Engineer",
    description:
      "Explore the personal website and QA engineering portfolio of Aldi Ahmad Fahrizi Ilmawan.",
    url: "https://aldifhrent.tech/",
    siteName: "Aldi Ahmad Fahrizi Ilmawan",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://aldifhrent.tech/"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}
      >
        <ThemeProvider attribute="class" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
