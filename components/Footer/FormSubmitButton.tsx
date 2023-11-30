"use client";

import { LuSendHorizonal } from "react-icons/lu";
import { Button } from "@/components";
import { useFormStatus } from "react-dom";

const FormSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="outlined" size="sm" className="w-28">
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-special"></div>
      ) : (
        <>
          Send <LuSendHorizonal />
        </>
      )}
    </Button>
  );
};

export default FormSubmitButton;
