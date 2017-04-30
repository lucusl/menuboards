let axios = require('axios');

module.exports = {

	fetchMenuData : function (){
		var URL = 'data/data.json';
		return axios.get(URL)
			.then ( function (response){
					console.log(response.data);
				  	let data = response.data
				    return data;

			})
			 .catch(function (error) {
    			console.log(error);
			  });

		}
	}
