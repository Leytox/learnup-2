"use client";
import { useSearchParams } from "next/navigation";
import { AlertTriangleIcon, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <main className=" flex items-center justify-center p-4">
      <div className="container max-w-md rounded-lg shadow-lg p-8">
        {error === "OAuthAccountNotLinked" ? (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <AlertTriangleIcon className="h-16 w-16 text-amber-500" />
            </div>
            <h1 className="text-3xl font-bold">Account Already Exists</h1>
            <p>
              This email is already associated with an account using a different
              sign-in method.
            </p>
            <div className="pt-4">
              <Link href="/login">
                <Button>
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Return to login
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <AlertTriangleIcon className="h-16 w-16 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold">Authentication Error</h1>
            <p>
              {error || "An unexpected error occurred during authentication."}
            </p>
            <div className="pt-4">
              <Link href={"/"}>
                <Button>
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
