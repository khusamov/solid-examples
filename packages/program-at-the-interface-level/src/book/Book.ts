import {IBook} from './interfaces/IBook'
import {IBookPart} from './interfaces/IBookPart'

/**
 * Собственно книга.
 */
export class Book<T extends IBookPart> implements IBook<T> {
	public parts: T[]

	public constructor(...parts: T[]) {
		this.parts = parts
	}
}