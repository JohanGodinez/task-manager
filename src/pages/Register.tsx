import { Link } from 'react-router-dom'
import { Input } from '../components'

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1F2937]">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-100">
              Iniciar Sesión
            </h2>
          </div>

          <div className="bg-[#2D3748] p-8 rounded-lg shadow-xl space-y-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  Usuario
                </label>
                <Input
                  id="username"
                  type="text"
                  required
                  className="mt-2 block w-full rounded-md border-0 bg-[#374151] py-2 px-3 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-[#a06cd5] focus:outline-none"
                  placeholder="Ingrese su usuario"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Contraseña
                </label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="mt-2 block w-full rounded-md border-0 bg-[#374151] py-2 px-3 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-[#a06cd5] focus:outline-none"
                  placeholder="Ingrese su contraseña"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 rounded-md bg-[#a06cd5] hover:bg-[#8a5ac0] text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#a06cd5] focus:ring-offset-2 focus:ring-offset-[#2D3748] transition-colors"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>

            <div className="text-sm text-center">

              <Link
                to="/login"
                className="text-[#a06cd5] hover:text-[#8a5ac0] transition-colors"
              >
                Iniciar Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register