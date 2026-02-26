type Props = {
    session:any
}

export default function MenuHeader ({session}:Props){
    return <>
     <header className="bg-gray-900 text-white shadow-md px-4 py-4">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    
    {/* Título */}
    <h1 className="text-xl md:text-2xl justify-left font-bold tracking-wide md:text-left">
     { session ? "Dashboard - Page Private" : "Home - Page Public" }
    </h1>

    {/* Usuário */}
    {session && (
      <div className="flex items-center justify-end md:justify-end gap-3">
        <div className="text-center md:text-right">
          <p className="text-xs md:text-sm text-gray-300">Bem-vindo</p>
          <p className="text-sm md:text-base font-semibold">
            {session.user?.name}
          </p>
        </div>
        <img
          className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-blue-500 object-cover"
          alt="Avatar"
          src={session.user.image || ""}
        />
      </div>
    )}
  </div>
</header>
    </>
}