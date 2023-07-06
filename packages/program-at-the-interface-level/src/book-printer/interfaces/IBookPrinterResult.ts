import {IBookPart} from '../../book/interfaces/IBookPart'

/**
 * Результат печати книги.
 */
export interface IBookPrinterResult {
	/**
	 * Пропущенные части книги. Это те части, для которых не был настроен принтер (не найден был IBookPartPrinter).
	 */
	missingBookParts: IBookPart[]
}