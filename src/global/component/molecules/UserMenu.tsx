import React from "react";
import styled from "styled-components";

export const UserMenu: React.FC = () => {
  return (
    <StyledUserMenu>
      <ul>
        <li> 사용자 1</li>
        <li> 사용자 2</li>
        <li> 사용자 3</li>
      </ul>
      <hr />
      <ul>
        <li>이어보기</li>
        <li>다 본 적품</li>
      </ul>
      <hr />
      <ul>
        <li>설정</li>
        <li>공지사항</li>
        <li>고객센터</li>
        <li>로그아웃</li>
      </ul>
    </StyledUserMenu>
  );
};

const StyledUserMenu = styled.div`
  position: absolute;
  right: 24px;
  top: 72px;
  box-sizing: border-box;
  background: rgb(34, 33, 37);
  width: 200px;
  padding: 3px 4px 0 4px;

  ul {
    width: calc(100% - 4px);
    margin-bottom: 10px;

    li {
      color: rgba(255, 255, 255, 0.88);
      padding-left: 10px;
      margin: 10px auto;
    }

    li:hover {
      color: #fff;
    }
  }

  hr {
    border: 1px solid rgb(40, 40, 40);
  }
`;
