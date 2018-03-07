/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope Public
 */

define(['N/https', 'N/log'], 
	function(https,log) {
		
	function Test_AfterSubmit(context) {


    	var email_new='test@prueba.com';
		var apiKey="API-KEY";
		var listid="LIST_ID";
		var URL = 'https://us14.api.mailchimp.com/3.0/lists/'+listid+'/members/';
  		
  		var jsonVar = [{
			"email_address": email_new,
			"status":"subscribed",
			"merge_fields": [{"FNAME":"ESAU","LNAME":"OCROSPOMA"}]
		}];

		var data = JSON.stringify(jsonVar);


        var headers = [{
      		 "Authorization":"Basic "+apiKey,
       		 "Content-Type" :"application/json"
        }];
		var header= JSON.stringify(headers);
		log.error("Data",data);
        log.error("Header",header);
		log.error("URL",URL);

		try{
			 var response  =   
                https.post({
                    url: URL,
                    body: data,
                    headers: header
                });
        log.error("Pass");

		}catch(e){
			log.error(e);
		}

       
        //var response = nlapiRequestURL(URL, null, header,'GET');
		log.error(response);
		 return true;
       
	}
	

	return {
            //beforeLoad: Test_BeforeLoad,        
            //beforeSubmit: myBeforeSubmit,
            afterSubmit: Test_AfterSubmit
        };  



});