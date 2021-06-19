function calculation() {
    let sold = document.getElementById("sold").value;
    let money = document.getElementById("money").value;
    let changes = document.getElementById("changes").value;

    document.getElementById("tickets").innerHTML = 25 * sold;
    document.getElementById("profit").innerHTML = money - changes;
    document.getElementById("donation").innerHTML = money - changes - 25 * sold;
}