export class Product {
	id: number;
	sku: string;

	variant: string;
	description: string;
	price: number;
	currency: string;
	availability: string;
	disclaimer: string;
	imgUrl: string;

	constructor(public name: string){
		this.variant = '';
		this.price=0;
		this.currency='';

	}


}
