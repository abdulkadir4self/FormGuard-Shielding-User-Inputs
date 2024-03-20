const lname = document.getElementById('lname');
const fname = document.getElementById('fname');
const pname = document.getElementById('pname');
const mname = document.getElementById('mname');
const form1 = document.getElementById('form1');
const para = document.getElementById('para');
const age = document.getElementById('age');
const pan = document.getElementById('pan');







const lnameRegex = /^[a-zA-Z]{2,20}$/; 
const fnameRegex = /^[a-zA-Z]{2,20}$/; 
const pnameRegex = /^[a-zA-Z]{2,20}$/; 
const mnameRegex = /^[a-zA-Z]{2,20}$/; 
const ageRegex = /^[0-9]{1,3}$/;
const panRegex = /^([A-Z]{5})([0-9]{4})([A-Z]{1})$/;




form1.addEventListener('submit' , function(e){
    e.preventDefault();
    // console.log('form submitted');

    let ltname = lname.value;
    let fttname = fname.value;
    let ppname = pname.value;
    let mrname = mname.value;
    let age1 =  age.value;
    let pancheck= pan.value;

    // console.log(form1.submit);
    // return;
    if(lnameRegex.test(ltname) == true){
        if(fnameRegex.test(fttname)){
            if(pnameRegex.test(ppname)){
                if(mnameRegex.test(mrname)){
                    if(ageRegex.test(age1)){
                        if(panRegex.test(pancheck)){
                                // console.log(form1);
                                form1.submit();
                        

                        }  
                    else{para.innerText = 'pan is incorrect'}


                    }
                    else{para.innerText = 'age is incorrect'}

                }
                else{para.innerText = 'mother name is incorrect'}

            }

        else{para.innerText = 'father name is incorrect'}

        }
        else{para.innerText = 'first name is incorrect'}
    }
        else{para.innerText = 'last name is incorrect'}
    
     
});










//     if(fnameRegex.test(fttname) == true){
    //         if(pnameRegex.test(ppname) == true){
    //             if(mnameRegex.test(mrname) == true){
    //                 form1.submit();
    //             }
    //             else{{para.innerText = 'mother name is incorrect'}}
    //         }
    //         else{para.innerText = 'father name is incorrect'}
    //     }

    //     else{para.innerText = 'first name is incorrect'}
    // }