import useFetchList from 'hooks/useFetchList';
import { Card, Footer, Head, Header } from 'components';
import * as Style from '../styles/styles';
import { useCallback, useMemo, useState } from 'react';
import { Item } from 'types';
import { LanguageType } from './api/types';

export default function Home() {
  const { response, error, loading } = useFetchList();
  const [filterByLanguages, setFilterByLanguages] = useState<LanguageType>([]);

  const data = useMemo(() => {
    const customFilter: Item[] = [];
    response?.data.map((item) => {
      item.languages?.forEach((language) => {
        if (filterByLanguages.includes(language)) {
          customFilter.push(item);
        }
      });
    });

    return customFilter.length
      ? customFilter.filter((item, index, arr) => arr.indexOf(item) === index)
      : response?.data;
  }, [filterByLanguages, response?.data]);

  const handleAddLanguageInFilter = useCallback(
    (value: string) => {
      const newData = filterByLanguages?.includes(value)
        ? filterByLanguages
        : [...filterByLanguages, value];

      setFilterByLanguages(newData);
    },
    [filterByLanguages]
  );

  const renderListing = useMemo(() => {
    if (loading)
      return (
        <Style.Loading>
          <Style.LoadingCard />
        </Style.Loading>
      );
    if (error?.trim() && !loading) return <h1>Algo de errado aconteceu!</h1>;

    return (
      <main>
        <Style.ListCards role="list">
          {data?.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              company={item.company}
              contract={item.contract}
              isFeatured={item.featured}
              languages={item.languages}
              level={item.level}
              location={item.location}
              logo={item.logo}
              position={item.position}
              postedAt={item.postedAt}
              role={item.role}
              tools={item.tools}
              isNew={item.new}
              onClickLanguage={(language) =>
                handleAddLanguageInFilter(language || '')
              }
              filterByLanguages={filterByLanguages}
            />
          ))}
        </Style.ListCards>
      </main>
    );
  }, [loading, error, data, handleAddLanguageInFilter]);

  return (
    <>
      <Head description="Create Listgin whith filter" title="Listing Filter" />
      <Header
        tagsFilter={filterByLanguages}
        onClickTagsHeader={(tag) =>
          setFilterByLanguages(filterByLanguages.filter((item) => item !== tag))
        }
      />
      {renderListing}
      <Footer />
    </>
  );
}
