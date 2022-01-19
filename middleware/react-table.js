/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React, { Fragment, useEffect, useRef, useState } from "react";
import { createGlobalState } from "react-hooks-global-state";
import useSwr from "swr";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
  useSortBy,
} from "react-table";

import {
  SelectorIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XCircleIcon,
  CogIcon,
} from "@heroicons/react/outline";
import CurrentDolar from "../middleware/currentdolar";
import { matchSorter } from "match-sorter";
import { Popover, Transition, Switch, Dialog } from "@headlessui/react";

const initialState = { clientEnabled: true, dollar: 0, dataTable: null };
const { useGlobalState } = createGlobalState(initialState);

const fetcher = (url) => fetch(url).then((res) => res.json());

function Dolar() {
  const [Dollar, setDollar] = useGlobalState("dollar");
  const { data, error } = useSwr("/api/currency/brl", fetcher);
  if (error) return <div>Error</div>;
  if (!data) return <div>...</div>;
  if (data == data.data) {
    setDollar(
      Number(parseFloat(parseFloat(data.data) + parseFloat(0.3)).toFixed(2))
    );
  }
  console.log("dolar loaded");

  return (
    <>
      <input
        type="number"
        min="0.01"
        max="100.00"
        step="0.01"
        className="border-0 placeholder-gray-600 dark:placeholder-gray-200 text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 dark:border-gray-600 block min-w-24 w-24 pl-7 pr-3 text-sm sm:text-sm rounded-md text-right h-6"
        value={Dollar}
        onChange={(e) => {
          if (e.target.value == "" || null || 0) {
            setDollar(
              Number(
                parseFloat(parseFloat(data.data) + parseFloat(0.3)).toFixed(2)
              )
            );
          } else {
            if (e.target.value.indexOf(".") >= 0) {
              setDollar(
                Number(
                  e.target.value.substring(0, e.target.value.indexOf(".")) +
                    e.target.value.substring(e.target.value.indexOf("."), 4)
                )
              );
            } else {
              setDollar(Number(e.target.value));
            }
          }
          //console.log("Dolar: " + Dollar);
          //console.log("data.data: " + data.data);
        }}
      />
    </>
  );
}

/**
function Dolar() {
  const { data, error } = useSwr("/api/currency/BRL", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>...</div>;
  return data.data;
}
console.log("Valor: " + Dolar);
 */

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value);
    //console.log(Dolar);
  }, 200);

  return (
    <input
      className="border-0 rounded-md w-48 p-1 placeholder-gray-600 dark:placeholder-gray-200 text-sm text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 inline text-center dark:border-gray-600"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`Procurar ${count} produtos...`}
    />
  );
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  {
    /*console.log(rows);*/
  }
  return matchSorter(rows, filterValue, {
    keys: ["original.Produto", "original.Código"],
  });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

