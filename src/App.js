import React from 'react';
import PropTypes from "prop-types";


class App extends React.Component{
  //function component와 다른점은 return을 안함. 함수가아니여서.
  //React.Component를 상속받았기때문에 이미 render 메소드 가지고있음.
  //react는 자동적으로 class component의 render method를 실행한다.
  //class component만 state를 사용 할 수 있다. f.c 에선 xx
  state={ //state안의 데이터는 바뀌는 값을 넣는다...
    count:0
  }

 add = () => {
   console.log("add");
 }

 minus = () => {
  console.log("misnus");
}

render(){
    return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    //리액트의 버튼요소엔 onClick이라는 속성을 아예갖고있음
    //자바스크립이였으면 add머시기했어야함.
    )
  }
}

export default App;

//이런걸 function component라구 부름 클래스 컴포넌트도 있따.
// function App() {
//   return ( //이 return은 html을 반환.
//     <div>
//       {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
//     </div>
//     //리액트에서 배열 내의 객체를 전달할때 객체 고유 id(key)를 전달해야함. 그래서 객체에 id 달아주고 그걸 키로 전달해야 오류가 안남.
//   );
// }

//이 아래는 연습했던거 아까워서 걍 주석처리해서 남겨둠
// const foodILike = [
//   {
//     id:1,
//     name:"kimchi",
//     image:"http://img.danawa.com/prod_img/500000/723/205/img/13205723_1.jpg?shrink=360:360&_v=20210430173652",
//     rating:5
//   },
//   {
//     id:2,
//     name:"chobab",
//     image:"https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000881/img/basic/a0000881_main.jpg",
//     rating:4.5
//   },
//   {
//     id:3,
//     name:"bulgogi",
//     image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
//     rating:4.7
//   },
//   {
//     id:4,
//     name:"guksu",
//     image:"https://recipe1.ezmember.co.kr/cache/recipe/2015/10/14/434379c503e37e6964324965a79d3a101.jpg",
//     rating:3.9
//   },
//   {
//     id:5,
//     name:"chicken",
//     image:"http://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg",
//     rating:4.1
//   },
//   //자바스크립트 배열의 객체들 정보 가져오는법
// ]

// function Food({name, picture, rating}){
//   return(
//     <div>
//       <h1>i + love {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name}/>
//     </div>
//     //이렇게 속성을 이용하는 방식 jsx
//   )
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
//   //prop이 필수적으로 사용됐는지, string인지 등등 검사해줌.
// }
