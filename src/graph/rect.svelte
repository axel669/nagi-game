<script>
    export let x
    export let y
    export let width
    export let height
    export let rx
    export let ry
    export let color = "black"

    export let lineWidth
    export let lineColor
    export let lineDashArray
    export let lineDashOffset
</script>

<style>
    rect {
        vector-effect: non-scaling-stroke;
    }
</style>

<rect
    {x}
    {y}
    {width}
    {height}
    {rx}
    {ry}
    fill={color}

    stroke={lineColor}
    stroke-width={lineWidth}
    stroke-dasharray={lineDashArray}
    stroke-dashoffset={lineDashOffset}
/>
