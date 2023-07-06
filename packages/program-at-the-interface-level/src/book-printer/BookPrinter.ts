import {IBook} from '../book/interfaces/IBook'
import {IBookPartPrinter} from './interfaces/IBookPartPrinter'
import {IBookPartPrinterResult} from './interfaces/IBookPartPrinterResult'
import {IBookPrinter} from './interfaces/IBookPrinter'
import {IBookPrinterResult} from './interfaces/IBookPrinterResult'

export abstract class BookPrinter implements IBookPrinter {
	private bookPartPrinters: IBookPartPrinter[]

	public constructor(...bookPartPrinters: IBookPartPrinter[]) {
		this.bookPartPrinters = bookPartPrinters
	}

	public print(book: IBook): IBookPrinterResult {
		const missingBookParts = []
		const bookPartPrinterResults = []
		for (const bookPart of book.parts) {
			const bookPartPrinter = this.bookPartPrinters.find(printer => printer.bookPartType === bookPart.type)
			if (!bookPartPrinter) {
				missingBookParts.push(bookPart)
				continue
			}
			bookPartPrinterResults.push(
				bookPartPrinter.print(bookPart)
			)
		}
		this.printBookPartPrinterResults(bookPartPrinterResults)
		return {
			missingBookParts
		}
	}

	protected abstract printBookPartPrinterResults(bookPartPrinterResults: IBookPartPrinterResult[]): void
}