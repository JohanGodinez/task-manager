import React from "react";
import { Input } from "../components";
import { useNavigate } from "react-router-dom";
import { loginSchema, LoginFormData } from "../models/auth.model";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { LoginService } from "../services/authService";
import useAuthStore from "../store/authStore";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuthStore();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: LoginService,
    onSuccess: (data) => {
      login(data.token);
      navigate("/kanban");
    },
    onError: (error) => {
      console.error('Error al iniciar session', error);
    }
  })

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#1F2937]">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-8">
            <div className="bg-[#2D3748] p-8 rounded-lg shadow-xl space-y-6">
              <div>
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-100">
                  Iniciar Sesión
                </h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Usuario
                  </label>
                  <Input
                    id="username"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-md border-0 bg-[#374151] py-2 px-3 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-[#a06cd5] focus:outline-none"
                    placeholder="Ingrese su usuario"
                    {...register('username')}
                  />
                  {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Contraseña
                  </label>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="mt-2 block w-full rounded-md border-0 bg-[#374151] py-2 px-3 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-[#a06cd5] focus:outline-none"
                    placeholder="Ingrese su contraseña"
                    {...register('password')}
                  />
                  {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
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

              {/* <div className="text-sm text-center">

                <Link
                  to="/register"
                  className="text-[#a06cd5] hover:text-[#8a5ac0] transition-colors"
                >
                  ¿No tienes una cuenta? Regístrate
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
