import dayjs from "dayjs"

const Date = ({date}: {date: string}) => {
    return (
        <span className="text-sm text-zinc-400">{dayjs(date).format("DD.MM.YYYY")}</span>   
    )
}

export default Date