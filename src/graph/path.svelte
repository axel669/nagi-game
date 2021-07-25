<script>
    export let color
    export let lineWidth = 1
    export let lineColor = "black"
    export let cap = "butt"
    export let dashArray
    export let dashOffset
    export let path
    let klass
    export {klass as class}

    $: commands = path.map(cmd => cmd.join(" ")).join(" ")
</script>

<style>
    path {
        vector-effect: non-scaling-stroke;
    }
</style>

<path
    d={commands}
    fill={color}
    stroke={lineColor}
    stroke-width={lineWidth}
    stroke-linecap={cap}
    stroke-dasharray={dashArray}
    stroke-dashoffset={dashOffset}
    class={klass}
/>
