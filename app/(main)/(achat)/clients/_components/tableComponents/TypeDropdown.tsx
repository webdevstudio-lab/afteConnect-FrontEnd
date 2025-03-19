import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Building2, Filter, TrainFrontTunnel, UserPlus2 } from "lucide-react";
import React from "react";

type Type = {
  value: string;
  lable: string;
  icon: React.ReactNode;
};

const types: Type[] = [
  {
    value: "entreprise",
    lable: "Entreprise",
    icon: <Building2 />,
  },
  {
    value: "particulier",
    lable: "Particulier",
    icon: <UserPlus2 />,
  },
];

const TypeDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function returnColor(type: string) {
    switch (type) {
      case "entreprise":
        return "bg-green-100";
      case "particulier":
        return "bg-blue-100";
      default:
        break;
    }
  }

  return (
    <>
      <div className="flex items-center space-x-4 ">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className="h-10">
              <span>
                {" "}
                <Filter />{" "}
              </span>{" "}
              Type de client
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-48" side="bottom" align="center">
            <Command className="p-1">
              <CommandList>
                <CommandGroup>
                  {types.map((type) => (
                    <CommandItem
                      key={type.value}
                      value={type.value}
                      className="h-10 mb-2"
                    >
                      <Checkbox className="size-4 rounded-[4px] " />
                      <div
                        className={`flex flex-row gap-2 items-center ${returnColor(
                          type.value
                        )} p-1 rounded-lg px-4 text-xs`}
                      >
                        {type.icon}
                        {type.lable}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
              <div className="flex flex-col gap-2 text-[23px] ">
                <Separator />
                <Button
                  variant={"ghost"}
                  className="cursor-pointer text-xs mb-1"
                >
                  Clear Fiters
                </Button>
              </div>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default TypeDropdown;
