export interface DB {
  movies: Movie[];
}

export interface Movie {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: Category;
  rating: Rating;
  isBookmarked: boolean;
  isTrending: boolean;
}

export enum Category {
  Movie = "Movie",
  TVSeries = "TV Series",
}

export enum Rating {
  E = "E",
  PG = "PG",
  The18 = "18+",
}

export interface Thumbnail {
  trending?: Trending;
  regular: Regular;
}

export interface Regular {
  small: string;
  medium: string;
  large: string;
}

export interface Trending {
  small: string;
  large: string;
}