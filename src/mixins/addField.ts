import { FieldType, Field } from "@/types/PostField";

type SetContent = React.Dispatch<React.SetStateAction<Field[]>>;

export const addField = (setContent: SetContent) => (type: FieldType) => {
    setContent(prevContent => [...prevContent, { id: Date.now(), type, content: "", description: "" }]);
};