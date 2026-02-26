import { getServerSession } from "next-auth"
import MenuHeader from "./components/MenuHeader";
import Sidebar from "./components/Sidebar";

export default async function RootLayout() {

  const session: any = await getServerSession()

  return <>
    <MenuHeader
      session={session}
    />
    <Sidebar />
  </>
}