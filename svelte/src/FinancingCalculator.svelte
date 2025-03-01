<svelte:options tag="financing-calculator" />
<script>
    // component props
    // Camel case not supported for props, see drawback section.
    export let price = 200;
    export let durationMonths = 2;
</script>

<div class="wrapper">
    <p>In {durationMonths} Monaten bei einer monatlicher Rate von {(price / durationMonths).toFixed(2)} EUR finanzieren. <button onClick={() => this.decreaseDuration()}>kürzer</button><button onClick={() => this.increaseDuration()}>länger</button></p></div>



<style>
    .wrapper, p {display: inline-block; margin: 0}
    .wrapper { background-color: deepskyblue; padding: 10px; border-radius: 5px; font-size: 50%; font-weight: 400 }
</style>