function makeJSONRequest(baseurl, response) {
    var params = {};
    params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.JSON;
    var ts = new Date().getTime();
    var url = baseurl + "/api/json?nocache="+Math.floor(ts / 10000);
    gadgets.io.makeRequest(url, response, params);
};

function responseMain(obj) {
    if (obj.data) {
        var jsondata = obj.data;
        window.color = jsondata.color;
        document.getElementById('jobtitle').innerHTML = "<div width='100%' style='color:"+jsondata.color+"' class='jobtitleInner status"+jsondata.color+"'>"+jenkinsJobTitleHTML()+"</div>";
        var html = "";
        for (var i in jsondata.healthReport){
            html = html + jsondata.healthReport[i].description + "<br/>";
        }
        html = html + "<div>Last build: " + buildHTML(jsondata.lastBuild) + "</div>";
        html = html + "<div align='center'>Last successful build: " + buildHTML(jsondata.lastSuccessfulBuild) + "</div>";
        html = html + "<div align='right'>Last stable build: " + buildHTML(jsondata.lastStableBuild) + "</div>";
        document.getElementById('jobdetails').innerHTML = html;
        if ( gadget.getPref("LastJobDetails") ){
            makeJSONRequest(jenkinsJobURL(gadget)+"/"+jsondata.lastBuild.number,responseLastBuild);
        }
    } else if (obj.errors && obj.errors.length > 0) {
        document.getElementById('jobdetails').innerHTML = "Build status loading error: " + obj.errors + "<br/>Response content: " + obj.text;
        document.getElementById('lastjobdetails').innerHTML = "";
    } else {
        document.getElementById('jobdetails').innerHTML = "Build status loading error.<br/>Response content: " + obj.text;
        document.getElementById('lastjobdetails').innerHTML = "";
    }
    document.getElementById('gupdated').innerHTML = "Status updated " + dateFormat(new Date());
    gadgets.window.adjustHeight();
};

function responseLastBuild(obj) {
    if (obj.data) {
        var jsondata = obj.data;
        var html = "";
        if (jsondata.timestamp)
            html = html + "Last build date: " + dateFormat(new Date(jsondata.timestamp)) + "<br/>";
        if (jsondata.duration)
            html = html + "Last build duration: " + formatDuration(jsondata.duration) + "<br/>";
        if ( gadget.getPref("LastJobDetailsChangeSet")  && jsondata.changeSet && jsondata.changeSet.items && (jsondata.changeSet.items.length > 0)){
            html = html + "Last build changeset: <ul>";
            for(item in jsondata.changeSet.items){
                html = html + "<li>" + jsondata.changeSet.items[item].msg;
            }
            html = html + "</ul>";
        }
        document.getElementById('lastjobdetails').innerHTML = html;
    } else if (obj.errors && obj.errors.length > 0) {
        document.getElementById('lastjobdetails').innerHTML = "Last build info loading error: " + obj.errors + "<br/>Response content: " + obj.text;
    } else {
        document.getElementById('lastjobdetails').innerHTML = "Last build info loading error.<br/>Response content: " + obj.text;
    }
    gadgets.window.adjustHeight();
};

function dateFormat(date) {
    return date.toLocaleString();
};

function formatDuration(millis){
    var html = "";
    var dd = new Date(millis);
    if (dd.getUTCDate()>1)
        html = html + (dd.getUTCDate()-1)+" day ";
    if (dd.getUTCHours()>0)
        html = html + dd.getUTCHours()+" hour ";
    if (dd.getUTCMinutes()>0)
        html = html + dd.getUTCMinutes()+" min ";
    html = html + dd.getUTCSeconds()+" sec";
    return html;
};

var jenkinsJobURL = function(gadget){
    var surl =  gadget.getPref("JenkinsURL");

     if (surl.charAt(surl.length - 1) != "/")
        surl = surl + "/";

    return surl + "job/" + encodeURIComponent(gadget.getPref("JenkinsJobName"));
};

var jenkinsJobTitleHTML = function(){
    var ball_url;
    if(window.color){
         window.color = window.color.replace("aborted", "grey");
         window.color = window.color.replace("disabled","grey");
    }
    ball_url = "../../../download/resources/com.atlassian.plugins.psp.jira-jenkins-gadget:jira-jenkins-gadget-resources/images/"+window.color+".gif";

    return "<strong><a href='" + jenkinsJobURL(gadget) + "' target='_blank'>" + gadget.getPref("JenkinsJobName") + "</a></strong>"+"<img src="+ball_url+" />";
};

var buildHTML = function (build) {
    if (build)
        return "<a href='" + build.url + "' target='_blank'>" + build.number + "</a>";
    else
        return "--";
};




