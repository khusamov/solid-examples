import {IParagraphBookPart} from './book-parts/IParagraphBookPart'
import {ITitleBookPart} from './book-parts/ITitleBookPart'
import {HtmlBookPrinter} from './book-printer-implements/html-book-printer/HtmlBookPrinter'
import {ParagraphHtmlBookPartPrinter} from './book-printer-implements/html-book-printer/ParagraphHtmlBookPartPrinter'
import {TitleHtmlBookPartPrinter} from './book-printer-implements/html-book-printer/TitleHtmlBookPartPrinter'
import {Book} from './book/Book'

const htmlBookPrinter = (
	new HtmlBookPrinter(
		new TitleHtmlBookPartPrinter,
		new ParagraphHtmlBookPartPrinter
	)
)

const book = (
	new Book<ITitleBookPart | IParagraphBookPart>(
		{
			type: 'title',
			title: 'Заголовок книги'
		},
		{
			type: 'paragraph',
			paragraph: 'Азбац книги'
		}
	)
)

htmlBookPrinter.print(book)