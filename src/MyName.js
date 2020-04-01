import React from "react";

//함수형 컴포넌트
const MyName = ({ name1 }) => {
  return <div>안녕하세요! 제 이름은 {name1} 입니다.</div>;
};

MyName.defaultProps = {
  name1: 'velopert'
};
export default MyName;
