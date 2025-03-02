<svelte:options tag="financing-calculator" />
<script>
    export let price = 200;
    export let durationMonths = 2;

    const increment = () => {
        durationMonths++
    }
    const decrement = () => {
        durationMonths--
    }

</script>

<div class="wrapper">
    <p>In {durationMonths} Monaten bei einer monatlicher Rate von {(price / durationMonths).toFixed(2)} EUR finanzieren. <button on:click={decrement}>kürzer</button><button  on:click={increment}>länger</button></p></div>



<style>
    .wrapper, p {display: inline-block; margin: 0}
    .wrapper { background-color: deepskyblue; padding: 10px; border-radius: 5px; font-size: 50%; font-weight: 400 }
</style>