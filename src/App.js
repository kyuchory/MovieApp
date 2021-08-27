import React from 'react';



const foodILike = [
  {
    id:1,
    name:"kimchi",
    image:"http://img.danawa.com/prod_img/500000/723/205/img/13205723_1.jpg?shrink=360:360&_v=20210430173652"
  },
  {
    id:2,
    name:"chobab",
    image:"https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000881/img/basic/a0000881_main.jpg"
  },
  {
    id:3,
    name:"bulgogi",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg"
  },
  {
    id:4,
    name:"guksu",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2015/10/14/434379c503e37e6964324965a79d3a101.jpg"
  },
  {
    id:5,
    name:"chicken",
    image:"http://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg"
  },
  //자바스크립트 배열의 객체들 정보 가져오는법
]

function Food({name, picture}){
  return(
    <div>
      <h1>i + love {name}</h1>
      <img src={picture} alt={name}/>
    </div>
    //이렇게 속성을 이용하는 방식 jsx
  )
}

function App() {
  return ( //이 return은 html을 반환.
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image}/>)}
    </div>
    //리액트에서 배열 내의 객체를 전달할때 객체 고유 id(key)를 전달해야함. 그래서 객체에 id 달아주고 그걸 키로 전달해야 오류가 안남.
  );
}

export default App;
