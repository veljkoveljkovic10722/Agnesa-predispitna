export interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
  birthYear: number;
  deathYear?: number;
  nationality?: string;
  biography: string;
  image: string;
}
