/**
 * Problem One
 */

function calculateMoney(ticketSale){

    if(ticketSale > 0)
    {
        const perTicketPrice= 120; // every ticket price is 120 TK
        const guardSalary= 500; // guard salary is 500 Fixed
        const perStaffCost= 50; // per staff cost is 50 TK
        const staffNumber= 8; // number of staff is 8
    
        const ticketBenefitTotal=  ticketSale * perTicketPrice; // calculate total benefit from ticket sell
        const staffCostTotal= staffNumber * perStaffCost; // calculate total staff cost
        const totalCost= guardSalary + staffCostTotal; // calculate total cost
    
        const remainingMoney= ticketBenefitTotal - totalCost; //calculate remaining money of baker bhai!
    
        return remainingMoney;
    }

    return "You Should Provide Positive Number"; // It shows for negative number

}


/**
 * Problem two
 */

function checkName(name){

    if( typeof name === 'string')
    {
        const lastChar=  name[name.length - 1]; // find last Character from the given string

        //check last character of string
    
        if( lastChar === 'A' || lastChar === 'a' || lastChar === 'Y' || lastChar === 'y' || 
            lastChar === 'I' || lastChar === 'i' || lastChar === 'E' || lastChar === 'e' || 
            lastChar === 'O' || lastChar === 'o' || lastChar === 'U' || lastChar === 'u' || 
            lastChar === 'W' || lastChar === 'w')
        {
    
            return "Good Name";
        }
    
        return "Bad Name";
    }

    return 'invalid';
}


/**
 * Problem 3
 */

function deleteInvalids(array){

    let newArray= [];

    if(Array.isArray(array))
    {
    
        for(const item of array)
        {
            if(typeof item === 'number' && !isNaN(item))
            {
               newArray.push(item);
            }
        }

        return newArray;
    }

    return 'invalid';

}



/**
 * problem four
 */


function password(obj){

    if(obj.birthYear >= 1000 && 'name' in obj && 'birthYear' in obj && 'siteName' in obj )
    {
      
        const result= obj.siteName[0].toUpperCase() + obj.siteName.slice(1) +  '#' + obj.name + '@' + obj.birthYear;
        return result;
    }


    return 'invalid';

}


/**
 * Problem Five
 */

function monthlySavings(arr , livingCost){

    let totalEarn= 0;

    if(typeof arr !== 'object' || typeof livingCost !== 'number') return "invalid input";

    for(const arrItem of arr )
    {

        if(arrItem < 3000)
        {

            totalEarn+= arrItem; 
        }

        else{
         
            totalEarn+= (arrItem - arrItem * 0.2);
        }

    }

    const savingMoney=totalEarn - livingCost ;
    
    if(savingMoney >= 0)
    {
        return savingMoney;
    }

    return 'earn more';

}

