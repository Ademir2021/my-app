import MenuHeader from "../components/MenuHeader"
import Sidebar from "../components/Sidebar"

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return <>
  <MenuHeader session={undefined} />
  <div className="flex min-h-screen">
    <Sidebar />
    <main className="flex-1 p-6 bg-gray-50">
      
      {children}
    </main>
  </div>
</>
}