interface FormTextAreaProps {
    value: string
    placeholder: string
    name: string
    event: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    classes?: string
}

const FormTextArea = ({value, event, placeholder, name, classes}: FormTextAreaProps) => {
    return (
        <div className={`${classes ? classes : ''}`}>
            <textarea
                value={value}
                className={`w-full border border-zinc-600 rounded-lg py-2 px-4 min-h-[300px]`}
                placeholder={placeholder}
                name={name}
                onChange={event}
            />
        </div>
    )
}

export default FormTextArea