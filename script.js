
const onClick = (val) =>{
    if(val == '='){
        const result = eval(compute.value)
        compute.value = result
    }
    else if(val == 'del'){
        compute.value = ''
    }
    else if(val == '0' && compute.value == ''){
        
    }
    else
        compute.value += val
}