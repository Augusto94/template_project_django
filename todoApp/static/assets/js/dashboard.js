$(document).ready(function() {
    $('#selectAnalytics').change(function(){
        var collection = document.getElementById("selectAnalytics").value;
        if (collection == '(Nothing)') {
            $('#btn-analytics').attr("disabled", true);}
        else {
            $('#btn-analytics').attr("disabled", false);
        }
    });
    });
    $('#selectFuros').change(function(){
        var collection_furos = document.getElementById("selectFuros").value;
        document.getElementById("csv").setAttribute("name", collection_furos);
        document.getElementById('form_furos').setAttribute("action", "/furos/" + collection_furos)
        if (collection_furos == '(Nothing)') {
            $('#btn-furos').attr("disabled", true);}
        else {
            $('#btn-furos').attr("disabled", false);
        }
    });
    $('#selectPartes').change(function(){
        var collection_partes = document.getElementById("selectPartes").value;
        if (collection_partes == '(Nothing)') {
            $('#btn-partes').attr("disabled", true);}
        else {
            $('#btn-partes').attr("disabled", false);
        }
    });
    $('#selectProcessos').change(function(){
        var cliente = document.getElementById("selectProcessos").value;
        if (cliente == '(Nothing)') {
            $('#btn-processos').attr("disabled", true);}
        else {
            $('#btn-processos').attr("disabled", false);
        }
    });
function partesFunction() {
    var collection_partes = document.getElementById("selectPartes").value;
    document.location.href = "/partes/" + collection_partes;
};

function analyticsFunction() {
    var collection = document.getElementById("selectAnalytics").value;
    document.location.href = "/collections/" + collection;
};

function execucaoFunction() {
    var execucao_id = document.getElementById("inputExecucao").value;
    execucao_id = execucao_id.split('.').join('');
    document.getElementById("inputExecucao").value = execucao_id;
    document.getElementById('execucao_form').setAttribute("action", "/relatorio/" + execucao_id);
};

function execucaoHomologFunction() {
    var execucao_homolog_id = document.getElementById("inputHomologExecucao").value;
    console.log(execucao_homolog_id);
    document.getElementById('execucao_homolog_form').setAttribute("action", "/analise/" + execucao_homolog_id);
};

function removerAcentos( newStringComAcento ) {
    var string = newStringComAcento;
    var mapaAcentosHex 	= {
        a : /[\xE0-\xE6]/g,
        A : /[\xC0-\xC6]/g,
        e : /[\xE8-\xEB]/g,
        E : /[\xC8-\xCB]/g,
        i : /[\xEC-\xEF]/g,
        I : /[\xCC-\xCF]/g,
        o : /[\xF2-\xF6]/g,
        O : /[\xD2-\xD6]/g,
        u : /[\xF9-\xFC]/g,
        U : /[\xD9-\xDC]/g,
        c : /\xE7/g,
        C : /\xC7/g,
        n : /\xF1/g,
        N : /\xD1/g
    };

    for ( var letra in mapaAcentosHex ) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace( expressaoRegular, letra );
    }

    return string;
}

function processosFunction() {
    var execucao_id = removerAcentos(document.getElementById("selectProcessos").value);
    document.location.href = "/processos/" + execucao_id;
};
