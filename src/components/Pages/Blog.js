import React from "react";
import BlogCard from "./BlogCard";
import './Blog.css'
export const Blog = () => {


  const [blogData, setblogData] = React.useState({})
  const [api_link, setapi_link] = React.useState("http://localhost:3001/massbunk/getAllPost")

  
   // const api_link="http://localhost:3001/massbunk/getAllPost";

  React.useEffect(function() {
    console.log("Effect ran")
    
    fetch(api_link)
        .then(res => res.json())
        .then(data => setblogData(data))

    
    
},[api_link])



// let arr=blogData.map(val=>
//   (
//       <BlogCard
    
//       {...val}
  
//       />
  
//     )
//   )


let arr=[];

let n=blogData.length

//console.log(n);


for(let i=0;i<n;i++){
  arr.push(
    <BlogCard
{...blogData[i]}
    />
    
    );
}
//console.log(blogData[0]);

  return (
    <>
    <div class="total_cards">

   {/* <BlogCard
   title="first blog"
   author="sarang"
   content="hi i am sahjhj"
   />

<BlogCard
   title="first blog"
   author="sarang"
   content="hi i am sahjhj hdsvfhdv hdfg hjdsgfhjg ghfghjsdgahj "
   /> */}

   {arr}

   </div>
    </>
  );
};
