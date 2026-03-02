import MenuHeader from "../components/MenuHeader"
import Sidebar from "../components/Sidebar"
import { getServerSession } from "next-auth"

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
const session:any = await getServerSession()

  return <>
    <MenuHeader session={session} />
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-2 bg-gray-700 text-white">
        {children}
      </main>
    </div>
  </>
}