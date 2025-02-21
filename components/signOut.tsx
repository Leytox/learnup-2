import React from "react";
import { Button } from "@/components/ui/button";
import { signOutAll } from "@/actions/auth";
import { LogOutIcon } from "lucide-react";

export default async function SignOut() {
  return (
    <form action={signOutAll}>
      <Button
        type={"submit"}
        size={"icon"}
        className={"flex items-center gap-2"}
        title={"Sign Out"}
      >
        <LogOutIcon />
      </Button>
    </form>
  );
}
