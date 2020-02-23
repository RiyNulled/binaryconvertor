const graph = {
    "x0": 256,
    "x1": 128,
    "x2": 64,
    "x3": 32,
    "x4": 16,
    "x5": 8,
    "x6": 4,
    "x7": 2,
    "x8": 1
};
let result = {
    "x0": 0, //256
    "x1": 0, //128
    "x2": 0, //64
    "x3": 0, //32
    "x4": 0, //16
    "x5": 0, //8
    "x6": 0, //4
    "x7": 0, //2
    "x8": 0 //1
};

function convert(num) {

    if (num > graph.x0 || num === graph.x0) {
        result.x0 = 1;
        num = num - graph.x0;
    } else if (num < graph.x0) {
        result.x0 = "";

    } else {
        console.error("Crash on x0");
    }


    if (num > graph.x1 || num === graph.x1) {
        result.x1 = 1;
        num = num - graph.x1;
    } else if (num < graph.x1) {
        result.x1 = 0;
    } else {
        console.error("Crash on x1");
    }


    if (num > graph.x2 || num === graph.x2) {
        result.x2 = 1;
        num = num - graph.x2;
    } else if (num < graph.x2) {
        result.x2 = 0;
    } else {
        console.error("Crash on x2");
    }

    if (num > graph.x3 || num === graph.x3) {
        result.x3 = 1;
        num = num - graph.x3;
    } else if (num < graph.x3) {
        result.x3 = 0;
    } else {
        console.error("Crash on x3");
    }

    if (num > graph.x4 || num === graph.x4) {
        result.x4 = 1;
        num = num - graph.x4;
    } else if (num < graph.x4) {
        result.x4 = 0;
    } else {
        console.error("Crash on x4");
    }

    if (num > graph.x5 || num === graph.x5) {
        result.x5 = 1;
        num = num - graph.x5;
    } else if (num < graph.x5) {
        result.x5 = 0;
    } else {
        console.error("Crash on x5");
    }

    if (num > graph.x6 || num === graph.x6) {
        result.x6 = 1;
        num = num - graph.x6;
    } else if (num < graph.x6) {
        result.x6 = 0;
    } else {
        console.error("Crash on x6");
    }


    if (num > graph.x7 || num === graph.x7) {
        result.x7 = 1;
        num = num - graph.x7;
    } else if (num < graph.x7) {
        result.x7 = 0;
    } else {
        console.error("Crash on x7");
    }

    if (num > graph.x8 || num === graph.x8) {
        result.x8 = 1;
        num = num - graph.x8;
    } else if (num < graph.x8) {
        result.x8 = 0;
    } else {
        console.error("Crash on x8");
    }

    let endResult =
        `${result.x0}` + `${result.x1}` + `${result.x2}` + `${result.x3}` + `${result.x4}` + `${result.x5}` + `${result.x6}` + `${result.x7}` + `${result.x8}`;

    return endResult;
}