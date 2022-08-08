/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/

function ticketPrice(ticket){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticket <= 100){
        let price = ticket * first100Rate;

        return price;
    }
    else if(ticket <= 200 ){
        let first100Price = first100Rate * 100;

        let under100 = ticket - 100;
        let under100Price = under100 * second100Rate;
        let underTicketPrice = first100Price + under100Price;

        return underTicketPrice;
    }
    else{
        let first100Price = 100 * first100Rate;
        let second100Price = 100 * second100Rate;
        let restTicket = ticket - 200;

        let ticketAmount = restTicket * restTicketRate;
        let ticketCost = first100Price + second100Price + ticketAmount;
        
        return ticketCost;
    }

}
let ticketValue = ticketPrice(120);
console.log('Your total ticket price : ', ticketValue);