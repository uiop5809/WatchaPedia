import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useMovieSearch from "../../hooks/movie/search/useMovieSearch";
import {
  Base,
  Navigation,
  MenuListWrapper,
  MenuList,
  Menu,
  MenuButton,
  SearchMenu,
  Link,
  TextLogo,
  SearchContainer,
  SearchFormWrapper,
  SearchForm,
  SearchLabel,
  SearchInput,
  SignIn,
  SignUp,
  SearchResultWrapper,
  SearchResultList,
  SearchResultListItem,
} from "./style";

const Header: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const pathname = window.location.pathname;
  const isTv = pathname.indexOf("tv") > -1;

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKeyword(e.target.value);
  };

  const { data: searchResult } = useMovieSearch(searchKeyword);

  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link href="/">
                <TextLogo>
                  <span className="primary">WATCHOUT</span>
                  <span>PEDIA</span>
                </TextLogo>
              </Link>
            </Menu>

            <Menu>
              <Link href="/">
                <MenuButton>영화</MenuButton>
              </Link>
              <Link href="/tv">
                <MenuButton>TV 프로그램</MenuButton>
              </Link>
            </Menu>

            <SearchMenu>
              <SearchContainer>
                <SearchFormWrapper>
                  <SearchForm>
                    <SearchLabel>
                      <AiOutlineSearch />
                      <SearchInput
                        placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                        onChange={handleKeyword}
                      />
                    </SearchLabel>
                  </SearchForm>
                </SearchFormWrapper>
              </SearchContainer>

              <SearchResultWrapper>
                <SearchResultList>
                  {searchResult?.data.results.map((item) => (
                    <Link key={item.id} href={`/movie/${item.id}`}>
                      <SearchResultListItem>{item.title}</SearchResultListItem>
                    </Link>
                  ))}
                </SearchResultList>
              </SearchResultWrapper>
            </SearchMenu>

            <Menu>
              <SignIn>로그인</SignIn>
            </Menu>

            <Menu>
              <SignUp>회원가입</SignUp>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
};

export default Header;
