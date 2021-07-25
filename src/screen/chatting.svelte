<script>
    import Banner from "../comp/banner.svelte"

    import PlayerDisplay from "../comp/player-display.svelte"

    import {
        round,
        question,
        rules,
        player1,
        player2,
        player3,
    } from "./question/state"
</script>

<svelte:head>
    <title>
        Nagi's Game - Chatting Screen
    </title>
</svelte:head>

<style>
    svg {
        position: absolute;
        width: 1440px;
        height: 900px;
    }

    game-background {
        display: block;
        position: absolute;
        width: 1440px;
        height: 900px;
        background-image: url(./bg/main-no-logo.gif);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
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
                src: url(./font/early-gameboy.ttf);
            }
        </style>
    </defs>

    <Banner question={$question} round={$round} />

    <PlayerDisplay
        x={680} y={200}
        name={$player1.name}
        score={$player1.score}
        powers={$player1.powers}
    />
    <PlayerDisplay
        x={1100} y={200}
        name={$player2.name}
        score={$player2.score}
        powers={$player2.powers}
    />
    <PlayerDisplay
        x={1520} y={200}
        name={$player3.name}
        score={$player3.score}
        powers={$player3.powers}
    />
</svg>
