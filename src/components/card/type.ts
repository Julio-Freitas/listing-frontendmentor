import { Item } from 'types';

export interface CardProps extends Omit<Item, 'new' | 'featured'> {
  isNew: boolean;
  isFeatured: boolean;
  filterByLanguages?: string[];
  onClickLanguage?: (language?: string) => void;
}
