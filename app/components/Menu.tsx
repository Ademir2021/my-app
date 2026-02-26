import Link from 'next/link'

export default function Menu() {

  const styles_links = "block px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 font-medium transition duration-200"

  return (
    <nav className="px-6 py-6">
      <span className="text-2xl font-bold text-gray-600 block mb-8">
        MyApp - Menu
      </span>
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            href="/dashboard"
            className={styles_links}
          >Dashboard</Link>
        </li>
        <li>
          <Link
            href="/perfil"
            className={styles_links}
          >Perfil</Link>
        </li>
         <li>
          <Link
            href="/about"
            className={styles_links}
          >About</Link>
        </li>
      </ul>
    </nav>
  )
}