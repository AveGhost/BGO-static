import { Icon } from "@iconify/react/dist/iconify.js"

interface PostFieldWrapperProps {
    deleteField: (id: number) => void
    children: React.ReactNode
    fieldId: number
    classes?: string
    iconClass?: string
}
const PostFieldWrapper = ({deleteField,children,fieldId,iconClass,classes}: PostFieldWrapperProps) => {
    return (
        <div className={`relative ${classes ? classes : ''}`}>
            <Icon icon="icon-park-outline:close-one" width="24" height="24" className={`text-red-500 min-w-[24px] absolute -top-3 -right-2 z-10 cursor-pointer ${iconClass ? iconClass : ''}`} onClick={() => deleteField(fieldId)}/>
            {children}
        </div>
    )
}

export default PostFieldWrapper