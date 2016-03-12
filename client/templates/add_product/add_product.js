Template.add_product.events({
	'submit .add_product' : function(event){
		var name = event.target.name.value;
		var category = event.target.category.value;
		var description = event.target.description.value;
		var is_featured = event.target.is_featured.value;

		//file 
		var file = $('#productImage').get(0).files[0];
		
		Meteor.call('addProduct', file, name, category, description, is_featured);
		
		event.target.name.value = "";
		event.target.category.value = "";
		event.target.description.value = "";
		event.target.is_featured.value = "";

		FlashMessages.sendSuccess("Product Added.");

		Router.go('/');

		return false;
	}
});