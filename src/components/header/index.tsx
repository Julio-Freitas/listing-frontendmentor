import * as Styled from './style';
import { HeaderProps } from './types';
export const Header = ({ tagsFilter, onClickTagsHeader }: HeaderProps) => (
  <Styled.Header data-testid="header">
    <div />

    {tagsFilter?.length ? (
      <Styled.WrapperTagsFilter role="list-skills-header">
        {tagsFilter.map((item) => (
          <Styled.TagsFilter
            key={item}
            onClick={() => onClickTagsHeader && onClickTagsHeader(item)}
            role="listitem-skills"
          >
            {item}
          </Styled.TagsFilter>
        ))}
      </Styled.WrapperTagsFilter>
    ) : null}
  </Styled.Header>
);
