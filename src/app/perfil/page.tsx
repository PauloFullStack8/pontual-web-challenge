'use client'

import { PopUp } from '@/components/common/pop-up'
import { Sidebar } from '@/components/layout/side-bar'

import { Tabs } from '@/components/layout/tabs'
import { useSearchParams } from 'next/navigation'

export default function Perfil() {
  const searchParams = useSearchParams()

  const id = Number(searchParams.get('id'))

  if (!id) return <PopUp />

  return (
    <div className="w-full h-screen flex">
      <div>
        <Sidebar />
      </div>

      <div className="p-4">
        <div className="mt-6 mb-9">
          <img src="/svgs/A-Bomb.svg" alt="Home" />
        </div>
        <Tabs id={id} />
      </div>
    </div>
  )
}
