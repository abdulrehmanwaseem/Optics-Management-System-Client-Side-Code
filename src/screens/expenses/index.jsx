import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import {
  useCreateExpensesMutation,
  useDeleteExpensesMutation,
  useGetExpensesQuery,
  useUpdateExpensesMutation,
} from "../../redux/apis/apis";

const Expenses = () => {
  const [filters, setFilters] = useState({
    sort: 1,
    sortBy: "_id",
    search: "",
    searchBy: "",
    page: 1,
    perPage: 5,
  });

  const { data: accounts = {} } = useGetExpensesQuery(filters);
  const { data = [], results } = accounts;

  const [createExpenses] = useCreateExpensesMutation();
  const [updateExpenses] = useUpdateExpensesMutation();
  const [deleteExpenses] = useDeleteExpensesMutation();

  const columnData = [
    {
      title: "ID",
      accessor: "_id",
      hide: true,
    },
    {
      title: "Account Name",
      accessor: "name",
    },
    {
      title: "Account Number",
      accessor: "expenseType",
    },
  ];
  const modalsName = {
    form: "Expense",
    extraModals: {},
  };
  const modalsTitle = {
    create: "Create Expense Record",
    update: "Update Expense Details!",
    delete: "Delete Expense",
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

export default Expenses;
