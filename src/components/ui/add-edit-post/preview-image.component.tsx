import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"

interface PreviewImageProps {
    previewImage: string
    deleteImage?: () => void
    classes?: string
    imageRounded?: string
}
const PreviewImage = ({previewImage, deleteImage, classes, imageRounded}: PreviewImageProps) => {
    return (
        <div className={`${classes} relative cursor-pointer group`} onClick={deleteImage}>
            <Image src={previewImage} alt="Preview" fill className={`${imageRounded ? imageRounded : "rounded-lg"} object-cover group-hover:opacity-30 transition-opacity duration-300`}/>
            <Icon icon="material-symbols:close-rounded" width="96" height="96" className="text-red-500 z-10 absolute left-0 right-0 top-0 bottom-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>
    )
}

export default PreviewImage