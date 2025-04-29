import { updateField } from "./updateFields";
import { Field } from "@/types/PostField";

type SetContent = React.Dispatch<React.SetStateAction<Field[]>>;
export const handleImagePreview = (
  file: File | null,
  setState?: React.Dispatch<React.SetStateAction<string | undefined>>,
  id?: number,
  setContent?: SetContent
) => {
  if (file) {
    const imageUrl = URL.createObjectURL(file);

    if (setState) {
      setState(imageUrl);
    } else if (id !== undefined && setContent) {
      updateField(setContent)(id, imageUrl);
    }
  }
};

export const handleFileSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState?: React.Dispatch<React.SetStateAction<string | undefined>>,
    id?: number,
    setContent?: SetContent
  ) => {
    const file = event.target.files?.[0] || null;
    handleImagePreview(file, setState, id, setContent);
};
  
  export const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    setState?: React.Dispatch<React.SetStateAction<string | undefined>>,
    id?: number,
    setContent?: SetContent
  ) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0] || null;
    handleImagePreview(file, setState, id, setContent);
};
  

export const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
};
