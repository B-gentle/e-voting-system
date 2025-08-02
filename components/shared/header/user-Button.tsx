import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { signOutAction } from "@/lib/actions/user";
import Link from "next/link";

const UserButton = async () => {
  const session = await auth();
  if (!session) {
    return (
      <Link
        href="/sign-in"
        className="bg-primary text-white p-8 py-2 rounded-lg md:ml-8"
      >
        Login
      </Link>
    );
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full ml-2 flex items-center justify-center bg-primary hover:bg-primary-light text-white"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 align='end'" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="text-sm font-medium leading-none">
              {session.user?.name}
            </div>
            <div className="text-sm text-muted-foreground leading-none">
              {session.user?.email}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem className="p-0 mb-1">
            <form action={signOutAction} className="w-full">
              <Button className="w-full py-4 px-2 h-4 justify-start">
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
