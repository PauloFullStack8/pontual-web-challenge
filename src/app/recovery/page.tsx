'use client'

import { StepOneScreen } from '@/components/layout/step-one'
import { StepTwoScreen } from '@/components/layout/step-two'
import { isValidEmail } from '@/utils/is-valid-email'
import { useState } from 'react'

export default function Recovery() {
  const [step, setStep] = useState(1)
  const [email, setEmaill] = useState<string>('')
  const [error, setError] = useState<string>('')

  const onNextStep = () => {
    if (!isValidEmail(email)) {
      setError('Credenciais são inválidas. Tente novamente.')
      return
    }

    setStep((oldValue) => oldValue + 1)
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
        {step === 1 && (
          <StepOneScreen
            onNextStep={onNextStep}
            error={error}
            setEmail={setEmaill}
          />
        )}
        {step === 2 && <StepTwoScreen />}
      </main>
    </div>
  )
}
