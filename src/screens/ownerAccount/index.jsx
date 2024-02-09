import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import {
  useCreateOwnerAccountsMutation,
  useDeleteOwnerAccountsMutation,
  useGetOwnerAccountsQuery,
  useUpdateOwnerAccountsMutation,
} from "../../redux/apis/apis";

const OwnerAccount = () => {
  const [filters, setFilters] = useState({
    sort: 1,
    sortBy: "_id",
    search: "",
    searchBy: "",
    page: 1,
    perPage: 5,
  });

  const { data: ownerAccounts = {} } = useGetOwnerAccountsQuery(filters);
  const { data = [], results } = ownerAccounts;

  const [createOwnerAccounts] = useCreateOwnerAccountsMutation();
  const [updateOwnerAccounts] = useUpdateOwnerAccountsMutation();
  const [deleteOwnerAccounts] = useDeleteOwnerAccountsMutation();

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
  ];
  const modalsName = {
    form: "ownerAccount",
    extraModals: {},
  };
  const modalsTitle = {
    create: "Create Owner Account Record",
    update: "Update Owner Account Details!",
    delete: "Delete Owner Account",
    extraModalTitle: {},
  };
  return (
    <DataTable
      data={data}
      totalRecords={results}
      createRecords={createOwnerAccounts}
      updateRecords={updateOwnerAccounts}
      deleteRecords={deleteOwnerAccounts}
      columnData={columnData}
      filters={filters}
      setFilters={setFilters}
      isExtraOptions={false}
      modalsName={modalsName}
      modalsTitle={modalsTitle}
    />
  );
};
export default OwnerAccount;
