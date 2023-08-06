'use client'

import { useEffect, useState } from 'react'
import { Typography } from '@/material-tailwind'

import styles from './tabs.module.css'
import { Character } from '@/@types/response-marvel-characters'
import { fetchCharacterById } from '@/api/fetch-one-character'

type TabsProps = {
  id: number
}

export const Tabs = ({ id }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const [character, setCharacter] = useState<Character | null>(null)

  const handleTabClick = async (tabNumber: number) => {
    setActiveTab(tabNumber)
  }

  useEffect(() => {
    if (id) {
      const characterId = Number(id)
      fetchCharacter(characterId)
    }

    console.log(character)
  }, [id])

  const fetchCharacter = async (characterId: number) => {
    try {
      const characterData = await fetchCharacterById(characterId)
      setCharacter(characterData)
    } catch (error) {
      console.error('Error fetching character:', error)
    }
  }

  return (
    <div className="px-5">
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === 1 ? styles.active : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Visão Geral
        </div>
        <div
          className={`${styles.tab} ${activeTab === 2 ? styles.active : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Teams
        </div>
        <div
          className={`${styles.tab} ${activeTab === 3 ? styles.active : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Powers
        </div>
        <div
          className={`${styles.tab} ${activeTab === 4 ? styles.active : ''}`}
          onClick={() => handleTabClick(4)}
        >
          Species
        </div>
        <div
          className={`${styles.tab} ${activeTab === 5 ? styles.active : ''}`}
          onClick={() => handleTabClick(5)}
        >
          Authors
        </div>
      </div>

      <div>
        {activeTab === 1 && (
          <div className="flex items-center pb-2">
            <div className="overflow-hidden w-28 border rounded-full">
              <img
                src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                alt="Foto do personagem"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="pl-2">
              <Typography variant="h5" className="mb-1">
                {character?.name}
              </Typography>
              <Typography variant="paragraph" className="line-clamp-6">
                {character?.description || 'Sem descrição...'}
              </Typography>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="flex items-center pb-10">
            <div>
              <ul className="list-disc">
                {character?.series?.items?.map((team, index) => (
                  <li key={index}>{team.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="flex items-center pb-10">
            <div>
              <ul className="list-disc">
                {character?.stories?.items?.map((team, index) => (
                  <li key={index}>{team.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === 4 && (
          <div className="flex items-center pb-10">
            <div>
              <ul className="list-disc">
                {character?.comics?.items?.map((team, index) => (
                  <li key={index}>{team.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === 5 && (
          <div className="flex items-center pb-10">
            <div>
              <ul className="list-disc">
                {character?.urls?.map((team, index) => (
                  <li key={index}>
                    <a
                      href={team.url}
                      target="_blank"
                      className="cursor-pointer hover:underline capitalize"
                      rel="noreferrer"
                    >
                      {team.type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
