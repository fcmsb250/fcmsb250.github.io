var i=0;
function timedCount(){
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}
timedCount();
/*
<!DOCTYPE html>
<html>
<body>
<script>
var w;
function startWorker(){
    if(typeof(Worker)!=="undefined"){
        if(typeof(w)=="undefined"){
            w=new Worker("/example/html5/demo_workers.js");
        }
        w.onmessage = function (event) {
            document.getElementById("result").innerHTML=event.data;
        };
    }
}
function stopWorker(){ 
    w.terminate();
}
</script>
</body>
</html>
*/