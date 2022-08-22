import React, { Component } from "react";

const people = [
  {
    id: "1",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "2",
    img: "https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "3",
    img: "https://images.pexels.com/photos/1458332/pexels-photo-1458332.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "4",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default class ListRendering extends Component {
  renderPeople = () => {
    let view = people.map((person) => {
      return <img className="person" src={person.img} alt="person" />; //key is missing
    });
    return view;
  };

  render() {
    return <div className="comp"> {this.renderPeople()}</div>;
  }
}
