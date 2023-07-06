import {IBook} from '../../book/interfaces/IBook'
import {IBookPrinterResult} from './IBookPrinterResult'

/**
 * Принтер для печати книг.
 */
export interface IBookPrinter {
	/**
	 * Печать книги.
	 * @param {IBook} book
	 */
	print(book: IBook): IBookPrinterResult
}