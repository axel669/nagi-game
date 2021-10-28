<svelte:head>
    <title>Nagi's Game - Console</title>
</svelte:head>

<script>
    import Button from "svelte-doric/core/button"
    import Card from "svelte-doric/core/card"
    import Checkbox from "svelte-doric/core/checkbox"
    import Grid from "svelte-doric/core/layout/grid"
    import TextArea from "svelte-doric/core/text-area.svelte"

    import NumberInput from "../comp/number-input.svelte"
    import Player from "./console/player.svelte"

    import state from "../state-name"
    import {push, peerID, peerCount, peerEvents} from "../push"

    const read = (name, def) => {
        const source = localStorage[name]
        if (source === undefined) {
            return def
        }

        return JSON.parse(source)
    }
    const write = (name, value) => {
        localStorage[name] = JSON.stringify(value)
    }
    const emptyPlayer = {
        name: "",
        score: 0,
        powers: [true, true, true]
    }

    peerEvents.addEventListener(
        "connection",
        () => setTimeout(pushState, 100)
    )

    let round = read(state.round, 1)
    let question = read(state.question, 1)
    let rules = read(state.rules, "")
    let {text, show} = read(state.answer, {text: "", show: false})

    let player1 = read(state.player1, emptyPlayer)
    let player2 = read(state.player2, emptyPlayer)
    let player3 = read(state.player3, emptyPlayer)
    let player4 = read(state.player4, emptyPlayer)

    $: write(state.round, round)
    $: write(state.question, question)
    $: write(state.rules, rules)
    $: (text, show = false)
    $: answer = {text, show}
    $: write(state.answer, answer)
    $: write(state.player1, player1)
    $: write(state.player2, player2)
    $: write(state.player3, player3)
    $: write(state.player4, player4)

    const pushState = () => $push({
        round,
        question,
        rules,
        answer,
        player1,
        player2,
        player3,
        player4
    })
    $: pushState(
        round,
        question,
        rules,
        answer,
        player1,
        player2,
        player3,
        player4
    )

    const openQuestions = () => {
        const params = {
            host: $peerID
        }
        const queryString = (new URLSearchParams(params)).toString()

        navigator.clipboard.writeText(
            new URL(`/question/?${queryString}`, location).toString()
        )
    }
    const openChat = () => {
        const params = {
            host: $peerID
        }
        const queryString = (new URLSearchParams(params)).toString()

        navigator.clipboard.writeText(
            new URL(`/chat/?${queryString}`, location).toString()
        )
    }
</script>

<style>
    console-wrapper {
        display: block;
        margin: auto;
        width: 640px;
    }

    textarea {
        height: 6em;
        padding: 4px;
        border: 1px solid var(--primary);
        margin: 0px;
        background-color: transparent;
        font-family: var(--font);
        font-size: var(--text-size);
        color: var(--text-normal);
    }
    textarea:focus {
        outline: none;
    }
</style>

<console-wrapper>
    <Card color="secondary">
        <svelte:fragment slot="title">
            Game Control Console
        </svelte:fragment>

        <Grid cols={1} rowHeight="auto" padding="4px" gap="8px">
            <div>
                PeerID: {$peerID}<br />
                Connected Screens: {$peerCount}
            </div>

            <Button variant="outline" on:tap={pushState}>
                Force Update Screens
            </Button>

            <Grid cols={2} padding="0px">
                <NumberInput bind:value={round} label="Round" />
                <NumberInput bind:value={question} label="Question" />
            </Grid>

            <Grid cols={1} rowHeight="auto" padding="0px">
                <div>Rules</div>
                <textarea bind:value={rules} />
            </Grid>

            <Grid cols={1} rowHeight="auto" padding="0px">
                <div>Current Answer</div>
                <Checkbox bind:checked={show}>
                    Show Answer
                </Checkbox>
                <textarea bind:value={text} />
            </Grid>

            <Grid cols={2} padding="0px" gap="4px">
                <Player bind:player={player1} playerNumber={1} />
                <Player bind:player={player2} playerNumber={2} />
                <Player bind:player={player3} playerNumber={3} />
                <Player bind:player={player4} playerNumber={4} />
            </Grid>

            <Grid cols={2} padding="0px" gap="4px">
                <Button on:tap={openQuestions} color="primary" variant="outline">
                    Copy Question Screen URL
                </Button>
                <Button on:tap={openChat} color="primary" variant="outline">
                    Copy Chatting Screen URL
                </Button>
            </Grid>
        </Grid>
    </Card>
</console-wrapper>
