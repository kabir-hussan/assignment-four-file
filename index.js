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

    else{

        return "You Should Provide Positive Number"; // It shows for negative number

        
    }

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
    
        else{
            return "Bad Name";
        } 
    }

    else
    {
        return 'invalid';
    }
}

// console.log(checkName('Jhankar'));

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

    else{
        return 'invalid';
    }

}

// console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));


/**
 * problem four
 */


function password(obj){

    if(obj.birthYear >= 1000 && obj.includes(obj.siteName))
    {
      
        const result= obj.siteName[0].toUpperCase() + obj.siteName.slice(1) +  '#' + obj.name + '@' + obj.birthYear;
        return result;
    }


    else
    {
        return 'invalid';
    }

}

console.log(password({ name: 'rahat' , birthYear: 2002} ));