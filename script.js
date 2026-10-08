let btn = document.getElementById('btn');
let ip = document.getElementById('ip');
let output = document.getElementById('output');

btn.addEventListener('click', () => {

    let ipVal = Number(ip.value);

    let promise = new Promise((resolve) => {
        setTimeout(() => {
            let num = ipVal;
            output.textContent = `Result: ${num}`;
            resolve(num);
        }, 2000);

    }).then((num) => {

        return new Promise((resolve) => {
            setTimeout(() => {
                let mul = num * 2;
                output.textContent = `Result: ${mul}`;
                resolve(mul);
            }, 2000);
        });

    }).then((mul) => {

        return new Promise((resolve) => {
            setTimeout(() => {
                let sub = mul - 3;
                output.textContent = `Result: ${sub}`;
                resolve(sub);
            }, 1000);
        });

    }).then((sub) => {

        return new Promise((resolve) => {
            setTimeout(() => {
                let div = sub / 2;
                output.textContent = `Result: ${div}`;
                resolve(div);
            }, 1000);
        });

    }).then((div) => {

        setTimeout(() => {
            let add = div + 10;
            output.textContent = `Final Result: ${add}`;
        }, 1000);

    });

});