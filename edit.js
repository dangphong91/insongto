let number = Number(prompt("Số lượng số nguyên tố cần in ra :"));
let N = 3;
let ktra = 1;
if (number >= 1) {
    document.write("2 <br>");
    for (let count = 2; count <= number; ) {
        for (let i =2; i <= N/2; i++) {
            if (N % i ==0) {
                ktra = 0;
                break;
            }
        } 
        if (ktra !=0) {
            document.write(N + "<br>");
            count++;
        }
        ktra = 1;
        N++;
    }
} else {
    alert("Nhập 1 số nguyên dương.");
}