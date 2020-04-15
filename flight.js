
document.addEventListener("DOMContentLoaded", function(event) { 
   document.getElementById("flightresults").style.display ="none"
});

document.getElementById("booking__button-id").addEventListener("click", function(event) {
	event.preventDefault();
	
	

	var flightFrom = document.getElementById("destinationfrom").value ;
	var flightto = document.getElementById("destinationto").value ;
	var datefrom = document.getElementById("datefrom").value;
	var dateto = document.getElementById("dateto").value 
   

console.log(flightFrom);
console.log(flightto);
console.log(datefrom);
console.log(dateto);
  var queryURL =	"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/" + 
	flightFrom + "/" + flightto + "/" + datefrom + "?inboundpartialdate=" + dateto

console.log(queryURL);
	var data = null;
	
	
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	
	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
			console.log(this.responseText) ;
		var jasonLocal = JSON.parse(this.responseText);
  
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////BODY//////////////////////////////////////////////////////////////////////////////////////
// var resultStr = localStorage.getItem("responseResults");
// var jasonLocal =JSON.parse(resultStr);
// console.log(jasonLocal);
 document.getElementsByClassName("booking")[0].style.display="none";
 document.getElementById("flightresults").style.display ="block"
function createElemen(elemen){
	var newele = document.createElement(elemen);
	return newele
	}
	

	var divRow = createElemen("DIV")
	
	var divLarge2 = createElemen("DIV")

	var divDepartureDate = createElemen("DIV")
	var spanDepartureLabel = createElemen("SPAN")
	var spanDepartureDate = createElemen("SPAN")

	var divAirline = createElemen("DIV")
	var spanAirLineLabel= createElemen("SPAN")
	var spanAirline1 = createElemen("SPAN")

	var divAirlineID = createElemen("DIV")
	var spanAirLineIdLabel= createElemen("SPAN")
	var spanAirlineID = createElemen("SPAN")

	var divLarge10 = createElemen("DIV")

	var fromAirportDiv = createElemen("DIV")
	var fromAirportLabelSpan = createElemen("SPAN")
	var fromAirportInfoSpan = createElemen("SPAN")

	var toAirportDiv = createElemen("DIV")
	var toAirportLabelSpan = createElemen("SPAN")
	var toAirportInfoSpan = createElemen("SPAN")

	var divAirportAbbrevia = createElemen("DIV");
	var spanAirportDepart = createElemen("SPAN");
	var spanDash =createElemen("SPAN");
	var spanAirportArrive = createElemen("SPAN");

	var divAirlineCode = createElemen("DIV");
	var spanAirline2 = createElemen("SPAN");
	var spanAirlineCode = createElemen("SPAN");

	var divLarge2B = createElemen("DIV");
	var divPrice = createElemen("DIV");
	var priceLabelSpan =createElemen("SPAN");
	var priceInfoSpan =createElemen("SPAN");
	var dollarSpan =createElemen("SPAN");

	var divTripType = createElemen("DIV")
	var divSelect = createElemen("BUTTON")
	
console.log(spanDepartureDate);


divRow.classList.add("row","val")

  divAirline.classList.add("airline")
  spanAirLineLabel.classList.add("airline-label-span")
  spanAirline1.classList.add("airline-carrier-info")

  divAirlineID.classList.add("div-airline-id")
  spanAirLineIdLabel.classList.add("span-airline-id-label")
  spanAirlineID.classList.add("span-airline-id")

  divDepartureDate.classList.add("departure-date")
  spanDepartureLabel.classList.add("departure-label-span")
  spanDepartureDate.classList.add("departure-date-span")
  divLarge2.classList.add("col-lg-4","val2")
  divLarge10.classList.add("col-lg-5" ,"val3")

  fromAirportDiv.classList.add("from-airport-div");
  fromAirportLabelSpan.classList.add("from-airport-label-span");
  fromAirportInfoSpan.classList.add("from-airport-info-span")

  toAirportDiv.classList.add("to-airport-div");
  toAirportLabelSpan.classList.add("to-airport-label-span");
  toAirportInfoSpan.classList.add("to-airport-info-span");

  divAirportAbbrevia.classList.add("airport-abbre");
  spanAirportDepart.classList.add("depart-airport");
  spanDash.classList.add("span-dash");
  spanAirportArrive.classList.add("arrive-airport");

  divAirlineCode.classList.add("airline-code");
  spanAirline2.classList.add("airline2");
  spanAirlineCode.classList.add("airline-span-code");
  divLarge2B.classList.add("col-lg-3","val4");

  divPrice.classList.add("price");
 priceLabelSpan.classList.add("price-label-span");
 priceInfoSpan.classList.add("price-info-span");
 dollarSpan.classList.add("dollar-span")

  divTripType.classList.add("tip-type")
  divSelect.classList.add("select-button")

 
  
  function classAppend(oldClass,appenClass){
	var appended =  document.getElementsByClassName(oldClass)[0].appendChild(appenClass)
	return appended
   }

   function classTextAppend(oldClass,TextToAppend){
	var appended =  document.getElementsByClassName(oldClass)[0].innerHTML = TextToAppend;
	return appended
   }

 var quotLen = jasonLocal.Quotes.length;
 for(let i =0;i<quotLen;i++){
	document.getElementById("flightresults").appendChild(divRow);
	classAppend("val",divLarge2);
	
	 classAppend("val2",divDepartureDate);
	 classAppend("departure-date",spanDepartureLabel);
	 classTextAppend("departure-label-span","Departure Date :")
	 classAppend("departure-date",spanDepartureDate);
	 classTextAppend("departure-date-span",jasonLocal.Quotes[i].OutboundLeg.DepartureDate)

	 classAppend("val2",divAirline);
	 classAppend("airline",spanAirLineLabel);
	 classTextAppend("airline-label-span","Airline-Provider :");
	 classAppend("airline",spanAirline1);
	 classTextAppend("airline-carrier-info",jasonLocal.Carriers[i].Name);

	classAppend("val2",divAirlineID)
	classAppend("div-airline-id",spanAirLineIdLabel);
	classTextAppend("span-airline-id-label","Airline ID :");
	classAppend("div-airline-id",spanAirlineID);
	classTextAppend("span-airline-id",jasonLocal.Carriers[i].CarrierId);

	 classAppend("val",divLarge10);
	 classAppend("val3",fromAirportDiv);
	 classAppend("from-airport-div",fromAirportLabelSpan);
	 classTextAppend("from-airport-label-span","Flight From :");
	 classAppend("from-airport-div",fromAirportInfoSpan);
	 classTextAppend("from-airport-info-span",jasonLocal.Places[0].Name);

	 classAppend("val3",toAirportDiv);
	 classAppend("to-airport-div",toAirportLabelSpan);
	 classTextAppend("to-airport-label-span","Flight To :");
	 classAppend("to-airport-div",toAirportInfoSpan);
	 classTextAppend("to-airport-info-span",jasonLocal.Places[1].Name);

	 classAppend("val3",divAirportAbbrevia );
	 classAppend("airport-abbre",spanAirportDepart);
	 classTextAppend("depart-airport",jasonLocal.Places[0].IataCode);
	 classAppend("airport-abbre",spanDash);
	 classTextAppend("span-dash","--");
	 classAppend("airport-abbre",spanAirportArrive);
	 classTextAppend("arrive-airport",jasonLocal.Places[1].IataCode);

	//  classAppend("val3",divAirlineCode);
	//  classAppend("airline-code",spanAirline2);
	//  classAppend("airline-code",spanAirlineCode);

	 classAppend("val",divLarge2B);
	 classAppend("val4",divPrice);
	 classAppend("price",priceLabelSpan);
	 classTextAppend("price-label-span","Price :");
	 classAppend("price",priceInfoSpan);
	 classTextAppend("price-info-span",jasonLocal.Quotes[0].MinPrice);
	 classAppend("price",dollarSpan);
	 classTextAppend("dollar-span",jasonLocal.Currencies[0].Code);

	 classAppend("val4",divTripType);
	 if(jasonLocal.Quotes[i].MinPrice){
		classTextAppend("tip-type","Direct Flight"); 
	 }else{
		classTextAppend("tip-type","Layover");  
	 }
	 
	 classAppend("val4",divSelect);
	
	 classTextAppend("select-button","SELECT");
	 

 }
	

	}
});

xhr.open("GET", queryURL);
xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "Lhlu6DNa7ymshrZKBtPsub9DnSvep1v77q5jsn4uPI0mi0RsbJ");

xhr.send(data);




	

 




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



		






// ////////////////////////////////////////////////////////
// ///////////////////testing
	

	

})
	