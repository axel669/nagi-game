<script context="module">
</script>

<script>
    import Line from "./line.svelte"
    import Point from "./point.svelte"
    import SVGText from "./text.svelte"
    import SVGRect from "./rect.svelte"

    export let data
    export let barWidth = 30

    let wrapper = null
    let svg = null
    let scaleX = 1
    let scaleY = 1

    export const scaleText = () => {
        if (svg === null) {
            return
        }
        const matrix = svg.getCTM()
        scaleX = 1 / matrix.a
        scaleY = -1 / matrix.d
    }
    
    $: values = data.map(item => item.value)
    $: max = Math.max(...values)
    $: min = Math.min(...values)
    $: width = values.length * barWidth
    $: height = max * 1.05

    $: if (wrapper !== null) {
        scaleText()
    }

    $: viewbox = `0 -${height} ${width} ${height}`
</script>

<style>
    graph-wrapper {
        display: inline-grid;
    }

    svg {
        width: 100%;
        height: 100%;
    }
</style>

<graph-wrapper bind:this={wrapper} style="--sx: {scaleX}; --sy: {scaleY};">
    <svg {viewbox} bind:this={svg}>
        <g transform="scale(1,-1)">
            {#each data as item, col}
                <SVGRect
                    x={barWidth * col}
                    y={0}
                    width={barWidth}
                    height={item.value}
                    color="tea"
                    lineColor="white"
                    lineWidth={1}
                />
            {/each}
        </g>
    </svg>
</graph-wrapper>
