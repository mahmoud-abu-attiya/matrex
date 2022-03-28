import React from 'react'
import "./Layout.scss";
import layout1 from "../../../images/watches/layout-1.jpg"
import layout2 from "../../../images/watches/layout-2.jpg"
import layout3 from "../../../images/watches/layout-3.jpg"
import layout4 from "../../../images/watches/layout-4.jpg"
import layout5 from "../../../images/watches/layout-5.jpg"
import layout6 from "../../../images/watches/layout-6.jpg"
import layout7 from "../../../images/watches/layout-7.jpg"
import layout8 from "../../../images/watches/layout-8.jpg"

const Layout = () => {
  return (
    <div className="layout">
      <img src={layout1} alt="watch" />
      <img src={layout2} alt="watch" />
      <img src={layout3} alt="watch" />
      <img src={layout4} alt="watch" />
      <img src={layout5} alt="watch" />
      <img src={layout6} alt="watch" />
      <img src={layout7} alt="watch" />
      <img src={layout8} alt="watch" />
      <img src={layout2} alt="watch" />
      <img src={layout1} alt="watch" />
      <img src={layout4} alt="watch" />
      <img src={layout3} alt="watch" />
      <img src={layout6} alt="watch" />
      <img src={layout5} alt="watch" />
      <img src={layout8} alt="watch" />
      <img src={layout7} alt="watch" />
    </div>
  )
}

export default Layout