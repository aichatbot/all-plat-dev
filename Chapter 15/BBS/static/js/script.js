const form = document.forms.info;

function getPerson() {
    const arr = [];
    const p1 = {
        "realname": form.realname.value,
        "gender": form.gender.value,
        "child": form.child.checked,
        "tickets": parseInt(form.tickets.value)
    }

    const p2 = {
        "realname": form.realname_1.value,
        "gender": form.gender_1.value,
        "child": form.child_1.checked,
        "tickets": parseInt(form.tickets_1.value)
    }
    arr.push(p1);
    arr.push(p2);
    return arr;
}

function getPrice(person) {
    let price = 0;
    const { child, gender, tickets } = person;
    if (!child && gender == 0 && tickets >= 2) {
        price = 90;
    } else if (child) {
        price = 50;
    } else {
        price = 100;
    }
    return price;
}	

function getTotal() {
    const e = window.event;
    e.preventDefault();
    const total = arr.reduce(
        (acc, person) => acc + person.tickets * getPrice(person)
        , 0);
    const text = `总票价为：${total}元`;
    document.querySelector("#total").innerText = text;
}

const p = document.createElement('p');
p.innerText = "";
p.id = "total";
document.body.append(p)