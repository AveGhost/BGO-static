export interface FormWrapperProps {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const FormWrapper = ({ children, onSubmit }: FormWrapperProps) => {
    return (
        <>
            <form className="login-form flex flex-col gap-4 w-full" onSubmit={e => onSubmit(e)}>
                {children}
            </form>
        </>
    )
}

export default FormWrapper