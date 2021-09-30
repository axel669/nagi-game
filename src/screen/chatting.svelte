<script>
    import Banner from "../comp/banner.svelte"

    import PlayerDisplay from "../comp/player-display.svelte"

    import {messages, connected} from "../push"

    $: console.log("Connected:", $connected)

    const emptyPlayer = {
        name: "",
        score: 0,
        powers: [true, true, true]
    }

    let currentState = {
        round: -1,
        question: -1,
        rules: "",
        player1: emptyPlayer,
        player2: emptyPlayer,
        player3: emptyPlayer,
    }
    $messages.listen(
        newState => currentState = newState
    )

    $: round = currentState.round
    $: question = currentState.question
    $: rules = currentState.rules
    $: player1 = currentState.player1
    $: player2 = currentState.player2
    $: player3 = currentState.player3

    // import {
    //     round,
    //     question,
    //     rules,
    //     player1,
    //     player2,
    //     player3,
    // } from "./question/state"
</script>

<svelte:head>
    <title>
        Nagi's Game - Chatting Screen
    </title>
</svelte:head>

<style>
    svg {
        position: absolute;
        width: 1600px;
        height: 900px;
    }

    game-background {
        display: block;
        position: absolute;
        width: 1600px;
        height: 900px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    video {
        width: 100%;
        height: 100%;
    }

    :global(body) {
        overflow: hidden;
    }
</style>

<game-background>
    <video autoplay muted playsinline loop src="/bg/main-bg.webm" />
</game-background>

<svg viewbox="0 0 1920 1080">
    <defs>
        <style>
            @font-face {
                font-family: Gameboy;
                src: url(/font/early-gameboy.ttf);
            }
        </style>
    </defs>

    <Banner question={question} round={round} />

    <PlayerDisplay
        x={680} y={200}
        name={player1.name}
        score={player1.score}
        powers={player1.powers}
    />
    <PlayerDisplay
        x={1100} y={200}
        name={player2.name}
        score={player2.score}
        powers={player2.powers}
    />
    <PlayerDisplay
        x={1520} y={200}
        name={player3.name}
        score={player3.score}
        powers={player3.powers}
    />
</svg>
