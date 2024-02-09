import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import {
  useCreateCustomersMutation,
  useDeleteCustomersMutation,
  useGetCustomersQuery,
  useUpdateCustomersMutation,
} from "../../redux/apis/apis";

const Customers = () => {
  const [filters, setFilters] = useState({
    sort: 1,
    sortBy: "_id",
    search: "",
    searchBy: "",
    page: 1,
    perPage: 5,
  });

  const { data: customers = {} } = useGetCustomersQuery(filters);
  const { data = [], results } = customers;

  const [createCustomers] = useCreateCustomersMutation();
  const [updateCustomers] = useUpdateCustomersMutation();
  const [deleteCustomers] = useDeleteCustomersMutation();

  const columnData = [
    {
      title: "ID",
      accessor: "_id",
      hide: true,
    },
    {
      title: "Name",
      accessor: "name",
    },
    {
      title: "Contact-1",
      accessor: "contact1",
    },
    {
      title: "Contact-2",
      accessor: "contact2",
    },
    {
      title: "Address",
      accessor: "address",
    },
    {
      title: "Age",
      accessor: "age",
    },
  ];

  const modalsName = {
    form: "customer",
    extraModals: {
      prescription: "prescription",
    },
  };
  const modalsTitle = {
    create: "Create Customer Record",
    update: "Update Customer Details",
    delete: "Delete Customer",
    extraModalsTitle: {
      prescription: "Customer Prescriptions!",
    },
  };
  return (
    <DataTable
      data={data}
      totalRecords={results}
      createRecords={createCustomers}
      updateRecords={updateCustomers}
      deleteRecords={deleteCustomers}
      columnData={columnData}
      filters={filters}
      setFilters={setFilters}
      isExtraOptions={true}
      modalsName={modalsName}
      modalsTitle={modalsTitle}
    />
  );
};

export default Customers;
