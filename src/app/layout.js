import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: "The Solar Squad",
  description:
    "Washington, DC homeowners: cut Pepco bills with a true $0/kWh solar PPA. No upfront cost. Transparent terms, estimator, and roof check.",
  openGraph: {
    title: "DC Zero-Cent Solar PPA",
    description:
      "Pay $0 for every solar kWh your panels produce. See if your roof qualifies.",
    images: ["/og/zero-ppa-dc.png"]
  },
  metadataBase: new URL("http://localhost:3000")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
