import RatingTableElement from "./rating-table-element.component"

const RatingTable = ({pluses, minuses}: {pluses: string[], minuses: string[]}) => {
    const plusesArray = pluses
    const minusesArray = minuses

    return (
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 my-8">
            <ul className="flex flex-col w-full gap-4">
                {plusesArray.map((plus, index) => <RatingTableElement key={index} text={plus} icon="ic:round-plus" isPositive />)}
            </ul>
            <ul className="flex flex-col w-full gap-4">
                {minusesArray.map((minus, index) => <RatingTableElement key={index} text={minus} icon="ic:round-minus" isPositive={false} />)}
            </ul>
        </div>
    ) 
}

export default RatingTable