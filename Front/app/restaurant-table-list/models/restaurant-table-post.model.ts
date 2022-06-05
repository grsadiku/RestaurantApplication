export class RestaurantTablePost{

    public location: string;
    public totalSeats: number;

    constructor(location: string, totalSeats: number){
        this.location = location;
        this.totalSeats = totalSeats;

    }
}