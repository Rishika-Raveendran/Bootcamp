import React from "react";
import Header from "./headerComponent";
import "../css/home.css";

function Home() {
  const instructions = [
    "1.Lorem ipsum dolor sit amet",
    " 2.Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ",3.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "4.Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.",
    "5.Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.",
  ];
  const list = instructions.map((ins) => {
    return (
      <li className=" rule-list" key={ins[0]}>
        <div>{ins}</div>
        <hr />
      </li>
    );
  });
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5 description">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. .
            </p>
          </div>
          <div className="col-10 offset-1 col-sm-5 offset-sm-2 rules">
            <h2>Rules and Regulations</h2>
            <hr />
            <ul className="list-unstyled">{list}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
