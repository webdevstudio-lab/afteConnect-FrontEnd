import React from "react";
import DevisTable from "../_components/DevisTable";

const page = () => {
  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full">
          <DevisTable />
        </div>
      </div>
    </>
  );
};

export default page;
