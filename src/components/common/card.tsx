import { Typography } from '@/material-tailwind'
import { useRouter } from 'next/navigation'

type CardProps = {
  title: string
  description: string
  image: string
  id: number
}

export const Card = ({ description, image, title, id }: CardProps) => {
  const router = useRouter()

  return (
    <div
      className="flex flex-1 bg-[#EAECF0] p-3 rounded-lg space-x-4 hover:bg-blue-gray-100 cursor-pointer"
      onClick={() => router.push(`/perfil?id=${id}`)}
    >
      <div className="overflow-hidden rounded-lg w-[330px] h-[150px] border">
        <img
          src={image}
          alt="Image Card"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div>
        <Typography variant="h5" className="mb-1">
          {title}
        </Typography>
        <Typography variant="paragraph" className="line-clamp-6">
          {description}
        </Typography>
      </div>
    </div>
  )
}
