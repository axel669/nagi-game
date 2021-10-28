<script>
    import Banner from "../comp/banner.svelte"

    import PlayerDisplay from "../comp/player-display.svelte"
    import Player from "./chatting/player.svelte"
    import Controller from "./chatting/controller.svelte"

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
        player4: emptyPlayer,
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
    $: player4 = currentState.player4
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
        background-image: url(/bg/main-bg.png);
    }

    :global(body) {
        overflow: hidden;
    }
</style>

<game-background />

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

    <Player
        num={1}
        x={410} y={165}
        player={player1}
        start="#1655C6"
        end="#A1BBE9"
        corner="#3DC5F1"
    />

    <Player
        num={2}
        x={1170} y={165}
        player={player2}
        start="#ECC410"
        end="#FBEFBD"
        corner="#FEFC01"
    />

    <Player
        num={3}
        x={410} y={620}
        player={player3}
        start="#18961E"
        end="#F1F8F0"
        corner="#0EF22E"
    />

    <Player
        num={4}
        x={1170} y={620}
        player={player4}
        start="#BD1213"
        end="#EDBBBA"
        corner="#FF2020"
    />

    <Controller
        x={30} y={165}
        host
    />
    <Controller
        x={30} y={620}
    />
</svg>
