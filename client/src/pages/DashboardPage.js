import React from "react";
import "./DashboardPage.css";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

const DashboardPage = props => (
  <div className="dashWhole">
    <Banner token={props.token} />
    <h1 className="falaHeader text-center mt-auto pt-0">Fala</h1>

<Layout title="Chat app" />






    
    <div class="card-footer msgInput">
    <form>
      <input className="typeMessage" placeholder="type your message here"></input>
      <button className="btn btn-secondary submitBtn">Send</button>
    </form>
  </div>
  </div>
);

export default DashboardPage;
