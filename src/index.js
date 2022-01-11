module.exports = function toReadable (number) {
    let srtNum = String(number);
    let res = '';
    if ( number <= 19 ){
        return arrayFirst[number];
    }else if ( number > 19 && number < 100 && number % 10 === 0 ){
        return arraySecond[Number(srtNum[0])-2];
    }else if( number > 19 && number < 100 && number % 10 != 0 ){
        return res += arraySecond[Number(srtNum[0])-2] +" "+ arrayFirst[number % 10];
    }else if( Number(srtNum.slice(-2)) >= 1 && Number(srtNum.slice(-2)) <= 19 ){
        return res += arrayFirst[Number(srtNum[0])] +" "+ arraySecond[8] +" "+ arrayFirst[Number(srtNum.slice(-2))];
    }else if( number > 99 && number % 10 != 0 ){
        return res += arrayFirst[Number(srtNum[0])] +" "+ arraySecond[8] +" "+ arraySecond[Number(srtNum[1])-2] +" "+ arrayFirst[number % 10];
    }else if( Number(srtNum.slice(-2)) >= 19 ){
        return res += arrayFirst[Number(srtNum[0])] +" "+ arraySecond[8] +" "+ arraySecond[Number(srtNum[1])-2];
    }else{
        return res += arrayFirst[Number(srtNum[0])] +" "+ arraySecond[8];
    }
};
const arrayFirst = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
const arraySecond = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];