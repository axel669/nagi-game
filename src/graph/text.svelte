<script>
    export let color
    export let x = 0
    export let y = 0
    export let text
    export let anchor = "middle middle"
    export let size = "14px"

    const vertAnchorMap = {
        top: "hanging",
        middle: "middle",
        bottom: "auto",
    }
    const horizAnchorMap = {
        left: "start",
        middle: "middle",
        right: "end",
    }

    $: [anchorY, anchorX] = anchor.split(" ")
    $: ax = horizAnchorMap[anchorX]
    $: ay = vertAnchorMap[anchorY]
    $: style = `--x: ${x}px; --y:${y}px; --size: ${size}`
    $: [firstLine, ...lines] = text.toString().split(/\r?\n/)
</script>

<style>
    text {
        transform: translate(var(--x), var(--y));
        font-family: Gameboy;
        font-size: var(--size);
    }
</style>

<text fill={color} dominant-baseline={ay} text-anchor={ax} {style}>
    <tspan x={0}>{firstLine}</tspan>
    {#each lines as line}
        <tspan x={0} dy={size}>{line}</tspan>
    {/each}
</text>
