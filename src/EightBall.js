import React, { userState } from "react";
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random"

/**EightBall Shows random answers to questions on click.
 * 
 * Prop:
 * Answers: Array of {msg, color} objects
 * 
 * State:
 * Amswers: {msg. color} of current answer
 */

function EightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        msg: "What question ponders your soul?",
        color: "black",

    });

    function handleClick(evt) {
        setAnswer(choice(answers));
    }


    return (
        <div
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}
        >
            <b>{answer.msg}</b>
        </div>
    );
}

export default EightBall;