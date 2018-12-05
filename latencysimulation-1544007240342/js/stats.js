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
        "total": "1100",
        "ok": "1100",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1294",
        "ok": "1294",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1231",
        "ok": "1231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1234",
        "ok": "1234",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1239",
        "ok": "1239",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1248",
        "ok": "1248",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1276",
        "ok": "1276",
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
        "total": "0.804",
        "ok": "0.804",
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
        "total": "1294",
        "ok": "1294",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1294",
        "ok": "1294",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1294",
        "ok": "1294",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1294",
        "ok": "1294",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1294",
        "ok": "1294",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1294",
        "ok": "1294",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1294",
        "ok": "1294",
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
        "total": "0.02",
        "ok": "0.02",
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
        "total": "1100",
        "ok": "1100",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1249",
        "ok": "1249",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1230",
        "ok": "1230",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "22",
        "ok": "22",
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
        "total": "1247",
        "ok": "1247",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1249",
        "ok": "1249",
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
        "total": "0.784",
        "ok": "0.784",
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
