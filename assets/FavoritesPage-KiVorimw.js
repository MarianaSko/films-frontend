import{u as a,a as r,c as o,j as s}from"./index-BnotVz67.js";import{S as n,a as i,M as x}from"./HomePage.styled-Iow_hAhv.js";import"./DatePicker-3A6rprLR.js";const m=a.div`
  h3 {
    text-align: center;
    margin-bottom: 24px;
    text-transform: uppercase;

    @media only screen and (max-width: 550px) {
      margin-bottom: 12px;
      font-size: 14px;
    }
  }
`,l=()=>{const e=r(o);return s.jsxs(m,{children:[s.jsx("h3",{children:"Your favourite movies"}),(e==null?void 0:e.length)===0?s.jsxs(n,{children:["You do not have any movies in your ",s.jsx("span",{children:"favorites list"}),"!"]}):s.jsx(i,{children:e==null?void 0:e.map(t=>s.jsx(x,{movie:t},t._id))})]})};export{l as default};
