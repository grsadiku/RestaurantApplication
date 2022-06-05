export class ReserveTableReponse{

    public statusCode: number;
    public errorMessage: String;

    constructor(statusCode: number, errorMessage: String){
        this.statusCode = statusCode;
        this.errorMessage = errorMessage;
    }
}