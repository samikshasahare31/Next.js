import Navigation from "../components/Navigation";
import "../globals.css";


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>Logo</h1>
        <Navigation />
        {children}</body>
    </html>
  )
}
