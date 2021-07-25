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
        <linearGradient id={rectGradientID}>
            <stop offset="0%" stop-color="#EA403A" />
            <stop offset="50%" stop-color="#FEDF23" />
            <stop offset="100%" stop-color="#EA403A" />
        </linearGradient>
    </defs>

    <Rect
        x={30}
        y={0}
        width={360}
        height={165}
        color="none"
        lineColor="black"
        lineWidth={1}
    />

    <Rect
        x={0}
        y={165}
        width={420}
        height={75}
        rx={30}
        ry={30}
        color="url(#{rectGradientID})"
        lineWidth={3}
        lineColor="black"
    />

    <Hexagon
        x={65}
        y={175}
        width={45}
        height={55}
        color="#25AAE1"
        lineColor="black"
        lineWidth={2}
    />

    <Rect
        x={95}
        y={173}
        width={285}
        height={35}
        rx={17.5}
        ry={17.5}
        color="#25AAE1"
        lineColor="black"
        lineWidth={2}
    />

    <Text x={237.5} y={190.5} anchor="middle middle" text={name} size="18px" />
    <Text x={67} y={202.5} anchor="middle middle" text={score} size="18px" />

    <Hexagon x={166.25} y={209} width={25} height={30} color="#927957" />
    <Hexagon x={237.5} y={209} width={25} height={30} color="#927957" />
    <Hexagon x={308.75} y={209} width={25} height={30} color="#927957" />

    <image
        x={157} y={215}
        width={16} height={16}
        href="./image/screw.png"
        class:active={powers[0]}
    />
    <image
        x={228} y={216}
        width={16} height={16}
        href="./image/pass.png"
        class:active={powers[1]}
    />
    <image
        x={299} y={216}
        width={16} height={16}
        href="./image/challenge.png"
        class:active={powers[2]}
    />
</g>
