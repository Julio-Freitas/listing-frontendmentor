import Image from 'next/image';
import { Theme } from 'styles/theme';
import * as Styled from './style';
import { CardProps } from './type';

export const Card = ({
  company,
  contract,
  languages,
  location,
  logo,
  position,
  postedAt,
  onClickLanguage,
  isNew,
  isFeatured
}: CardProps) => (
  <Styled.Card hasBorder={isNew || isFeatured} role="listitem">
    {logo && (
      <Image
        src={logo}
        width={60}
        height={60}
        alt={`card image of ${company}`}
      />
    )}

    <Styled.Content>
      <Styled.Header>
        <label>{company}</label>
        {isNew && (
          <Styled.Tag
            bgColor={Theme.colors.primary.darkCyan}
            data-text="new!"
            data-testid="new"
          />
        )}
        {isFeatured && (
          <Styled.Tag
            bgColor={Theme.colors.secondary.veryDarkGrayinshCyan}
            data-text="isFeatured!"
            data-testid="isFeatured"
          />
        )}
      </Styled.Header>
      <h2>{position}</h2>
      <Styled.Footer>
        <Styled.TextSpan hasBall>{postedAt}</Styled.TextSpan>
        <Styled.TextSpan hasBall>{contract} </Styled.TextSpan>
        <Styled.TextSpan>{location}</Styled.TextSpan>
      </Styled.Footer>
    </Styled.Content>
    <Styled.Skills data-testid="skills">
      {languages?.map((language) => (
        <Styled.Skill
          onClick={() => onClickLanguage && onClickLanguage(language)}
          key={language}
        >
          {language}
        </Styled.Skill>
      ))}
    </Styled.Skills>
  </Styled.Card>
);
