import {ITitleBookPart} from '../../book-parts/ITitleBookPart'
import {HtmlBookPartPrinter} from './HtmlBookPartPrinter'

/**
 * Принтер заголовков книг для HTML-печати.
 */
export class TitleHtmlBookPartPrinter extends HtmlBookPartPrinter {
	public bookPartType = 'title'

	public print(bookPart: ITitleBookPart) {
		const title = bookPart.title
		const headerElement = document.createElement('h1')
		headerElement.innerText = title
		return {
			element: headerElement
		}
	}
}