import { Button } from "@/components/ui/button";
import { UserPlus2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import UserTable from "../_components/UserTable";

const page = () => {
  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full">
          <UserTable />
        </div>
      </div>
    </>
  );
};

export default page;
