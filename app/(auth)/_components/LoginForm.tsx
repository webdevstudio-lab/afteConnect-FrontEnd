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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { loginMutationFn } from "@/lib/api/authApi";
import { loginSchema } from "@/lib/zodValidator/authValidatorSchema";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LogiForm = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: loginMutationFn,
  });

  //Define your form
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate(values, {
      onSuccess: (response) => {
        setIsSubmitted(true);
        const isActivate = response.data.user.isActivate;
        const userId = response.data.user.id;
        if (!isActivate) {
          toast.success(
            "Veuillez modifier votre mot de passe pour activer votre compte."
          );
          router.replace(`/activation?userId=${userId}`);
        } else {
          router.replace("/home");
          toast.success(response.data.message);
        }
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
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input
                  className="text-xs"
                  type="password"
                  placeholder="•••••••••••••"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className=" cursor-pointer w-full  text-lg h-10"
        >
          {isLoading ? (
            <Loader className="animate-spin" size={28} />
          ) : (
            <p className="flex flex-row items-center gap-2">
              Connexion <ArrowRight />
            </p>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LogiForm;
