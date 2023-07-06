import {IParagraphBookPart} from '../../book-parts/IParagraphBookPart'
import {HtmlBookPartPrinter} from './HtmlBookPartPrinter'

/**
 * Принтер абзацев книг для HTML-печати.
 */
export class ParagraphHtmlBookPartPrinter extends HtmlBookPartPrinter {
	public bookPartType = 'paragraph'

	public print(bookPart: IParagraphBookPart) {
		const title = bookPart.paragraph
		const headerElement = document.createElement('p')
		headerElement.innerText = title
		return {
			element: headerElement
		}
	}
}