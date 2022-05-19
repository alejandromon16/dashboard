
<div  class="row mx-5">
    <div class="col-lg-12">
        <div class="row">
            <div class="col-12 mx-3 mt-5">
                <div in:fade="{{duration:3000, delay:2000}}" class="bg-white rounded-lg shadow-md p-5">
                    <div class=" pb-0 flex justify-between">
                        <div>
                            <h4 class="mb-1 font-medium text-lg">Ventas de productos</h4>
                            <p>Total ganado este Mes</p>
                            <h3 class="m-0 font-medium"> 12,555 Bs</h3>
                        </div>
                        <div>
                            <ul>
                                <li class="mr-3 inline-block"><a class="text-dark" href="#">Day</a></li>
                                <li class="inline-block mr-3"><a class="text-dark" href="#">Week</a></li>
                                <li class="inline-block"><a class="text-dark" href="#">Month</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="chart-wrapper"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                    <Line {data} {options} class="block h-[350px]" />
				</div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="w-100 mr-2">
                                <h6>{info.collection_name}</h6>
                                <div class="progress" style="height: 6px">
                                    <div class="progress-bar bg-danger" style="width: 40%"></div>
                                </div>
                            </div>
                            <div class="ml-2 w-100">
                                <h6>iPhone X</h6>
                                <div class="progress" style="height: 6px">
                                    <div class="progress-bar bg-primary" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 


<script>
    import Line from 'svelte-chartjs/src/Line.svelte';
    import { fade } from 'svelte/transition';

    export let info

    let options = {
		responsive: !0,
		maintainAspectRatio: false,
		tooltips: {
			mode: 'index',
			titleFontSize: 12,
			titleFontColor: '#000',
			bodyFontColor: '#000',
			backgroundColor: '#fff',
			titleFontFamily: 'Montserrat',
			bodyFontFamily: 'Montserrat',
			cornerRadius: 10,
			intersect: false
		},
		legend: {
			display: false,
			position: 'top',
			labels: {
				usePointStyle: true,
				fontFamily: 'Montserrat'
			}
		},
		scales: {
			xAxis:{
				display: false,
			},
			y: {
					display: false,
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: true,
						labelString: 'Value'
					}
				}
		},
		title: {
			display: false,
		}
	};
	let data = {
		labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
		type: 'line',
		defaultFontFamily: 'Poppins',
		datasets: [
			{
				data: [0, 15, 57, 12, 85, 10, 50],
				label: info.collection_name,
				fill: true,
				lineTension: 0.4,
				backgroundColor: '#847DFA',
				borderColor: '#847DFA',
				borderWidth: 0.5,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#847DFA'
			},
			{
				label: 'Pixel 2',
				fill: true,
				lineTension: 0.4,
				data: [0, 30, 5, 53, 15, 55, 0],
				backgroundColor: '#F196B0',
				borderColor: '#F196B0',
				borderWidth: 0.5,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#F196B0'
			}
		]
	};
</script>