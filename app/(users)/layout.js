import Navigation from "../components/Navigation";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}


