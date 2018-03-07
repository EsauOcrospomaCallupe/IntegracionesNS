
/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope Public
 */
define(['N/https'],

function(https) {

    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {

        return true;
    }

    /**
     * Function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @since 2015.2
     */
    function fieldChanged(scriptContext) {

    }

    /**
     * Function to be executed when field is slaved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
    function postSourcing(scriptContext) {

    }

    /**
     * Function to be executed after sublist is inserted, removed, or edited.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function sublistChanged(scriptContext) {
        return true;
    }

    /**
     * Function to be executed after line is selected.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function lineInit(scriptContext) {
        return true;
    }

    /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
    function validateField(scriptContext) {

        return true;
    }

    /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateLine(scriptContext) {

        return true;
    }

    /**
     * Validation function to be executed when sublist line is inserted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateInsert(scriptContext) {

        return true;
    }

    /**
     * Validation function to be executed when record is deleted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateDelete(scriptContext) {

    }

    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
    function saveRecord(scriptContext) {

        /*   var email_new='test@prueba.com';
			var apiKey='5a978f1422e3e5f33d95767d2db1eb84-us14';
			//var listid='5e5fed528b';
			var listid='22187567de';

			//var memberID= 'dbbe120e50c23e1001ced9069b5d27b5';
			var dataCenter = apiKey.substring(apiKey.indexOf('-')+1);
			var URL= 'http://' + dataCenter + '.api.mailchimp.com/3.0/lists/'+ listid + '/members/';
		 	//var URL = 'https://us14.api.mailchimp.com/3.0/';

			var jsonVar = [{
				"email_address": email_new,
				"status":"subscribed",
				"merge_fields": [{"FNAME":"ESAU","LNAME":"OCROS"}]
			}];

			var data = JSON.stringify(jsonVar);

		  
		      var headers = [{
		       "Authorization":"Basic 5a978f1422e3e5f33d95767d2db1eb84-us14",
		       "Content-Type" :"application/json"
		        }];
			var header= JSON.stringify(headers);
		        var response = nlapiRequestURL(URL, data, header,'POST');
			console.log(response);
	  		*/
	  		console.log('ENTRO');
	  		var email_new='test@prueba.com';
			var apiKey='API_KEY';
            var dataCenter = apiKey.substring(apiKey.indexOf('-')+1);
			var listid='LIST_ID';
			var URL= 'http://' + dataCenter + '.api.mailchimp.com/3.0/lists/'+ listid + '/members/';
	  		
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
			console.log(data);
	        console.log(header);
			console.log(URL);

			try{
				 var response  =   
                    https.put({
                        url: URL,
                        body: data,
                        headers: header
                    });
            console.log('Pass');

			}catch(e){
				console.log(e);
			}

           
	        //var response = nlapiRequestURL(URL, null, header,'GET');
			console.log(response);

			return true;
	    
		

    }

    

    return {
        //pageInit: pageInit,
        //fieldChanged: fieldChanged,
        //postSourcing: postSourcing,
        //sublistChanged: sublistChanged,
        //lineInit: lineInit,
        //validateField: validateField,
        //validateLine: validateLine,
        //validateInsert: validateInsert,
        //validateDelete: validateDelete,
        saveRecord: saveRecord

    };

});
