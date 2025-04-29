import { Field } from "@/types/PostField";

type SetContent = React.Dispatch<React.SetStateAction<Field[]>>;

export const updateField = (setContent: SetContent) => (id: number, newContent: string, newDescription?: string) => {
    setContent(prev =>
      prev.map(field =>
        field.id === id ? { ...field, content: newContent, description: newDescription?? field.description } : field
      )
    );
};