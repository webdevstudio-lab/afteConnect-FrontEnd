"use client";
import { Button } from "@/components/ui/button";
import { resetUserMutationFn } from "@/lib/api/usersApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ResetUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useSearchParams();
  const userId = params.get("id");

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: resetUserMutationFn,
  });

  const onSubmit = (id: string) => {
    mutate(id, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
        router.replace("/users");
        toast.success(response.data.message);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <>
      <div className="w-full flex gap-4 flex-col bg-blue-100/30 p-4 ronded-lg mt-10">
        <p className="text-md font-bold">
          Réinitialiser le mot de passe de l'utilisateur
        </p>
        <p className="text-xs text-blue-950">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum
          eius! Odio eaque reiciendis tempore quia inventore consectetur magnam
          architecto corrupti, qui, id animi pariatur voluptate est aspernatur
          alias molestiae?
        </p>
        <Button
          onClick={() => onSubmit(userId!)}
          variant={"destructive"}
          className=" cursor-pointer"
        >
          Réinitialiser le mot de passe
        </Button>
      </div>
    </>
  );
};

export default ResetUser;
