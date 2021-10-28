<script>
    import Rect from "../graph/rect.svelte"
    import Text from "../graph/text.svelte"

    import Banner from "../comp/banner.svelte"
    import RectArea from "../comp/rect-area.svelte"

    import Player from "./question/player.svelte"
    import Controller from "./question/controller.svelte"

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
        answer: { text: "", show: false},
        player1: emptyPlayer,
        player2: emptyPlayer,
        player3: emptyPlayer,
        player4: emptyPlayer,
    }
    $messages.listen(
        newState => currentState = newState
    )

    $: round = currentState.round
    $: question = currentState.question
    $: rules = currentState.rules.split(/\r?\n/)
    $: showAnswer = currentState.answer.show
    $: answerLines = currentState.answer.text.split(/\r?\n/)
    // $: answer = currentState.answer.split(/\r?\n/)
    $: player1 = currentState.player1
    $: player2 = currentState.player2
    $: player3 = currentState.player3
    $: player4 = currentState.player4
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
        background-image: url(/bg/main-bg.png);
    }

    :global(body) {
        overflow: hidden;
    }
</style>

<game-background />
<svg viewbox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <style>
            @font-face {
                font-family: Gameboy;
                src: url(/font/early-gameboy.ttf);
            }

            div.rules, div.answer {
                display: flex;
                flex-direction: column;
                gap: 4px;
                font-family: Gameboy;
                height: 100%;
                overflow: auto;
            }
            div.rules {
                color: black;
                font-size: 22px;
                padding: 32px 8px;
            }
            div.answer {
                color: white;
                font-size: 16px;
                padding: 4px;
            }

            div.line {
                border-bottom: 3px solid black;
            }
        </style>
    </defs>

    <Banner question={question} round={round} />

    <Player
        num={1}
        x={25} y={810}
        player={player1}
        start="#1655C6"
        end="#A1BBE9"
        corner="#3DC5F1"
    />

    <Player
        num={2}
        x={500} y={810}
        player={player2}
        start="#ECC410"
        end="#FBEFBD"
        corner="#FEFC01"
    />

    <Player
        num={3}
        x={975} y={810}
        player={player3}
        start="#18961E"
        end="#F1F8F0"
        corner="#0EF22E"
    />

    <Player
        num={4}
        x={1450} y={810}
        player={player4}
        start="#BD1213"
        end="#EDBBBA"
        corner="#FF2020"
    />

    <Controller
        x={1470} y={170}
        host
    />
    <Controller
        x={1470} y={490}
    />

    <Banner question={question} round={round} />

    <RectArea x={995} y={185} width={430} height={470} />
    <Rect
        x={1090}
        y={155}
        width={240}
        height={60}
        rx={20}
        ry={20}
        color="black"
    />
    <Text x={1210} y={185} color="white" text="Rules" size="36px" />
    <foreignObject x="995" y="185" width="430" height="470">
        <div class="rules" xmlns="http://www.w3.org/1999/xhtml">
            {#each rules as line}
                <div class="line">{line}</div>
            {/each}
        </div>
    </foreignObject>

    <Rect
        x={20} y={170}
        width={925} height={520}
        lineWidth={2}
        color="none"
        lineColor="black"
    />
    <Rect
        x={20} y={690}
        width={925} height={90}
        lineWidth={1}
        color="black"
        lineColor="black"
    />
    {#if showAnswer}
        <foreignObject x="20" y="690" width="925" height="90">
            <div class="answer" xmlns="http://www.w3.org/1999/xhtml">
                {#each answerLines as line}
                    <div>{line}</div>
                {/each}
            </div>
        </foreignObject>
    {/if}
</svg>
