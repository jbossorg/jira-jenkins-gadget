'Gadgets to show hudson.jboss.org builds' JIRA plugin
=====================================================

This is a plugin for Atlassian JIRA with gadget that allows to show status of defined build from hudson.jboss.org hosted Jenkins server on JIRA Dashboard.

Installation
-------------
This plugin is Type 2, so can be installed and upgraded directly from JIRA Administration GUI (over UPM) 
You have to add `http://hudson.jboss.org/*` to the JIRA [Whitelist](https://confluence.atlassian.com/display/JIRA/Configuring+the+Whitelist) also.

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

1.0 - 2012-11-01
- first release
