importScripts('web3.min.js'); 
Web3Block = function (id,endpoint)
			{
				const web3  = new Web3(endpoint);

				web3.eth.subscribe('newBlockHeaders', function (err, result) {
					if(!err) {
						$('#status-'+id).html(`<div class="d-flex align-items-center"><i class="fa fa-circle text-success me-1"></i><strong> Up</strong></div>`);
						flash($('#block-'+id).html(`<strong> ${result.number}</strong>`).addClass('badge badge-success light'));
					}else{
						flash($('#status-'+id).html(`<div class="d-flex align-items-center"><i class="fa fa-circle text-danger me-1"></i><strong> Down</strong></div>`));
					}
				});				
			}


