import QuestionScreen from "./screen/question.svelte"
import Console from "./screen/console.svelte"
import Chatting from "./screen/chatting.svelte"

const hash = document.location.hash.toString().slice(1)
const screenMap = {
    "": Console,
    question: QuestionScreen,
    chat: Chatting,
}

export default screenMap[hash] ?? null
