import React, { useState } from "react";
import { BrandIcon, SearchIcon, UnfoldIcon } from "global/component/atoms";
import { TopMenuList, UserMenu } from "global/component/molecules";
import { FlexBox } from "global/style";
import styled from "styled-components";

export const TopNavBar: React.FC = () => {
  const [isUserMenuView, setIsUserMenuView] = useState<boolean>(false);

  const onMouseOverHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    setIsUserMenuView(true);
  };

  const onMouseOutHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    setIsUserMenuView(false);
  };

  return (
    <StyledTopNavBar>
      <BrandIcon />
      <FlexBox justifyContent={"space-between"}>
        <TopMenuList>
          <li className="on">홈</li>
          <li>탐색하기</li>
          <li>평가하기</li>
        </TopMenuList>
        <TopMenuList>
          <li>
            <FlexBox justifyContent={"space-between"}>
              <SearchIcon className={"icon_search"} />
              검색
            </FlexBox>
          </li>
          <li>보고싶어요</li>
          <li onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
            <FlexBox justifyContent={"space-between"}>
              이누리 <UnfoldIcon className={"icon_unfold"} />
            </FlexBox>
          </li>
        </TopMenuList>
      </FlexBox>
      {isUserMenuView && <UserMenu />}
    </StyledTopNavBar>
  );
};

const StyledTopNavBar = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 72px;

  .icon_search {
    margin-right: 6px;
    display: block;
  }

  .icon_unfold {
    margin-left: 6px;
    display: block;
  }
`;
