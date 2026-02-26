import { getServerSession } from "next-auth"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import MenuHeader from "../components/MenuHeader"
import Sidebar from "../components/Sidebar"

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session:any = await getServerSession()
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  if (!token) {
    redirect('/')
  }

  if (!session) {
    redirect("/")
  }

  return <>
  <MenuHeader session={session} />
  <div className="flex min-h-screen">
    <Sidebar />
    <main className="flex-1 p-6 bg-gray-50">
      
      {children}
    </main>
  </div>
</>
}