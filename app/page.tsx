import { getServerSession } from "next-auth"
import MenuHeader from "./components/MenuHeader"
import Sidebar from "./components/Sidebar"

export default async function RootLayout() {

  const session: any = await getServerSession()

  return <>
    <MenuHeader session={session} />
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="min-h-screen flex flex-col w-318 items-center justify-center bg-gray-800 text-white px-4 py-10">

  {/* Título */}
  <div className="text-center mb-10 max-w-2xl">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Distribuição e Estabilidade para sua ( Rede de Dados ).
    </h1>
    <p className="text-gray-300 text-lg">
      Soluções apropriadas para o seu negócio
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

    {/* Card 1 */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <h2 className="text-xl font-semibold mb-3">Card 1</h2>
      <p className="text-gray-400">
        Descrição do primeiro serviço ou solução oferecida.
      </p>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
        Saiba Mais
      </button>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <h2 className="text-xl font-semibold mb-3">Card 2</h2>
      <p className="text-gray-400">
        Descrição do segundo serviço ou solução oferecida.
      </p>
      <button className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">
        Saiba Mais
      </button>
    </div>

  </div>

  <p className="text-gray-300 mt-4 text-lg">Comece agora mesmo</p>

</main>
    </div>
  </>
}