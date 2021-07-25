<script>
    export let start
    export let end
    export let width = 1
    export let color = "black"
    export let cap = "butt"
    export let dashArray
    export let dashOffset
    let klass
    export {klass as class}
</script>

<style>
    line {
        vector-effect: non-scaling-stroke;
    }
</style>

<line
    x1={start.x}
    y1={start.y}
    x2={end.x}
    y2={end.y}
    stroke={color}
    stroke-width={width}
    stroke-linecap={cap}
    stroke-dasharray={dashArray}
    stroke-dashoffset={dashOffset}
    class={klass}
/>
