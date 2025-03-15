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
import { registerMutationFn } from "@/lib/api/authApi";
import { registerSchema } from "@/lib/zodValidator/authValidatorSchema";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddUserForm = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: registerMutationFn,
  });

  //Define your form
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "afte0000",
      poste: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    mutate(values, {
      onSuccess: (response) => {
        setIsSubmitted(true);
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Mot de passe{" "}
                <span className="text-xs bg-blue-500/70 text-white p-1 rounded">
                  Mot de passe Par defauft (afte0000)
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled
                  className="text-xs"
                  type="password"
                  placeholder="afte0000"
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                Créer un compte <UserPlus2 />
              </p>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddUserForm;
