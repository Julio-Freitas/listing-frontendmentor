import { Item } from 'types';

export interface CardProps extends Omit<Item, 'new' | 'featured'> {
  isNew: boolean;
  isFeatured: boolean;
  onClickLanguage?: (language?: string) => void;
}
