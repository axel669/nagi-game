<script>
    import Button from "svelte-doric/core/button"

    export let value
    export let label

    const inc = () => value += 1
    const dec = () => value -= 1
</script>

<style>
    number-input {
        display: grid;
        grid-template-columns: auto 40px 40px 40px;
        border: 1px solid var(--primary);
        border-radius: 4px;
        padding: 4px;
    }

    number-display, label-display {
        display: flex;
        align-items: center;
    }
    number-display {
        justify-content: center;
    }
</style>

<number-input>
    <label-display>
        {label}
    </label-display>
    <Button on:tap={dec}>
        -
    </Button>
    <number-display>
        {value}
    </number-display>
    <Button on:tap={inc}>
        +
    </Button>
</number-input>
