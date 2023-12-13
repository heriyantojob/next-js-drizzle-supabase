import AdminLayout from "./_components/layout/AdminLayout"

import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import { readUserSession } from "@/lib/auth/session";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


	const { data: userSession } = await readUserSession();

	// if (!userSession.session) {
	// 	return redirect("/");
	// }
  //return <NonAuthLayout withNavbar>{children}</NonAuthLayout>;
  return <div>
    <AdminLayout   userSession={userSession}>
  
      {children}
    </AdminLayout>

  </div>;
}
