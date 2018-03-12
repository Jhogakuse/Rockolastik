
	var audio = document.getElementsByTagName("audio")[0];
	// Next var is for url direction
	var urlTracks = "http://www.webster.ca/english/html/mp3/";
	// Next var is for audios
	var listaUrl = [
		"beach.mp3",
		"office.mp3",
		"park.mp3"
	];
	var source = audio.getElementsByTagName("source"),
	currentVid = 0,
	lnkNum = listaUrl.length;
	audio.removeAttribute("poster");
	source[0].src = urlTracks + listaUrl[0];
	var playPause = false;
	var datatrack = $('#textData');
	datatrack.text(1 + "/" +lnkNum + "   " + listaUrl[0]);

		function playVid(index) {
			source[0].src = urlTracks + listaUrl[index];
			currentVid = index;
			audio.load();
			audio.play();
		}
	(function() {

		audio.addEventListener('ended', function () {
			if ((currentVid + 1) >= lnkNum) { 
				nextVid = 1;
				currentVid = 0; 
				source[0].src = urlTracks + listaUrl[0];
				playPause = true;
				audio.load();
				$('#playPause').text('Play');
				audio.pause();
				datatrack.text(1 + "/" +lnkNum + "   " + listaUrl[0]);
			} else { 
				nextVid = currentVid + 1; 
				playVid(nextVid);
				datatrack.text((nextVid + 1) + "/" +lnkNum + "   " + listaUrl[nextVid]);
			}
			//playVid(nextVid);
		})
	})();

	var vid = document.getElementById("media");
	vid.addEventListener("loadedmetadata",function(){
    //alert(vid.clientHeight);
    forVideo(vid.clientHeight);
	});

    $(document).ready(function(){
	$(window).resize(function(){
		forVideo(vid.clientHeight);
		});
	});

	function forVideo(contenidoAlto) {
		var c = document.getElementById("contenido");
	    var w = window.innerWidth;
	    var h = window.innerHeight;
	    var margenSuperior = (h/2)-(contenidoAlto/2);
	    //alert(h+" "+contenidoAlto+" "+margenSuperior);
	    c.style.top= margenSuperior+"px";
	    c.style.right= "0px";
	}

	$('#playPause').click(function () {
		if (!playPause) {
			audio.pause();
			$('#playPause').text('Play');
			//$('#playPause').load();
		} else {
			audio.play();
			$('#playPause').text('Pause');
		}
		playPause = !playPause;
	});

	$('#load').click(function () {
		audio.load();
		$('#playPause').text('Pause');
		playPause = false;
	});

	$('#show').click(function () {
		showAction();
	});

	$('#previous').click(function(){
		previous();
	});
	$('#next').click(function(){
		next();
	});

	function showAction() {
		//console.log(listaUrl);
		/*
		$.get( "http://www.tutorialspoint.com/json/data.json", function( data ) {
			console.log(data);
		});
		*/
		$.getJSON('json/url.json', function(data) {
			console.log(data);
		});
		/*

            var data_file = "url.json";
            var http_request = new XMLHttpRequest();
            try{
               // Opera 8.0+, Firefox, Chrome, Safari
               http_request = new XMLHttpRequest();
            }catch (e){
               // Internet Explorer Browsers
               try{
                  http_request = new ActiveXObject("Msxml2.XMLHTTP");
					
               }catch (e) {
				
                  try{
                     http_request = new ActiveXObject("Microsoft.XMLHTTP");
                  }catch (e){
                     // Something went wrong
                     alert("Your browser broke!");
                     return false;
                  }
					
               }
            }
			
            http_request.onreadystatechange = function(){
			
               if (http_request.readyState == 4  ){
                  // Javascript function JSON.parse to parse JSON data
                  var jsonObj = JSON.parse(http_request.responseText);

                  // jsonObj variable now contains the data structure and can
                  // be accessed as jsonObj.name and jsonObj.country.
                  console.log(jsonObj.name);
                  console.log(jsonObj.country);
               }
            }
			
            http_request.open("GET", data_file, true);
            http_request.send();
		*/
		/*
		$.ajax({
			method:"GET",
            url:"js/url.json",
            cache: false,
            error: function (jqXHR, status, error) {
                alert("Status: " + status + ", error: " + error + ", " + jqXHR.responseText);
            },
            success: function (msg) {
                var userData = JSON.parse(msg);
                
                console.log(userData);
                //JSON solo debe tener 'usuario' e 'id'
                
            },
        });
		*/
	}

	function previous() {
		if (currentVid > 0) {
			playVid(currentVid - 1);
			datatrack.text((currentVid + 1) + "/" +lnkNum + "   " + listaUrl[currentVid]);
		}
	}

	function next() {
		playVid(currentVid + 1);
		datatrack.text((currentVid + 1) + "/" +lnkNum + "   " + listaUrl[currentVid]);
	}