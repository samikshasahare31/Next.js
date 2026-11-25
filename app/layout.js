import { Roboto, Work_Sans } from 'next/font/google';
import "./globals.css";


const roboto = Roboto({
    subsets: ["latin"],  //specific group of characters based on a language or script
    variable: "--font-roboto",
});

const workSans = Work_Sans({
    subsets: ["latin"],
    variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <body className={roboto.className}> */}
            <body className={`${roboto.variable} ${workSans.variable}`}>
                {children}
            </body>
        </html>
    );
}






