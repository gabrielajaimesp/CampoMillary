import "./globals.css";
import { Inter } from "next/font/google";
import { Navigator } from "./components/Navigator";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Campo Millary",
  description:
    "Hospedaje, Restaurant, Comida Mapuche, Tinaja, Domos, Tour en el sur de chile",
};

const links = [
  { label: "Inicio", route: "/" },
  { label: "Nosotros", route: "/Nosotros" },
  { label: "Galeria", route: "/Galeria" },
  { label: "Contacto", route: "/Contacto" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <Navigator links={links} />
        </header>
        {children}
        <a href="https://api.whatsapp.com/send?phone=931116510&text=Hola gaby" className={styles.btn_wsp} target="_blank">
    <FaWhatsapp /> 
    </a>
        <Footer/>
      </body>
    </html>
  );
}
