import BoardCard from "./components/BoardCard"

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
    <div className="flex gap-12">
      {boards.map((board: Board) => (
          <BoardCard board={board}/>
      ))} 
    </div>
  )
}