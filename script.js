const inp = document.getElementById("inp")
parseInt(inp.value)
// inp.value = 1

function onInp() {
    if(!Number(inp.value)) {
        inp.value = 1
        return
    } else if (inp.value > 10) {
        inp.value = 10
        console.log(inp.value);
        return
    } else if (inp.value < 1) {
        inp.value = 1
        console.log(inp.value);
        return
    }
}

function minus() {
    if (inp.value > 1) {
        inp.value--
    }
}

function plus() {
    if (inp.value < 10) {
        inp.value++
    }
}

