import React, { useEffect, useState } from "react";
import {
  ArrowDownAZ,
  ArrowUpZA,
  ClipboardEdit,
  MoreHorizontal,
  Trash2,
  PlusCircle,
  ChevronsLeft,
  ChevronsRight,
  Pill,
} from "lucide-react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/slice/Modal";

const DataTable = ({
  columnData,
  filters,
  setFilters,
  data,
  totalRecords,
  createRecords,
  updateRecords,
  deleteRecords,
  isExtraOptions,
  modalsName,
  modalsTitle,
}) => {
  const dispatch = useDispatch();

  const sortByHandler = (name) => {
    const newSort = filters.sortBy === name && filters.sort === 1 ? -1 : 1;
    setFilters({
      ...filters,
      sortBy: name,
      sort: newSort,
    });
  };

  const toggleSortIcons = (name) => {
    if (name === filters.sortBy) {
      return filters.sort === -1 ? (
        <ArrowUpZA size={20} className="text-amber-300 " />
      ) : (
        <ArrowDownAZ size={20} className="text-amber-300 " />
      );
    }
    return <ArrowDownAZ size={20} className="text-amber-300" />;
  };

  const actionsRow = (data) => {
    return (
      <div className="dropdown dropdown-left ">
        <div tabIndex={0} role="button">
          <MoreHorizontal />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] mr-2 menu p-2 shadow -mt-2 bg-base-100 rounded-box outline "
        >
          <div className="flex gap-3 p-1 cursor-pointer">
            <Trash2
              onClick={() =>
                dispatch(
                  openModal({
                    modalType: "confirmation",
                    title: modalsTitle.delete,
                    open: true,
                    data: data,
                    apiFuncCallback: deleteRecords,
                  })
                )
              }
            />
            <ClipboardEdit
              onClick={() =>
                dispatch(
                  openModal({
                    modalType: modalsName.form,
                    title: modalsTitle.update,
                    apiFuncCallback: updateRecords,
                    data: data,
                    sendId: true,
                  })
                )
              }
            />
            {isExtraOptions && (
              <Pill
                onClick={() =>
                  dispatch(
                    openModal({
                      modalType: modalsName.extraModals.prescription,
                      title: modalsTitle.extraModalsTitle.prescription,
                      apiFuncCallback: updateRecords,
                      data: data,
                      sendId: true,
                    })
                  )
                }
              />
            )}
          </div>
        </ul>
      </div>
    );
  };

  // const [pageNumbers, setPageNumbers] = useState([]);
  // useEffect(() => {
  //   const calculatePageNumbers = () => {
  //     let pages = [];
  //     for (let i = 1; i <= Math.ceil(totalRecords / filters.perPage); i++) {
  //       pages.push(i);
  //     }
  //     setPageNumbers(pages);
  //   };

  //   calculatePageNumbers();
  // }, [totalRecords, filters.perPage]);

  return (
    <>
      <div className="h-16 mt-1 bg-slate-600 flex items-center w-full px-4 justify-between">
        <button
          className="btn"
          onClick={() =>
            dispatch(
              openModal({
                modalType: modalsName.form,
                title: modalsTitle.create,
                sendId: false,
                apiFuncCallback: createRecords,
              })
            )
          }
        >
          Add
          <PlusCircle className="text-amber-300" />
        </button>
        <div className="flex gap-2 items-center">
          <div className="mockup-code h-12 overflow-hidden">
            <pre className="ml-20 -mt-[34px]">
              <code>Total Records No: {totalRecords}</code>
            </pre>
          </div>
          <select
            className="select select-bordered w-28 max-w-xs"
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                perPage: e.target.value,
                page: 1,
              }))
            }
          >
            <option disabled selected>
              PerPage
            </option>
            <option value={"5"}>5</option>
            <option value={"10"}>10</option>
            <option value={"15"}>15</option>
            <option value={"20"}>20</option>
            <option value={"30"}>30</option>
          </select>
          <ResponsivePagination
            previousLabel={<ChevronsLeft strokeWidth={"3px"} />}
            current={filters.page}
            total={Math.ceil(totalRecords / filters.perPage)}
            onPageChange={(e) => setFilters((prev) => ({ ...prev, page: e }))}
            nextLabel={<ChevronsRight strokeWidth={"3px"} />}
          />
        </div>
      </div>
      <table className="table ">
        <thead>
          <tr>
            {columnData.map(
              (val, index) =>
                !val.hide && (
                  <th key={index}>
                    <div
                      className="flex cursor-pointer items-center gap-1"
                      onClick={() => sortByHandler(val.accessor)}
                    >
                      {val.title}
                      {toggleSortIcons(val.accessor)}
                    </div>
                    <input
                      placeholder="search here..."
                      onChange={(e) =>
                        setFilters({
                          searchBy: val.accessor,
                          search: e.target.value,
                        })
                      }
                      className="input input-xs input-bordered w-full max-w-full my-2 bg-stone-300 text-black"
                    />
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((value, index) => (
            <tr key={index}>
              {columnData.map(
                (val, i) => !val.hide && <td key={i}>{value[val.accessor]}</td>
              )}
              <td>{actionsRow(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
