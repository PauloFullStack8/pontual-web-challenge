import {
  Character,
  ResponseMarvelCharacters,
} from '@/@types/response-marvel-characters'
import { API_BASE_URL, PUBLIC_KEY } from '@/constant'
import { createHash } from '@/utils/provider-hash'

export const fetchAllCharacters = async (
  limit: number,
  offset: number,
): Promise<Character[]> => {
  const time = Number(new Date())
  const hash = createHash(time)

  const url = `${API_BASE_URL}/characters?limit=${limit}&offset=${offset}&ts=${time}&apikey=${PUBLIC_KEY}&hash=${hash}`

  try {
    const response = await fetch(url)
    const data: ResponseMarvelCharacters = await response.json()

    if (data.code === 200) {
      return data.data?.results || []
    } else {
      throw new Error('Error fetching characters from Marvel API')
    }
  } catch (error) {
    throw new Error('Error fetching characters from Marvel API')
  }
}
