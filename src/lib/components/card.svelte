
<div class="card {color} w-full">
    <a href={info.collection_url}>
        <div class="card-body">
            <h3 class="card-title text-white">{info.collection_name}</h3>
            <div class="d-inline-block">
                <h2 class="text-white text-3xl">{info.volume}</h2>
                <p class="text-white mb-0">{info.trade}</p>
            </div>
            <span class="float-right display-5 opacity-5"><i class="fa fa-users"></i></span>
        </div>
    </a>
    
</div>

<script>
    export let color='bg-gradient-to-r from-cyan-500 to-blue-500';
    export let info;
</script>
