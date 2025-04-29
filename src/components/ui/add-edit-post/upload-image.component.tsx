import FormFile from "../form/form-file/form-file.component"
import Button from "../button/button.component"
import FormInput from "../form/form-input.component"
import { handleFileSelect, handleDragOver, handleDrop } from "@/mixins/handleFileInput"

interface UploadImageProps {
    setPreviewThumbnail: React.Dispatch<React.SetStateAction<string | undefined>>
    previewThumbnailUrl: string | undefined
    setPreviewThumbnailUrl: React.Dispatch<React.SetStateAction<string | undefined>>
    height?: string
}

const UploadImage = ({setPreviewThumbnail, previewThumbnailUrl, setPreviewThumbnailUrl, height}: UploadImageProps) => {
    return (
        <FormFile 
            icon="material-symbols:upload-rounded"
            id="image" 
            name="image" 
            event={(e) => handleFileSelect(e, setPreviewThumbnail)} 
            handleDragOver={(e) => handleDragOver(e)} 
            handleDrop={(e) => handleDrop(e, setPreviewThumbnail)}
            height={height}
        >
            <span className="text-sm text-zinc-400">Lub</span>
            <div className="grid grid-cols-[1fr_120px] gap-4 p-4 text-sm">
                <FormInput icon="material-symbols:cloud-upload-rounded" type="text" placeholder="Wpisz link do obrazka" name="thumbnail_url" value={previewThumbnailUrl ?? ""} event={(e) => setPreviewThumbnailUrl(e.target.value)} />
                <Button type="button" text="Dodaj" event={[() => setPreviewThumbnail(previewThumbnailUrl),() => setPreviewThumbnailUrl("")]}/>
            </div>
        </FormFile>
    )
}

export default UploadImage