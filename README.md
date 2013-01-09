'Gadget to show Jenkins/Hudson build status' JIRA plugin
=====================================================

This is a plugin for Atlassian JIRA with Gadget that allows to show status of defined build from Jenkins/Hudson server on JIRA Dashboard and other Gadget containers.

Installation
-------------
1. This plugin is Type 2, so it can be installed and upgraded directly over JIRA Administration GUI. It is available from [Atlassian Marketplace](https://marketplace.atlassian.com/plugins/org.jboss.jira.plugin.build-gadgets).
2. You have to add Jenkins/Hudson server URL (eg. `http://hudson.jboss.org/*`) to the JIRA [Whitelist](https://confluence.atlassian.com/display/JIRA/Configuring+the+Whitelist) also.

Gadget Use
----------
For short description how to use this gadget you can see [Display jenkins build status on JIRA Dashboard and SBS pages](https://community.jboss.org/en/website/blog/2012/11/06/display-jenkins-build-results-on-jira-dashboard-and-sbs-pages) blogpost.

Build
-------------
You need Apache Maven 2.2 and JDK 1.6 installed, then run next command in the project root directory

```
mvn clean package
```

Produced plugin .jar file is placed in `/target` subfolder.

License
-------------
GNU Lesser General Public License Version 2.1

http://www.gnu.org/licenses/lgpl-2.1-standalone.html


Changelog
-------------

1.3 - 2013-01-09
* #1 bugfix - patched problem with job names containing characters with special meaning in URLs  

1.2 - 2012-12-14
* Jenkins/Hudson server URL can be configured in Gadget preferences now, hudson.jboss.org is default if not specified
* Title of gadget is changed to show configured job name 

1.1 - 2012-11-02
* Help message for unconfigured gadget improved
* Design improved, collors are not so aggresive

1.0 - 2012-11-01
* first release
