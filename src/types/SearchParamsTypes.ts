import { Platform } from "./PlatformTypes";
import { Category } from "./CategoryTypes";

export interface SearchParams {
    page?: number;
    perPage?: number;
    title?: string;
    platform?: Platform;
    category?: Category;
    totalElements?: number;
}