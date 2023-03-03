import React from 'react';
import SideBar from "./SideBar";
import Content from "./Content";
import Login from "./Login";
import Profile from "./profile/Profile";
import Header from "./Header";

function HomePage(props) {
    return (
        <>
  <main>
      <SideBar/>
      <Content/>
  </main>

                    {/*<Login/>*/}
        </>
    );
}

export default HomePage;
