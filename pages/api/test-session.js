import { getSession } from 'next-auth/react'
const handler = async (req, res) => {
  const session = await getSession({ req })
  if (!session) {
    res.status(401).json({ error: 'Unauthenticated user' })
  } else {
    res.status(200).json({ message: 'Success', session })
  }
}
export default handler
