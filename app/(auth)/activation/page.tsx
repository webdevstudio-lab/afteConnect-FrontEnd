import Logo2 from "@/components/logo/Logo2";
import ActivationForm from "../_components/ActivationForm";

const page = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-4">
          <a href="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex h-8 w-8 items-center justify-center rounded-md">
              <Logo2 />
            </div>
          </a>
          <h1 className="text-xl font-bold">Africa Telecom</h1>
        </div>
        <ActivationForm />
      </div>
    </div>
  );
};

export default page;
