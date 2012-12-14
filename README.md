'Gadget to show Jenkins/Hudson build status' JIRA plugin
=====================================================

This is a plugin for Atlassian JIRA with Gadget that allows to show status of defined build from Jenkins/Hudson server on JIRA Dashboard and other Gadget containers.

Installation
-------------
* This plugin is Type 2, so can be installed and upgraded directly from JIRA Administration GUI (over UPM) 
* You have to add Jenkins/Hudson URL (eg. `http://hudson.jboss.org/*`) to the JIRA [Whitelist](https://confluence.atlassian.com/display/JIRA/Configuring+the+Whitelist) also.

Build
-------------
You need Apache Maven 2.2 and JDK 1.6 installed, then run next command in project root directory

mvn clean package

Plugin .jar file is then placed in /target subfolder

License
-------------
GNU Lesser General Public License Version 2.1

http://www.gnu.org/licenses/lgpl-2.1-standalone.html


Changelog
-------------

1.2 - 2012-12-14
- Jenkins/Hudson server URL can be configured in Gadget preferences now, hudson.jboss.org is default if not specified
- Title of gadget is changed to show configured job name 

1.1 - 2012-11-02
- Help message for unconfigured gadget improved
- Design improved, collors are not so aggresive

1.0 - 2012-11-01
- first release
