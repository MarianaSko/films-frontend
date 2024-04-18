import{u as d,a as n,s as l,j as e,b as p,r as o,g as x,B as u}from"./index-CdwiS2UZ.js";import{S as h,a as m,M as g}from"./HomePage.styled-BUhh_hC4.js";import{T as f}from"./DatePicker-D79Wa4nQ.js";const y=d.div`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  input::placeholder {
    color: rgba(18, 20, 23, 0.4);
  }

  @media only screen and (max-width: 550px) {
    margin-bottom: 12px;
    padding: 0;
  }
`,j=({filteredMovies:a})=>{const r=n(l),t=i=>{const s=r.filter(c=>c.title.toLowerCase().includes(i.target.value.toLowerCase()));a(s)};return e.jsx(y,{children:e.jsx(f,{label:"Search movie by title",onChange:t,id:"outlined-start-adornment",sx:{"& input":{width:"240px"}}})})},b=()=>{const a=n(l),r=p(),[t,i]=o.useState([]);return o.useEffect(()=>{r(x()).unwrap().catch(s=>u.error(s))},[r]),o.useEffect(()=>{i(a)},[a]),e.jsxs("div",{children:[e.jsx(j,{filteredMovies:i}),(t==null?void 0:t.length)===0?e.jsxs(h,{children:["We do not have any movies matching your",e.jsx("span",{children:" search query"}),"!"]}):e.jsx(m,{children:Array.isArray(t)&&t.map(s=>e.jsx(g,{movie:s},s._id))})]})};export{b as default};
