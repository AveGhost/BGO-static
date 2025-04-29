export type FieldType = 'HEADING' | 'PARAGRAPH' | 'IMAGE'
export interface Field {
    id: number,
    content: string,
    description: string,
    display_order: number,
    type: string
}