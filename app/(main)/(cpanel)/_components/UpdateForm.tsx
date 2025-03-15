"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader, UserPlus2, UserRoundPen } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { UpdateUserSchema } from "@/lib/zodValidator/userValidationSchema";
import { updateUserMutationFn } from "@/lib/api/usersApi";

const UpdateUserForm = ({ user }: any) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useSearchParams();
  const userId = params.get("id");

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: updateUserMutationFn,
  });

  //Define your form
  const form = useForm<z.infer<typeof UpdateUserSchema>>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      fullname: `${user?.fullname}`,
      poste: `${user?.poste}`,
      role: `${user?.role}`,
      userId: `${userId}`,
    },
  });

  const onSubmit = (values: z.infer<typeof UpdateUserSchema>) => {
    mutate(values, {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom & Prénoms</FormLabel>
              <FormControl>
                <Input
                  className="text-xs"
                  type="text"
                  placeholder="John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel></FormLabel>
              <FormControl>
                <Input
                  className="text-xs"
                  type="text"
                  placeholder="John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="poste"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Poste</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={user?.poste}>
                <FormControl>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Selectionner un poste" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="service_technique">
                    Service Technique
                  </SelectItem>
                  <SelectItem value="service_achat">Service Achat</SelectItem>
                  <SelectItem value="comptabilite">Comptabilité</SelectItem>
                  <SelectItem value="ressources_humaines">
                    Ressources Humaines
                  </SelectItem>
                  <SelectItem value="direction">Direction</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={user?.role}>
                <FormControl>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Selectionner un poste" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="user">Utilisateur</SelectItem>
                  <SelectItem value="admin">Administrateur</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <div className="flex flex-row items-center justify-end mt-8 gap-4">
          <Link href="/users">
            <Button variant={"outline"} className="text-lg cursor-pointer h-10">
              <p className="flex flex-row items-center gap-2">Annuler</p>
            </Button>
          </Link>

          <Button
            type="submit"
            disabled={isLoading}
            className=" cursor-pointer  text-lg h-10"
          >
            {isLoading ? (
              <Loader className="animate-spin" size={28} />
            ) : (
              <p className="flex flex-row items-center gap-2">
                Modifier <UserRoundPen />
              </p>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateUserForm;
