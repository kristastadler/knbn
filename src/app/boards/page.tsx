import Card from "./components/Card"

export interface Board {
  title: string;
  description?: string;
  privacy: string;
}

async function getData() {
  const res = await fetch('https://mysite-pf0e.onrender.com/boards/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



 
export default async function Boards() {
 const boards = await getData()
  console.log("HERE ARE BOARDS: ", boards)

  return (
    <main>
      {boards.map((board: Board) => (
          <Card board={board}/>
      ))} 
    </main>
  )
}