

var initialCats = [
	{
		clickCount : 0,
		name : "Bill",
		imgSrc : "cat1.jpg",
		imgAttribution : 'www.cats.com3',
		nicknames : ['billy', 'bilbo']
	},

	{
		clickCount : 0,
		name : "Steve",
		imgSrc : "cat2.jpg",
		imgAttribution : 'www.cats2.com3',
		nicknames : ['steve-o', 'stevie']
	}


]


var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);


	this.title = ko.computed(function(){

		var title;
		var clicks =this.clickCount();

		if(clicks<10) {
			title = "Newborn";
		}
		else if(clicks<20) {
			title = "Novice";
		}
		else {
			title = "Ninja";
		}
		return title;
	}, this);
}





var ViewModel = function() {

	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem));
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);

	};


	this.setCat = function(clickedCat){

		self.currentCat(clickedCat);
	};

}

ko.applyBindings(new ViewModel());

