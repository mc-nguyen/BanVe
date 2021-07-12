new Vue({
    el: '#churches',
    data: {
        churches: ["Trung Tâm Công Giáo",
            "Thánh Linh",
            "La Vang",
            "Westminster",
            "St. Cecilia",
            "Columban",
            "St. Barbara"
        ]
    }
});
let result = new Vue({
    el: '#result',
    data: {
        sold: 0,
        tickets: 0,
        profit: 0,
        donation: 0,
    }
});

function calculation() {
    let total = document.getElementById("total").value;
    let rest = document.getElementById("rest").value;
    let money = document.getElementById("money").value;
    let changes = document.getElementById("changes").value;

    result.$data.sold = total - rest;
    result.$data.tickets = 25 * (total - rest);
    result.$data.profit = money - changes;
    result.$data.donation = money - changes - 25 * (total - rest);
}
