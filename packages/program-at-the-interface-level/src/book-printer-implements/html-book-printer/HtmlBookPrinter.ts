import {BookPrinter} from '../../book-printer/BookPrinter'
import {IHtmlBookPartPrinterResult} from './IHtmlBookPartPrinterResult'

/**
 * HTML-печать книг.
 */
export class HtmlBookPrinter extends BookPrinter {
	protected printBookPartPrinterResults(bookPartPrinterResults: IHtmlBookPartPrinterResult[]): void {
		const bodyElement = document.getElementsByTagName('body').item(0)
		for (const bookPartPrinterResult of bookPartPrinterResults) {
			bodyElement.appendChild(bookPartPrinterResult.element)
		}
	}
}