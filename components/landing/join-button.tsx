import Link from "next/link";
import { Button } from "../ui/button";

export default function JoinButton() {
  return (
    <Link href="/login" className={"mt-4"}>
      <Button
        size={"lg"}
        variant={"secondary"}
        className="mt-4 border-b-2 border-green-700"
      >
        Join to students
      </Button>
    </Link>
  );
}
