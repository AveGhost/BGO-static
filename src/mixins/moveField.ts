import { Field } from "@/types/PostField";

type SetContent = React.Dispatch<React.SetStateAction<Field[]>>;

export const moveFieldUp = (setContent: SetContent) => (index: number) => {
    setContent(prevContent => {
        if (index === 0) return prevContent;
        const newContent = [...prevContent];
        [newContent[index - 1], newContent[index]] = [newContent[index], newContent[index - 1]];
        return newContent;
    });
};
  
export const moveFieldDown = (setContent: SetContent) => (index: number) => {
    setContent(prevContent => {
        if (index === prevContent.length - 1) return prevContent;
        const newContent = [...prevContent];
        [newContent[index], newContent[index + 1]] = [newContent[index + 1], newContent[index]];
        return newContent;
    });
};