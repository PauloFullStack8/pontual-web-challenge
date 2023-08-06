import {
  ResponseMarvelCharacter,
  Character,
} from '@/@types/response-marvel-character'

import { API_BASE_URL, PUBLIC_KEY } from '@/constant'
import { createHash } from '@/utils/provider-hash'

export const fetchCharacterById = async (
  characterId: number,
): Promise<Character | null> => {
  const time = Number(Date.now())
  const hash = createHash(time)

  const url = `${API_BASE_URL}/characters/${characterId}?ts=${time}&apikey=${PUBLIC_KEY}&hash=${hash}`

  try {
    const response = await fetch(url)
    const data: ResponseMarvelCharacter = await response.json()

    if (
      data.code === 200 &&
      data.data?.results &&
      data.data.results.length > 0
    ) {
      return data.data.results[0]
    } else {
      return null
    }
  } catch (error) {
    console.error('Error fetching character:', error)
    return null
  }
}
