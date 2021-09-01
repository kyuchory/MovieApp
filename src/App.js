import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component{
  state = { 
    isLoading : true,
    movies: []
  }

  getMovies = async () =>{
    //const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //axios는 get하는데 시간이 오래걸림. 따라서 async함수로 만들고 await키워드로 기다리게 해야한다.
    const{data:{data:{movies}}} =await axios.get("https://yts.mx/api/v2/list_movies.json");
    //위의 표현은 movies.data.data.movies 를 여러번 안 쓰고 movies로만 쓰게 하기위한 ES6방식
    this.setState({movies:movies, isLoading: false}); // 처음 무비는 setState, 두번째 무비는 axios에서 온거. ==> 그냥 movies하나만 써도 자바스크립트가 이해함

  }

  componentDidMount(){ //마운트되자마자 실행 되는 함수
    // setTimeout(() => { // 몇초 뒤에 실행되는 함수.
    //   this.setState({isLoading: false});
    // }, 6000);
    //이 방식보다 axios를 쓰는게 더 좋다.
    this.getMovies();
  }

  render(){
    const {isLoading} = this.state;
    return(
      <div>{isLoading ? "Loding" : "We are ready"}</div>
    )
  }
}

export default App;

//이런걸 function component라구 부름 클래스 컴포넌트도 있따. //첫번 째 실습
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


//class App extends React.Component{ //두번째 실습 
  //function component와 다른점은 return을 안함. 함수가아니여서.
  //React.Component를 상속받았기때문에 이미 render 메소드 가지고있음.
  //react는 자동적으로 class component의 render method를 실행한다.
  //class component만 state를 사용 할 수 있다. f.c 에선 xx

  //클래스 component에서 마운팅, 업데이트, 언마운팅때 호출할 수 있는 함수, 그 함수의 호출 순서.
  //component의 생명주기라고 이해하면 이해하기 편할것임.

  //클래스 component가 마운팅 될때 함수 호출 순서(웹페이지에 리액트가 나타나는 순서)
  //constructor() ==> render() ==> componentDidMount().

  //업데이트 될때 호출되는 순서 (add, minus버튼 눌릴때 바뀌는 것같은 것)
  //render() ==> componentDidUpdate() 

  //클래스 component가 언마운팅 될때 사용가능 함수(웹페이지 이동, 등등 웹 죽을때)
  //componentWillUnmount()

//   componentDidUpdate(){
//     console.log("componentDidUpdate");
//   }

//   componentWillUnmount(){
//     console.log("i'm die !!!!!!!!");
//   }

//   state={ //state안의 데이터는 바뀌는 값을 넣는다...
//     count:0
//   }

//  add = () => {
//    this.setState(current => ({count:current.count+1})); 
//    //setState --> state 객체의 새로운 값 세팅.
//    //state를 set할때, react에서 외보의 상태에 의존하지 않는 가장 좋은 방식. 매개변수를 이용.
//    //현재의 state값을 받아온다고 이해하면 될 것 같당.
//   // 매 순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출 하는 것.
//  }

//  minus = () => {
//     this.setState(current => ({count:current.count-1}));
//   //this.setState({count:this.state.count-1});
//   //별로 좋지 못한 방식.. 매개변수를 이용하라.
// }

// render(){
//   console.log("rendering!!");
//     return (
//     <div>
//       <h1>The number is : {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>
//     //리액트의 버튼요소엔 onClick이라는 속성을 아예갖고있음
//     //자바스크립이였으면 add머시기했어야함.
//     )
//   }
// }