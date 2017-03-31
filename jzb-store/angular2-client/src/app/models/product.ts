export class Product {
	id: number;
	sku: string;
	name: string;
	variant: string;
	description: string;
	price: number;
	currency: string;
	availability: string;
	disclaimer: string;
	constructor(){
		this.variant = '';
		this.price=0;
		this.currency='';
	}


}
