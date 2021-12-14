import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail  author='Sam' timeAgo='Today at 4PM' blog='Nice Blog Post' avatar={faker.image.image()}/>
      </ApprovalCard>
      <ApprovalCard>        <CommentDetail author='Jane' timeAgo='Today at 9PM' blog='Great Blog Post' avatar={faker.image.image()}/>
</ApprovalCard>
<ApprovalCard>        <CommentDetail  author='John' timeAgo='Today at 6AM' blog='Awsome Blog Post' avatar={faker.image.image()}/>
</ApprovalCard>

      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
 
