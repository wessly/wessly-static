import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

export default class MathClass extends Component {
  lessonsTenKlass = [
    {
      title: "Рационални уравнения",
      presentation: "рационални уравнения.pptx",
    },
    {
      title: "Квадратен корен и ирационални уравнения",
    },
    {
      title: "Неравенства",
      presentation: [
        "дробни неравенства.pptx",
        "метод на интервалите.pptx",
        "неравенства.pptx",
      ],
    },
    {
      title: "Функции",
      presentation: "функции.pptx",
    },
    {
      title: "Системи",
      presentation: "системи.pptx",
    },
    {
      title: "Прогресии",
      presentation: "прогресии.pptx",
    },
  ];

  componentDidMount() {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);
  }
  render() {
    if (this.props.match.params.id === "Уроци-по-математика-за-9-клас") {
      return (
        <div className="container">
          <h3>уроци за 9 клас</h3>
        </div>
      );
    } else if (
      this.props.match.params.id === "Уроци-по-математика-за-10-клас"
    ) {
      return (
        <div className="container">
          <h3 className="center">Уроци по математика за 10 клас</h3>
          <hr />
          <ul className="collapsible">
            {this.lessonsTenKlass.map((lesson, id) => {
              return (
                <li key={id}>
                  <div className="collapsible-header">
                    <i className="material-icons">subject</i>
                    {lesson.title}
                  </div>
                  <div className="collapsible-body">
                    <span>Презентация: </span>
                    <Link to="/" className="waves-effect waves-light btn">
                      <i className="material-icons right">cloud</i>Download
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}
