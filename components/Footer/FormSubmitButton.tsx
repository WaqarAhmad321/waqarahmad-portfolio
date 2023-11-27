"use client";

import { LuSendHorizonal } from "react-icons/lu";
import { Button } from "@/components";
import { useFormStatus } from "react-dom";

const FormSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="outlined"
      size="sm"
      className={`flex w-28 items-center justify-center ${
        pending ? "ring-offset-indigo-500" : ""
      }`}
      disabled={pending}
    >
      Send <LuSendHorizonal />
    </Button>
  );
};

export default FormSubmitButton;
