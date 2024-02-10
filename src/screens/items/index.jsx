import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import {
  useCreateItemsMutation,
  useDeleteItemsMutation,
  useGetItemsQuery,
  useUpdateItemsMutation,
} from "../../redux/apis/apis";

const Items = () => {
  const [filters, setFilters] = useState({
    sort: 1,
    sortBy: "_id",
    search: "",
    searchBy: "",
    page: 1,
    perPage: 5,
  });

  const { data: accounts = {} } = useGetItemsQuery(filters);
  const { data = [], results } = accounts;

  const [createExpenses] = useCreateItemsMutation();
  const [updateExpenses] = useUpdateItemsMutation();
  const [deleteExpenses] = useDeleteItemsMutation();

  const columnData = [
    {
      title: "ID",
      accessor: "_id",
      hide: true,
    },
    {
      title: "Item Name",
      accessor: "name",
    },
    {
      title: "Item Company Name",
      accessor: `companyName.name`,
    },
  ];
  const modalsName = {
    form: "Item",
    extraModals: {},
  };
  const modalsTitle = {
    create: "Create Item Record",
    update: "Update Item Details!",
    delete: "Delete Item",
    extraModalTitle: {},
  };
  return (
    <DataTable
      data={data}
      totalRecords={results}
      createRecords={createExpenses}
      updateRecords={updateExpenses}
      deleteRecords={deleteExpenses}
      columnData={columnData}
      filters={filters}
      setFilters={setFilters}
      isExtraOptions={false}
      modalsName={modalsName}
      modalsTitle={modalsTitle}
    />
  );
};

export default Items;
