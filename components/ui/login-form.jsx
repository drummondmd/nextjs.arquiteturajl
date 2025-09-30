'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import z, { custom, email } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"


export function LoginForm({
  className,
  ...props
}) {

const router = useRouter()
  const schema = z.object({
    email: z.email("Insira um email válido"),
    password: z.string("Insira uma senha válida").min(6, "Sua senha deve contar 6 caracteres.")
  })


  const methods = useForm({
    resolver: zodResolver(schema)
  })


  async function onSubmit(data) {
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password
    })

    if (response.error) {
      methods.setError("root", { type: "string", message: "Usuário ou senha inválidos." })
    }else{
      router.push(response.url)

    }

  }


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Entre em sua conta</CardTitle>

          {methods.formState.errors?.root ? (
            <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {methods.formState.errors.root.message}
            </p>
          ) : <CardDescription>
            Acesse sua conta com email e senha
          </CardDescription>}
        </CardHeader>
        <CardContent>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input {...methods.register("email")} id="email" type="text" placeholder="m@example.com" required />
                <p className='border-red-500 text-sm text-red-500 mt-1'>{methods.formState.errors?.email?.message}</p>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href={`/auth/esqueceu-senha`}
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Esqueceu sua senha?
                  </a>
                </div>
                <Input {...methods.register("password")} id="password" type="password" required />
                <p className="border-red-500 text-sm text-red-500 mt-1">{methods.formState.errors?.password?.message}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {methods.formState.isSubmitting ? "Logando..." : "Login"}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Não tem uma conta?{" "}
              <a href="/criar-conta" className="underline underline-offset-4">
                Inscreva-se
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
