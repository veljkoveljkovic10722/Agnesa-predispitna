export interface IBookFilters {
  keyword: string;
  genre: string;
  sortBy: string;
  priceFrom: number | null;
  priceTo: number | null;
  rating: number | null;
  isDiscounted: boolean;
}

export const DEFAULT_BOOK_FILTERS: IBookFilters = {
  keyword: '',
  genre: '',
  sortBy: '',
  priceFrom: null,
  priceTo: null,
  rating: null,
  isDiscounted: false,
};
