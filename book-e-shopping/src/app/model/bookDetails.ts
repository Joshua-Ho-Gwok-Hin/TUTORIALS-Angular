import { BookCategory } from "./bookCategory";

export interface BookDetails {

  id: number;
  title: string;
  description: string;
  author: string;
  coAuthor: string;

  qtyForSale: number;
  sellingPrice: number;
  sellingDiscount: number;

  qtyForRent: number;
  rentingPrice: number;
  rentingDiscount: number;

  hasElectBookVersion: boolean;
  electBookPrice: number;
  electBookDiscount: number;

  bookCategories: BookCategory[];

}

  // book: BookDetails = {
  //   id: 0, title: '', description: '',
  //   author: '', coAuthor: '',
  //   qtyForSale:0, sellingPrice: 0, sellingDiscount: 0,
  //   qtyForRent:0, rentingPrice:0, rentingDiscount:0,
  //   hasElectBookVersion: false, electBookPrice:0, electBookDiscount:0,
  // }