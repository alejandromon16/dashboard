<script context="module">

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'top-nft-collections-and-sales.p.rapidapi.com',
            'X-RapidAPI-Key': 'c3f122004cmshdfe876ace808cc4p1a3924jsn82ff9b6b308f'
        }
    };
    let res;

    export async function load(){
       const res = await fetch(`https://top-nft-collections-and-sales.p.rapidapi.com/collections/30d`, options);
        return {
            props: {
                data: await res.json(),
            }
        }
    };

</script>

<script>
    import FirstWidget from '$lib/components/firstWidget.svelte';
    import CardInfo from '$lib/components/card.svelte';

    export let data;
    const info = data[0];
    const info2 = data.slice(1,4);

    const colorsGradient = [
        'bg-gradient-to-r from-cyan-500 to-blue-500',
        'bg-gradient-to-r from-purple-500 to-pink-500',
        'bg-gradient-to-r from-violet-500 to-fuchsia-500',
    ]
</script>


<div>
    <div class="flex justify-center mt-10">
        <h1 class="text-black text-3xl">Bienvenido al Reporte de Ventas</h1>
    </div>
    <FirstWidget {info}/>
    <div class="mx-20 mt-5 text-2xl font-medium pl-3">
        <h1>Top 3 collections NFT</h1>
    </div>
    <div class="grid grid-cols-3 justify-items-center mt-10 mx-20 gap-10">
        {#each info2 as data}
            <CardInfo info={data} />
        {/each}
    </div>
</div>
