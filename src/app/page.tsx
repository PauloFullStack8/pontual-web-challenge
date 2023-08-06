'use client'

import { Character } from '@/@types/response-marvel-characters'
import { fetchAllCharacters } from '@/api/fetch-all-characters'
import { Card } from '@/components/common/card'
import { Pagination } from '@/components/layout/pagination'
import { Sidebar } from '@/components/layout/side-bar'
import { Input } from '@/material-tailwind'
import { useEffect, useState } from 'react'

import { BsSearch } from 'react-icons/bs'

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  const [search, setSearch] = useState<string>('')

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const filteredCharacters = characters.filter((character) => {
    return character.name!.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersData = await fetchAllCharacters(12, (page - 1) * 10)
        setCharacters(charactersData)
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }

    fetchCharacters()
  }, [page])

  return (
    <div className="w-full h-screen flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 p-4">
        <div>
          <Input
            variant="static"
            placeholder="Busque um agente"
            icon={<BsSearch />}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="p-4 flex items-center flex-wrap gap-5">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <Card
                key={character.id}
                image={
                  character.thumbnail?.path +
                  '.' +
                  character.thumbnail?.extension
                }
                title={character.name!}
                description={character.description! || 'Sem descrição'}
                id={Number(character.id)}
              />
            ))
          ) : (
            <div className="text-2xl text-blue-gray-500 flex items-center justify-center w-full pt-5">
              Nenhum agente encontrado
            </div>
          )}
        </div>
        <hr className="my-6 border-blue-gray-50 border-[1.1px]" />
        <Pagination handlePageChange={handlePageChange} />
      </div>
    </div>
  )
}
