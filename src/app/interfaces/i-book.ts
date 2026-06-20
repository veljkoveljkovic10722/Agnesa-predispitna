export interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  articleCode: string;
  description: string;
  isbn: string;
  pageCount: number;
  publicationYear: number;
  price: number;
  rating: number;
  discount: number;
  image: string;
  categoryId: number;
  authorId: number;
  publisherId: number;
}
