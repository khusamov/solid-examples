import {IBookPartPrinterResult} from '../../book-printer/interfaces/IBookPartPrinterResult'

/**
 * Результат печати заголовков книг для HTML-печати.
 */
export interface IHtmlBookPartPrinterResult extends IBookPartPrinterResult {
	element: HTMLElement
}