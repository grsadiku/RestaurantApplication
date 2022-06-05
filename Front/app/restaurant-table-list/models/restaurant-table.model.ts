export class RestaurantTable{

    public id: number;
    public location: string;
    public totalSeats: number;

    constructor(location: string, totalSeats: number, id: number){
        this.location = location;
        this.totalSeats = totalSeats;
        this.id = id;
    }
}