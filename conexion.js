

$.ajax({
    url: 'Base/miBase.php',
    method: 'GET',
    success: function(data) {
        try {
            let materias = JSON.parse(data);
            console.log(materias)
            for (let i = 0; i < materias.length; i++) {
                $('#materia' + (i + 1)).text(materias[i]);
            }
        } catch (e) {
            console.error('Error al parsear JSON:', e);
        }
    },
    error: function(error) {
        console.error('Error en la solicitud AJAX:', error);
    }
});
