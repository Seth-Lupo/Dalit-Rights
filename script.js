function createToggler(i) {

	$( "#" + i + "ei" ).click(function() {
	  
		var selectedId = $(".selected")
		.attr("id")

		if(selectedId != null) {

			if (selectedId.charAt(0) != i) {

				$(".selected")
				.attr("class", "expandableInfo unselected")

			  	$("#" + selectedId.charAt(0) + "id")
			  	.hide(0)

			}
		}
			
		setTimeout(function() {
		    	
			$("#" + i + "ei")
			.attr("class", "expandableInfo selected")
			.attr("id")


			setTimeout(function() {
		    	
				$("#" + i + "id")
				 .fadeIn(400)

			}, 400)

		}, 250)

	})

}

for(var i = 1; i <= 6; i++) {

	createToggler(i);

}