import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import {
  useCreateAccountsMutation,
  useDeleteAccountsMutation,
  useGetAccountsQuery,
  useUpdateAccountsMutation,
} from "../../redux/apis/apis";

const Accounts = () => {
  const [filters, setFilters] = useState({
    sort: 1,
    sortBy: "_id",
    search: "",
    searchBy: "",
    page: 1,
    perPage: 5,
  });

  const { data: accounts = {} } = useGetAccountsQuery(filters);
  const { data = [], results } = accounts;

  const [createAccounts] = useCreateAccountsMutation();
  const [updateAccounts] = useUpdateAccountsMutation();
  const [deleteAccounts] = useDeleteAccountsMutation();

  const columnData = [
    {
      title: "ID",
      accessor: "_id",
      hide: true,
    },
    {
      title: "Account Name",
      accessor: "accountName",
    },
    {
      title: "Account Number",
      accessor: "accountNumber",
    },
    {
      title: "Account Type",
      accessor: "accountType",
    },
  ];
  const modalsName = {
    form: "Account",
    extraModals: {},
  };
  const modalsTitle = {
    create: "Create Account Record",
    update: "Update Account Details!",
    delete: "Delete Account",
    extraModalTitle: {},
  };
  return (
    <DataTable
      data={data}
      totalRecords={results}
      createRecords={createAccounts}
      updateRecords={updateAccounts}
      deleteRecords={deleteAccounts}
      columnData={columnData}
      filters={filters}
      setFilters={setFilters}
      isExtraOptions={false}
      modalsName={modalsName}
      modalsTitle={modalsTitle}
    />
  );
};

export default Accounts;
