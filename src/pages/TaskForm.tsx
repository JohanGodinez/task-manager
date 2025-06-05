import { Input, Select, Textarea } from "../components"
import { useNavigate } from 'react-router-dom'
import { useFetchUser } from "../hooks/useFetch";
import { SubmitHandler, useForm } from "react-hook-form";
import { ITask } from "../models";

export const TaskForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ITask>();
  const { data: users, isLoading, error } = useFetchUser()
  const navigate = useNavigate();


  if (isLoading) return <>Loading...</>;
  if (error) return <>Error: {error.message}</>;

  const onSubmit: SubmitHandler<ITask> = (data) => console.log(data)

  return (
    <>
      <div
        className="fixed inset-0 bg-black/55 flex justify-center items-center z-50"
      >
        <div className="bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-2/5 p-5 relative">
          <button
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => navigate('/kanban')}
          >
            ✕
          </button>

          <form className="w-full text-lg" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-oswald text-gray-300 mb-4">Nueva Tarea</h1>
            <article className="flex flex-col gap-6 text-sm font-lato text-gray-500">
              <div className="flex gap-4">
                <div className="w-48">
                  <label>Fecha Inicio</label>
                  <Input type="date" {...register("startDate", { required: true, min: Date.now() })}></Input>
                  {errors.startDate && <span className="text-red-400 font-bold my-2">El campo es requerido</span>}
                </div>
                <div className="w-48">
                  <label>Fecha Fin</label>
                  <Input type="date" {...register('endDate', { required: true })}></Input>
                  {errors.endDate && <span className="text-red-400 font-bold my-2">El campo es requerido</span>}
                </div>
              </div>
              <div>
                <label>Bitrix URL</label>
                <Input type="text" {...register('nobitrix')} />
              </div>
              <div>
                <label>Responsable: </label>
                <Select {...register('user', { required: true })}>
                  {
                    users?.map(({ id, name, lastname, username }) => {
                      return <option key={`${id}-${username}`}>{name} {lastname}</option>
                    })
                  }
                </Select>
                {errors.user && <span className="text-red-400 font-bold my-2">El campo es requerido</span>}
              </div>
              <div>
                <label>Descripción</label>
                <Textarea rows={6} {...register("description", { required: true })}>
                </Textarea>
                {errors.description && <span className="text-red-400 font-bold my-2">El campo es requerido</span>}
              </div>
            </article>
            <Input type="submit" />
          </form>
        </div>
      </div >
    </>
  )
}