window.onload = function() {
    var furosChart = new Chart(ctx_furos, {
        type: 'bar',
        data: {
            labels: states_total,
            datasets: [{
                label: 'Furos',
                data: count_furos,
                backgroundColor: 'rgba(191, 49, 49, 0.78)',
                borderColor: 'rgba(191, 49, 49, 0.78)',
                borderWidth: 1
            },
            {
                label: 'Total',
                data: count_states,
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    var furosChart2 = new Chart(ctx_furos_only, {
        type: 'bar',
        data: {
            labels: states_furos,
            datasets: [{
                label: 'Furos',
                data: furos,
                backgroundColor: 'rgba(191, 49, 49, 0.78)',
                borderColor: 'rgba(191, 49, 49, 0.78)',
                borderWidth: 1
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
};
