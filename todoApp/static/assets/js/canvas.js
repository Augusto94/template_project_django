window.onload = function() {
    var collectionChart1 = new Chart(ctx_all_field_no_partes, {
        type: 'bar',
        data: {
            labels: all_states,
            datasets: [{
                label: 'Sem Partes',
                data: count_no_partes_states,
                backgroundColor: 'rgba(191, 49, 49, 0.78)',
                borderColor: 'rgba(191, 49, 49, 0.78)',
                borderWidth: 1
            },
            {
                label: 'Total',
                data: count_all_states,
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
    var collectionChart2 = new Chart(ctx_all_field_no_andamentos, {
        type: 'bar',
        data: {
            labels: all_states,
            datasets: [{
                label: 'Sem Andamentos',
                data: count_no_andamentos_states,
                backgroundColor: 'rgba(191, 49, 49, 0.78)',
                borderColor: 'rgba(191, 49, 49, 0.78)',
                borderWidth: 1
            },
            {
                label: 'Total',
                data: count_all_states,
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
    var collectionChart3 = new Chart(ctx_no_partes, {
        type: 'bar',
        data: {
            labels: field_no_partes,
            datasets: [{
                label: 'Processos',
                data: count_no_partes,
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
    var collectionChart4 = new Chart(ctx_no_andamentos, {
        type: 'bar',
        data: {
            labels: field_no_andamentos,
            datasets: [{
                label: 'Processos',
                data: count_no_andamentos,
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
    var collectionChart5 = new Chart(ctx_updated, {
        type: 'bar',
        data: {
            labels: states_updated,
            datasets: [{
                label: 'Processos',
                data: count_updated,
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
};
