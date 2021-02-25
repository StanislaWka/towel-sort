
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let mas = [];
    if(!matrix ) return mas;
    let flg =0;
    for(let a of matrix){
        let arr= [];
        for(let v of a){
            arr.push(v);
        }
        if(flg % 2 === 1) {
            arr = arr.reverse();
            for (let a of arr) {
                mas.push(a);
            }
        }else{
            for (let a of arr) {
                mas.push(a);
            }
        }
        flg++;
    }
  return mas;
}
