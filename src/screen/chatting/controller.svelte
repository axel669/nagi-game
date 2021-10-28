<script>
    import vars from "svelte-doric/core/util/vars"
    import Text from "../../graph/text.svelte"
    import Rect from "../../graph/rect.svelte"
    import Circle from "../../graph/circle.svelte"

    import genID from "../../gen-id"

    export let x
    export let y
    export let host = false

    const hostInfo = {
        corner: "+",
        name: "NAGIBEAR",
        title: "HOST",
        nameBG: "transparent",
        titleBG: "#43A906",
        titleWidth: 330,
    }
    const skInfo = {
        corner: "-",
        name: "SCOREKEEPER",
        title: "MOD",
        nameBG: "#1F89EC",
        titleBG: "#D02C01",
        titleWidth: 230,
    }

    const rectGradientID = genID()
    const info = host ? hostInfo : skInfo

    const cssVars = {
        x: `${x}px`,
        y: `${y}px`,
    }
</script>

<style>
    g {
        transform: translate(
            var(--x),
            var(--y)
        );
    }
</style>

<g use:vars={cssVars}>
    <defs>
        <linearGradient id={rectGradientID} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#000000" />
            <stop offset="100%" stop-color="#AAAAAA" />
        </linearGradient>
    </defs>
    <Rect
        x={0} y={0}
        width={350} height={400}
        rx={15} ry={15}
        color="url(#{rectGradientID})"
        lineColor="black"
        lineWidth={1}
    />

    <Text
        x={10} y={10}
        size="32px"
        text={info.corner}
        color="white"
        anchor="top left"
    />
    <Rect x={10} y={320} width={330} height={40} color={info.nameBG} />
    <Rect
        x={175 - (info.titleWidth / 2)} y={360}
        width={info.titleWidth} height={20}
        color={info.titleBG}
    />

    <Text x={175} y={340} color="white" size="28px" text={info.name} />
    <Text x={175} y={370} color="white" size="16px" text={info.title} />

    <!-- {#if host}

    {:else}
        <Text x={3} y={0} size="22px" text="-" color="white" />
    {/if} -->
</g>
