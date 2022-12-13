import HeadNext from 'next/head';
import { HeadProps } from './type';

export const Head = ({ title, description }: HeadProps) => (
  <HeadNext>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </HeadNext>
);
