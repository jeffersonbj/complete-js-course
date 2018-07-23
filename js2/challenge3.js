var bills = [124, 48, 268];

function tipCalculator(bill) {
    var tip;
    if (bill < 50) {
        tip = (20 / 100);
    }
    else if (bill >= 50 && bill < 200) {
        tip = (15 / 100);
    }
    else {
        tip = (10 / 100);
    }

    return tip * bill;
}

var tips = new Array();
var finalAmount = new Array();

tips[0] = tipCalculator(bills[0])
tips[1] = tipCalculator(bills[1])
tips[2] = tipCalculator(bills[2])

finalAmount[0] = bills[0] + tips[0];
finalAmount[1] = bills[1] + tips[1];
finalAmount[2] = bills[2] + tips[2];

console.log(tips);
console.log(finalAmount);