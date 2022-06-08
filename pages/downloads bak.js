import Layout from "../components/Views/Layout/Layout";
import React, { useState } from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
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
        <div className="box-border mb-4 px-0 py-8">
          <div className="flex">
            <h1 className="uppercase text-center font-bold text-white m-0">
              Downloads
            </h1>
          </div>
        </div>

        <div className="box-border flex my-0 mx-auto py-0 px-4">
          <ul className="box-border flex-grow m-0 p-0">
            {dlResults.map((dl) => {
              const { thumb, title, info, link_name, link, svg } = dl;

              function Icon({ svg }) {
                return <svg className="h-16 w-16" />;
              }
              return (
                <li key={title} className="box-border flex mb-4">
                  <ul className="box-border flex-grow m-0 p-0">
                    <li className="box-border mb-1">
                      <strong>Title: </strong>
                      {title}
                    </li>
                    <li className="box-border mb-1">
                      <strong>Info: </strong>
                      {info}
                    </li>
                    <li className="box-border mb-1">
                      <strong>Links: </strong>
                      <a href={link} target="_blank" rel="noreferrer">
                        {link_name}
                      </a>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
          <aside>
            <form className="box-border">
              <label className="box-border block font-bold text-xl mb-1 uppercase">
                Search
              </label>
              <input
                type="text"
                value={query}
                onChange={onSearch}
                className="bg-none rounded-md border-solid border-2 box-border text-base py-3 px-4 w-full uppercase"
              />
            </form>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
