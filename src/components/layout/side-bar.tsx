import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@/material-tailwind'
import Cookies from 'js-cookie'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl">
      <div className="p-4">
        <Typography variant="h5" color="blue-gray">
          <img src="/svgs/group.svg" alt="Logo Pontua" className="w-32" />
        </Typography>
      </div>
      <List>
        <Link href="/">
          <ListItem>
            <ListItemPrefix>
              <img src="/svgs/dashboard.svg" alt="Home" className="h-5 w-5" />
            </ListItemPrefix>
            Home
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link href="/perfil">
          <ListItem>
            <ListItemPrefix>
              <img src="/svgs/perfil.svg" alt="Home" className="h-5 w-5" />
            </ListItemPrefix>
            Perfil
          </ListItem>
        </Link>
        <hr className="my-2 border-blue-gray-50 border-[1.1px]" />
        <ListItem onClick={() => Cookies.remove('authenticatedUser')}>
          <ListItemPrefix>
            <img
              src="/svgs/corner-up-left.svg"
              alt="Home"
              className="h-5 w-5"
            />
          </ListItemPrefix>
          Sair
        </ListItem>
      </List>
    </Card>
  )
}
