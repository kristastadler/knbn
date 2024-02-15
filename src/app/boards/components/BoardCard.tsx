import { Board } from "../page"
import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";

interface BoardCardProps {
    board: Board;
}

const BoardCard = (props: BoardCardProps) => {
    const { board } = props
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3 ">
                <p className="text-2xl">{board.title}</p>
            </CardHeader>

            <CardBody>
                <p className="text-lg">{board?.description}</p>
            </CardBody>
        </Card>
    )
  }

export default BoardCard;