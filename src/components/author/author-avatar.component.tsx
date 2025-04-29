import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"

const AuthorAvatar = ({avatar}: {avatar: string}) => {
    return (
        avatar ?
        <div className="w-12 h-12 rounded-full relative">
            <Image
                src={avatar}
                alt="author"
                fill
                className="rounded-full object-contain"
            />
        </div>
        :
        <Icon icon="qlementine-icons:user-24" width="48" height="48" className="rounded-full" />
    )
}

export default AuthorAvatar