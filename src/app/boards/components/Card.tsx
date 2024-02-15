import { Board } from "../page"

interface CardProps {
    board: Board;
}

const Card = (props: CardProps) => {
    const { board } = props
    return (
        <h1 className="text-5xl font-bold text-center text-white">
          {board.title}
        </h1>
    )
  }

export default Card;