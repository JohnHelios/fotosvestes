function setvideo(src) {
    document.querySelector("#myvideo > source").src = src
    document.getElementById('myvideo').load();
}

