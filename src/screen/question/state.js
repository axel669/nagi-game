import {writable} from "svelte/store"

import state from "../../state-name"

const read = (name, def) => {
    const source = localStorage[name]
    if (source === undefined) {
        return def
    }

    return JSON.parse(source)
}
const emptyPlayer = {
    name: "",
    score: 0,
    powers: [true, true, true]
}

const round = writable(read(state.round, -1))
const question = writable(read(state.question, -1))
const rules = writable(read(state.rules, ""))
const answer = writable(read(state.answer, {text: "", show: false}))
const player1 = writable(read(state.player1, emptyPlayer))
const player2 = writable(read(state.player2, emptyPlayer))
const player3 = writable(read(state.player3, emptyPlayer))

// window.addEventListener(
//     "storage",
//     () => {
//         round.set(read(state.round))
//         question.set(read(state.question))
//         rules.set(read(state.rules))
//         answer.set(read(state.answer))
//         player1.set(read(state.player1))
//         player2.set(read(state.player2))
//         player3.set(read(state.player3))
//     }
// )

export {
    round,
    question,
    rules,
    answer,
    player1,
    player2,
    player3,
}
