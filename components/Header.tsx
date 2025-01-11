import { UserButton,SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between bg-white p-5 shadow-sm border-b">
      {/* Logo */}
      <Link href="/dashboard" className="text-2xl font-bold">
        Chat to <span className="text-orange-600">PDF</span>
      </Link>


      <SignedOut>
            <SignInButton />
          </SignedOut>

      <SignedIn>
      {/* Navigation */}
      <div className="flex items-center space-x-2">
      <Button asChild variant="link" className="hidden md:flex">
        <Link href="/dashboard/upgrade">Pricing</Link>
      </Button>
         
      <Button asChild variant="outline">
        <Link href="/dashboard">My Documents</Link>
      </Button>

      <Button asChild variant="outline" className="border-indigo-600">
      <Link href="/dashboard/upload">
      <FilePlus2 className="text-orange-600"/>
      </Link>
      </Button>


         <UserButton/>
        </div>
      </SignedIn>
    </div>
  );
}
