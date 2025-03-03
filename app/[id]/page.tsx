import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { signOut } from "./actions";

interface Props {
  params: { id: string };
}

export default async function PrivatePage({ params }: Props) {
  const resolvedParams = await params; // Await params before using its properties
  const { id } = resolvedParams; // Now extract the id safely
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const response = await fetch(`http://localhost:3000/api/users`);
  const user = await response.json();
  return (
    <>
      {user &&
        user.map((u: any) => (
          <p key={u.id}>
            Hello {u.email}, {u.id}
          </p>
        ))}
      <form>
        <button formAction={signOut}>Log Out</button>
      </form>
    </>
  );
}
