<script>
    import Card from "svelte-doric/core/card"
    import Checkbox from "svelte-doric/core/checkbox"
    import TextInput from "svelte-doric/core/text-input"

    import NumberInput from "../../comp/number-input.svelte"

    export let player
    export let playerNumber

    let {name, score, powers} = player

    $: player = {name, score, powers}
</script>

<style>
    div {
        display: grid;
        padding: 4px;
    }
    name-entry, form {
        display: grid;
    }
    input {
        background-color: transparent;
        color: var(--text-normal);
        font-family: var(--font);
        border: 1px solid white;
        border-radius: 4px;
        padding: 4px;
    }
    input:focus {
        outline: none;
    }
</style>

<Card color="primary">
    <svelte:fragment slot="title">
        Player {playerNumber}
    </svelte:fragment>
    <div>
        <name-entry>
            <span>Name</span>
            <form autocomplete="off">
                <input type="text" bind:value={name} autocomplete="off" />
            </form>
        </name-entry>
        <NumberInput bind:value={score} label="Score" />
        <Checkbox bind:checked={powers[0]}>
            Screw
        </Checkbox>
        <Checkbox bind:checked={powers[1]}>
            Pass
        </Checkbox>
        <Checkbox bind:checked={powers[2]}>
            Challenge
        </Checkbox>
    </div>
</Card>
