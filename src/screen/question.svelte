<script>
    import Rect from "../graph/rect.svelte"
    import Text from "../graph/text.svelte"

    import Banner from "../comp/banner.svelte"
    import RectArea from "../comp/rect-area.svelte"

    import MiniPlayerDisplay from "../comp/mini-player-display.svelte"

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
        answer: { test: "", show: false},
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
    $: answer = currentState.answer
    $: player1 = currentState.player1
    $: player2 = currentState.player2
    $: player3 = currentState.player3

    // import {
    //     round,
    //     question,
    //     rules,
    //     answer,
    //     player1,
    //     player2,
    //     player3,
    // } from "./question/state"
</script>

<svelte:head>
    <title>
        Nagi's Game - Question Round
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

    <RectArea x={940} y={900} width={930} height={140} />
    <Rect
        x={1005}
        y={870}
        width={240}
        height={60}
        rx={20}
        ry={20}
        color="black"
    />
    <Text x={1125} y={900} color="white" text="Rules" size="36px" />
    <Text anchor="top left" x={950} y={935} size="18px" text={rules} />

    <Rect x={110} y={175} width={1148} height={645} lineWidth={2} color="none" lineColor="black" />
    <Rect x={110} y={730} width={1148} height={90} lineWidth={2} color="black" lineColor="black" />
    {#if answer.show}
        <Text anchor="top left" x={115} y={735} color="white" size="24px" text={`Answer:\n${answer.text}`} />
    {/if}

    <MiniPlayerDisplay
        x={1360} y={135}
        name={player1.name} score={player1.score}
        powers={player1.powers}
    />
    <MiniPlayerDisplay
        x={1360} y={390}
        name={player2.name} score={player2.score}
        powers={player2.powers}
    />
    <MiniPlayerDisplay
        x={1360} y={645}
        name={player3.name} score={player3.score}
        powers={player3.powers}
    />
</svg>
