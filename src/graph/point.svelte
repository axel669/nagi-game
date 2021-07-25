<script>
    export let x
    export let y
    export let color = "black"
    export let square = false
    export let size = 1

    $: cap = square ? "square" : "round"
</script>

<style>
    line {
        vector-effect: non-scaling-stroke;
    }
</style>

<line
    x1={x}
    y1={y}
    x2={x}
    y2={y}
    stroke={color}
    stroke-width={size}
    stroke-linecap={cap}
/>
