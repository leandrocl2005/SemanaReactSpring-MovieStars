export type Movie = {
  id: number;
  title: string;
  score: number;
  count: number;
  image: string;
}

export type MoviePage = {
  content: Movie[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  pageNumber: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}