"use client";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getAllUsersMutationFn } from "@/lib/api/usersApi";
import { FilePlus, Loader, User2, UserPlus2, UserRoundX } from "lucide-react";
import Link from "next/link";

const DevisTable = () => {
  const {
    isLoading,
    isError,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsersMutationFn,
  });

  if (isError)
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 justify-center">
          <UserRoundX className="text-red-400" size={100} />
          <p className="text-3xl">{error.message}</p>
          <Link href="/home">
            <Button variant={"outline"} className="text-lg cursor-pointer h-10">
              <p className="flex flex-row items-center gap-2">Retour</p>
            </Button>
          </Link>
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className="mx-auto w-20">
        <Loader className="animate-spin" size={30} />
      </div>
    );

  return (
    <>
      <div className="w-full flex mb-4 flex-row items-center justify-between">
        <p className="font-bold text-4xl text-primary">Liste des Devis</p>

        <Link href="/devis/new">
          <Button className="cursor-pointer flex flex-row">
            <FilePlus size={20} />
            <p>Ajouter un devis</p>
          </Button>
        </Link>
      </div>
      <Table className="cursor-pointer text-surface min-w-full rounded-lg text-start text-xs">
        <TableCaption>Liste des utilisateurs</TableCaption>
        <TableHeader className="rounded-md border-b border-neutral-200 text-primary bg-zinc-50 text-left font-medium">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>NOM DE L'UTILISATEUR</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>POSTE</TableHead>
            <TableHead>ROLE</TableHead>
            <TableHead>STATUT</TableHead>
            <TableHead className="text-right w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>
                <User2 size={15} />
              </TableCell>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.poste}</TableCell>
              <TableCell
                className={
                  user.role === "admin"
                    ? "text-red-500 uppercase text-xs"
                    : "text-green-500 uppercase text-xs"
                }
              >
                {user.role}
              </TableCell>
              <TableCell
                className={
                  user.isActivate === false
                    ? "text-slate-500 text-xs"
                    : "text-slate-900 font-bold text-xs"
                }
              >
                {user.isActivate === false ? "Inactif" : "Actif"}
              </TableCell>

              <TableCell className="text-right">
                <Link href={`/users/update?id=${user.id}`}>
                  <Button
                    className="text-xs cursor-pointer"
                    variant={"outline"}
                  >
                    Modifier
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="w-full">
            <TableCell colSpan={6}>Total</TableCell>
            <TableCell className="text-right">{users.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default DevisTable;
