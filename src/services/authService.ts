import { Session } from "@supabase/supabase-js";
import { supabase } from "./api";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: Session;
  username: string;
  email: string;
}


export const LoginService = async (data: LoginRequest): Promise<LoginResponse> => {
  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email: data.username,
    password: data.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!authData.session || !authData.user) {
    throw new Error("Usuario o contraseña no valido");
  }

  localStorage.setItem('supabaseSession', JSON.stringify(authData.session));

  return {
    token: authData.session,
    username: authData.user.user_metadata?.username || "",
    email: authData.user.email || "",
  };
};

export const LogoutService = async () => {
  await supabase.auth.signOut();

  localStorage.removeItem('supabaseSession');
}

export const getSession = (): Session | null => {
  const session = localStorage.getItem('supabaseSession');
  return session ? JSON.parse(session) : null;
};
