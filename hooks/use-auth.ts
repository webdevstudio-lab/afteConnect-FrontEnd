"use client";
import { getUserMutationFn } from "@/lib/api/usersApi";
import { useQuery } from "@tanstack/react-query";

const useAuth = () => {
  const query = useQuery({
    queryKey: ["authUser"],
    queryFn: getUserMutationFn,
    // staleTime: Infinity,
  });
  return query;
};

export default useAuth;
