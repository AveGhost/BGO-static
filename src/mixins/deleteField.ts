import { Field } from "@/types/PostField";

type SetContent = React.Dispatch<React.SetStateAction<Field[]>>;

export const deleteField = (setContent: SetContent) => (id: number) => {
  setContent(prevContent => prevContent.filter(field => field.id !== id));
};