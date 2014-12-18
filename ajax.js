$(function(){
	// $.get('logos_footer.html',function(codiguito){
	// 	$('footer').append(codiguito);
	// });

//este metodo reemplaza el contendo del footer con el load.
	// $('footer').load('logos_footer.html');

//para respetar el contenido del footer agregamos una div y una clase .logos asi 
//se repetaria el contenido del footer
	// $('footer logos').load('logos_footer.html');

//con este metodo estamos agregamos unicamente el logo #mejorandola respetando el footer.
//colocando en el archivo logos_footer.html una id 
	$('footer .logos').load('logos_footer.html #mejorandola');


	$.get('usuario.json',function(info){
		var avatar = new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;

		$('#avatar').append(avatar);

	});

});

var base_url="http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat, lon){
	var query = 'SELECT * FROM geo.placefinder WHERE text="'+lat+', '+lon+'" AND gflags="R"';
	query = encodeURIComponent(query);

	var opciones = {

		url: base_url+"q="+query,
		dataType: "jsonp",
		jsonpCallback: "procesarGeoInfo",
		data:{
			format: "json"
		}

	}; 

	$.ajax(opciones);
}

function procesarGeoInfo(datos)
{
	var res = datos.query.results.Result;
	var barrio = res.neighborhood;
	var ciudad = res.city;
	var pais = res.country;

	var woeid = res.woeid;

	$('#geo').prepend('<p><strong>'+barrio+'</strong><br>'+ciudad+', '+pais+'</p>');

	obtenerClima(woeid);
}




