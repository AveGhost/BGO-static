import { Icon } from "@iconify/react/dist/iconify.js"

interface OrderHandlerProps {
    moveUp: () => void
    moveDown: () => void
}
const OrderHandler = ({moveDown, moveUp}: OrderHandlerProps) => {
    return (
        <div className="flex flex-col self-start gap-4 pr-4">
            <span onClick={moveUp} className="cursor-pointer"><Icon icon="icon-park-outline:up" width="24" height="24" /></span>
            <span onClick={moveDown} className="cursor-pointer"><Icon icon="icon-park-outline:down" width="24" height="24" /></span>
        </div>
    )
}

export default OrderHandler