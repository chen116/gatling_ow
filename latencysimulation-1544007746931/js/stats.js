var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "980",
        "ok": "980",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1305",
        "ok": "1305",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1224",
        "ok": "1224",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1231",
        "ok": "1231",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1236",
        "ok": "1236",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1243",
        "ok": "1243",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1282",
        "ok": "1282",
        "ko": "-"
    },
    "group1": {
        "name": "t < 1000 ms",
        "count": 1,
        "percentage": 3
    },
    "group2": {
        "name": "1000 ms < t < 1200 ms",
        "count": 1,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 38,
        "percentage": 95
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.8",
        "ok": "0.8",
        "ko": "-"
    }
},
contents: {
"req_warm-python-def-83719": {
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
        "total": "980",
        "ok": "980",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1305",
        "ok": "1305",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1224",
        "ok": "1224",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1231",
        "ok": "1231",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1236",
        "ok": "1236",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1243",
        "ok": "1243",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1282",
        "ok": "1282",
        "ko": "-"
    },
    "group1": {
        "name": "t < 1000 ms",
        "count": 1,
        "percentage": 3
    },
    "group2": {
        "name": "1000 ms < t < 1200 ms",
        "count": 1,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 38,
        "percentage": 95
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.8",
        "ok": "0.8",
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
