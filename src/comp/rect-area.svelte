<script>
    import genID from "../gen-id"

    import Rect from "../graph/rect.svelte"
    import Circle from "../graph/circle.svelte"

    export let x
    export let y
    export let width
    export let height

    const rectGradientID = genID()

    // $: x2 = x + width
    // $: y2 = y + height
</script>

<style>
    g {
        transform: translate(
            var(--x),
            var(--y)
        );
    }
</style>

<g style="--x: {x}px; --y: {y}px;">
    <defs>
        <linearGradient id={rectGradientID}>
            <stop offset="0%" stop-color="#EA403A" />
            <stop offset="50%" stop-color="#FEDF23" />
            <stop offset="100%" stop-color="#EA403A" />
        </linearGradient>
    </defs>

    <Rect
        x={0}
        y={0}
        {width}
        {height}
        color="url(#{rectGradientID})"
        lineWidth={3}
        lineColor="black"
    />

    <Circle x={0} y={0} radius={30} lineWidth={3} lineColor="black" color="#0F75BC" />
    <Circle x={0} y={height} radius={30} lineWidth={3} lineColor="black" color="#00A651" />
    <Circle x={width} y={0} radius={30} lineWidth={3} lineColor="black" color="#FFDE16" />
    <Circle x={width} y={height} radius={30} lineWidth={3} lineColor="black" color="#ED1C24" />
</g>
