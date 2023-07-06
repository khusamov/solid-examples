import {IBookPart} from './IBookPart'

/**
 * Книга.
 */
export interface IBook<T extends IBookPart = IBookPart> {
	/**
	 * Книга состоит из множества частей.
	 */
	readonly parts: T[]
}