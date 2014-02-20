$(function() {
	$("#GenerateIndoors").click(function() {
        $(".IndoorResponse").empty();

        $("#resultIndoors").show();

			   $.ajax("https://api.parse.com/1/classes/indoorActivities",
       				{
               beforeSend: function(request) {
                       request.setRequestHeader ("X-Parse-Application-Id", "vrVmUVyBMfCesVL17WeEynZ3KyOqPVsmwZnLv8DS");
                       request.setRequestHeader ("X-Parse-REST-API-Key", "dKO7ROJSF7jttaqChrWpcyXBozCAO7ZdwUw8WRcS");
               	}
       				})
			   .done(function(response) {
                       var resresult=response.results;
                       console.log(resresult);

                       var   m = resresult.length;
                             n =(Math.random()*100);
                             o= 100/m;
                             p = (Math.floor(n/o));
                       console.log(p)

                       $(".IndoorResponse").append(response.results[p].Activity)
//
	            });

	  }) // end generateIndoors click

    $("#GenerateOutdoors").click(function() {
        $(".OutdoorResponse").empty();

        $("#resultOutdoors").show();

        $.ajax("https://api.parse.com/1/classes/outdoorActivities",
            {
                beforeSend: function(request) {
                    request.setRequestHeader ("X-Parse-Application-Id", "vrVmUVyBMfCesVL17WeEynZ3KyOqPVsmwZnLv8DS");
                    request.setRequestHeader ("X-Parse-REST-API-Key", "dKO7ROJSF7jttaqChrWpcyXBozCAO7ZdwUw8WRcS");
                }
            })
            .done(function(response) {
                var resresult=response.results;
                console.log(resresult);

                var   m = resresult.length;
                n =(Math.random()*100);
                o= 100/m;
                p = (Math.floor(n/o));
                console.log(p)

                $(".OutdoorResponse").append(response.results[p].Activity)
//
            });

    }) // end generateOutdoors click








});// end textarea click

//			   	console.log(response);
//	       		$.each(response.results, function(index, activity) {
//	               var activity=(activity["Activity"]+(activity["id"]));