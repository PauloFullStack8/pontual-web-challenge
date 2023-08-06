import { useRouter } from 'next/navigation'
import { Button } from '@/material-tailwind'

export const PopUp = () => {
  const router = useRouter()

  return (
    <div className="w-full h-screen flex flex-col bg-[#00113D] text-white items-center justify-center  font-bold">
      <div className="text-4xl mb-5">Selecione um agente...</div>
      <Button
        color="blue-gray"
        className="ml-4"
        onClick={() => router.push('/')}
      >
        Voltar para o início
      </Button>
    </div>
  )
}
