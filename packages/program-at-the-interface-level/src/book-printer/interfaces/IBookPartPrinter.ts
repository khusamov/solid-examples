import {IBookPart} from '../../book/interfaces/IBookPart'
import {TBookPartType} from '../../book/TBookPartType'
import {IBookPartPrinterResult} from './IBookPartPrinterResult'

/**
 * Принтер части книги.
 */
export interface IBookPartPrinter {
	/**
	 * Тип части книги, на которую рассчитан данный принтер.
	 */
	readonly bookPartType: TBookPartType

	print(bookPart: IBookPart): IBookPartPrinterResult
}