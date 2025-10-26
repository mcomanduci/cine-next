"use server";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: { email, password },
    });
    return {
      success: true,
      message: "Logado com sucesso",
    };
  } catch (error) {
    const e = error as Error;
    if (e.message === "Invalid email or password") {
      e.message = "Email ou senha inválidos";
    }
    return {
      success: false,
      message: e.message || "Falha ao logar. Verifique suas credenciais.",
      error: e.message,
    };
  }
};

export const signUp = async (email: string, password: string, name: string) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
    return {
      success: true,
      message: "Logado com sucesso",
    };
  } catch (error) {
    const e = error as Error;
    if (e.message === "Email already in use") {
      e.message = "Email já está em uso";
    }
    return {
      success: false,
      message: e.message || "Falha ao cadastrar. Tente novamente.",
      error: e.message,
    };
  }
};
