'use client'

import { Button, Typography, Input } from '@/material-tailwind'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { authenticateUser, User } from '@/mock/mock-data'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleLogin = () => {
    setError('')

    const user: User | null = authenticateUser(email, password)

    if (user) {
      Cookies.set('authenticatedUser', JSON.stringify(user))
      router.push('/')
    } else {
      setError('Credenciais são inválidas. Tente novamente.')
    }
  }

  return (
    <div className="w-full h-screen bg-[#00113D] flex flex-col">
      <div className="pt-3 pl-4">
        <img
          src="/imgs/logo_pontua_white.png"
          alt="Logo Pontua"
          className="w-32"
        />
      </div>
      <main className="flex-1 flex items-center justify-center space-x-20 ">
        <div>
          <img
            src="/imgs/bro.png"
            alt=" Image login"
            className="w-[550px] h-[400px] mx-auto"
          />
        </div>

        <div className="bg-white px-7 py-8  rounded-2xl">
          <Typography variant="h3" className="text-[#081B4E]">
            <img
              src="/svgs/Bem-vindo.svg"
              alt="Bem vindo ao Pontua"
              className="mb-1.5"
            />
          </Typography>
          <Typography color="gray" className=" font-normal text-[14px]">
            informe as suas credenciais de acesso ao portal
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-3">
              <Input
                size="lg"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                size="lg"
                label="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              className="mt-6 flex items-center justify-center gap-2"
              fullWidth
              onClick={handleLogin}
            >
              Entrar
              <img
                src="/svgs/login-enter.svg"
                alt="Entrar no Pontua"
                className="my-1"
              />
            </Button>
            {error && (
              <div className="text-[#F21A05] text-[12px] gap-1 font-medium flex items-center justify-center mt-1">
                {error}
              </div>
            )}
            <Typography color="gray" className="mt-4 text-center font-normal">
              <Link
                href="/recovery"
                className="flex items-center justify-end text-[#F21A05] text-[12px] gap-1 font-medium hover:underline hover:cursor-pointer"
              >
                <img src="/svgs/interrogatorio-de-escudo.svg" alt="Icon" />
                Esqueceu a senha?
              </Link>
            </Typography>
          </form>
        </div>
      </main>
    </div>
  )
}
