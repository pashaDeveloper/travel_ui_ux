import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="ورود"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />

        <ul className="hidden h-full gap-12 lg:flex "> {/* Add flex-col for vertical arrangement */}
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 slide-in-ul text-nowrap	 w-[50px] text-gray-50 flex flex-col gap-3 items-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {/* Render the icon first */}
              {link.icon && <link.icon className="mb-1 lg:text-2xl " />}
              {link.label}
            </Link>
          ))}
        </ul>




        <Link href="/">
          <p className="text-2xl font-bold">
            <span className="text-green-500">KUAR</span>
            <span className="text-black">MONIA</span>
          </p>
        </Link>
      </nav>
    </>
  )
}

export default Navbar