import { Board } from "../page"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

interface BoardCardProps {
    board: Board;
}

const BoardCard = (props: BoardCardProps) => {
    const { board } = props
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3 ">
                <p className="text-md">{board.title}</p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="text-md">{board?.description}</p>
            </CardBody>
        </Card>
    )
  }

export default BoardCard;