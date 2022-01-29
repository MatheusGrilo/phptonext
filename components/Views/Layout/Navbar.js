import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import CurrentDolar from "../../Controllers/currentdolar";
import User from "./Navbar/User";

function Page(href) {
  const router = useRouter();
  return router.asPath === href
    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
    : "dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
}

function PageMob(href) {
  const router = useRouter();
  return router.asPath === href
    ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
    : "dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Alborada", href: "/alborada" },
  { name: "Excell", href: "/excell" },
  { name: "Toners", href: "/toners" },
  { name: "Updates", href: "/updates" },
  { name: "Sobre", href: "/about" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="dark:bg-gray-800 bg-gray-300">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <User />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div key={item.name} className={Page(item.href)}>
                        <Link href={item.href}>{item.name}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-12 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <span className="text-center">
                  U$1.00 = R$
                  <CurrentDolar />
                </span>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div type="button" className="dark:bg-gray-800 bg-gray-300">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={PageMob(item.href)}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
