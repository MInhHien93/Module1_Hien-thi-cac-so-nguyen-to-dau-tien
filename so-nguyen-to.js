function checkPrime(num) {
    let n = num;
    let i = 2;
    if (n < 2) {
        return 0;
    }
    while (i < n) {
        if (n % i === 0) {
            return 0;
        }
        i++;
    }
    return 1;
}

function listPrime() {
    let quantity = 20;
    let count = 0;
    let n = 2;

    while (count < quantity) {
        let i = 2;

        let flag = true;
        while (i < n) {
            if (n % i === 0) {
                flag = false;
                break;
            }
            i++;
        }
    // console.log(flag);
        if (flag) {
            // document.write(n + ",");
            // console.log(n);
            count++;
        }
        n++;

    }

    console.log(count);
}

// listPrime();

function listPrime2() {
    let quantity = +prompt("So luong");
    let count = 0;
    let n = 3;

    while (count < quantity) {
        let check = checkPrime(n);
        if (check) {
            document.write(n + ',');
            count++;
        }
        n++;
    }
    console.log(count);
}

listPrime2();

