import React from "react";
import AddClientForm from "../_components/AddClientForm";

const page = () => {
  return (
    <>
      <>
        <div className="p-12 flex flex-col gap-4">
          <div className="w-full flex flex-row">
            <p className="font-bold text-2xl text-primary">
              Ajouter un nouveau client
            </p>
          </div>
          <div className="w-1/2">
            <AddClientForm />
          </div>
        </div>
      </>
    </>
  );
};

export default page;
