export interface IJobApp {

	name:string
	lastname:string
	age:number
	sex:string
	address:IAddress

}

export interface IAddress{
	street:string
	state:string
	city:string
	zip:string
}