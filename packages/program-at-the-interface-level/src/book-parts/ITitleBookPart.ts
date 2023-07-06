import {IBookPart} from '../book/interfaces/IBookPart'

/**
 * Заголовок книги как ее часть.
 */
export interface ITitleBookPart extends IBookPart {
	type: 'title'
	title: string
}