/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope Public
 */

define(['N/https', 'N/log','N/encode'], 
	function(https,log,encode) {
		
	
	function Test_AfterSubmit(context) {


    	var email_new='test@prueba.com';
		var apiKey="API-KEY";
		var listid="LIST_ID";
		var URL = 'https://us14.api.mailchimp.com/3.0/lists/'+listid+'/members/';
  		
  		var apikeybase64= toBase64("anystring:"+apiKey);
  		log.error("apikeybase64",apikeybase64);

  		var jsonVar = [{
			"email_address": email_new,
			"status":"subscribed",
			"merge_fields": [{"FNAME":"ESAU","LNAME":"OCROSPOMA"}]
		}];

		var data = JSON.stringify(jsonVar);


        var headers = [{
      		 "Authorization":"Basic <"+apikeybase64+">",
       		 "Content-Type" :"application/json"
        }];
		//var header= JSON.stringify(headers);
		log.error("Data",data);
        log.error("Header",headers);
		log.error("URL",URL);

		try{
			 var response  =   
                https.post({
                    url: URL,
                    body: data,
                    headers: headers
                });
        log.error("Pass");

		}catch(e){
			log.error("ERROR",e);
		}

       
        //var response = nlapiRequestURL(URL, null, header,'GET');
		log.error("RESPONSE",response);
		 return true;
       
	}

	function toBase64(stringInput){
	    return encode.convert({
	        string: stringInput,
	        inputEncoding: encode.Encoding.UTF_8,
	        outputEncoding: encode.Encoding.BASE_64
	    });
	}
	

	return {
            //beforeLoad: Test_BeforeLoad,        
            //beforeSubmit: myBeforeSubmit,
            afterSubmit: Test_AfterSubmit
        };  



});