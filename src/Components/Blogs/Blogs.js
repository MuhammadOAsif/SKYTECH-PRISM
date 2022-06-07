import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="p-1 text-white xl:grid xl:grid-cols-2 xl:gap-16 xl:mt-5 xl:p-28 w-5/6 mx-auto">
        <div className="mt-16 font-sans text-xl font-bold text-[#758283] h-[500px] w-[700px] ">
          <h1 className="text-3xl xl:text-4xl text-orange-600">
            What is a context api
          </h1>
          <div className="p-5 mt-10 border rounded-xl">
            <h1 className="mt-5 text-sm xl:text-4xl ">React Context API</h1>
            <p className="mt-5 text-lg xl:text-lg ">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
        </div>
        <div className="font-sans text-4xl font-bold text-[#758283]  h-[500px] w-[700px]">
          <h1 className="pt-16 text-3xl text-orange-600">
            What is a semantic api
          </h1>
          <div className="p-3 pb-5 mt-10 border rounded-xl">
            <h1 className="mt-5 text-3xl ">Semantic Element</h1>
            <p className="mt-5 text-lg ">
              Semantic element <br /> element with meaning A semantic element
              clearly explains its meaning to both the browser and the
              developer. Examples of some elements that are not semantic
              elements: div and span give no idea about their contents. Examples
              of some semantic elements: aside, form, table and article give a
              clear idea of their contents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
