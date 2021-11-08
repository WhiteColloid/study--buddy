import React, { Component } from "react";

import "./quiz.css"
import * as Survey from "survey-react";



import "survey-react/survey.css";
import "./index.css";

Survey.StylesManager.applyTheme("default");

class SurveyComponent extends Component {
    constructor() {
        super();
        
    }
    render() {
        
        const json = { questions: [
  {
    "type": "radiogroup",
    "name": "1",
    "title": "You are given an assignment but have the freedom to choose what type of assignment. Would you pick:",
    "isRequired": true,

    "colCount": 4,
    "choices": [ "FGroup Project and Presentation", "Individual Essay", "Problem Sheet", "Lab working in Partners", "Test"]
  },
  {
    "type": "radiogroup",
    "name": "2",
    "title": "Which book would you choose to read for fun?",
    "isRequired": true,
    "hasNone": false,
    "colCount": 4,
    "choices": [ "A Comic Book ", "Book with Searches/Crosswords", "Heavy Academic Book", "Sci-Fi Fiction", "Audio Book of your Choice"]
  },
  {
    "type": "radiogroup",
    "name": "3",
    "title": "I prefer to work at night than in the morning:",
    "isRequired": true,
    "hasNone": false,
    "colCount": 4,
    "choices": [ "1", "2","3", "4", "5"]
  }
]};
const survey = new Survey.Model(json);

        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent;
