import { Button, Typography } from '@/material-tailwind'
import Link from 'next/link'

export const StepTwoScreen = () => {
  return (
    <div className="w-[500px] px-6 py-9 bg-white rounded-2xl flex flex-col gap-3">
      <Typography variant="h3">
        <img
          src="/svgs/tudo-certo.svg"
          alt="Recuperar senha"
          className="mb-1.5"
        />
      </Typography>
      <Typography variant="paragraph" className="text-[#777777] mb-3">
        Foi enviado um e-mail para você com instruções de como redefinir a sua
        senha.
      </Typography>

      <Link href="/login">
        <Button
          color="blue-gray"
          fullWidth
          className="mt-3 text-center font-normal text-sm py-4"
        >
          voltar para o login
        </Button>
      </Link>
    </div>
  )
}
