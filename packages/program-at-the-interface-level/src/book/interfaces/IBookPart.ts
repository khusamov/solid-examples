import {TBookPartType} from '../TBookPartType'

/**
 * Часть книги.
 */
export interface IBookPart {
	/**
	 * Тип части книг. Например заголовок или параграф.
	 */
	readonly type: TBookPartType
}