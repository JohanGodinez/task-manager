import {Input, Button} from "../../../components"

export const TaskForm = () => {
  return (
    <>
      <form className="w-96 mx-auto rounded-lg p-6 mt-8 bg-white" action="">
        <h2 className="text-xl text-center my-4 font-extrabold font-oswald text-dark">Formulario de registro</h2>
        <Input type="text" placeholder="Nombre"/>
        <Input type="email" placeholder="Correo"/>
        <Input type="password" placeholder="Contraseña"/>
        <Button text="submit" />
      </form>
    </>
  )
}
