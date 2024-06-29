import "./globals.css";
import { Inter } from "next/font/google";


// export const metadata = {
//   title: 'Vercel Blob Starter',
//   description: 'A simple Next.js app with Vercel Blob for image uploads',
// }

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={`
                bg-neutral-900 text-seashell-50
                
            `}>{children}</body>
        </html>
    );
}
