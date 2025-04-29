import LinkButton from "../link-button/link-button.component"

const NavButtons = ({classes, onClick}: {classes?: string, onClick?: () => void}) => {
    return (
        <div className={`gap-4 items-center justify-center md:justify-start mt-10 md:mt-0 ${classes}`}>
            <LinkButton href={"/login"} text="Zaloguj" onClick={onClick} />
            <LinkButton href={"/register"} text="Zarejestruj" classes="border-1 border-zinc-600 hover:bg-zinc-600" backgroundColor="transparent" onClick={onClick} />
        </div>
    )
}

export default NavButtons