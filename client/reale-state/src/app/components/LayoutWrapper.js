"use client"
import { usePathname } from "next/navigation";
import Header from "../(website)/common/Header";
import Footer from "../(website)/common/Footer";
import ListofLocalities from "../(website)/common/ListofLocalities";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  const hideListing = !pathname.includes('/contact-us')
  return (
      <>
        <Header/>
        {children}
        {hideListing && <ListofLocalities/>}
        <Footer/>
      </>
  );
}
