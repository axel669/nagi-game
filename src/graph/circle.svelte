<script>
    export let x
    export let y
    export let radius
    export let color = "black"
    export let lineColor
    export let lineWidth
</script>

<style>
    circle {
        vector-effect: non-scaling-stroke;
    }
</style>

<circle
    cx={x}
    cy={y}
    r={radius}
    fill={color}

    stroke={lineColor}
    stroke-width={lineWidth}
/>
