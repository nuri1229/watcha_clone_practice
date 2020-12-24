import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Main } from "./Main";

export const Layout: React.FC = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main></Main>
      <section></section>
      <article></article>
      <aside></aside>
      <footer></footer>
    </>
  );
};
