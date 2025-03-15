import { Button } from "@/components/ui/button";
import React from "react";
import AddUserForm from "../../_components/AddUserForm";

const page = () => {
  return (
    <>
      <div className="p-12 flex flex-col gap-4">
        <div className="w-full flex flex-row">
          <p className="font-bold text-2xl text-primary">
            Ajouter un nouvelle utilisateur
          </p>
        </div>
        <div className="w-1/2">
          <AddUserForm />
        </div>
      </div>
    </>
  );
};

export default page;
