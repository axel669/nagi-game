<script>
    import vars from "svelte-doric/core/util/vars"
    import Text from "../../graph/text.svelte"
    import Rect from "../../graph/rect.svelte"
    import Circle from "../../graph/circle.svelte"

    import genID from "../../gen-id"

    export let player
    export let num
    export let x
    export let y
    export let start
    export let end
    export let corner

    const rectGradientID = genID()

    $: name = player.name
    $: score = player.score
    $: powers = player.powers

    const cssVars = {
        x: `${x}px`,
        y: `${y}px`,
        start,
        end,
        corner,
    }
</script>

<style>
    g {
        transform: translate(
            var(--x),
            var(--y)
        );
    }
    g :global(text) {
        stroke: black;
    }

    image {
        opacity: 0.5;
    }
    image.active {
        opacity: 1;
        filter: drop-shadow(4px 2px 2px rgba(0, 0, 0, 1));
    }
</style>

<g use:vars={cssVars}>
    <defs>
        <linearGradient id={rectGradientID} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="var(--start)" />
            <stop offset="100%" stop-color="var(--end)" />
        </linearGradient>
    </defs>
    <Rect
        x={0} y={0}
        width={715} height={400}
        rx={35} ry={35}
        color="url(#{rectGradientID})"
        lineColor="black"
        lineWidth={1}
    />

    <Circle
        x={0} y={0}
        radius={25}
        color="var(--corner)"
        lineColor="black"
        lineWidth="1"
    />
    <Text x={3} y={0} size="22px" text="P{num}" color="white" />

    <Rect x={30} y={30} width={450} height={250} color="#000000AA" />

    <Rect
        x={30} y={315}
        width={655} height={60}
        rx={10} ry={10}
        color="#FFFFFFAA"
        lineColor="black"
        lineWidth="2"
    />
    <Text x={357} y={345} size="24px" text={player.name} color="black" />

    <Circle
        x={610} y={105}
        radius={75}
        color="#FFFFFFAA"
        lineColor="black"
        lineWidth="2"
    />
    <Text x={615} y={105} size="48px" text={player.score} color="black" />

    <Circle
        x={575} y={215}
        radius={30}
        color="#FFFFFFAA"
        lineColor="black"
        lineWidth="1"
    />
    <Circle
        x={645} y={215}
        radius={30}
        color="#FFFFFFAA"
        lineColor="black"
        lineWidth="1"
    />
    <Circle
        x={610} y={270}
        radius={30}
        color="#FFFFFFAA"
        lineColor="black"
        lineWidth="1"
    />
    <image
        x={550} y={193}
        width={40} height={40}
        href="/image/screw.png"
        class:active={player.powers[0]}
    />
    <image
        x={623} y={195}
        width={40} height={40}
        href="/image/pass.png"
        class:active={player.powers[1]}
    />
    <image
        x={590} y={250}
        width={40} height={40}
        href="/image/challenge.png"
        class:active={player.powers[2]}
    />
</g>
