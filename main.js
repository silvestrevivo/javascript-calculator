const mybtn = document.getElementsByTagName('button'),
    myOutputAnswer = document.getElementById('answer'),
    myOutputHistory = document.getElementById('history'),
    myOpe = ['+', '-', '*', '/'];
var myCal = '',
    myCom = false;

for (let i = 0; i < mybtn.length; i++) {
    mybtn[i].addEventListener('click', function() {
        let myValue = this.innerHTML;
        var result = '';

        // this is usually what happens
        myCal += myValue;

        // these are the different cases
        if (myValue == 'CE') {
            myOutputHistory.innerHTML = '0';
            myOutputAnswer.innerHTML = '0';
            myCal = '';
            result = '';
        } else if (myValue == '0' && myOutputHistory.innerHTML == '0') {
            myCal = '';
        } else if (myValue == '.' && myOutputHistory.innerHTML == '0') {
            myCal = '0.';
        } else if (myValue == '=') {
            result += eval(myCal.slice(0, -1)).toString();
            myOutputHistory.innerHTML = myCal + result;
            myOutputAnswer.innerHTML = result;
            myCal = '';
            myCom = true;
        } else if (
            myValue == '+' ||
            myValue == '-' ||
            myValue == '*' ||
            myValue == '/'
        ) {
            if (myCom == false) {
                if (myOutputHistory.innerHTML === '0') {
                    myCal = '';
                } else {
                    myOutputHistory.innerHTML = myCal;
                }
            } else {
                myCal = myOutputAnswer.innerHTML + myValue;
                myOutputHistory.innerHTML = myCal;
            }
        } else {
            myCom = false;
            myOutputHistory.innerHTML = myCal;
            for (let i = myCal.length - 1; i >= 0; i--) {
                if (myOpe.indexOf(myCal[i]) > -1) {
                    myOutputAnswer.innerHTML = myCal.slice(i + 1, myCal.length);
                    break;
                } else {
                    myOutputAnswer.innerHTML = myCal;
                }
            }
        }
    });
}
