import {IBookPartPrinter} from '../../book-printer/interfaces/IBookPartPrinter'
import {IBookPart} from '../../book/interfaces/IBookPart'
import {IHtmlBookPartPrinterResult} from './IHtmlBookPartPrinterResult'

export abstract class HtmlBookPartPrinter implements IBookPartPrinter {
	public abstract bookPartType: string

	public abstract print(bookPart: IBookPart): IHtmlBookPartPrinterResult
}