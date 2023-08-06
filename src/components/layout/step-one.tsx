import { Button, Typography, Input } from '@/material-tailwind'
import { MdAlternateEmail } from 'react-icons/md'

type StepOneScreenProps = {
  onNextStep: () => void
  error: string
  setEmail: (email: string) => void
}

export const StepOneScreen = ({
  onNextStep,
  error,
  setEmail,
}: StepOneScreenProps) => {
  return (
    <div className="w-[500px] px-6 py-9 bg-white rounded-2xl">
      <Typography variant="h3">
        <img
          src="/svgs/recuperar-senha.svg"
          alt="Recuperar senha"
          className="mb-1.5"
        />
      </Typography>
      <Typography variant="paragraph" className="text-[#777777] mb-3">
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um
        link com as instruções para você redefinir a sua senha.
      </Typography>

      <Input
        label="Email"
        size="lg"
        icon={<MdAlternateEmail />}
        onChange={(e) => setEmail(e.target.value)}
      />

      {error && (
        <div className="text-[#F21A05] text-[12px] gap-1 font-medium flex items-center justify-center my-1">
          {error}
        </div>
      )}

      <Button
        color="blue-gray"
        fullWidth
        className="mt-4 text-center font-normal text-sm py-4"
        onClick={onNextStep}
      >
        Enviar link de recuperação
      </Button>
    </div>
  )
}
