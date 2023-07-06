import {IBookPart} from '../book/interfaces/IBookPart'

/**
 * Абзац книги как ее часть.
 */
export interface IParagraphBookPart extends IBookPart {
	type: 'paragraph'
	paragraph: string
}