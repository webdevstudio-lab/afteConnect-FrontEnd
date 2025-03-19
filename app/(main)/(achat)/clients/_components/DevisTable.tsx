"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";
import TypeDropdown from "./tableComponents/TypeDropdown";

const DevisTable = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-3 mb-8 mt-6">
          <div className="flex flex-row justify-between">
            <Input
              placeholder="Rechercher un client..."
              className="max-w-xl h-10"
            />
            <div className="flex items-center gap-4">
              <TypeDropdown />
              <Button variant={"outline"} className="cursor-pointer">
                Category
              </Button>
            </div>
          </div>

          {/* fiter Area */}
          <FiterArea />
        </div>

        {/* Table */}
        <div></div>
      </div>
    </>
  );
};

export default DevisTable;

// FiterArea

function FiterArea() {
  return (
    <>
      <div className="flex gap-3">
        {/* Status */}
        <div className="border-dashed border flex flex-row rounded-sm p-1 gap-2 items-center px-2 text-sm">
          <span className="text-gray-500">Type</span>
          <Separator orientation="vertical" />
          <div className="flex flex-row gap-2 items-center">
            <Badge variant={"secondary"}>Item 1</Badge>
            <Badge variant={"secondary"}>Item 1</Badge>
          </div>
        </div>

        {/* Category */}
        <div className="border-dashed border flex flex-row rounded-sm p-1 gap-2 items-center px-2 text-sm">
          <span className="text-gray-500">Category</span>
          <Separator orientation="vertical" />
          <div className="flex gap-2 items-center">
            <Badge variant={"secondary"}>Item 1</Badge>
            <Badge variant={"secondary"}>Item 1</Badge>
          </div>
        </div>

        <Button variant={"outline"} className="p-1 px-2 cursor-pointer">
          <span>Reinitialiser</span> x
        </Button>
      </div>
    </>
  );
}
