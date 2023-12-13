import { logout } from "@/lib/auth/logout"
export function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await logout()
      }}
      className="w-full"
    >
      <button className="btn btn-error text-white"> Log Out</button>

    </form>
  )
}
