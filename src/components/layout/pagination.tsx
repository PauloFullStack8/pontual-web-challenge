'use client'

import { useState } from 'react'
import { IconButton, ButtonGroup } from '@/material-tailwind'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

type Props = {
  handlePageChange: (page: number) => void
}

export const Pagination = ({ handlePageChange }: Props) => {
  const [active, setActive] = useState(1)

  const getItemProps = (index: number) => ({
    className: active === index ? 'bg-blue-gray-100 text-blue-gray-900' : '',
    onClick: () => setActive(index),
  })

  const next = () => {
    if (active === 5) return

    setActive(active + 1)
    handlePageChange(active + 1)
  }

  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
    handlePageChange(active - 1)
  }

  return (
    <div className="w-full pb-20 flex items-center justify-center">
      <ButtonGroup variant="outlined" color="blue-gray">
        <IconButton onClick={prev}>
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
        <IconButton onClick={next}>
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </ButtonGroup>
    </div>
  )
}
