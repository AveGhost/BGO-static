const Rating = ({rate, classes}: {rate: number, classes?: string}) => {
    const ratingClass = (rating: number) => {
        if(rating >= 8) {
            return "border-green-700 from-green-700/40 from-0% to-100% text-green-500"
        } else if(rating <= 7 && rating >= 4) {
            return "border-orange-600 from-orange-600/40 from-0% to-100% text-orange-500"
        } else {
            return "border-red-500 from-red-500/40 from-0% to-100% text-red-500"
        }
    }

    return (
        <span className={`mx-auto text-center rounded-full w-12 h-12 flex justify-center items-center border-1 bg-gradient-form-br bg-gradient-to-tl ${ratingClass(rate)} to-zinc-800 font-medium z-10 ${classes}`}>{rate}</span>
    )
}

export default Rating