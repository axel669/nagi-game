<script>
    import genID from "../gen-id"

    import Text from "../graph/text.svelte"

    import Hexagon from "./hexagon.svelte"
    import RectArea from "./rect-area.svelte"

    export let question
    export let round

    const hexGradientID = genID()
</script>

<defs>
    <radialGradient id={hexGradientID}>
        <stop offset="0%" stop-color="rgba(0, 0, 0, 0)" />
        <stop offset="100%" stop-color="rgba(0, 0, 0, 0.75)" />
    </radialGradient>
</defs>

<RectArea x={60} y={35} width={1920 - 120} height={90} />
<Hexagon
    x={960} y={0}
    width={140} height={160}
    color="url(#{hexGradientID})"
    lineColor="black"
    lineWidth={3}
/>

<Text anchor="middle middle" x={475} y={80} size="64px" text="Round {round}" />
<Text anchor="middle middle" x={1445} y={80} size="64px" text="Question {question}" />

<image href="./image/logo.png" x={900} y={20} width={120} height={120} />
