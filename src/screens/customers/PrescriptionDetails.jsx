import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/slice/Modal";

const PrescriptionDetails = () => {
  const dispatch = useDispatch();
  const { data, apiFuncCallback } = useSelector((state) => state.Modal);
  const [prescription, setPrescription] = useState(0);
  console.log(data);
  const handleMoveLeft = () => {
    setPrescription((prev) => Math.max(prev - 1, 0));
  };

  const handleMoveRight = () => {
    setPrescription((prev) =>
      Math.min(prev + 1, data.prescriptions.length - 1)
    );
  };

  return !data.prescriptions.length ? (
    <span className="flex justify-between items-center">
      <p>No Prescription Found</p>
      <button
        className="btn btn-warning w-20"
        onClick={() =>
          dispatch(
            openModal({
              modalType: "prescriptionModal",
              title: "Enter Prescription Details",
              data: data,
              apiFuncCallback: apiFuncCallback,
            })
          )
        }
      >
        Add
      </button>
    </span>
  ) : (
    <div className="flex flex-col gap-2">
      <PrescriptionHeader
        data={data?.prescriptions}
        prescription={prescription}
      />
      <table className="table flex flex-col">
        <thead>
          <tr>
            <th>Left Eye:</th>
            <th>Sph</th>
            <th>Cyl</th>
            <th>Axis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{data?.prescriptions[prescription]?.leftEye.sph}</td>
            <td>{data?.prescriptions[prescription]?.leftEye.cyl}</td>
            <td>{data?.prescriptions[prescription]?.leftEye.axis}</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th>Right Eye:</th>
            <th>Sph</th>
            <th>Cyl</th>
            <th>Axis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{data?.prescriptions[prescription]?.rightEye.sph}</td>
            <td>{data?.prescriptions[prescription]?.rightEye.cyl}</td>
            <td>{data?.prescriptions[prescription]?.rightEye.axis}</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th>Near Add:</th>
            <th>Left Eye</th>
            <th>Right Eye</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{data?.prescriptions[prescription]?.nearAdd.leftEye}</td>
            <td>{data?.prescriptions[prescription]?.nearAdd.rightEye}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between">
        <button
          className="btn btn-warning w-20"
          onClick={() =>
            dispatch(
              openModal({
                modalType: "prescriptionModal",
                title: "Enter Prescription Details",
                data: data,
                apiFuncCallback: apiFuncCallback,
              })
            )
          }
        >
          Add
        </button>
        <span className="flex gap-2">
          <button
            className={`btn btn-primary ${
              prescription === 0 && "btn-disabled"
            }`}
            onClick={handleMoveLeft}
          >
            Left
          </button>
          <button
            className={`btn btn-primary ${
              prescription === data.prescriptions.length - 1 && "btn-disabled"
            }`}
            onClick={handleMoveRight}
          >
            Right
          </button>
        </span>
      </div>
    </div>
  );
};
export default PrescriptionDetails;

const PrescriptionHeader = ({ data, prescription }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    if (!isNaN(date)) {
      return date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } else {
      return "Invalid Date";
    }
  };

  return (
    <div className="flex justify-center flex-col gap-2">
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-blue-900  ">
        <div className="stat text-center">
          <div className="text-lg font-semibold">No:</div>
          <div className="stat-title text-lg">
            {prescription + 1} of {data?.length}
          </div>
        </div>
        <div className="stat text-center">
          <div className="text-lg font-semibold">Prescription Date: </div>
          <div className=" stat-title text-lg">
            {formatDate(data[prescription]?.prescriptionDate)}
          </div>
        </div>
        <div className="stat text-center">
          <div className=" text-lg font-semibold">Prescribed By: </div>
          <div className="stat-title text-lg">
            {data[prescription]?.prescribedBy}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 shadow bg-blue-900 py-2">
        <div className="text-lg font-semibold">Eye Sight:</div>
        <div className="stat-title text-lg">{data[prescription]?.eyeSight}</div>
      </div>
    </div>
  );
};
