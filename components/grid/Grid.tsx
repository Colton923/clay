import { GridContextProvider } from './GridContext'

interface Props {
  children: React.ReactNode
}

export default async function Grid({ children }: Props) {
  return <GridContextProvider>{children}</GridContextProvider>
}
