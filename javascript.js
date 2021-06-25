function calculation() {
    let total = document.getElementById("total").value;
    let rest = document.getElementById("rest").value;
    let money = document.getElementById("money").value;
    let changes = document.getElementById("changes").value;

    document.getElementById("sold").innerHTML = total - rest;
    document.getElementById("tickets").innerHTML = 25 * (total - rest);
    document.getElementById("profit").innerHTML = money - changes;
    document.getElementById("donation").innerHTML = money - changes - 25 * (total - rest);
}