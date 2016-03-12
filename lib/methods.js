Meteor.methods({
	addProduct: function(file, name, category, description, is_featured){
		if(file){
			var fsFile = new FS.File(file);
			
			ProductsImages.insert(fsFile, function(err, res){
				if(!err){
					var productImage = '/cfs/files/ProductsImages/'+res._id;

					Products.insert({
						name: name,
						category: category,
						description: description, 
						is_featured: is_featured, 
						image: productImage,
						createdAt: new Date()
					});
				} 


			});
		} else {
			var productImage = '/img/noimage.png';
			Products.insert({
				name: name,
				category: category,
				description: description, 
				is_featured: is_featured, 
				image: productImage,
				createdAt: new Date()
			});	
		}

	},

	addReview: function(id, rating, body){
		Products.update({
			_id: id
		},{
			$push: {
				reviews: {
					rating: rating,
					body: body,
					review_date: new Date()
				}
			}
		});
	}
});