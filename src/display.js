import QuestionScreen from "./screen/question.svelte"
import Console from "./screen/console.svelte"
import Chatting from "./screen/chatting.svelte"

import params from "./params"

// const hash = document.location.hash.toString().slice(1)
const {screen = "console"} = params
const screenMap = {
    console: Console,
    question: QuestionScreen,
    chat: Chatting,
}

export default screenMap[screen] ?? null
