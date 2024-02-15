"use client";

import Cart from "./cart";
import styles from "./nav.module.css";
import utils from "./utils.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const toggleMenu = () => {
    setIsNavMenuOpened((prevValue) => !prevValue);
  };

  return (
    <>
      <header className="bg-[#1E3A8A] w-full h-[148px] p-8">
        <div className="flex flex-row justify-between  place-content-between items-center  w-full pb-3 md:pb-0}">
        <button
          className={
            isNavMenuOpened
              ? `${styles.navMenuToggleActive} ${styles.navMenuToggle}`
              : `${styles.navMenuToggle}`
          }
          onClick={toggleMenu}
        >
          <span className={`${styles.hamburgerLine1}`}></span>
          <span className={`${styles.hamburgerLine2}`}></span>
          <span className={`${styles.hamburgerLine3}`}></span>
        </button>
        <img className="h-[32px]" src="images/logo.png" alt="Logo"></img>
        <nav className={styles.navMenu}>
          <ul className={`${styles.navMenuLinks} ${utils.flex}`}>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Produtos
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Categorias
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Meus Pedidos
              </Link>
            </li>
            <li>
              <Link className={`${styles.navMenuLink} ${utils.flex}`} href="#">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className={
            isNavMenuOpened
              ? `${styles.navMenuMobileActive} ${styles.navMenuMobile}`
              : styles.navMenuMobile
          }
        >
          <ul
            className={`${styles.navMenuMobileLinks} ${utils.flex} ${utils.fw700}`}
          >
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Categorias
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Meus Pedidos
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navMenuMobileLink} ${utils.flex}`}
                href="#"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className={`${styles.navMenuRight} ${utils.flex}`}>
          <Cart />
          {/* <div className={`${styles.avatar} ${utils.flex}`}>
            <img src="images/image-avatar.png" alt="Icon avatar"></img>
          </div> */}
        </div>
        </div>
        <form className="flex justify-center items-center pb-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Buscar"
                    className="w-full py-3 pl-12 pr-32 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
      </header>
    </>
  );
}
