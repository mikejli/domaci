function searchadvide(){
	let naslov = '';
	let tip = '';
	let godina = '';
	if ($("#naslov").val() == 0) return;
	naslov = '&t=' + $("#naslov").val();
    if ($("#tip").val() == 0) return;
    tip = '&type=' + $("#tip").val();
    if ($("#godina").val() != 0){
    	godina = '&y=' +$("#godina").val();
    }

	$.ajax({
		type: "GET",
		url: "http://www.omdbapi.com/?i=tt3896198&apikey=254a5778" + naslov + tip + godina,
		success: (response) => {
			console.log(response);

			
			if (response.Response == "False") {
				$('#target').text(`Podaci nisu pronadjeni`);
				$('#data').attr('hidden', 'true');
			}
			else{
				
				$('#data').removeAttr('hidden');
				$('#target').text("");
				$("#title").text(`${response.Title}`);
				$("#year").text(`${response.Year}`);
				$("#date").text(`${response.Released}`);
				$("#lenght").text(`${response.Runtime}`);
				$("#director").text(`${response.Writer}`);
				$("#actors").text(`${response.Actors}`);
				$("#plot").text(`${response.Plot}`);
				if(response.Type == 'series'){
					console.log("Response type je series");
					$('#seasons-row').removeAttr('hidden');
					$("#seasons").text(`${response.totalSeasons}`);
				}else{
					console.log("Response type nije series");
					$("#seasons-row").hide();
				}
			    $("#picture").attr("src",`${response.Poster}`);
			    for(var i = 0; i < response.Ratings.length; i++){
				    $("#grade").append(`<tr><td>${response.Ratings[i].Source}</td><td>${response.Ratings[i].Value}</td></tr>`);
				}
							    
			}

		    









			
		}

	})


}