import React from "react";
import useStateContext from "../hooks/useStateContext";

export default function Quiz() {
    const { context, setContext } = useStateContext();

    // setContext({ timeTaken: 1 });
    console.log(context);
    return <div>Quiz</div>;
}
