var list = [];
var bmu_x = 600;
var bmd_x = 600;
var bird_x = 30;
function timedCount() {
    bmu_x = bmu_x - 1;
    bmd_x = bmd_x - 1;
    if (bmu_x <= 0) {
        bmd_x = 600;
        bmd_x = 600;
    }
    //ok
    list[0] = bmu_x;
    list[1] = bmd_x;
    postMessage(list);
    setTimeout("timedCount()", 60 / 1000);
}
timedCount();
