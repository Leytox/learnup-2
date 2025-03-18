import React from "react";
import { Button } from "@/components/ui/button";
import { signOutAll } from "@/actions/auth";
import { LogOutIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SignOut() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"icon"}
          variant={"ghost"}
          className={"flex items-center gap-2"}
          title={"Sign Out"}
        >
          <LogOutIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Out</DialogTitle>
          <DialogDescription>
            Are you sure you want to sign out of your account?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <form action={signOutAll}>
            <Button type="submit" variant="destructive">
              Yes, Sign Out
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
