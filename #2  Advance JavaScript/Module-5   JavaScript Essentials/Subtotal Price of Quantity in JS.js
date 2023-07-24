
function subtotal() 
{
    var bowl_quantity = document.getElementById("bowl-quantity").value;
    var result1 = 199 * bowl_quantity;
    document.getElementById("subtotal-price-bowl").innerHTML = " ₹ " + result1; 
    if (bowl_quantity < 0) 
    {
        alert("You can't Add Item in Minus.");  
    }

    var glass_quantity = document.getElementById("glass-quantity").value;
    var result2 = 99 * glass_quantity;
    document.getElementById("subtotal-price-glass").innerHTML = " ₹ " + result2; 
    if (glass_quantity < 0) 
    {
        alert("You can't Add Item in Minus.");  
    }

    document.getElementById("total-amt").innerHTML = " ₹ " + (result1 + result2);
}

function remove_bowl() 
{
    var bowl_quantity = document.getElementById("bowl-quantity");
    bowl_quantity.value = 0;
    
    document.getElementById("subtotal-price-bowl").innerHTML = " ₹ " + 0;

    var bowl_quantity01 = document.getElementById("bowl-quantity").value;
    var result01 = 199 * bowl_quantity01;
    var glass_quantity01 = document.getElementById("glass-quantity").value;
    var result02 = 99 * glass_quantity01;
    var total_amt1 = result01 + result02;
    var remove_bowl_item = total_amt1 - result01;
    document.getElementById("total-amt").innerHTML = " ₹ " + (remove_bowl_item);

}
function remove_glass() 
{
    var glass_quantity = document.getElementById("glass-quantity");
    glass_quantity.value = 0;

    document.getElementById("subtotal-price-glass").innerHTML = " ₹ " + 0;


    var bowl_quantity01 = document.getElementById("bowl-quantity").value;
    var result01 = 199 * bowl_quantity01;
    var glass_quantity01 = document.getElementById("glass-quantity").value;
    var result02 = 99 * glass_quantity01;
    var total_amt1 = result01 + result02;
    var remove_bowl_item = total_amt1 - result02;
    document.getElementById("total-amt").innerHTML = " ₹ " + (remove_bowl_item);
}