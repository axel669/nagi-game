<script>
    export let x
    export let y
    export let width
    export let height
    export let color
    export let lineColor
    export let lineWidth

    $: dx = width / 2
    $: dy = height / 4

    $: path = [
        ["M", 0, 0],
        ["l", dx, dy],
        ["l", 0, dy * 2],
        ["l", -dx, dy],
        ["l", -dx, -dy],
        ["l", 0, dy * -2],
        ["l", dx, -dy],
        ["z"]
    ]
    $: commands = path.map(cmd => cmd.join(" ")).join(" ")
</script>

<style>
    path {
        transform: translate(
            var(--x),
            var(--y)
        );
    }
</style>

<path
    style="--x: {x}px; --y: {y}px;"
    d={commands}
    fill={color}
    stroke={lineColor}
    stroke-width={lineWidth}
/>
