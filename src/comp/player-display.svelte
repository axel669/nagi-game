<script>
    import genID from "../gen-id"

    import Rect from "../graph/rect.svelte"
    import Circle from "../graph/circle.svelte"
    import Text from "../graph/text.svelte"
    import Hexagon from "./hexagon.svelte"

    export let x
    export let y
    export let name
    export let score
    export let powers

    const rectGradientID = genID()
</script>

<style>
    g {
        transform: translate(
            var(--x),
            var(--y)
        );
    }

    image {
        opacity: 0.5;
    }
    image.active {
        opacity: 1;
        filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 1));
    }
</style>

<g style="--x: {x}px; --y: {y}px;">
    <defs>
        <radialGradient id={rectGradientID} gradientTransform="scale(2, 1)" cx="25%" cy="50%">
            <stop offset="0%" stop-color="#FEDF23" />
            <stop offset="85%" stop-color="#EA3C3A" />
        </radialGradient>
    </defs>

    <Rect
        x={0}
        y={0}
        width={380}
        height={380}
        color="none"
        lineColor="black"
        lineWidth={1}
    />

    <Rect
        x={0}
        y={280}
        width={380}
        height={580}
        rx={40}
        ry={40}
        color="#3A3A3C"
        lineColor="black"
        lineWidth={3}
    />
    <Rect
        x={15}
        y={295}
        width={350}
        height={550}
        rx={40}
        ry={40}
        color="url(#{rectGradientID})"
        lineColor="black"
        lineWidth={3}
    />

    <Rect
        x={30}
        y={335}
        width={320}
        height={70}
        rx={17.5}
        ry={17.5}
        color="#25AAE1"
        lineColor="black"
        lineWidth={2}
    />

    <Text x={190} y={370} size="24px" text={name} />



    <Hexagon
        x={190}
        y={725}
        width={85}
        height={100}
        color="#7E6053"
    />
    <Hexagon
        x={100}
        y={675}
        width={85}
        height={100}
        color="#7E6053"
    />
    <Hexagon
        x={280}
        y={675}
        width={85}
        height={100}
        color="#7E6053"
    />
    <image
        x={65} y={695}
        width={56} height={56}
        href="./image/screw.png"
        class:active={powers[0]}
    />
    <image
        x={158} y={750}
        width={56} height={56}
        href="./image/pass.png"
        class:active={powers[1]}
    />
    <image
        x={248} y={700}
        width={56} height={56}
        href="./image/challenge.png"
        class:active={powers[2]}
    />

    <Hexagon
        x={190}
        y={460}
        width={200}
        height={220}
        color="#7E6053"
    />
    <Hexagon
        x={190}
        y={470}
        width={180}
        height={200}
        color="#25AAE1"
        lineColor="black"
        lineWidth={2}
    />
    <Text anchor="middle middle" x={195} y={570} size="52px" text={score} />
</g>
