import { Button } from "@/components/ui/button";
import { UserPlus2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import DevisTable from "./_components/DevisTable";

const page = () => {
  return (
    <>
      <div className="w-full px-10 mb-4 flex flex-row items-center justify-between">
        <p className="font-bold text-4xl text-primary">Liste des clients</p>

        <Link href="/clients/new">
          <Button className="cursor-pointer flex flex-row">
            <UserPlus2 />
            <p>Ajouter un Client</p>
          </Button>
        </Link>
      </div>

      <div className="w-full px-10">
        <DevisTable />
      </div>
    </>
  );
};

export default page;
