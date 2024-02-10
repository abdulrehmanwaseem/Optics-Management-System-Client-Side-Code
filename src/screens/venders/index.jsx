import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import {
  useCreateVendersMutation,
  useDeleteVendersMutation,
  useGetVendersQuery,
  useUpdateVendersMutation,
} from "../../redux/apis/apis";

const Vender = () => {
  const [filters, setFilters] = useState({
    sort: 1,
    sortBy: "_id",
    search: "",
    searchBy: "",
    page: 1,
    perPage: 5,
  });

  const { data: venders = {} } = useGetVendersQuery(filters);
  const { data = [], results } = venders;

  const [createVenders] = useCreateVendersMutation();
  const [updateVenders] = useUpdateVendersMutation();
  const [deleteVenders] = useDeleteVendersMutation();

  const columnData = [
    {
      title: "ID",
      accessor: "_id",
      hide: true,
    },
    {
      title: "Vender Name",
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
      title: "Item Company Name",
      accessor: `companyName.name`,
    },
  ];
  const modalsName = {
    form: "Vender",
    extraModals: {},
  };
  const modalsTitle = {
    create: "Create Vender Record",
    update: "Update Vender Details!",
    delete: "Delete Vender",
    extraModalTitle: {},
  };
  return (
    <DataTable
      data={data}
      totalRecords={results}
      createRecords={createVenders}
      updateRecords={updateVenders}
      deleteRecords={deleteVenders}
      columnData={columnData}
      filters={filters}
      setFilters={setFilters}
      isExtraOptions={false}
      modalsName={modalsName}
      modalsTitle={modalsTitle}
    />
  );
};
export default Vender;
