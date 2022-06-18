import { Fragment, React } from "react";
import {
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineFolderDownload,
  HiOutlineRefresh,
  HiOutlineLogin,
} from "react-icons/hi";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export function User() {
  const { user, isLoading } = useUser();
  return (
    <>
      {user && (
        <>
          {/* Profile dropdown */}
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="bg-lime-500/50 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open user menu</span>
                <span className="h-8 w-8 rounded-full items-center justify-center inline-flex uppercase">
                  {user.nickname.charAt(0)}
                </span>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  <a
                    href="https://dev-s01ji-oi.us.webtask.run/auth0-delegated-admin/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 capitalize flex"
                  >
                    <HiOutlineUser
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                    Usuários
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <MyLink
                    href="/downloads"
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 capitalize flex"
                  >
                    <HiOutlineFolderDownload
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                    Downloads
                  </MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink
                    href="/updates"
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 capitalize flex"
                  >
                    <HiOutlineRefresh
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                    Updates
                  </MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink
                    href="/api/auth/logout"
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 capitalize flex"
                  >
                    <HiOutlineLogout
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                    Sair
                  </MyLink>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      )}

      {!isLoading && !user && (
        <>
          <MyLink href="/api/auth/login" className="flex">
            <HiOutlineLogin className="w-5 h-5 mr-2" aria-hidden="true" />
            Login
          </MyLink>
        </>
      )}
    </>
  );
}

export default User;
