import Layout from "../components/Views/Layout/Layout";
import React, { Fragment, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Popover, Transition, Dialog } from "@headlessui/react";
import {
  HiOutlineDocumentAdd,
  HiOutlineDocumentText,
  HiLink,
  HiExternalLink,
  //HiDownload,
  HiOutlineGlobe,
  HiKey,
  HiUser,
  HiCloudUpload,
} from "react-icons/hi";

import Fuse from "fuse.js";

import dls from "./dl.json";

export default function Downloads() {
  const { user, isLoading } = useUser();
  const [query, updateQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const fuse = new Fuse(dls, {
    keys: ["title", "info"],
    includeScore: true,
  });

  const results = fuse.search(query);
  const dlResults = query ? results.map((dl) => dl.item) : dls;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }
  return (
    <Layout title="Downloads">
      {/**
       * Begin of global modal
       * */}
      <>
        {" "}
        {user && (
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-200 dark:bg-gray-700 shadow-xl rounded-2xl">
                    <form>
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-800 dark:text-gray-100 text-center uppercase"
                      >
                        Adicionar link
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <label className="text-gray-800 dark:text-gray-300 text-sm font-bold leading-tight tracking-normal">
                            Arquivo(s)
                          </label>
                          <div className="relative mb-5 mt-2">
                            <div className="absolute right-0 text-gray-600 dark:text-gray-300 flex items-center pr-3 h-full">
                              <HiOutlineDocumentAdd className="w-6 h-6" />
                            </div>
                            <input
                              id="title"
                              name="title"
                              type="text"
                              required
                              className="text-gray-600 dark:text-gray-300 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-400 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 dark:border-gray-500 rounded border"
                              placeholder="Ativador do Linux (64-bits)"
                            />
                          </div>
                        </p>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <label className="text-gray-800 dark:text-gray-300 text-sm font-bold leading-tight tracking-normal">
                            Descrição
                          </label>
                          <div className="relative mb-5 mt-2">
                            <div className="absolute right-0 text-gray-600 dark:text-gray-300 flex items-center pr-3 h-full">
                              <HiOutlineDocumentText className="w-6 h-6" />
                            </div>
                            <input
                              id="description"
                              name="description"
                              type="text"
                              required
                              className="text-gray-600 dark:text-gray-300 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-400 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 dark:border-gray-500 rounded border"
                              placeholder="Ativa permanentemente o Linux XP 11 Pro"
                            />
                          </div>
                        </p>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <label className="text-gray-800 dark:text-gray-300 text-sm font-bold leading-tight tracking-normal">
                            Link URL
                          </label>
                          <div className="relative mb-5 mt-2">
                            <div className="absolute right-0 text-gray-600 dark:text-gray-300 flex items-center pr-3 h-full">
                              <HiLink className="w-6 h-6" />
                            </div>
                            <input
                              id="url"
                              name="url"
                              type="text"
                              required
                              className="text-gray-600 dark:text-gray-300 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-400 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 dark:border-gray-500 rounded border"
                              placeholder="https://rapidshare.com/grilo"
                            />
                          </div>
                        </p>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <label className="text-gray-800 dark:text-gray-300 text-sm font-bold leading-tight tracking-normal">
                            Host
                          </label>
                          <div className="relative mb-5 mt-2">
                            <div className="absolute right-0 text-gray-600 dark:text-gray-300 flex items-center pr-3 h-full">
                              <HiExternalLink className="w-6 h-6" />
                            </div>
                            <input
                              id="host"
                              name="host"
                              type="text"
                              required
                              className="text-gray-600 dark:text-gray-300 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-400 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 dark:border-gray-500 rounded border"
                              placeholder="RapidShare"
                            />
                          </div>
                        </p>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <label className="text-gray-800 dark:text-gray-300 text-sm font-bold leading-tight tracking-normal">
                            Uploader
                          </label>
                          <div className="relative mb-5 mt-2">
                            <div className="absolute right-0 text-gray-600 dark:text-gray-300 flex items-center pr-3 h-full cursor-not-allowed">
                              <HiUser className="w-6 h-6" />
                            </div>
                            <input
                              readOnly
                              id="host"
                              className="text-gray-600 dark:text-gray-300 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-400 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 dark:border-gray-500 rounded border capitalize cursor-not-allowed"
                              value={user.nickname}
                            />
                          </div>
                        </p>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          <div className="relative mb-5 mt-2 w-full">
                            <div className="flex items-start mb-6">
                              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-1/2">
                                Link privado/público
                              </label>
                              <div className="center">
                                <div className="grid grid-cols-2 xl:grid-cols-2 gap-2 w-full">
                                  <div className="inline-block radio">
                                    <input
                                      name="userOnly"
                                      type="radio"
                                      id="userOnlyYes"
                                      value="1"
                                      hidden="hidden"
                                      className="peer"
                                    />
                                    <label
                                      htmlFor="userOnlyYes"
                                      className="peer-checked:text-red-700 dark:peer-checked:text-red-400"
                                    >
                                      <HiKey className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14 cursor-pointer" />
                                    </label>
                                  </div>
                                  <div className="inline-block radio">
                                    <input
                                      name="userOnly"
                                      type="radio"
                                      id="userOnlyNo"
                                      hidden="hidden"
                                      value="0"
                                      className="peer"
                                    />
                                    <label
                                      htmlFor="userOnlyNo"
                                      className="peer-checked:text-green-700 dark:peer-checked:text-green-400"
                                    >
                                      <HiOutlineGlobe className="px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14 cursor-pointer" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-100 bg-purple-800 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
                        >
                          Adicionar
                        </button>
                      </div>
                    </form>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        )}
      </>
      {/**
       * End of global modal
       * */}
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-center dark:bg-gray-800 uppercase">
                  <th className="p-2 border-l border-t border-gray-400 dark:border-gray-600">
                    <div className="flex">
                      <div>Arquivo</div>

                      <div className="mx-4">
                        <input
                          value={query}
                          onChange={onSearch}
                          className="border-0 rounded-md w-48 p-1 placeholder-gray-600 dark:placeholder-gray-200 text-sm text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 inline text-center dark:border-gray-600"
                          placeholder="Procurar"
                        />
                      </div>
                      <div className="mx-4 flex">
                        <button
                          onClick={openModal}
                          className={`${
                            !user
                              ? "text-red-700 dark:text-red-400 cursor-not-allowed"
                              : "text-green-700 dark:text-green-400 hover:underline"
                          } inline-flex `}
                          rel="noreferrer"
                        >
                          <HiCloudUpload className="w-6 h-6 mr-1" />
                          Adicionar link
                        </button>
                      </div>
                    </div>
                  </th>
                  <th className="p-2 border-t border-r border-gray-400 dark:border-gray-600">
                    Download
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-gray-800">
                <>
                  {user && (
                    <tr
                      className="border border-gray-400 bg-gray-100 dark:border-gray-600 text-sm text-gray-600 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900"
                      key="0"
                    >
                      <td className="p-2">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold text-black dark:text-gray-50">
                              MediaFire
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                              Pasta com todos os arquivos
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold p-2">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold text-black dark:text-gray-50">
                              <a
                                href="https://www.mediafire.com/folder/kauzy8fazwuzs/InfoHouse"
                                target="_blank"
                                className="inline-flex text-green-700 dark:text-green-400 hover:underline"
                                rel="noreferrer"
                              >
                                <HiExternalLink className="w-6 h-6 mr-1" />
                                <span>MediaFire</span>
                              </a>
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                              Grilo
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
                {dlResults.map((dl) => {
                  const {
                    title,
                    info,
                    link_name,
                    link,
                    uploader,
                    _id,
                    needUser,
                  } = dl;

                  if (!needUser) {
                    return (
                      <tr
                        className="border border-gray-400 bg-gray-100 dark:border-gray-600 text-sm text-gray-600 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900"
                        key={_id}
                      >
                        <td className="p-2">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold text-black dark:text-gray-50">
                                {title}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-300">
                                {info}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold p-2">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold text-black dark:text-gray-50">
                                <a
                                  href={link}
                                  target="_blank"
                                  className="inline-flex text-green-700 dark:text-green-400 hover:underline"
                                  rel="noreferrer"
                                >
                                  <HiExternalLink className="w-6 h-6 mr-1" />
                                  <span>{link_name}</span>
                                </a>
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-300">
                                {uploader}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <>
                        {user && (
                          <tr
                            className="border border-gray-400 bg-gray-100 dark:border-gray-600 text-sm text-gray-600 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900"
                            key={_id}
                          >
                            <td className="p-2">
                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold text-black dark:text-gray-50">
                                    {title}
                                  </p>
                                  <p className="text-xs text-gray-600 dark:text-gray-300">
                                    {info}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-ms font-semibold p-2">
                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold text-black dark:text-gray-50">
                                    <a
                                      href={link}
                                      target="_blank"
                                      className="inline-flex text-green-700 dark:text-green-400 hover:underline"
                                      rel="noreferrer"
                                    >
                                      <HiExternalLink className="w-6 h-6 mr-1" />
                                      <span>{link_name}</span>
                                    </a>
                                  </p>
                                  <p className="text-xs text-gray-600 dark:text-gray-300">
                                    {uploader}
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
