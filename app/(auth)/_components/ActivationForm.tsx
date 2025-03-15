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
import { activationSchema } from "@/lib/zodValidator/authValidatorSchema";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { activationMutationFn } from "@/lib/api/authApi";

const LogiForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const userId = params.get("userId");

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: activationMutationFn,
  });

  //Define your form
  const form = useForm<z.infer<typeof activationSchema>>({
    resolver: zodResolver(activationSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof activationSchema>) => {
    if (!userId) {
      router.replace("/login");
      return;
    }
    const data = {
      password: values.password,
      userId,
    };
    mutate(data, {
      onSuccess: (response) => {
        router.replace("/home");
        toast.success(response.data.message);
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              Activer mon compte <ArrowRight />
            </p>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LogiForm;
