import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  padding: 8px 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
`;

function DropdownData (props) {
  const sidebar = (
    <Ul>
      {props.posts.map((post) =>
        <Li key={post.id}>
          {post.title} like your {post.content}
        </Li>
      )}
    </Ul>
  );

  // const content = props.posts.map((post) =>
  //   <div key={post.id}>
  //     <h3>{post.title}</h3>
  //     <p>{post.content}</p>
  //   </div>
  // );

  return (
    <>
      {sidebar}
    </>
  );
}

export default DropdownData;