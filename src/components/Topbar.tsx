import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";
const Topbar = () => {
  const router = useRouter();

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ENHS Online Fueling System
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={router.asPath === "/"}>
          Logg
        </Navbar.Link>
        <Navbar.Link href="/register" active={router.asPath === "/register"}>
          Registrer
        </Navbar.Link>
        <Navbar.Link href="/about" active={router.asPath === "/about"}>
          Om
        </Navbar.Link>

        <Navbar.Link href="/contact">Kontakt</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
