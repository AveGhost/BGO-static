const ArticleTitle = ({title}: {title: string}) => {
    return (
        <h2 className="md:text-3xl text-2xl mb-4 mt-12 pb-4 font-medium border-b-1 border-zinc-600">{title}</h2>
    )
}

export default ArticleTitle