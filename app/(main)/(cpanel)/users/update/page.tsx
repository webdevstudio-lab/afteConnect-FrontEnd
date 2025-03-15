"use client";
import React from "react";
import UpdateUserForm from "../../_components/UpdateForm";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getUserByIdMutationFn } from "@/lib/api/usersApi";
import { Loader, UserRoundX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResetUser from "../../_components/ResetUser";

const page = () => {
  const params = useSearchParams();
  const userId = params.get("id");

  const {
    isLoading,
    isError,
    data: user,
    error,
  } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUserByIdMutationFn(userId as string),
  });

  if (isLoading)
    return (
      <div className="mx-auto w-20">
        <Loader className="animate-spin" size={30} />
      </div>
    );

  if (isError)
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 justify-center">
          <UserRoundX className="text-red-400" size={100} />
          <p className="text-3xl">{error.message}</p>
          <Link href="/users">
            <Button variant={"outline"} className="text-lg cursor-pointer h-10">
              <p className="flex flex-row items-center gap-2">Retour</p>
            </Button>
          </Link>
        </div>
      </div>
    );

  return (
    <>
      <div className="p-12 flex flex-col gap-4">
        <div className="w-full flex flex-row">
          <p className="font-bold text-2xl text-primary">
            Modifier les informations de l'utilisateur
          </p>
        </div>
        <div className="w-1/2">
          <UpdateUserForm user={user} />
          <ResetUser />
        </div>
      </div>
    </>
  );
};

export default page;
