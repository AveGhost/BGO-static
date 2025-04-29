import { Platform } from "./PlatformTypes";
import { Category } from "./CategoryTypes";

export interface Game {
    id: string;
    title: string;
    description: string;
    platform: Platform;
    category: Category;
}