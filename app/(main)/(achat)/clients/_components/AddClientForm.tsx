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
import { Loader, UserPlus2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClientMutationFn } from "@/lib/api/clientApi";
import { clientSchema } from "@/lib/zodValidator/clientValidationSchema";
import { Textarea } from "@/components/ui/textarea";

const AddClientForm = () => {
  const router = useRouter();

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: createClientMutationFn,
  });

  //Define your form
  const form = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      address: "",
      type: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof clientSchema>) => {
    mutate(values, {
      onSuccess: (response) => {
        router.replace("/clients");
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du Client</FormLabel>
              <FormControl>
                <Input
                  className="text-xs"
                  type="text"
                  placeholder="John Doe ETC"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Input
                  className="text-xs"
                  type="text"
                  placeholder="+225 0708091011"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  autoComplete="false"
                  className="text-xs"
                  type="email"
                  placeholder="exemple@africatelecom.pro"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse du client</FormLabel>
              <FormControl>
                <Input
                  className="text-xs"
                  type="text"
                  placeholder=" Abidjan, Côte d'Ivoire"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de client</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Selectionner un Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Entreprise">Entreprise</SelectItem>
                  <SelectItem value="Particulier">Particulier</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Information sur le client</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Informations sur le client"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
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
                Ajouter le client <UserPlus2 />
              </p>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddClientForm;
