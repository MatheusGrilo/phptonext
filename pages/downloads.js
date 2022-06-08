import Layout from "../components/Views/Layout/Layout";
import React, { useState } from "react";
import { ExternalLinkIcon, CloudUploadIcon } from "@heroicons/react/outline";
import { useUser } from "@auth0/nextjs-auth0";

import Fuse from "fuse.js";

import dls from "./dl.json";

export default function Downloads() {
  const { user, isLoading } = useUser();
  const [query, updateQuery] = useState("");

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
                        <CloudUploadIcon className="w-6 h-6 mr-1" />
                        Adicionar link
                      </div>
                    </div>
                  </th>
                  <th className="p-2 border-t border-r border-gray-400 dark:border-gray-600">
                    Download
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-gray-800">
                {dlResults.map((dl) => {
                  const { thumb, title, info, link_name, link, svg, _id } = dl;

                  function Icon({ svg }) {
                    return <svg className="h-16 w-16" />;
                  }
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
                      <td className="px-4 py-3 text-ms font-semibold">
                        <a
                          href={link}
                          target="_blank"
                          className="inline-flex text-green-700 dark:text-green-400 hover:underline"
                          rel="noreferrer"
                        >
                          <ExternalLinkIcon className="w-6 h-6 mr-1" />
                          <span>{link_name}</span>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