// Our table component
function Table({ columns, data, onFetchData }) {
  const [dataTable, setData] = React.useState([]);
  const skipPageResetRef = React.useRef();

  const updateData = (newData) => {
    // When data gets updated with this function, set a flag
    // to disable all of the auto resetting
    skipPageResetRef.current = true;

    setData(newData);
  };

  React.useEffect(() => {
    // After the table has updated, always remove the flag
    skipPageResetRef.current = false;
  });

  const filterTypes = React.useMemo(
    () => ({
      globalFilter: fuzzyTextFilterFn,
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: fuzzyTextFilterFn,
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: fuzzyTextFilterFn,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter, sortBy, filters },
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    toggleHideColumn,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
      globalFilter: fuzzyTextFilterFn,
      initialState: {
        hiddenColumns: ["Valor (U$)", "Custo"],
      },
      autoResetPage: !skipPageResetRef.current,
      autoResetExpanded: !skipPageResetRef.current,
      autoResetGroupBy: !skipPageResetRef.current,
      autoResetSelectedRows: !skipPageResetRef.current,
      autoResetSortBy: !skipPageResetRef.current,
      autoResetFilters: !skipPageResetRef.current,
      autoResetRowState: !skipPageResetRef.current,
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    usePagination
  );

  const [clientEnabled, setClientEnabled] = useGlobalState("clientEnabled");
  const [Dollar, setDollar] = useGlobalState("dollar");

  function toggleClient() {
    setClientEnabled(!clientEnabled);
    if (clientEnabled == true) {
      //console.log(true);
      toggleHideColumn("Valor (U$)", false);
      toggleHideColumn("Custo", false);

      //toggleHideAllColumns(false);
    } else {
      //console.log(false);
      toggleHideColumn("Valor (U$)", true);
      toggleHideColumn("Custo", true);
      //toggleHideAllColumns(true);
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-4 lg:px-8 lg:flex lg:items-center lg:justify-between">
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
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-800 dark:text-gray-100"
                >
                  Lista dos produtos
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Product list soon.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-100 bg-purple-800 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* <div>        
        <div>
          <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
          All
        </div>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              console.log(column.getToggleHiddenProps())
              <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
              {column.id}
            </label>
          </div>
        ))}
      </div>
      <br />
        */}
      <table {...getTableProps()} className="container sm:w-full">
        <thead>
          <tr className="bg-gray-100 text-center dark:bg-gray-800">
            <th className="p-2 border-l border-t border-gray-400 dark:border-gray-600">
              <select
                className="appearance-none border-0 w-full p-1 text-gray-600 text-sm dark:text-gray-200 bg-gray-200 dark:bg-gray-700  rounded-md"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 15, 20, 25, 30, 50, 75, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </th>

            <th
              className="h-auto p-2 border-t border-gray-400 dark:border-gray-600 items-center space-x-4"
              colSpan={visibleColumns.length - 2}
            >
              <div className="flex">
                <div className="mx-4">
                  <ChevronDoubleLeftIcon
                    className={`${
                      canPreviousPage ? "cursor-pointer" : null
                    } text-gray-800 w-6 h-6 dark:text-white inline `}
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  />
                  <ChevronLeftIcon
                    className={`${
                      canPreviousPage ? "cursor-pointer" : null
                    } text-gray-800 w-6 h-6 dark:text-white inline `}
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  />
                  <ChevronRightIcon
                    className={`${
                      canNextPage ? "cursor-pointer" : null
                    } text-gray-800 w-6 h-6 dark:text-white inline `}
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                  />
                  <ChevronDoubleRightIcon
                    className={`${
                      canNextPage ? "cursor-pointer" : null
                    } text-gray-800 w-6 h-6 dark:text-white inline `}
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  />
                </div>
                <div className="inline mx-4">
                  Pg.{" "}
                  <input
                    className="border-0 rounded-md w-10 p-1 text-gray-600 text-sm dark:text-gray-200 bg-gray-200 dark:bg-gray-700 inline text-center dark:border-gray-600"
                    value={pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(page);
                    }}
                  />{" "}
                  Total <b>{pageOptions.length}</b>
                </div>
                <div className="mx-4">
                  <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
                </div>
                <div className="mx-4">
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-7"
                    onClick={openModal}
                  >
                    R$ 1555.50
                  </button>
                </div>
              </div>
            </th>
            <th className="p-2 border-t border-r border-gray-400 dark:border-gray-600">
              <div className="relative h-6 w-full">
                <div className="absolute right-0 -top-2">
                  <Popover as="div" className="relative inline-block text-left">
                    <div>
                      <Popover.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black dark:text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-opacity-75">
                        <CogIcon className="w-6 h-6" />
                      </Popover.Button>
                    </div>
                    <Transition
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        static="true"
                        className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 divide-y divide-gray-100 dark:divide-gray-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="px-1 py-1 ">
                          <div>
                            <label className="cursor-pointer inline-flex">
                              <span className="text-gray-700 dark:text-gray-200 mx-4">
                                Modo cliente
                              </span>
                              <div className="mx-4">
                                <Switch
                                  checked={clientEnabled}
                                  onChange={toggleClient}
                                  className={`${
                                    clientEnabled
                                      ? "bg-green-600"
                                      : "bg-red-500"
                                  } relative inline-flex items-center h-6 rounded-full w-11`}
                                >
                                  <span className="sr-only">
                                    Enable client mode
                                  </span>
                                  <span
                                    className={`${
                                      clientEnabled
                                        ? "translate-x-6"
                                        : "translate-x-1"
                                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                                  />
                                </Switch>
                              </div>
                            </label>
                          </div>
                        </div>
                        {clientEnabled == false ? (
                          <div className="px-1 py-1 ">
                            <div>
                              <label className="cursor-pointer inline-flex">
                                <span className="text-gray-700 dark:text-gray-200 mx-4">
                                  Cotação
                                </span>
                                <div className="mx-4">
                                  <Dolar />
                                </div>
                              </label>
                            </div>
                          </div>
                        ) : null}
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
              </div>
            </th>
          </tr>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="border border-b-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-2 cursor-pointer text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  <div className="flex items-center justify-center">
                    {column.render("Header")}{" "}
                    <span className="h-4 w-4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ChevronDownIcon />
                        ) : (
                          <ChevronUpIcon />
                        )
                      ) : (
                        <SelectorIcon />
                      )}
                    </span>
                    {/*  <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                     */}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`${
                  clientEnabled ? "text-center" : null
                } " border border-gray-400 bg-gray-100 dark:border-gray-600 text-sm text-gray-600 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 `}
              >
                {row.cells.map((cell) => {
                  {
                    if (cell.column.Header == "Produto") {
                      const url =
                        "https://www.alboradainfo.com/produto/" +
                        cell.row.original.Código +
                        ".html";
                      return (
                        <td {...cell.getCellProps()} className="p-2">
                          {/*console.log(cell.row.original.Código)*/}
                          <a
                            href={url}
                            rel="noreferrer"
                            target="_blank"
                            className={`${
                              clientEnabled ? " text-left " : null
                            } " hover:text-blue-500 dark:hover:text-blue-300 `}
                          >
                            {cell.render("Cell")}
                          </a>
                          {/*console.log(cell.render("Cell"))*/}
                        </td>
                      );
                    } else {
                      return (
                        <td {...cell.getCellProps()} className="p-2">
                          {cell.render("Cell")}
                          {/*console.log(cell.render("Cell"))*/}
                        </td>
                      );
                    }
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function App({ on }) {
  const [Dollar, setDollar] = useGlobalState("dollar");
  const [dataTable, setDataTable] = useGlobalState("dataTable");

  const colunas = React.useMemo(
    () => [
      {
        Header: "Código",
        accessor: "Código",
      },
      {
        Header: "Produto",
        accessor: "Produto",
      },
      {
        Header: "Custo (U$)",
        accessor: "Valor (U$)",
      },
      {
        Header: "Custo (R$)",
        accessor: "Custo",
      },
      {
        Header: "Valor (R$)",
        accessor: "Venda",
      },
    ],
    []
  );

  const site = "/api/table/" + on + "/" + Dollar;
  const { data, error } = useSwr(site, fetcher);

  if (error) return "Error";
  if (!data) return [];

  return (
    <Table
      columns={[
        {
          Header: "Código",
          accessor: "Código",
        },
        {
          Header: "Produto",
          accessor: "Produto",
        },
        {
          Header: "Custo (U$)",
          accessor: "Valor (U$)",
        },
        {
          Header: "Custo (R$)",
          accessor: "Custo",
        },
        {
          Header: "Valor (R$)",
          accessor: "Venda",
        },
      ]}
      data={data}
    />
  );
}

export default App;
