var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "41",
        "ok": "41",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1104",
        "ok": "1104",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2329",
        "ok": "2329",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1256",
        "ok": "1256",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "171",
        "ok": "171",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1233",
        "ok": "1233",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1238",
        "ok": "1238",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1240",
        "ok": "1240",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1894",
        "ok": "1894",
        "ko": "-"
    },
    "group1": {
        "name": "t < 1000 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "1000 ms < t < 1200 ms",
        "count": 1,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 40,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.788",
        "ok": "0.788",
        "ko": "-"
    }
},
contents: {
"req_cold-python-def-b7e74": {
        type: "REQUEST",
        name: "Cold python:default invocation",
path: "Cold python:default invocation",
pathFormatted: "req_cold-python-def-b7e74",
stats: {
    "name": "Cold python:default invocation",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2329",
        "ok": "2329",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2329",
        "ok": "2329",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2329",
        "ok": "2329",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2329",
        "ok": "2329",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2329",
        "ok": "2329",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2329",
        "ok": "2329",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2329",
        "ok": "2329",
        "ko": "-"
    },
    "group1": {
        "name": "t < 1000 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "1000 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.019",
        "ok": "0.019",
        "ko": "-"
    }
}
    },"req_warm-python-def-83719": {
        type: "REQUEST",
        name: "Warm python:default invocation",
path: "Warm python:default invocation",
pathFormatted: "req_warm-python-def-83719",
stats: {
    "name": "Warm python:default invocation",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1104",
        "ok": "1104",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1241",
        "ok": "1241",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1229",
        "ok": "1229",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1233",
        "ok": "1233",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1238",
        "ok": "1238",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1240",
        "ok": "1240",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1241",
        "ok": "1241",
        "ko": "-"
    },
    "group1": {
        "name": "t < 1000 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "1000 ms < t < 1200 ms",
        "count": 1,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 39,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.769",
        "ok": "0.769",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
