import { Input, Select, Textarea } from "../../components"
import { useNavigate } from 'react-router-dom'
// import { useUserStore } from "../../../store/userStore";
import { useFetchUser } from "../../hooks/useFetch";

export const TaskForm = () => {
  // const Users = useUserStore((state) => state.users);
  // const setUsers = useUserStore((state) => state.setUsers);
  const { data: users, isLoading, error } = useFetchUser()
  const navigate = useNavigate();

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error: {error.message}</>;

  // if (!isLoading && users) setUsers(users);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/55 flex justify-center items-center z-50"
      >
        <div className="bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-2/5 p-5 relative">
          <button
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => navigate('/')}
          >
            ✕
          </button>
          <section className="w-full text-lg">
            <h1 className="text-xl font-oswald text-gray-300 mb-4">Nueva Tarea</h1>
            <article className="flex flex-col gap-6 text-sm font-lato text-gray-500">
              <div className="flex gap-4">
                <div className="w-48">
                  <label>Fecha Inicio</label>
                  <Input type="date"></Input>
                </div>
                <div className="w-48">
                  <label>Fecha Fin</label>
                  <Input type="date"></Input>
                </div>
              </div>
              <div>
                <label>Responsable: </label>
                <Select>
                  {
                    users?.map(({ id, name, lastname, username }) => {
                      return <option key={`${id}-${username}`}>{name} {lastname}</option>
                    })
                  }
                </Select>
              </div>
              <div>
                <label>Descripción</label>
                <Textarea rows={6}>
                </Textarea>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  )
}
