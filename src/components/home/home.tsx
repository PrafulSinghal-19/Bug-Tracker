import React from "react";
import AppBar from "./appBar";
import Content from "./content";

const Home = (): JSX.Element => {
    return (
        <div>
            <AppBar />
            <Content/>
        </div>
    )
}

export default Home;