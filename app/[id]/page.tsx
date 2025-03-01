import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { signOut } from "./actions";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <p>
        Hello {data.user.email}, {data.user.id}
      </p>
      <form>
        <button formAction={signOut}>Log Out</button>
      </form>
    </>
  );
}
