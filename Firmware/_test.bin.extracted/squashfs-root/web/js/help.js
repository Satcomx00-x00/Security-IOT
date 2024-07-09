var AccessCtrlAccessRulesAdvHelpRpm =
{
	"header": "Add or Modify Internet Access Control Entry Help",
	"brief": "You can create a new rule on this page.",
	"description": "<B>Description</B> - In this field, create a name for the rule. Note that this name should be <b>unique</b>.",
	"lan_host": "<B>LAN Host</B> - In this field, select a host from the drop-down list for the rule.",
	"target": "<B>Target</B> - In this filed, select a target from the drop-down list for the rule. The default value is Any Target.",
	"schedule": "<B>Schedule</B> - In this field, select a schedule from the drop-down list for the rule. The default value is Anytime.",
	"rule": "<B>Rule</B> - In this field, select Allow or Deny from the drop-down list for the rule. The default value is Deny.",
	"direction": "<B>Direction</B> - In this field, select IN or OUT from the drop-down list for the direction.",
	"protocol": "<B>Protocol</B> - In this field, here are four options, All, TCP, UDP, and ICMP. Select one of them from the drop-down list for the target.",
	"save": "Click <B>Save</B> to complete the settings.",
	"back": "Click <B>Back</B> to return to the Access Control Rule Management page."
};
var AccessCtrlAccessRulesHelpRpm =
{
	"header": "Internet Access Control Rule Management Help",
	"brief": "The Router, providing convenient and strong <B>internet access control</B> function, can control the internet activities of hosts in the LAN. Moreover, you can flexibly combine the <B>Host List</B>, <B>Target List</B> and <B>Schedule</B> to restrict the Internet surfing of these hosts.",
	"internet": "<B>Enable Internet Access Control</B> - Select the check box to enable the Internet Access Control function, so the Default Filter Rule can take effect.",
	"description": "<B>Description</B> - Here displays the name of the rule and this name is unique.",
	"lan_host": "<B>LAN Host</B> - Here displays the host selected in the corresponding rule.",
	"target": "<B>Target</B> - Here displays the target selected in the corresponding rule.",
	"schedule": "<B>Schedule</B> - Here displays the schedule selected in the corresponding rule.",
	"rule": "<B>Rule</B> - Allow or deny the packets not specified by any filtering rules to passthrough this device.",
	"status": "<B>Status</B> - The status of the rule.",
	"edit": "<B>Edit</B> - Here you can edit an existing rule.",
	"for_exam": "<B>For example</B>: If you desire to allow the host with MAC address <font color=\"#ff0000\">00:11:22:33:44:AA</font> to access <b>www.google.com</b> only from <b>18:00</b> to <b>20:00</b> on <b>Saturday and Sunday</b>, and <b>forbid</b> other hosts in the LAN to access the Internet, you should follow the settings below:",
	"rule_0": "Click the submenu <b>Rule</b> of <b>Access Control</b> in the left to return to the Rule List page. Select Enable Internet Access Control and choose \"Deny the packets not specified by any filtering rules to passthrough this device\".",
	"setup_wiza": "We recommend that you click <b>Setup Wizard</b> button to finish all the following settings.",
	"host": "Click the submenu <b>Host</b> of <b>Access Control</b> in the left to enter the Host List page. Add a new entry with the Host Description is Host_1 and MAC Address is 00:11:22:33:44:AA.",
	"target_0": "Click the submenu <b>Target</b> of <b>Access Control</b> in the left to enter the Target List page. Add a new entry with the Target Description is Target_1 and Domain Name is www.google.com.",
	"schedule_0": "Click the submenu <b>Schedule</b> of <b>Access Control</b> in the left to enter the Schedule List page. Add a new entry with the Schedule Description is Schedule_1, Day is Sat and Sun, Start Time is 1800 and Stop Time is 2000.",
	"rule_1": "Click the submenu <b>Rule</b> of <b>Access Control</b> in the left, Click <b>Add New</b> button to add a new rule as follows:",
	"s_0": "In Rule Name field, create a name for the rule. Note that this name should be unique, for example Rule_1.",
	"s_1": "In Host field, select Host_1.",
	"s_2": "In Target field, select Target_1.",
	"s_3": "In Schedule field, select Schedule_1.",
	"s_4": "In Status field, select Enable.",
	"s_5": "Click Save to complete the settings.",
	"s_6": "Then you will go back to the Access Control Rule Management page and see the following list:",
	"add_new": "Click the <b>Add New</b> button to add a new rule entry.",
	"enable_sele": "Click the <b>Enable Selected</b> button to enable the selected rules in the list.",
	"disable_sele": "Click the <b>Disable Selected</b> button to disable the selected rules in the list.",
	"delete_sele": "Click the <b>Delete Selected</b> button to delete the selected entries in the table.",
	"note": "<b>Note:</b> The router will first try to match the packet with the enabled filtering rules one by one in the list and apply the first matching rule. If the packet is not specified by any filtering rules in the list, then the Default Filtering Rule will take effect.",
	td_description: "Description",
	td_lan: "LAN Host",
	td_target: "Target",
	td_sched: "Schedule",
	td_rule: "Rule",
	td_status: "Status",
	td_edit: "Edit",
	td_allow: "Allow",
	td_enable: "Enable"
};
var AccessCtrlAccessTargetsAdvHelpRpm =
{
	"header": "Add an Access Target Entry Help",
	"brief": "You can create an entry for the target list on this page.",
	"mode": "<B>Mode</B> - Here are three options, IP Address, MAC Address, URL Address. You can choose one of them from the drop-down list.",
	"description": "<B>Description</B> - In this field, create a description for the target. Note that this description should be <b>unique</b>.",
	"ip_addr": "If the <B>IP Address</B> is selected, you will see the following items:",
	"ip_addr_0": "<B>IP Address</B> - Enter the IP address (or address range) of the target (targets) in dotted-decimal format, for example 192.168.0.23.",
	"port": "<B>Port</B> - Here lists some common service ports. Select one from the drop-down list, and the corresponding port number will be filled in the Target Port field automatically. For example, if you select \"FTP\", \"21\" will be filled in the Target Port automatically.",
	"url_addr": "If the <B>URL Address</B> is selected, you will see the following items:",
	"url_addr_0": "<B>URL Address</B> - Here you can enter 4 URLs, either the full name or the keywords (for example google). Any URL with keywords in it (www.google.com, www.google.cn) will be blocked or allowed.",
	"save": "Click <B>Save</B> to complete the settings.",
	"back": "Click <B>Back</B> to return to the Target Settings page."
};
var AccessCtrlAccessTargetsHelpRpm =
{
	"header": "Target Settings Help",
	"brief": "The Router, providing convenient and strong internet access control function, can control the internet activities of hosts in the LAN. On this page, you can create a target list for the host to access or not.",
	"description": "<B>Description</B> - Here displays the description about the target and this description is <B>unique</B>.",
	"details": "<B>Details</B> - The target can be IP address, port, or domain name.",
	"edit": "<B>Edit</B> - To edit an existing entry.",
	"for_exam": "<B>For example</B>: If you desire to restrict the internet activities of host with MAC address <font color=\"#FF0000\">00:11:22:33:44:AA</font> in the LAN to access <B>www.google.com</B> only, you should first follow the settings below:",
	"s_0": "Click Add New button to enter the Target List Settings page.",
	"s_1": "In Mode field, select Domain Name from the drop-down list.",
	"unique": "In Target Description field, create a <B>unique</B> description for the target. (eg. Target_1)",
	"google": "In Domain Name field, enter <B>www.google.com</B>.",
	"save": "Click <B>Save</B> to complete the settings.",
	"s_2": "Then you will go back to the Target page and see the following list:",
	"add_new": "Click the <b> Add New</b> button to add a new target entry.",
	"delete_sele": "Click the <b>Delete Selected</b> button to delete the selected entries in the table.",
	td_description: "Description",
	td_details: "Details",
	td_edit: "Edit"
};
var AccessCtrlHostsListsAdvHelpRpm =
{
	"header": "Add or Edit a Host Entry Help",
	"brief": "You can create an entry for the host list on this page.",
	"mode": "<B>Mode</B> - Here are two options, IP Address and MAC Address. You can select either of them from the drop-down list.",
	"description": "<B>Description</B> - In this field, create a <B>unique</B> description for the host.",
	"ip_addr": "If the <B>IP Address</B> is selected, you can see the following item:",
	"address": "<B>LAN IP Address</B> - Enter the IP address or address range of the host in dotted-decimal format, for example 192.168.0.23.",
	"mac_addr": "If the <b>MAC Address</b> is selected, you can see the following item:",
	"mac_addr_0": "<B>MAC Address</B> - Enter the MAC address of the host in XX:XX:XX:XX:XX:XX format, for example 00:11:22:33:44:AA.",
	"save": "Click <B>Save</B> to complete the settings.",
	"back": "Click <B>Back</B> to return to the Host Settings page."
};
var AccessCtrlHostsListsHelpRpm =
{
	"header": "Host Settings Help",
	"brief": "The Router, providing convenient and strong Internet Access Control function, can control the Internet activities of the host in the LAN. On this page, you can set a host list which is necessary for the Access Control Rule.",
	"description": "<B>Description </B> - Here displays the description of the host and this description is <b>unique</b>.",
	"addr_info": "<B>Address Info </B> - Here displays the information about the host. It can be IP or MAC.",
	"edit": "<B>Edit </B> - To edit an existing entry.",
	"for_exam": "<B>For example</B>: If you desire to restrict the internet activities of host with MAC address <font color=\"#ff0000\">00:11:22:33:44:AA</font>, you should first follow the settings below:",
	"add_new": "Click <B>Add New</B> button to enter the Host List Settings page.",
	"s_0": "In Mode field, select MAC Address from the drop-down list.",
	"unique": "In Host Name field, create a <B>unique</B> description for the host. (eg. Host_1)",
	"aa": "In MAC Address field, enter <B>00:11:22:33:44:AA</B>.",
	"save": "Click <B>Save</B> to complete the settings.",
	"s_1": "Then you will go back to the Host page and see the following list:",
	"add_new_0": "Click the <b> Add New</b> button to add a new host list entry.",
	"delete_sele": "Click the <b>Delete Selected</b> button to delete the selected entries in the table.",
	td_description: "Description",
	td_addr: "Address Info",
	td_edit: "Edit"
};
var AccessCtrlTimeSchedAdvHelpRpm =
{
	"header": "Add or Edit Schedule Entry Help",
	"brief": "You can create an entry for the schedule list on this page.",
	"description": "<B>Description </B> - In this field, create a description for the schedule. Note that this description should be <b>unique</b>, for example Schedule_1.",
	"apply": "<B>Apply To </B> - In this field, select \"Each Week\" and day (days) you need, or choose \"Each Day\".",
	"time": "<B>Start/End Time </B> - In these field, you can select the Start Time and End Time in the corresponding field.",
	"save": "Click <B>Save</B> to complete the settings.",
	"back": "Click <B>Back</B> to return to the Schedule Settings page."
};
var AccessCtrlTimeSchedHelpRpm =
{
	"header": "Schedule Settings Help",
	"brief": "The Router, providing convenient and strong internet access control function, can control the internet activities of hosts in the LAN. You can set schedule lists on this page to control the internet activities of hosts in certain time.",
	"descript": "<B>Description</B> - Here displays the description of the schedule and this description is <b>unique</b>.",
	"edit": "<B>Edit</B> - Here you can edit an existing schedule.",
	"for_exam": "<B>For example</B>: If you desire to restrict the internet activities of host with MAC address 00:11:22:33:44:AA to access www.google.com only <b>from 18:00 to 20:00</b> on <b>Saturday and Sunday</b>, you should first follow the settings below:",
	"add_new": "Click <B>Add New</B> button to enter the Schedule List Settings page.",
	"unique": "In Description field, create a <b>unique</b> description for the schedule, for example Schedule_1.",
	"s_0": "In Apply To field, select the day or days you need.",
	"s_1": "In time field, you can select all day-24 hours or you may enter the Start Time and Stop Time in the corresponding field.",
	"save": "Click <B>Save</B> to complete the settings.",
	"s_2": "Then you will go back to the Schedule page and see the following list:",
	"add_new_0": "Click the <b> Add New</b> button to add a new host list entry.",
	"delete_sele": "Click the <b>Delete Selected</b> button to delete the selected entries in the table.",
	tb_descript: "Description",
	tb_edit: "Edit"
};
var AssignedIpAddrListHelpRpm =
{
	"header": "DHCP Clients List Help",
	"brief": "This page shows <B>Client Name</B>, <B>MAC Address</B>, <B>Assigned IP</B> and <B>Lease Time</B> of each DHCP Client connected to the Router.",
	"clie_name": "<B>Client Name</B> - The name of the DHCP client.",
	"mac_addr": "<B>MAC Address</B> - The MAC address of the DHCP client.",
	"assi_ip": "<B>Assigned IP</B> - The IP address that the Router has allocated to the DHCP client.",
	"leas_time": "<B>Lease Time</B> - The time of the DHCP client leased.",
	"refresh": "You cannot change any of the values on this page. To update this page and to show the current connected devices, click on the <B>Refresh</B> button."
};
var BackNRestoreHelpRpm =
{
	"header": "Backup & Restore Help",
	"brief": "Click the <B>Backup</B> button to save all configuration settings to your local computer as a file.",
	"s_0": "To restore the Router\'s configuration, follow these instructions:",
	"browse": "Click the <B>Browse</B> button to find the configuration file which you want to restore.",
	"restore": "Click the <B>Restore</B> button to update the configuration with the file whose path is the one you have input or selected in the blank.",
	"note": "<B>Note:</B> The current configuration will be covered with the uploading configuration file. Wrong process will lead the device unmanaged. The restoring process lasts for 20 seconds and the Router will restart automatically then. Keep the power of the Router on during the process, in case of any damage."
};
var BasicSecurityHelpRpm =
{
	"header": "Basic Security Help",
	"brief": "You can configure the Basic Security Settings on this page.",
	"firewall": "<B>Firewall</B> - Here you can enable or disable the Router\'s firewall.",
	"spi_fire": "<B>SPI Firewall</B> - Stateful Packet Inspection (SPI) helps to prevent cyber attacks by tracking more state per session. It validates that the traffic passing through the session conforms to the protocol. SPI Firewall is enabled by factory default. If you want all the computers on the LAN exposed to the outside world, you can disable it.",
	"vpn": "<B>VPN</B> - VPN Passthrough must be enabled if you want to allow VPN tunnels using VPN protocols to pass through the Router.",
	"pptp_pass": "<B>PPTP Passthrough</B> - PPTP Passthrough. Point-to-Point Tunneling Protocol (PPTP) allows the Point-to-Point Protocol (PPP) to be tunneled through an IP network. To allow PPTP tunnels to pass through the Router, click Enable.",
	"l2tp_pass": "<B>L2TP Passthrough</B> - Layer Two Tunneling Protocol (L2TP) is the method used to enable Point-to-Point sessions via the Internet on the Layer Two level. To allow L2TP tunnels to pass through the Router, click Enable.",
	"ipsec_pass": "<B>IPSec Passthrough</B> - Internet Protocol security (IPSec) is a suite of protocols for ensuring private, secure communications over Internet Protocol (IP) networks, through the use of cryptographic security services. To allow IPSec tunnels to pass through the Router, click Enable.",
	"alg": "<B>ALG</B> - It is recommended to enable Application Layer Gateway (ALG) because ALG allows customized Network Address Translation (NAT) traversal filters to be plugged into the gateway to support address and port translation for certain application layer \"control/data\" protocols such as FTP, TFTP, H323 etc.",
	"ftp_alg": "<B>FTP ALG</B> - To allow FTP clients and servers to transfer data across NAT, click Enable.",
	"tftp_alg": "<B>TFTP ALG</B> - To allow TFTP clients and servers to transfer data across NAT, click Enable.",
	"h323_alg": "<B>H323 ALG</B> - To allow Microsoft NetMeeting clients to communicate across NAT, click Enable.",
	"sip_alg": "<B>SIP ALG</B> -To allow SIP clients and servers to transfer data across NAT, click Enable.",
	"rtsp_alg": "<B>RTSP ALG</B> - To allow some media player clients to communicate with some streaming media servers across NAT, click Enable.",
	"save": "Click the <B>Save</B> button to save your settings."
};
var BpaCfgHelpRpm =
{
	"header": "WAN Help",
	"brief": "<B>WAN Connection Type:</B>",
	"dyna_ip": "If your ISP is running a DHCP server, select the <B>Dynamic IP</B> option.",
	"stat_ip": "If your ISP provides a static or fixed IP Address, Subnet Mask, Gateway and DNS setting, select the <B>Static IP</B> option.",
	"pppoe": "If your ISP provides a PPPoE connection, select <B>PPPoE</B> option.",
	"bigp_cable": "If your ISP provides BigPond Cable (or Heart Beat Signal) connection, please select <B>BigPond Cable</B> option.",
	"l2tp": "If your ISP provides L2TP connection, please select <B>L2TP</B> option.",
	"pptp": "If your ISP provides PPTP connection, please select <B>PPTP</B> option.",
	"password": "<B>User Name/Password</B> - Enter the User Name and Password provided by your ISP. These fields are case-sensitive.",
	"auth_serv": "<B>Auth Server</B> - Enter the authenticating server IP address or host name.",
	"auth_doma": "<B>Auth Domain</B> - Type in the domain suffix server name based on your location,eg.<br>",
	"mtu_size": "<B>MTU Size</B> - The normal MTU (Maximum Transmit Unit) value for most Ethernet networks is 1500 bytes. For some ISPs, you may need to modify the MTU. But this is rarely required, and should not be done unless you are sure it is necessary for your ISP connection.",
	"alwa_on": "<b>Always on</b> - Connect automatically after the Router is disconnected. To use this option, click the radio button.",
	"connect": "<B>Connect on demand</B> - You can configure the Router to disconnect your Internet connection after a specified period of the Internet connectivity (<B>Max Idle Time</B>). If your Internet connection has been terminated due to inactivity, <B>Connect on Demand </B> enables the Router to automatically re-establish your connection as soon as you attempt to access the Internet again. If you wish to activate <B>Connect on Demand</B>, click the radio button. If you want your Internet connection to remain active at all times, enter <B>0</B> in the <B>Max Idle Time</B> field. Otherwise, enter the number of minutes you want to have elapsed before your Internet connection terminates.",
	"caution": "<b>Caution</b> - Sometimes the connection cannot be disconnected although you specify a time to <B>Max Idle Time</B> because some applications visit the Internet continually in the background.",
	"connect_manu": "<b>Connect Manually</b> - You can configure the Router to make it connect or disconnect manually. After a specified period of inactivity (<B>Max Idle Time</B>), the Router will disconnect your Internet connection, and not be able to re-establish your connection automatically as soon as you attempt to access the Internet again. To use this option, click the radio button. If you want your Internet connection to remain active at all times, enter <B>0</B> in the <B>Max Idle Time</B> field. Otherwise, enter the number in minutes that you wish to have the Internet connecting last unless a new link requested.",
	"caution_0": "<b>Caution</b> - Sometimes the connection cannot be disconnected although you specify a time to <B>Max Idle Time</B> because some applications visit the Internet continually in the background.",
	"connect_0": "Click the <B>Connect</B> button to connect immediately.",
	"disconnect": "Click the <B>Disconnect</B> button to disconnect immediately.",
	"save": "Click the <B>Save</B> button to save your settings."
};
var ChangeLoginPwdHelpRpm =
{
	"header": "Password Help",
	"brief": "It is strongly recommended that you change the factory default user name and password of the Router. All users who try to access the Router\'s web-based utility will be prompted for the Router\'s user name and password.",
	"note": "<b>Note</b>: The new user name and password must not exceed 15 characters in length and must not include any spaces. Enter the new Password twice to confirm it.",
	"save": "Click the <b>Save</b> button when finished.",
	"clea_all": "Click the <b>Clear All</b> button to clear all."
};
var DateTimeCfgHelpRpm =
{
	"header": "Time Settings Help",
	"brief": "This page allows you to set the time manually or to configure automatic time synchronization. The Router can automatically update the time from an NTP server via the Internet.",
	"time_zone": "<B>Time Zone</B> - Select your local time zone from this pull-down list.",
	"manually": "<B>To set time manually:</B>",
	"s_0": "Select your local time zone.",
	"date": "Enter the <B>Date</B>.",
	"time": "Enter the <B>Time</B>.",
	"save": "Click <B>Save</B>.",
	"synchronization": "<B>For automatic time synchronization:</B>",
	"ntp_serv": "Enter the address or domain of the <B>NTP Server 1</B> or <B>NTP Server 2</B>.",
	"get_gmt": "Click the <B>Get GMT</B> button to get GMT from the Internet.",
	"daylight": "<B>To set up daylight saving:</B>",
	"daylight_0": "Select the <B>Enable Daylight Saving</B> checkbox to enable daylight saving function.",
	"start": "Select the correct <B>Start</B> time and <B>End</B> time of daylight saving range.",
	"save_0": "Click <B>Save</B>.",
	"note": "<B>Note:</B>",
	"s_1": "This setting will be used for some time-based functions such as firewall functions. These time dependant functions will not work if time is not set. Therefore, it is important to specify time settings as soon as you successfully login to the Router.",
	"s_2": "The time will be lost if the Router is turned off.",
	"s_3": "The Router will automatically obtain GMT from the Internet if it is configured accordingly.",
	"s_4": "In daylight saving configuration, if the end time is earlier than start time, it means the end time is at the next year.",
	"s_5": "After you enable daylight saving function, it will take action in one minute."
};
var DdnsAddComexeHelpRpm =
{
	"header": "DDNS Help",
	"brief": "The Router offers a Dynamic Domain Name System (<B>DDNS</B>) feature. DDNS lets you assign a fixed host and domain name to a dynamic Internet IP address. It is useful when you are hosting your own website, FTP server, or other server behind the Router. Before using this feature, you need to sign with for DDNS service provider <a href=\"#\" onClick=\"openWindow2();\" class=L1>www.comexe.cn</a>. The Dynamic DNS client service provider will give you a password or key.",
	"s_0": "To set up for DDNS, follow these instructions:",
	"service_prov": "If your selected dynamic DNS <b>Service Provider</b> is <a href=\"#\" onClick=\"openWindow2();\" class=L1>www.comexe.cn</a>.&nbsp;",
	"doma_names": "Enter the <B>Domain Names</B> your dynamic DNS service provider gave.",
	"user_name": "Enter the <B>User Name</B> for your DDNS account.",
	"password": "Enter the <B>Password</B> for your DDNS account.",
	"login": "Click the <B>Login</B> button to login the DDNS service.",
	"conn_status": "<B>Connection Status</B> - The status of the DDNS service connection is displayed here.",
	"logout": "Click <B>Logout</B> to logout the DDNS service.",
	"notice": "<B>Notice:</B>&nbsp;&nbsp;If you want to login again with another account after a successful login, please click the <B>Logout</B> button, then input your new username and password and click the <B>Login</B> button."
};
var DiagHelp =
{
	"header": "Diagnostic Help",
	"brief": "In this page you can view the test results for the connectivity of the physical layer and protocol layer for both LAN and WAN sides in the screen. Select the desired type and click the start button."
};
var DMZHelpRpm =
{
	"header": "DMZ Help",
	"brief": "The DMZ host feature allows one local host to be exposed to the Internet for a special-purpose service such as Internet gaming or video conferencing. The Router forwards packets of all services to the DMZ host. When a PC is set to be DMZ host, it\'s better to disable its DHCP client function and set a new static IP address to it, because its IP Address may be changed when using the DHCP function.",
	"computer": "<B>To assign a computer or server to be a DMZ server</B>:",
	"enable": "Click the <B>Enable</B> button.",
	"address": "Enter the IP address of a local PC that is set to be DMZ host in the <B>DMZ Host IP Address</B> field.",
	"save": "Click the <B>Save</B> button."
};
var DualBandSelectionHelpRpm =
{
	"header": "Dual Band Selection Help",
	"brief": "The internet setting is finished, please choose the wireless band of the router.",
	"advantages": "<B>Advantages of 5GHz:</B>",
	"s_0": "The 5GHz band is less likely to be congested. The 2.4GHz frequency range is much more prone to interference, as it is commonly used by other wireless networks in the area, as well as cordless phones, garage door openers and other home appliances and consumer products.",
	"disadvantages": "<B>Disadvantages of 5GHz:</B>",
	"s_1": "In general, the higher the frequency of a wireless signal, the shorter its range. Thus, 2.4GHz networks cover a substantially larger range than 5GHz wireless networks. In particular, the higher frequency wireless signals of 5GHz networks do not penetrate solid objects nearly as well as 2.4GHz signals, limiting their reach inside homes."
};
var DynDdnsHelpRpm =
{
	"header": "DDNS Help",
	"brief": "The Router offers a Dynamic Domain Name System (<B>DDNS</B>) feature. DDNS lets you assign a fixed host and domain name to a dynamic Internet IP address. It is useful when you are hosting your own website, FTP server, or other server behind the Router. Before using this feature, you need to sign up with DDNS service providers such as <a href=\"#\" onClick=\"openWindow1();\" class=L1>dyn.com</a>. The Dynamic DNS client service provider will give you a password or key.",
	"s_0": "Follow these instructions to set up DDNS:",
	"service_prov": "If your selected dynamic DNS <b>Service Provider</b> is <a href=\"#\" onClick=\"openWindow1();\" class=L1>dyn.com</a>.",
	"user_name": "Enter the <B>User Name</B> for your DDNS account.",
	"password": "Enter the <B>Password</B> for your DDNS account.",
	"doma_name": "Enter the <B>Domain Name</B> you received from dynamic DNS service provider.",
	"login": "Click the <B>Login</B> button to login to the DDNS service.",
	"conn_status": "<B>Connection Status</B> - The status of the DDNS service connection is displayed here.",
	"logout": "Click <B>Logout</B> to logout of the DDNS service.",
	"notice": "<B>Notice:</B>&nbsp;&nbsp;If you want to login again with another account after a successful login, please click the <B>Logout</B> button, then input your new username and password and click the <B>Login</B> button."
};
var FixMapCfgHelpRpm =
{
	"header": "Address Reservation Help",
	"brief": "When you specify a reserved IP address for a PC in the LAN, that PC will always receive the same IP address each time when it accesses the DHCP server. Reserved IP addresses could be assigned to servers that require permanent IP settings.",
	"mac_addr": "<B>MAC Address</B> - The MAC Address of the PC that you want to reserve an IP address for.",
	"ip_addr": "<B>IP Address</B> - The IP address that the Router reserved.",
	"status": "<b>Status</b> - It shows whether the entry is enabled or not",
	"edit": "<b>Edit</b> - To edit or delete an existing entry.",
	"addresses": "<b>To Reserve IP Addresses, you can follow these steps</B>:",
	"s_0": "Enter the MAC Address (The format for the MAC Address is XX:XX:XX:XX:XX:XX) and the IP address in dotted-decimal notation of the computer you wish to add.",
	"save": "Click the <B>Save</B> button.",
	"address": "<B>To edit a IP Address, you can follow these steps</B>:",
	"delete_sele": "Select the reserved address entry as you desired, edit it. If you wish to delete the entry, select the entry and click the <b>Delete Selected</b> button.",
	"delete_sele_0": "If you wish to delete the entry, select the entry and click the <b>Delete Selected</b> button.",
	"save_0": "Click the <B>Save</B> button.",
	"add_new": "Click the <b> Add New</b> button to add a new Address Reservation entry.",
	"enable_sele": "Click the <b>Enable Selected</b> button to enable the selected entries in the table.",
	"disable_sele": "Click the <b>Disable Selected</b> button to disable the Selected entries in the table.",
	"delete_sele_1": "Click the <b>Delete Selected</b> button to delete selected the entries in the table."
};
var GuestNetUsbCfgHelpRpm =
{
	"header": "Guest Network Storage Sharing Help",
	"brief": "You can configure Guest Network Storage Sharing on this page.",
	"s_0": "Follow the instructions below to set up your Guest Network Storage Sharing:",
	"s_1": "Plug an external USB hard disk drive or USB flash drive into this Router.",
	"s_2": "Make sure the Service Status on the page USB Settings->Storage Sharing is <SPAN style=\"color:#FF0000\">Started</SPAN>.",
	"s_3": "Make sure the Access shared storage with password on the page USB Settings->Storage Sharing is <SPAN style=\"color:#FF0000\">enable</SPAN>.",
	"start": "Click the <B>Start</B> button to start the Guest Network Storage Sharing.",
	"folder": "Click the <B>Add New Folder to Share</B> button to specify a folder to share for the guests.",
	"s_4": "There is one default user account that can access the Guest Network Storage Sharing,you can change the password of the account.",
	"user_name": "<B>User Name</B> - The user name is <B>guest</B> for Guest Network,it can\'t be changed.",
	"password": "<B>Password</B> - Enter the password in the Password field. The password must be composed of alphanumeric symbols not exceeding 15 characters in length.",
	"confirm_pass": "<B>Confirm Password</B> - Re-enter the password here.",
	"storage_auth": "<B>Storage Authority</B> - Authority of user: <B>Read Only</B> or <B>Read and Write</B>.",
	"delete": "On this page, when a share folder is added, you can view its display name, volume partition, folder path and you can delete the share folder by click <B>delete</B> button.",
	"name": "<B>Name</B> - This folder\'s display name.",
	"partition": "<B>Partition</B> - The volume that the folder resides. <SPAN style=\"color:#FF0000\">Volume 1-8</SPAN> is mapping to USB port 1, <SPAN style=\"color:#FF0000\">Volume 9-16</SPAN> is mapping to USB port 2.",
	"folder_0": "<B>Folder</B> - The real full path of the specified folder.",
	"edit": "<B>Edit</B> - You can edit the share folder by click <B>edit</B> button.",
	"delete_0": "<B>Delete</B> - You can delete the share folder by click <B>delete</B> button.",
	"note": "<B>Note</B>:",
	"s_5": "If you want guests visit folders of Guest Network Storage Sharing with guest account, you must <SPAN style=\"color:#FF0000\">enable</SPAN> Access shared storage with password on the page USB Setings->Storage Sharing,or the guests can\'t access to the Guest Network Storage Sharing.",
	"s_6": "The max share folders number is 6. If you want to share a new folder when the number has reached 6, you can delete a share folder and then add a new one."
};
var GuestNetWirelessCfgHelpRpm =
{
	"header": "Guest Network Wireless Settings",
	"brief": "You can configure Guest Network Wireless Settings on this page.",
	"network": "<B>Allow Guests To Access My Local Network</B> - If enabled, guests can communicate with hosts.",
	"storage": "<B>Allow Guests to access my USB Storage Sharing</B> - If enabled, guests can access USB.",
	"isolation": "<B>Guest Network Isolation</B> - If enabled, one guest can not communicate with another.",
	"bandwidth": "<B>Enable Guest Network Bandwidth Control</B> - If enabled, the Guest Network Bandwidth Control rules will take effect.",
	"bandwidth_0": "<B>Egress Bandwidth For Guest Network</B> - The upload speed through the WAN port for Guest Network.",
	"bandwidth_1": "<B>Ingress Bandwidth For Guest Network</B> - The download speed through the WAN port for Guest Network.",
	"network_0": "<B>Guest Network</B> - Enabled or disable the Guest Network function here .",
	"netw_name": "<B>Network Name</B> - Enter a value of up to 32 characters. The same Name(SSID) must be assigned to all wireless devices in your Guest Network.",
	"guests": "<B>Max Guests number</B> - Maximum guests.(1-32)",
	"security": "<B>Security</B> - You can configure the security of Guest Network here.",
	"access":"<B>Access Time</B>",
	"acce_time": "<B>Schedule</B> - During this time the wireless stations could not access the guest network.",
	"timeout": "<B>Timeout</B> - If the countdown timer hits zero, guest network will close.",
	"note": "<B>Note</B>:",
	"s_0": "The range of bandwidth for Guest Network is calculated according to the setting of Bandwidth Control on the page Bandwidth Control->Control Settings."
};
var IPv6LanHelp =
{
	"header": "IPv6 LAN Help",
	"brief": "In the page you can configure LAN IPv6 interface for your router.",
	"configuration": "<B>Address Auto-Configuration Type:</B> Select a type to assign IPv6 addresses to the computers in your LAN. RADVD and DHCPv6 Server are provided.",
	"s_0": "1) If RADVD is selected, it doesn&rsquo;t need to be configured.",
	"s_1": "2) If DHCPv6 Server is selected, please complete the following parameters.",
	"address": "<B>Start IPv6 Address</B> Enter a value for the DHCPv6 server to start with when issuing IPv6 addresses.",
	"address_0": "<B>End IPv6 Address</B> Enter a value for the DHCPv6 server to end with when issuing IPv6 addresses.",
	"leas_time": "<B>Leased Time</B> The Leased Time is the amount of time in which a network user will be allowed connection to the router with their current dynamic IPv6 address. Enter the amount of time, in hours, then the user will be leased this dynamic IPv6 address. After the dynamic IPv6 address has expired, the user will be automatically assigned a new dynamic IPv6 address. The default is 86400 seconds.",
	"configuration_0": "<B>Site Prefix Configuration Type</B> Select a type to assign IPv6 prefix addresses to the computers in your LAN. Delegated and Static are provided.",
	"note": "<B>Note:</B> If your IPv6 wan connection type is \"Tunnel 6to4\", the Site Prefix Configuration Type should be \"Static\" to make sure \"Tunnel 6to4\" works properly.",
	"s_2": "1) If Delegated is selected.",
	"connection": "<B>Prefix Delegated WAN Connection</B> Show the WAN connection selected to assign prefix.",
	"s_3": "2) If Static is selected.",
	"site_pref": "<B>Site Prefix</B> Enter a value for the site prefix.",
	"prefix": "<B>Site Prefix Length</B> Enter a value for the site prefix length."
};
var IPv6StatusHelpRpm =
{
	"header": "IPv6 Status Help",
	"brief": "The <B>IPv6 Status</B> page displays the Router\'s current IPv6 status and configuration. All information is read-only.",
	"conn_type": "<B>Connection Type</B> - - The IPv6 connection way for WAN.",
	"conn_status": "<B>Connection Status</B> - - The stauts of IPv6 connection.",
	"ipv6_addr": "<B>IPv6 Address</B> - - The WAN IPv6 address.",
	"default": "<B>IPv6 Default Gateway</B> - - The router\'s default gateway.",
	"primary": "<B>Primary IPv6 DNS</B> - - The primary IPv6 DNS address.",
	"secondary": "<B>Secondary IPv6 DNS</B> - - The secondary IPv6 DNS address.",
	"lan": "<B>LAN</B>",
	"address": "<B>IPv6 Address Type</B> - - The way how the router assign IPv6 address for PC in LAN, SLAAC(Stateless address autoconfiguration) and DHCPv6(Dynamic Host Configuration Protocol for IPv6) Server.",
	"prefix_leng": "<B>Prefix Length</B> - - The site prefix.",
	"ipv6_addr_0": "<B>IPv6 Address</B> - - The LAN global IPv6 address of the Router."
};
var IPv6TunnelHelp =
{
	"header": "IPv6 Tunnel Help",
	"brief": "IPv6 tunnel is a kind of transition mechanism to enable IPv6-only hosts to reach IPv4 services and to allow isolated IPv6 hosts and networks to reach each-other over IPv4-only infrastructure before IPv6 completely supplants IPv4. It is a temporary solution for networks that do not support native dual-stack, where both IPv6 and IPv4 run independently.",
	"enable": "<B>Enable</B> Check the box to enable IPv6 Tunnel function. It is disabled by default.",
	"mechanism": "<B>Mechanism</B> Select a type for IPv6 tunnel from the drop-down list. DS-Lite, 6RD and 6to4 are supported.",
	"ds_lite": "<B>DS-Lite</B>",
	"s_0": "This type is used in the situation that your WAN connection is IPv6 while LAN connection is IPv4.",
	"wan_conn": "<B>WAN Connection</B> Select a WAN connection from the drop-down list. Only the connected WAN connections can be shown in the drop-down list.",
	"conf_type": "<B>Configuration Type</B> Select a configuration type for this tunnel. Auto means to obtain the Remote IPv6 Address automatically while Manual means you set it manually.",
	"address": "<B>Remote IPv6 Address</B> Enter the IPv6 address of the remote node.",
	"note": "<B>Note:</B> In this type, there should not have any IPv4 WAN connections. If there are IPv4 WAN connections, the page will prompt you to delete all the IPv4 WAN connections.",
	"rd": "<B>6RD</B>",
	"s_1": "This type is used in the situation that your WAN connection is IPv4 while LAN connection is IPv6.",
	"wan_conn_0": "<B>WAN Connection</B> Select a WAN connection from the drop-down list. Only the connected WAN connections can be shown in the drop-down list.",
	"conf_type_0": "<B>Configuration Type</B> Select a configuration type for this tunnel. Auto means to obtain the following parameters automatically while Manual means you set them manually. If Auto is selected, only Dynamic IP connection can be selected from the drop-down list.",
	"length": "<B>IPv4 Mask Length</B> The length of the selected WAN connection&rsquo;s IPv4 mask.",
	"rd_pref": "<B>6RD Prefix</B> The prefix of the 6RD tunnel.",
	"prefix": "<B>6RD Prefix Length</B> The length of the 6RD prefix.",
	"address_0": "<B>Border Relay IPv4 Address</B> The IPv4 address of the border relay router of 6RD tunnel.",
	"note_0": "<B>Note:</B> In this type, there should not have any IPv6 WAN connections. If there are IPv6 WAN connections, the page will prompt you to delete all the IPv6 WAN connections.",
	"to": "<B>6to4</B>",
	"s_2": "This type is used in the situation that your WAN connection is IPv4 while LAN connection is IPv6.",
	"wan_conn_1": "<B>WAN Connection</B> Select a WAN connection from the drop-down list. Only the connected WAN connections can be shown in the drop-down list."
};
var L2tpCfgHelpRpm =
{
	"header": "WAN Help",
	"brief": "<B>WAN Connection Type:</B>",
	"dyna_ip": "If your ISP is running a DHCP server, select the <B>Dynamic IP</B> option.",
	"stat_ip": "If your ISP provides a static or fixed IP Address, Subnet Mask, Gateway and DNS setting, select the <B>Static IP</B> option.",
	"pppoe": "If your ISP provides a PPPoE connection, select <B>PPPoE</B> option.",
	"bigp_cable": "If your ISP provides BigPond Cable(or Heart Beat Signal) connection, please select <B>BigPond Cable</B> option.",
	"l2tp": "If your ISP provides L2TP connection, please select <B>L2TP</B> option.",
	"pptp": "If your ISP provides PPTP connection, please select <B>PPTP</B> option.",
	"password": "<B>User Name/Password</B> - Enter the User Name and Password provided by your ISP. These fields are case-sensitive.",
	"dynamic": "<B>Dynamic IP/Static IP</B> - Select <B>Static IP</B> if IP address, subnet mask, gateway and DNS server address have been provided by your ISP. Otherwise, please select <B>Dynamic IP</B>.",
	"address": "<B>Server IP Address/Name</B> - Enter server IP address or domain name provided by your ISP.",
	"ip_addr": "<B>IP address</B> - Enter the IP address used for dial-up. (Only can be configured when Static IP is selected)",
	"subn_mask": "<B>Subnet Mask</B> - Enter the subnet mask provided by your ISP. (Only can be configured when Static IP is selected)",
	"gateway": "<B>Gateway</B> - Enter gateway provided by your ISP. (Only can be configured when Static IP is selected)",
	"dns_serv": "<B>DNS Server</B> - Enter DNS server provided by your ISP. (Only can be configured when Static IP is selected)",
	"internet": "<B>Internet IP Address</B> The Internet IP address assigned by L2TP server.",
	"inte_dns": "<B>Internet DNS</B> The Internet DNS server address assigned by L2TP server.",
	"alwa_on": "<b>Always on</b> - Connect automatically after the Router is disconnected. To use this option, click the radio button.",
	"connect": "<B>Connect on demand</B> - You can configure the Router to disconnect your Internet connection after a specified period of the Internet connectivity (<B>Max Idle Time</B>). If your Internet connection has been terminated due to inactivity, <B>Connect on Demand </B> enables the Router to automatically re-establish your connection as soon as you attempt to access the Internet again. If you wish to activate <B>Connect on Demand</B>, click the radio button. If you want your Internet connection to remain active at all times, enter <B>0</B> in the <B>Max Idle Time</B> field. Otherwise, enter the number of minutes you want to have elapsed before your Internet connection terminates.",
	"caution": "<b>Caution</b> - Sometimes the connection cannot be disconnected although you specify a time to <B>Max Idle Time</B> because some applications visit the Internet continually in the background.",
	"connect_manu": "<b>Connect Manually</b> - You can configure the Router to make it connect or disconnect manually. After a specified period of inactivity (<B>Max Idle Time</B>), the Router will disconnect your Internet connection, and not be able to re-establish your connection automatically as soon as you attempt to access the Internet again. To use this option, click the radio button. If you want your Internet connection to remain active at all times, enter <B>0</B> in the <B>Max Idle Time</B> field. Otherwise, enter the number in minutes that you wish to have the Internet connecting last unless a new link requested.",
	"caution_0": "<b>Caution</b> - Sometimes the connection cannot be disconnected although you specify a time to <B>Max Idle Time</B> because some applications visit the Internet continually in the background.",
	"connect_0": "Click the <B>Connect</B> button to connect immediately.",
	"disconnect": "Click the <B>Disconnect</B> button to disconnect immediately.",
	"save": "Click the <B>Save</B> button to save your settings."
};
var LanArpBindingHelpRpm =
{
	"header": "Binding Settings Help",
	"brief": "ARP Binding is useful for controlling access of specific computers in the LAN.",
	"mac_addr": "<B>MAC Address</B> - The MAC address of the controlled computer in the LAN.",
	"ip_addr": "<B>IP Address</B> - The assigned IP address of the controlled computer in the LAN.",
	"bind": "<B>Bind</B> - Check this option to enable ARP binding for a specific device.",
	"edit": "<b>Edit</b>-To edit an existing entry.",
	"add_new": "<b>Add New</b> - Click the <b>Add New</b> button to add a new entry to the table.",
	"enable_sele": "<b>Enable Selected</b> - Click the <b>Enable Selected</b> button to enable selected entries.</b>",
	"disable_sele": "<b>Disable Selected</b> - Click the <b>Disable Selected</b> button to disable selected entries.</b>",
	"delete_sele": "<b>Delete Selected</b> - Click the <b>Delete Selected</b> button to delete selected entries.</b>",
	"example": "<B>Example:</B> If you want to use binding to assign 192.168.0.4 to PC A (MAC: 00:E0:4C:00:07:BE) and to keep other PCs from using the address. First, enable the \"ARP Binding\". Then add a new item in the binding table so that the table resembles the one below.",
	td_mac: "MAC Address",
	td_ip: "IP Address",
	td_bind: "Bind",
	td_edit: "Edit"
};
var LanArpBindingListHelpRpm =
{
	"header": "ARP List Help",
	"brief": "You can see IP addresses on the LAN and their associated MAC addresses by viewing the ARP list. Also, you can use the Load and Delete buttons to manage the list.",
	"mac_addr": "<B>MAC Address</B> - The MAC address of a controlled computer in the LAN.",
	"ip_addr": "<B>IP Address</B> - The assigned IP address of a controlled computer in the LAN.",
	"status": "<B>Status</B> - Indicates whether or not the MAC and IP addresses are bound.",
	"load_sele": "<B>Load Selected</B> - Load the item to the IP & MAC Binding list.",
	"delete_sele": "<B>Delete Selected</B> - Delete the item from the list.",
	"note": "<B>Note:</B> An item can not be loaded to the IP & MAC Binding list if the IP address of the item has been loaded before."
};
var LanDhcpServerHelpRpm =
{
	"header": "DHCP Settings Help",
	"brief": "The Router is set up by default as a DHCP (Dynamic Host Configuration Protocol) server, which provides the TCP/IP configuration for all the PCs that are connected to the Router in the LAN.",
	"server": "<b>DHCP Server - Enable</b> or <b>Disable</b> the server. If you disable the Server, you must have another DHCP server within your network or else you must configure the IP address of the computer manually.",
	"address": "<b>Start IP Address - </b>This field specifies the first address in the IP Address pool. 192.168.0.100 is the default start IP address.",
	"address_0": "<B>End IP Address</B> - This field specifies the last address in the IP Address pool. 192.168.0.199 is the default end IP address.",
	"leas_time": "<B>Lease Time</B> - The <B>Address Lease Time</B> is the length of time a network user will be allowed to keep connecting to the Router with the current DHCP Address. Enter the amount of time, in minutes, that the DHCP address will be \"leased\". The time range is 1~2880 minutes. The default value is 120 minutes.",
	"default_gate": "<B>Default Gateway - </B>(Optional) Suggest to input the IP Address of the LAN port of the Router, default value is 192.168.0.1.",
	"defa_domain": "<B>Default Domain</B> - (Optional) Input the domain name of your network.",
	"dns_serv": "<B>DNS Server - </B>(Optional) Input the DNS IP address provided by your ISP. Or consult your ISP.",
	"secondary": "<B>Secondary DNS Server</B> - (Optional) You can input the IP Address of another DNS server if your ISP provides two DNS servers.",
	"note": "<B>Note</B>: To use the DHCP server function of the Router, you should configure all computers in the LAN as \"Obtain an IP Address automatically\" mode. This function will take effect until the Router reboots.",
	"save": "Click <B>Save</B> to save the changes."
};
var LocalManageControlHelpRpm =
{
	"header": "Local Management Help",
	"brief": "This page allows you to deny LAN computers from accessing the Router.",
	"allowed": "By default, the radio button <B>All the PCs on the LAN are allowed to access the Router\'s Web-Based Utility</B> is selected. If you want to allow PCs with specific MAC Addresses to access the Setup page of the Router\'s Web-Based Utility locally, from inside the network, click the radio button <B>Only the PCs listed can browse the built-in web pages to perform Administrator tasks</B>,and then enter MAC Address in Your PC\'s MAC Address field. The format for the MAC Address is XX:XX:XX:XX:XX:XX (X is any hexadecimal digit).Only the PC with the MAC address listed can use the password to browse the built-in web pages to perform Administrator tasks and all the others will be blocked.",
	"set": "After click the <B>Set</B> button, your PC\'s MAC Address will be placed in the Control List above.",
	"save": "Click the <B>Save</B> button to save your settings.",
	"note": "<B>Note</B>: If your PC is blocked and you want to access the Router again, use a pin to press and hold the <B>Reset Button</B> on the back panel about 5 seconds to reset the Router\'s factory defaults in the Router\'s Web-Based Utility."
};
var MacCloneCfgHelpRpm =
{
	"header": "MAC Clone Help",
	"brief": "Most Cable ISPs (Internet Service Provider) register the unique MAC Address from the wired connection on your <span id = \"t_main_computer\" style=\"color:#FF0000\">MAIN COMPUTER - the last computer used to be connected with the Cable Modem and had Internet connection</span>.",
	"s_0": "If you add a router to the network, your ISP may not recognize the MAC address of the router and not allow it to connect.",
	"s_1": "However, TP-Link router can \"clone\" or replicate the registered MAC address of the MAIN COMPUTER. Then your ISP can release the Internet connection to the router and all the computers.",
	"address": "<B>WAN MAC Address</B> - This field displays the current MAC address of the WAN port. If your ISP requires that you register the MAC address, please enter the correct MAC address into this field. The format for the MAC Address is XX:XX:XX:XX:XX:XX (X is any hexadecimal digit).",
	"address_0": "<B>Your PC\'s MAC Address</B> - This field displays the MAC address of the PC that is managing the Router. If the MAC address of your adapter is registered, you can click the <B>Clone MAC Address</B> button , then it will be filled into the <B>WAN MAC Address</B> field.",
	"restore": "Click <B>Restore Factory MAC</B> to restore the MAC address of WAN port to the factory default value.",
	"save": "Click the <B>Save</B> button to save your settings.",
	"note": "<B>Note</B>:",
	"s_2": "Please ensure you are doing the MAC Clone with the wired connection of your <span style=\"color:#FF0000\">MAIN COMPUTER</span> which used to be connected with your Cable and had Internet connection.",
	"address_1": "Only the PC(s) in your LAN can use the <B>MAC Address Clone</B> feature.",
	"address_2": "If you change <B>WAN MAC Address</B> when the WAN connection type is PPPoE, it will not take effect until the connection is re-established."
};
var ManageControlHelpRpm =
{
	"header": "Remote Management Help",
	"brief": "This feature allows you to manage your Router from a remote location via the Internet.",
	"management": "<B>Web Management Port</B> - Web browser access normally uses the standard HTTP service port 80. This Router\'s default remote management web port number is 80. For greater security, you can change the remote management web port to a custom port by entering that number in the box provided. Choose a number between 1024 and 65535 but do not use the number of any common service port.",
	"management_0": "<B>Remote Management IP Address</B> - This is the current address you will use when accessing your Router from the Internet. This function is disabled when the IP address is set to the default value of 0.0.0.0. To enable this function change 0.0.0.0 to a valid IP address. If set to 255.255.255.255, then all the hosts can access the Router from internet.",
	"s_0": "To access the Router, you should enter your Router\'s WAN IP address into your browser\'s address (in IE) or location (in Netscape) box, followed by a colon and the custom port number you set in the Web Management Port box. For example, if your Router\'s WAN address is 202.96.12.8 and you use port number 8080, enter http://202.96.12.8:8080 in your browser. You will be asked for the Router's password. After successfully entering the password, you will be able to access the Router\'s web-based utility.",
	"note": "<B>Note:</B>",
	"s_1": "Be sure to change the Router\'s default password to a secure password.",
	"virt_server": "If the web management port conflicts with the one used for a <b>Virtual Server</b> entry, the entry will be automatically <b>disabled</b> after the setting is saved."
};
var MediaServerCfgHelpRpm =
{
	"header": "Media Server Help",
	"brief": "You can configure media server on this page.",
	"s_0": "Follow the instructions below to set up your media server:",
	"s_1": "Plug an external USB hard disk drive or USB flash drive into this Router.",
	"start": "Click the <B>Start</B> button to start the media server.",
	"folder": "Click the <B>Add share folder</B> button to specify a folder as the search path of media server.",
	"scan_all": "Click the <B>Scan All</B> button to scan all the share folders immediately. You can also select the <B>Auto-scan</B>, at same time select an auto scan interval time by pull-down list. In this case, the media server will auto scan the share folders.",
	"delete": "On this page, when a share folder is added, you can view its display name, file system type, folder path and you can delete the share folder by click <B>delete</B>.",
	"name": "<B>Name</B> - This folder\'s display name.",
	"file_syst": "<B>File System</B> - The file system type on the partition can be FAT32 or NTFS.",
	"folder_0": "<B>Folder</B> - The real full path of the specified folder.",
	"delete_0": "<B>Delete</B> - You can delete the share folder by click <B>delete</B>.",
	"note": "<B>Note</B>:",
	"s_2": "The max share folders number is 6. If you want share a new folder when the number has reached 6, you can delete a share folder and then add a new one.",
	"start_0": "Click the <B>Start</B> button to start the media server.",
	"stop": "Click the <B>Stop</B> button to stop the media server.",
	"scan_all_0": "Click the <B>Scan All</B> button to scan all the share folders immediately.",
	"delete_1": "Click the <B>delete</B> to delete the specify share folder."
};
var MiscHelpRpm =
{
	"header": "Advanced Security Help",
	"brief": "Using the <B>Advanced Settings</B> page, you can protect the Router from being attacked by TCP-SYN Flood, UDP Flood and ICMP-Flood.",
	"statistics": "<font color=\"#ff0000\">Note: FLOOD Filtering will take effect only when the <b>Statistics</b> in <b>System Tools</b> is enabled.</font>",
	"note_2":"<font color=\"#ff0000\">Note 2: If Hardware NAT is enabled, FLOOD Filtering will NOT take effect, because these two modules cannot work at the same time.</font>",
	"dos_prot": "<B>DoS Protection</B> - Enable or Disable the DoS protection function. Only when it is enabled, will the flood filters be enabled.",
	"filtering": "<B>Enable ICMP-FLOOD Attack Filtering</B> - Enable or Disable the ICMP-FLOOD Attack Filtering.",
	"threshold": "<B>ICMP-FLOOD Packets Threshold (5~3600)</B> - The default value is 50. Enter a value between 5 <B>~</B> 3600. When the current ICMP-FLOOD Packets number is beyond the set value, the Router will startup the blocking",
	"filtering_0": "<B>Enable UDP-FLOOD Filtering</B> - Enable or Disable the UDP-FLOOD Filtering.",
	"threshold_0": "<B>UDP-FLOOD Packets Threshold (5~3600)</B> - The default value is 500. Enter a value between 5 <B>~</B> 3600. When the current UPD-FLOOD Packets number is beyond the set value, the Router will startup the blocking function immediately.",
	"filtering_1": "<B>Enable TCP-SYN-FLOOD Attack Filtering</B> - Enable or Disable the TCP-SYN-FLOOD Attack Filtering.",
	"threshold_1": "<B>TCP-SYN-FLOOD Packets Threshold (5~3600)</B> - The default value is 50. Enter a value between 5 <B>~</B> 3600. When the current TCP-SYN-FLOOD Packets numbers is beyond the set value, the Router will startup the blocking function immediately.",
	"forbidwan": "<B>Forbid Ping Packet From WAN Port</B> - Enable or Disable Forbid Ping Packet From WAN Port. The default setting is enabled. The ping packet from WAN cannot access the Router. (Defends against some viruses).",
	"forbidlan": "<B>Forbid Ping Packet From LAN Port</B> - Enable or Disable Forbid Ping Packet From LAN Port. The default setting is disabled. If enabled, the ping packet from LAN cannot access the Router. (Defends against some viruses).",
	"save": "Click the <B>Save</B> button to save the settings.",
	"blocked": "Click the <B> Blocked DoS Host List </B> button to display the DoS host table by blocking."
};
var NasCfgHelpRpm =
{
	"header": "Storage Sharing Help",
	"brief": "You can configure a USB disk drive attached to the Router on this page.",
	"s_0": "Follow the instructions below to set up your Router as a file server:",
	"s_1": "Plug an external USB hard disk drive or USB flash drive into this Router.",
	"rescan": "Click the <B>Rescan</B> button to find the USB drive that has been attached to the Router.",
	"start": "Click the <B>Start</B> button to start the Storage Sharing service.",
	"enable": "Click the <B>Enable</B> button in shared row to enable the disk to share.",
	"disable": "Click the <B>Disable</B> button in shared row to disable the disk to share.",
	"s_2": "On this page, you can view volume and share properties such as share name, capacity, used space, and free space, etc.",
	"serv_status": "<B>Service Status</B> - Indicates the Storage Sharing service\'s current status.",
	"volume": "<B>Volume</B> - The volume name of the USB drive the users have access to. <SPAN style=\"color:#FF0000\">Volume 1-8</SPAN> is mapping to USB port 1, <SPAN style=\"color:#FF0000\">Volume 9-16</SPAN> is mapping to USB port 2.",
	"capacity": "<B>Capacity</B> - The storage capacity of the USB driver.",
	"used": "<B>Used</B> - The used space of the USB driver.",
	"free": "<B>Free</B> - The available space of the USB driver.",
	"use": "<B>Use%</B> - The percentage of the used space.",
	"shared": "<B>Shared</B> - Indicates the shared or non-shared status of the volume. When the volume is shared, you can click the <B>Disable</B> to stop sharing the volume; but when volume is non-shared, you can click the <B>Enable</B> button to share the volume.",
	"following": "<B>You can access the USB Storage by the following steps</B>:",
	"windows": "<B>For Windows XP</B>:",
	"s_3": "Go to Start > Run",
	"s_4": "Input \"\\tplinklogin.net\" in the dialog box",
	"s_5": "Click OK",
	"windows_0": "<B>For Windows Vista/7</B>:",
	"s_6": "Go to Start",
	"s_7": "Type \"run\" in the search box",
	"s_8": "Open the run application",
	"s_9": "Input \"\\tplinklogin.net\" in the dialog box",
	"s_10": "Click OK",
	"note": "<B>Note</B>:",
	"s_11": "The Router can automatically locate new USB drive.",
	"s_12": "The new settings will not take effect until you restart the service.",
	"ejec_disk": "To unplug the USB drive, click <B>Eject Disk</B> button first. Simply pulling USB drive out of the USB port can cause damage to the device and loss of data.",
	"s_13": "Mounted volumes of each usb port are subject to the 8-volume limit, so you cannot access more than 8 volumes on the USB storage device.",
	"s_14": "If you change the storage settings during the storage connection is established, then the changes will not take effect until the Router or the client was reboot.",
	"start_0": "Click the <B>Start</B> button to start the Storage Sharing service.",
	"stop": "Click the <B>Stop</B> button to stop the Storage Sharing service.",
	"ejec_disk_0": "Click the <B>Eject Disk</B> button to safely remove the USB storage device that is connected to USB port. This takes the drive offline. A message will appear on your web browser when it is safe to detach the USB disk.",
	"rescan_0": "Click the <B>Rescan</B> button to start a new scan."
};
var NasFtpCfgHelpRpm =
{
	"header": "FTP Server Help",
	"brief": "You can configure ftp server on this page.",
	"s_0": "Follow the instructions below to set up your ftp server:",
	"s_1": "Plug an external USB hard disk drive or USB flash drive into this Router.",
	"enable_disa": "Click the <B>Enable/Disable</B> radio box to enable/disable internet access to ftp from WAN port.",
	"serv_port": "Change the <B>Service port</B> to specify a port for ftp server to use (default 21).",
	"inte_address": "The <B>Internet Address</B> displays the WAN IP address of this router, so that others can access ftp through this address.",
	"public_addr": "If Wan type is PPPOE/PPTP/L2TP, there would be two connections. Therefore, users can access ftp server via two connections. Users in a private LAN can access ftp server via <B>Public Address</B> while internet users can access ftp server via <B>Internet Address</B>.",
	"start": "Click the <B>Start</B> button to start the ftp server.",
	"delete": "On this page, when a share folder is added, you can view its display name, volume partition, folder path and you can delete the share folder by click <B>delete</B> button.",
	"name": "<B>Name</B> - This folder\'s display name.",
	"partition": "<B>Partition</B> - The volume that the folder resides. <SPAN style=\"color:#FF0000\">Volume 1-8</SPAN> is mapping to USB port 1, <SPAN style=\"color:#FF0000\">Volume 9-16</SPAN> is mapping to USB port 2.",
	"folder": "<B>Folder</B> - The real full path of the specified folder.",
	"edit": "<B>Edit</B> - You can edit the share folder by click <B>edit</B> button.",
	"delete_0": "<B>Delete</B> - You can delete the share folder by click <B>delete</B> button.",
	"note": "<B>Note</B>:",
	"s_2": "The max share folders number is 10. If you want to share a new folder when the number has reached 10, you can delete a share folder and then add a new one.",
	"s_3": "If you want to change the FTP settings, you need to restart FTP Server to enable the Settings Change."
};
var NasUserCfgHelpRpm =
{
	"header": "User Accounts Help",
	"brief": "You can specify the user name and password for Storage Sharing and FTP Server users on this page. Storage Sharing users can use Internet Explorer to access files on the USB drive. FTP Server users can log into the FTP Server via FTP Clients.",
	"s_0": "There is one default user account that can access the Storage Sharing and FTP Server. It is Administrator. Administrator has read/write access to Storage Sharing and can access FTP Server.",
	"s_1": "Only Administrator can use a Web browser to transfer the files from a PC to the Writable shared volume on the USB drive.",
	"user_name": "<B>User Name</B> - Type the user name that you want to give access to the USB drive. The user name must be composed of alphanumeric symbols not exceeding 15 characters in length.",
	"password": "<B>Password</B> - Enter the password in the Password field. The password must be composed of alphanumeric symbols not exceeding 15 characters in length. For security purposes, the password for each user account is not displayed.",
	"confirm_pass": "<B>Confirm Password</B> - Re-enter the password here.",
	"note": "<B>Note</B>:",
	"windows": "If you cannot use the new user name and password to access the shares, press <B>Windows logo + R</B> to open the <B>Run</B> dialog box and type <B>net use \\192.168.0.1 /delete /yes</B> and press Enter. (192.168.0.1 is your Router\'s LAN IP address.)",
	"save": "Click the <B>Save</B> button to save your settings."
};
var NatStatusCfgHelpRpm =
{
	"header": "NAT Control Setting Help",
	"brief": "In this page you can disable or enable the NAT and Hardware NAT Control feature. The NAT Rules and Hardware NAT will work properly only when the NAT Control feature is enabled.",
	"control": "<B>Enable NAT Control</B> - If enabled, the NAT function and the Forwarding configuration will take effect.",
	"disable": "<B>Disable NAT Control</B> - If disabled,neither NAT function nor Forwarding configuration will take effect.",
	"hardware": "<B>Enable Hardware NAT Control</B> - If enabled, the Hardware NAT feature will take effect.",
	"hardware_0": "<B>Disable Hardware NAT Control</B> - If disabled, neither Hardware NAT feature will take effect."
};
var NetworkCfgHelpRpm =
{
	"header": "LAN Help",
	"brief": "You can configure the IP parameters of LAN on this page.",
	"mac_addr": "<B>MAC Address</B> - The physical address of the LAN ports, as seen from the LAN. The value cannot be changed.",
	"ip_addr": "<B>IP Address</B> - Enter the IP address of your Router in dotted-decimal notation (factory default - 192.168.0.1).",
	"subn_mask": "<B>Subnet Mask</B> - An address code that determines the size of the network. Usually it is 255.255.255.0.",
	"igmp_snoo": "<B>IGMP Snooping</B> - IGMP snooping is designed to prevent hosts on a local network from receiving traffic for a multicast group they have not explicitly joined. IGMP snooping is especially useful for bandwidth-intensive IP multicast applications such as IPTV.",
	"note": "<B>Note: </B>",
	"s_0": "If you change the LAN IP address, you must use the new IP address to login to the Router.",
	"s_1": "If the new LAN IP address you set is not in the same subnet with the previous one, the IP Address pool in the DHCP server will be configured automatically, but the Virtual Server and DMZ Host will not take effect until they are re-configured",
	"s_2": "You can enable or disable IGMP Proxy. This feature is enabled by default.",
	"save": "Click the <B>Save</B> button to save your settings."
};
var NoipDdnsHelpRpm =
{
	"header": "DDNS Help",
	"brief": "The Router offers a Dynamic Domain Name System (<B>DDNS</B>) feature. DDNS lets you assign a fixed host and domain name to a dynamic Internet IP address. It is useful when you are hosting your own website, FTP server, or other server behind the Router. Before using this feature, you need to sign up width DDNS service providers such as <a href=\"#\" onClick=\"openWindow1();\" class=L1>www.noip.com</a>. The Dynamic DNS client service provider will give you a password or key.",
	"s_0": "Follow these instructions to set up DDNS:",
	"service_prov": "If your selected dynamic DNS <b>Service Provider</b> is <a href=\"#\" onClick=\"openWindow1();\" class=L1>www.noip.com</a>.&nbsp;",
	"user_name": "Enter the <B>User Name</B> for your DDNS account.",
	"password": "Enter the <B>Password</B> for your DDNS account.",
	"doma_name": "Enter the <B>Domain Name</B> you received from dynamic DNS service provider.",
	"login": "Click the <B>Login</B> button to login to the DDNS service.",
	"conn_status": "<B>Connection Status</B> - The status of the DDNS service connection is displayed here.",
	"logout": "Click <B>Logout</B> to logout of the DDNS service.",
	"notice": "<B>Notice:</B>&nbsp;&nbsp;If you want to login again with another account after a successful login, please click the <B>Logout</B> button, then input your new username and password and click the <B>Login</B> button."
};
var ParentCtrlAdvHelpRpm =
{
	"header": "Add or Modify Parental Controls Entry Help",
	"brief": "The Router, providing convenient parental controls function to control the internet activities of the child, can limit the child to access certain website and restrict the time of the surfing. On this page, you can create the rule.",
	"address": "<B>MAC Address of Children\'s PC </B> - Enter the MAC address of the PC you want to control, or you can make use of the All MAC Address In Current LAN item below. If you leave it blank, then the rule will be applied to all of the PCs except the parental PC.",
	"address_0": "<B>ALL MAC Address In Current LAN</B> - You can see the MAC addresses of all PCs in current LAN by clicking on the drop-down button. Choose one of them, then this MAC address will be filled to the MAC Address of Child PC field.",
	"website_desc": "<B>Website description</B> - In this field, create a description for the website(s). Note that this description should be <b>unique</b>.",
	"allowed": "<B>Allowed Website Name </B> - In this field, you can enter 8 domain names allowed for the child to access, either the full name or the keywords (for example google). Any domain name with keywords in it (www.google.com, news.google.com) will be allowed.",
	"effe_time": "<B>Effective Time </B> - In this field, choose the effective time for the rule or you can make use of <b>Access Control > Schedule</b> to create the schedule as you like. The default value is Anytime.",
	"status": "<B>Status </B> - In this field, there are two options, Enabled or Disabled. Enabled means that this rule will take effect while Disabled means that this rule won\'t take effect.",
	"save": "Click <B>Save</B> to complete the settings.",
	"back": "Click <B>Back</B> to return to the Parental Controls Settings page."
};
var ParentCtrlHelpRpm =
{
	"header": "Parental Controls Help",
	"brief": "you can configure the parental controls in the page. The Parental Controls function can be used to control the internet activities of the child, limit the child to access certain websites and restrict the time of surfing.",
	"parental": "<B>Enable Parental Controls</B> Check the box if you want this function to take effect. This function is disabled by default.",
	"parental_0": "<B>MAC Address of Parental PC</B> In this field, enter the MAC address of the controlling PC, or you can make use of the <B>Copy To Above</B> button below.",
	"address": "<B>MAC Address of Current PC</B> This field displays the MAC address of the PC that is managing this router. If the MAC Address of your adapter is registered, you can click the Copy To Above button to fill this address to the MAC Address of Parental PC field above.",
	"sche": "Set the time period allowed for the PC controlled to access the Internet.",
	"for_exam": "<B>For example</B>: If you desire to restrict the internet activities of host with MAC address 00:11:22:33:44:AA to access www.google.com only <b>from 18:00 to 20:00</b> on <b>Saturday and Sunday</b>, you should first follow the settings below:",
	"add_new": "Click <B>Add New</B> button to enter the Schedule List Settings page.",
	"unique": "In Description field, create a <b>unique</b> description for the schedule, for example Schedule_1.",
	"s_0": "In Apply To field, select the day or days you need.",
	"s_1": "In time field, you can select all day-24 hours or you may enter the Start Time and Stop Time in the corresponding field.",
	"controlClient": "Set the PC you want to control.",
	"control_exam": "<B>For example</B>: Enter the MAC address of the PC (e.g. 00: 11:22:33:44:AA) you like to control in the MAC Address 1-4 field, or you can choose the MAC address from the  MAC Address in current LAN drop-down list.",
	"add_url": "<B>Add URL</B> Here you can input the net addresses which the child is allowed to access."
};
var PingHelpRpm =
{
	"header": "Diagnostic Tools Help",
	"brief": "The diagnostic tools (Ping and Traceroute) allow you to check the connections of your network components.",
	"diag_tool": "<B>Diagnostic Tool</B> - Click the radio button to select one diagnostic tool:",
	"ping": "<B>Ping</B> - This diagnostic tool troubleshoots connectivity, reachability, and name resolution to a given host or gateway by using the Internet Control Message Protocol (ICMP) protocol\'s mandatory Echo Request datagram to elicit an ICMP Echo Response from a host or gateway. You can use ping to test both numeric IP address or domain name. If pinging the IP address is successful, but pinging the domain name is not, you might have a name resolution problem. In this case, ensure that the domain name you are specifying can be resolved by using Domain Name System (DNS) queries.",
	"traceroute": "<B>Traceroute</B> - This diagnostic tool determines the path taken to a given host by sending Internet Control Message Protocol (ICMP) Echo Request messages with varying Time to Live (TTL) values to the destination. Each gateway along the path is required to decrement the TTL in an IP packet by at least 1 before forwarding it. Effectively, the TTL is a maximum link counter. When the TTL on a packet reaches 0, the gateway is expected to return an ICMP Time Exceeded response to your Router. Traceroute determines the path by sending the first Echo Request message with a TTL of 1 and incrementing the TTL by 1 on each subsequent transmission until the target responds or the maximum number of hops is reached. The maximum number of hops is 20 by default and can be specified in the field \"Traceroute Max TTL\". The path is determined by examining the ICMP Time Exceeded messages returned by intermediate gateways and the Echo Reply message returned by the destination. However, some gateways do not return Time Exceeded messages for packets with expired TTL values and are invisible to the traceroute tool. In this case, a row of asterisks (*) is displayed for that hop.",
	"address": "<B>IP Address/ Domain Name</B> - Enter the IP Address or Domain Name of the PC whose connection you wish to diagnose.",
	"ping_coun": "<B>Ping Count</B> - Specifies the number of Echo Request messages sent. The default is 4.",
	"packet": "<B>Ping Packet Size</B> - Specifies the number of data bytes to be sent. The default is 64.",
	"ping_time": "<B>Ping Timeout</B> - Time to wait for a response, in seconds. The default is 1.",
	"traceroute_0": "<B>Traceroute Max TTL</B> - Set the maximum number of hops (max TTL to be reached) in the path to search for the target (destination). The default is 20.",
	"start": "Click the <B>Start</B> button to start the diagnostic procedure.",
	"note": "<B>Note:</B>",
	"s_0": "Only one user can use the diagnostic tools at one time.",
	"s_1": "\"Ping Count\", \"Ping Packet Size\" and \"Ping Timeout\" are Ping Parameters, and \"Traceroute Max TTL\" is Traceroute Parameter."
};
var PPPoECfgHelpRpm =
{
	"header": "WAN Help",
	"brief": "<B>WAN Connection Type:</B>",
	"dyna_ip": "If your ISP is running a DHCP server, select the <B>Dynamic IP</B> option.",
	"stat_ip": "If your ISP provides a static or fixed IP Address, Subnet Mask, Gateway and DNS setting, select the <B>Static IP</B> option.",
	"pppoe": "If your ISP provides a PPPoE connection, select <B>PPPoE</B> option.",
	"bigp_cable": "If your ISP provides BigPond Cable(or Heart Beat Signal) connection, please select <B>BigPond Cable</B> option.",
	"l2tp": "If your ISP provides L2TP connection, please select <B>L2TP</B> option.",
	"pptp": "If your ISP provides PPTP connection, please select <B>PPTP</B> option.",
	"note": "<B>Note</B>: If you don\'t know how to choose the appropriate connection type, click the <B>Detect</B> button to allow the Router to automatically search your Internet connection for servers and protocols. The connection type will be reported when an active Internet service is successfully detected by the Router. This report is for your reference only. To make sure the connection type your ISP provides, please refer to the ISP. The various types of Internet connections that the Router can detect are as follows:",
	"pppoe_0": "<B>PPPoE</B> - Connections which use PPPoE that requires a user name and password.",
	"dyna_ip_0": "<B>Dynamic IP</B> - Connections which use dynamic IP address assignment.",
	"stat_ip_0": "<B>Static IP</B> - Connections which use static IP address assignment.",
	"password": "<B>User Name/Password</B> - Enter the User Name and Password provided by your ISP. These fields are case-sensitive.",
	"secondary_conn": "<B>Secondary Connection</B> - Secondary Connection - It\'s available only for PPPoE Connection. If your ISP provides an extra Connection type such as Dynamic/Static IP to connect to a local area network, then you can check the radio button of Dynamic/Static IP to activate this secondary connection. (The secondary connection shouldn\'t be in the same subnet with pppoe connection.)",
	"disabled": "<B>Disabled</B> - The Secondary Connection is disabled by default, so there is PPPoE connection only. This is recommended.",
	"dyna_ip_1": "<B>Dynamic IP</B> - Use dynamic IP address to connect to the local area network provided by ISP.",
	"stat_ip_1": "<B>Static IP</B> - Use static IP address to connect to the local area network provided by ISP. <B>IP Address</B> - IP Address - Enter the IP address provided by ISP for the secondary connection. This address is used only for accessing the local area network of the secondary connection. <B>Subnet Mask</B> - Enter the subnet mask provided by ISP for the secondary connection.",
	"alwa_on": "<b>Always on</b> - Connect automatically after the Router is disconnected. To use this option, click the radio button.",
	"connect": "<B>Connect on Demand</B> - You can configure the Router to disconnect your Internet connection after a specified period of the Internet connectivity (<B>Max Idle Time</B>). If your Internet connection has been terminated due to inactivity, <B>Connect on Demand </B> enables the Router to automatically re-establish your connection when you attempt to access the Internet again. If you wish to activate <B>Connect on Demand</B>, put a check mark in the circle. If you want your Internet connection to remain active all the times, enter <B>0</B> in the <B>Max Idle Time</B> field.",
	"note_0": "<b>Note:</b> Sometimes the connection cannot be disconnected although you specify a time to <B>Max Idle Time</B>(0~99 mins) because some applications visit the Internet continually in the background.",
	"connect_manu": "<b>Connect Manually</b> - You can configure the Router to make it connect or disconnect manually. After a specified period of inactivity (<B>Max Idle Time</B>), the Router will disconnect your Internet connection, and not be able to re-establish your connection automatically as soon as you attempt to access the Internet again. To use this option, click the radio button. If you want your Internet connection to remain active all the times, enter <B>0</B> in the <B>Max Idle Time</B> field. Otherwise, enter the number in minutes that you wish to have the Internet connecting last unless a new link requested.",
	"note_1": "<b>Note:</b> Sometimes the connection cannot be disconnected although you specify a <B>Max Idle Time</B>(0~99 mins) because some applications visit the Internet continually in the background.",
	"note_2": "<B>Note:</B> Only when you have set the system time on <B>System Tools</B> -> <B>Time Settings</B> page, the <B>Time-based Connecting</B> function can take effect.",
	"connect_0": "Click the <B>Connect</B> button to connect immediately.",
	"disconnect": "Click the <B>Disconnect</B> button to disconnect immediately.",
	"advanced": "Click the <B>Advanced</B> button to set up the advanced options.",
	"save": "Click the <B>Save</B> button to save your settings."
};
var PPPoEv6CfgHelpRpm =
{
	"header": "IPv6 WAN Help",
	"brief": "<B>WAN Connection Type:</B>",
	"s_0": "Choosing the correct WAN connection type based on your ISP network topology.",
	"dhcpv": "<B>DHCPv6</B> - Connections which use dynamic IPv6 address assignment.",
	"stat_ipv": "<B>Static IPv6</B> - Connections which use static IPv6 address assignment.",
	"pppoev": "<B>PPPoEv6</B> - Connections which use PPPoEv6 that requires a user name and password.",
	"tunn_6to": "<B>Tunnel 6to4</B> - Connections which use 6to4 address assignment.",
	"password": "<B>User Name/Password</B> - Enter the User Name and Password provided by your ISP. These fields are case-sensitive.",
	"advance": "If your ISP gives you one or two DNS IPv6 addresses, click <b>Advance</b> and select <B>Set the IPv6 DNS Server manually</B> and enter the <B>Primary IPv6 DNS</B> and <B>Secondary IPv6 DNS</B> into the correct fields. Otherwise, the DNS servers will be assigned from ISP dynamically.",
	"primary": "<B>Primary IPv6 DNS</B> - Enter the DNS IPv6 address in colon-hexadecimal notation provided by your ISP.",
	"secondary": "<B>Secondary IPv6 DNS</B> - Enter another DNS IPv6 address in colon-hexadecimal notation provided by your ISP.",
	"connect": "<B>Connect on Demand</B> - You can configure the Router to disconnect your Internet connection after a specified period of the Internet connectivity (<B>Max Idle Time</B>). If your Internet connection has been terminated due to inactivity, <B>Connect on Demand </B> enables the Router to automatically re-establish your connection when you attempt to access the Internet again. If you wish to activate <B>Connect on Demand</B>, put a check mark in the circle. If you want your Internet connection to remain active all the times, enter <B>0</B> in the <B>Max Idle Time</B> field.",
	"note": "<b>Note:</b> Sometimes the connection cannot be disconnected although you specify a time to <B>Max Idle Time</B>(0~99 mins) because some applications visit the Internet continually in the background.",
	"connect_auto": "<b>Connect Automatically</b> - Connect automatically after the Router is disconnected. To use this option, click the radio button.",
	"connecting": "<B>Time-based Connecting</B> - You can configure the Router to make it connect or disconnect based on time. Enter the start time in HH-MM for connecting and end time in HH-MM for disconnecting in the <B>Period of Time</B> fields.",
	"connect_manu": "<b>Connect Manually</b> - You can configure the Router to make it connect or disconnect manually. After a specified period of inactivity (<B>Max Idle Time</B>), the Router will disconnect your Internet connection, and not be able to re-establish your connection automatically as soon as you attempt to access the Internet again. To use this option, click the radio button. If you want your Internet connection to remain active all the times, enter <B>0</B> in the <B>Max Idle Time</B> field. Otherwise, enter the number in minutes that you wish to have the Internet connecting last unless a new link requested.",
	"note_0": "<b>Note:</b> Sometimes the connection cannot be disconnected although you specify a <B>Max Idle Time</B>(0~99 mins) because some applications visit the Internet continually in the background.",
	"note_1": "<B>Note:</B> Only when you have set the system time on <B>System Tools</B> -> <B>Time Settings</B> page, the <B>Time-based Connecting</B> function can take effect."
};
var PptpCfgHelpRpm =
{
	"header": "WAN Help",
	"brief": "<B>WAN Connection Type:</B>",
	"dyna_ip": "If your ISP is running a DHCP server, select the <B>Dynamic IP</B> option.",
	"stat_ip": "If your ISP provides a static or fixed IP Address, Subnet Mask, Gateway and DNS setting, select the <B>Static IP</B> option.",
	"pppoe": "If your ISP provides a PPPoE connection, select <B>PPPoE</B> option.",
	"bigp_cable": "If your ISP provides BigPond Cable (or Heart Beat Signal) connection, please select <B>BigPond Cable</B> option.",
	"l2tp": "If your ISP provides L2TP connection, please select <B>L2TP</B> option.",
	"pptp": "If your ISP provides PPTP connection, please select <B>PPTP</B> option.",
	"password": "<B>User Name/Password</B> - Enter the User Name and Password provided by your ISP. These fields are case-sensitive.",
	"dynamic": "<B>Dynamic IP/Static IP</B> - Select <B>Static IP</B> if IP address, subnet mask, gateway and DNS server address have been provided by your ISP. Otherwise, please select <B>Dynamic IP</B>.",
	"address": "<B>Server IP Address/Name</B> - Enter server IP address or domain name provided by your ISP.",
	"ip_addr": "<B>IP address</B> - Enter the IP address used for dial-up. (Only can be configured when Static IP is selected)",
	"subn_mask": "<B>Subnet Mask</B> - Enter the subnet mask provided by your ISP. (Only can be configured when Static IP is selected)",
	"gateway": "<B>Gateway</B> - Enter gateway provided by your ISP. (Only can be configured when Static IP is selected)",
	"dns_serv": "<B>DNS Server</B> - Enter DNS server provided by your ISP. (Only can be configured when Static IP is selected)",
	"internet": "<B>Internet IP Address</B> The Internet IP address assigned by PPTP server.",
	"inte_dns": "<B>Internet DNS</B> The Internet DNS server address assigned by PPTP server.",
	"alwa_on": "<b>Always on</b> - Connect automatically after the Router is disconnected. To use this option, click the radio button.",
	"connect": "<B>Connect on Demand</B> - You can configure the Router to disconnect your Internet connection after a specified period of the Internet connectivity (<B>Max Idle Time</B>). If your Internet connection has been terminated due to inactivity, <B>Connect on Demand </B> enables the Router to automatically re-establish your connection as soon as you attempt to access the Internet again. If you wish to activate <B>Connect on Demand</B>, click the radio button. If you want your Internet connection to remain active at all times, enter <B>0</B> in the <B>Max Idle Time</B> field. Otherwise, enter the number of minutes you want to have elapsed before your Internet connection terminates.",
	"caution": "<b>Caution</b> - Sometimes the connection cannot be disconnected although you specify a time to <B>Max Idle Time</B> because some applications visit the Internet continually in the background.",
	"connect_manu": "<b>Connect Manually</b> - You can configure the Router to make it connect or disconnect manually. After a specified period of inactivity (<B>Max Idle Time</B>), the Router will disconnect your Internet connection, and not be able to re-establish your connection automatically as soon as you attempt to access the Internet again. To use this option, click the radio button. If you want your Internet connection to remain active at all times, enter <B>0</B> in the <B>Max Idle Time</B> field. Otherwise, enter the number in minutes that you wish to have the Internet connecting last unless a new link requested.",
	"caution_0": "<b>Caution</b> - Sometimes the connection cannot be disconnected although you specify a time to <B>Max Idle Time</B> because some applications visit the Internet continually in the background.",
	"connect_0": "Click the <B>Connect</B> button to connect immediately.",
	"disconnect": "Click the <B>Disconnect</B> button to disconnect immediately.",
	"save": "Click the <B>Save</B> button to save your settings."
};
var PrintServerCfgHelpRpm =
{
	"header": "Print Server Help",
	"brief": "You can configure the print server on this page.",
	"s_0": "There are two states of the print server, described as follows:",
	"online": "<B>Online</B>- Indicates the print server has been turned on. You can click the <B>\"Stop\"</B> button to stop it.",
	"offline": "<B>Offline</B>- Indicates the print server feature is disabled. You can click the <B>\"Start\"</B> button to start it."
};
var QoSCfgHelpRpm =
{
	"header": "Bandwidth Control Settings Help",
	"brief": "In this page you can disable or enable the Bandwidth Control feature. The Bandwidth Control Rules will work properly only when the Bandwidth Control feature is enabled.",
	"bandwidth": "<B>Enable Bandwidth Control</B> - If enabled, the Bandwidth Control rules will take effect.",
	"egress_band": "<B>Egress Bandwidth</B> - The upload speed through the WAN port.",
	"ingress_band": "<B>Ingress Bandwidth</B> - The download speed through the WAN port.",
	"s_0": "Bandwidth Control rules list.",
	"description": "<b>Description</b> - The information of description include address range, the port range and protocol of transport layer.",
	"priority": "<b>Priority</b> - Priority of Bandwidth Control rules. &lsquo;1&rsquo; stands for the highest priority while &lsquo;8&rsquo; stands for the lowest priority. The total Upstream/ Downstream Bandwidth is first allocated to guarantee all the Min Rate of Bandwidth Control rules. If there is any bandwidth left, it is first allocated to the rule with the highest priority, then to the rule with the second highest priority, and so on.",
	"egress_band_0": "<b>Egress Bandwidth</b> - The max upload speed which through the WAN port, default number is 0.",
	"ingress_band_0": "<b>Ingress Bandwidth</b> - The max download speed which through the WAN port, default number is 0.",
	"status": "<b>Status</b> - Rule status, show whether the rule takes effect.",
	"edit": "<b>Edit</b> - Choose to edit or delete an existing entry."
};
var QoSRuleCfgHelpRpm =
{
	"header": "Bandwidth Control Rules Setting Help",
	"brief": "This page is for the bandwidth configure of the Bandwidth Control rules.",
	"status": "<b>Status</b> Enable or disable the rule.",
	"ip_rang": "<b>IP Range</b> - Interior PC address range. If both are blank(or 0.0.0.0), the domain is noneffective.",
	"port_rang": "<b>Port Range</b> - The port range which the Interior PC access the outside PC. If all are blank(or 0), the domain is noneffective.",
	"priority": "<b>Priority</b> - Priority of Bandwidth Control rules. &lsquo;1&rsquo; stands for the highest priority while &lsquo;8&rsquo; stands for the lowest priority. The total Upstream/ Downstream Bandwidth is first allocated to guarantee all the Min Rate of Bandwidth Control rules. If there is any bandwidth left, it is first allocated to the rule with the highest priority, then to the rule with the second highest priority, and so on.",
	"egress_band": "<b>Egress Bandwidth</b> - The max and the min upload speed which through the WAN port.",
	"ingress_band": "<b>Ingress Bandwidth</b> - The max and the min download speed through the WAN port.",
	proto: "<b>Protocol</b> - Transport layer protocol, here there are all, TCP, UDP."
};
var QoSRuleListHelpRpm =
{
	"header": "Bandwidth Control Rules List Help",
	"brief": "This page shows the Bandwidth Control rules list.",
	"id": "<b>ID</b> - The sequence of entry.",
	"description": "<b>Description</b> - The information of description include address range, the port range and protocol of transport layer.",
	"egress_band": "<b>Egress Bandwidth</b> - The max upload speed which through the WAN port, default number is 0.",
	"ingress_band": "<b>Ingress Bandwidth</b> - The max download speed which through the WAN port, default number is 0.",
	"status": "<b>Status</b> - Rule status, show whether the rule takes effect.",
	"modify": "<b>Modify</b> - Choose to modify or delete an existing entry."
};
var RestoreDefaultCfgHelpRpm =
{
	"header": "Factory Defaults Help",
	"brief": "Click the <B>Restore</B> button to reset all configuration settings to their default values.",
	"admin": "Default User Name<B> - admin</B>.",
	"admin_0": "Default Password<B> - admin</B>.",
	"s_0": "Default IP Address<B> - 192.168.0.1</B>.",
	"s_1": "Default Subnet Mask<B> - 255.255.255.0</B>.",
	"note": "<B>Note:</B> All changed settings will be lost when defaults are restored."
};
var SiteSurveyHelpRpm =
{
	"header": "Wlan Site Survey Help",
	"brief": "<B>Note</B>:The information of APs which you could connect to are shown on this page.Use as follow:",
	"s_0": "First, find the line where the network you want to connect lay on.",
	"s_1": "Then, click the hyperlink \"Connect\" at the end of that line.",
	"s_2": "Now, the target network\'s SSID is filled in the correct place on the Wlan config page automatically.",
	"note": "<B>Note</B>: click the <B>Refresh</B> button to update the AP list.",
	"back": "click the <B>Back</B> button to return Wlan config page."
};
var SoftwareUpgradeHelpRpm =
{
	"header": "Firmware Upgrade Help",
	"brief": "To upgrade the Router\'s firmware, follow these instructions:",
	"s_0": "Download a most recent firmware upgrade file from our website",
	"file_name": "Enter or select the path name where you save the downloaded file on the computer into the <B>File Name</B> blank.",
	"upgrade": "Click the <B>Upgrade</B> button.",
	"s_1": "The Router will reboot while the upgrading has been finished.",
	"firm_version": "<B>Firmware Version</B> - Displays the current firmware version.",
	"hard_version": "<B>Hardware Version</B> - Displays the current hardware version. The hardware version of the upgrade file must accord with the current hardware version.",
	"note": "<B>Note: </b> The firmware version must correspond to the hardware. The upgrade process takes a few moments and the Router restarts automatically when the upgrade is complete. It is important to keep power applied during the entire process. Loss of power during the upgrade could damage the Router."
};
var SpecialAppHelpRpm =
{
	"header": "Port Trigger Help",
	"brief": "Some applications require multiple connections, like Internet games, video conferencing, Internet telephoning and so on. Port Triggering is used for some of these applications that cannot work with a pure NAT Router.",
	"configured": "<B>Once configured, operation is as follows</B>:",
	"trig_port": "A local host makes an outgoing connection to an external host using a destination port number defined in the <B>Trigger Port</B> field.",
	"port_trig": "The Router records this connection, opens the incoming port or ports associated with this entry in the <B>Port Triggering</B> table, and associates them with the local host.",
	"open_port": "When necessary, the external host will be able to connect to the local host using one of the ports defined in the <B>Open Port</B> field.",
	"rules": "<B>Rules</B>:",
	"trig_port_0": "<B>Trigger Port</B> - The port for outgoing traffic. An outgoing connection using this port will trigger this rule.",
	"trigger_prot": "<B>Trigger Protocol</B> - The protocol used for Trigger Ports, either <B>TCP, </B><B>UDP</B>, or <B>All</B> (all protocols supported by the Router).",
	"open_port_0": "<B>Open Port</B> - The port or port range used by the remote system when it responds to the outgoing request. A response using one of these ports will be forwarded to the PC which triggered this rule. You can input at most 5 groups of ports (or port sections). Every group of ports must be separated with \",\", for example, 2000-2038, 2046, 2050-2051, 2085, 3010-3030.",
	"open_prot": "<B>Open Protocol</B> - The protocol used for Incoming Port, either <B>TCP, </B><B>UDP</B>, or <B>ALL </B>(all protocols supported by the Router).",
	"status": "<B>Status</B> - The status of this entry, Enabled means the Port Triggering entry is enabled.",
	"edit": "<b>Edit</b> - To edit an existing entry.",
	"following": "<B>To add a new rule do the following on the Port Trigger screen</B>:",
	"add_new": "Click the <B>Add New</B> button.",
	"s_0": "Enter a port number used by the application to send an outgoing request in the Trigger Port box.",
	"trig_port_1": "Select the protocol used for the <B>Trigger Port</B> from the pull-down list of Trigger Protocol, either <B>TCP</B>, <B>UDP</B>, or <B>All</B>.",
	"s_1": "Enter the range of port numbers used by the remote system when it responds to the PC\'s request in the Open Port box.",
	"open_port_1": "Select the protocol used for <B>Open Port</B> range from the pull-down list, either <B>TCP</B>, <B>UDP</B>, or <B>All</B>.",
	"enabled": "Select the <B>Enabled</B> option in the <B>Status</B> pull-down list.",
	"save": "Click the <B>Save</B> button to save the new rule.",
	"service": "There are many popular applications in the <B>Common Service Port</B> list. You can select an application and then the boxes of Trigger Port and Open Port will be automatically filled in. This has the same effect as adding a new rule.",
	"enable_sele": "Click the <B>Enable Selected</B> button to enable selected entries.",
	"disable_sele": "Click the <B>Disable Selected</B> button to disable selected entries.",
	"delete_sele": "Click the <B>Delete Selected</B> button to delete selected entries.",
	"note": "<B>Note:</B>",
	"s_2": "When the trigger connection is released, the corresponding opened ports will be closed.",
	"s_3": "Each rule can only be used by one host on the LAN at a time. The trigger connection of other hosts on the LAN will be refused.",
	"open_port_2": "<B>Open Port</B> ranges cannot overlap each other."
};
var StaticRouteTableHelpRpm =
{
	"header": "Static Route Help",
	"brief": "A static route is a pre-determined path that network information must follow to reach a specific host or network. Use the Static Routing page to add or delete a route.",
	"routing": "<B>To add static routing entries</B>:",
	"add_new": "Click the <B>Add New</B> button.",
	"s_0": "Enter the following data:",
	"enabled": "Select the <B>Enabled</B> in the <B>Status</B> pull-down list.",
	"save": "Click the <B>Save</B> button to save the changes.",
	"existing": "<B>To modify or delete an existing entry</B>:",
	"s_1": "Find the desired entry in the table.",
	"edit": "Click <B>Edit</B> as desired on the <B>Edit</B> column.",
	"enable_sele": "Click the <B>Enable Selected</B> button to enable selected entries.",
	"disable_sele": "Click the <B>Disable Selected</B> button to disable selected entries.",
	"delete_sele": "Click the <B>Delete Selected</B> button to delete selected entries.",
	dest: "<B>Destination Network</B> - The Destination IP Address is the address of the network or host that you want to assign to a static route.",
	mask: "<B>Subnet Mask</B> - The Subnet Mask determines which portion of an IP address is the network portion, and which portion is the host portion.",
	gw: "<B>Gateway</B> - This is the IP address of the default gateway device that allows for the contact between the Router and the network or host.",
	intf: "<B>Interface</B> - It is empty by default. Please select a connection from the dropdown list if the Gateway is left empty or is not on the same network segment as LAN/WAN interface."
};
var StatusHelpRpm =
{
	"header": "Status Help",
	"brief": "The <B>Status</B> page displays the Router\'s current status and configuration. All information is read-only.",
	"lan": "<B>LAN</B> - The following parameters apply to the LAN port of the Router. You can configure them on the <B>Network -> LAN</B> page.",
	"mac_addr": "<B>MAC Address</B> - The physical address of the Router, as seen from the LAN.",
	"ip_addr": "<B>IP Address</B> - The LAN IP address of the Router.",
	"subn_mask": "<B>Subnet Mask</B> - The subnet mask associated with LAN IP address.",
	"wireless": "<B>Wireless</B> - These are the current settings or information for Wireless.You can configure them in the <B>Wireless -&gt; Basic Settings</B> page.",
	"wire_radio": "<B>Wireless Radio</B> - Indicates whether the wireless radio feature of the Router is enabled or disabled.",
	"name_ssid": "<B>Name(SSID)</B> - The SSID of the Router.",
	"mode": "<B>Mode</B> - The current wireless mode which the Router works on.",
	"channel": "<B>Channel</B> - The current wireless channel in use.",
	"chan_width": "<B>Channel Width</B> - The bandwidth of the wireless channel.",
	"mac_addr_0": "<B>MAC Address</B> - The physical address of the Router, as seen from the WLAN.",
	"wds_stat": "<B>WDS Status</B> - The status of the WDS connection is displayed.",
	"wan": "<B>WAN</B> - The following parameters apply to the WAN ports of the Router. You can configure them in the <b><B>Network -> WAN</B></b> page.",
	"mac_addr_1": "<B>MAC Address</B> - The physical address of the WAN port, as seen from the Internet.",
	"ip_addr_0": "<B>IP Address</B> - The current WAN (Internet) IP Address. This field will be blank or 0.0.0.0 if the IP Address is assigned dynamically and there is no connection to Internet.",
	"subn_mask_0": "<B>Subnet Mask</B> - The subnet mask associated with the WAN IP Address.",
	"default_gate": "<B>Default Gateway</B> - The Gateway currently used by the Router is shown here.",
	"dns_serv": "<B>DNS Server</B> - The DNS (Domain Name System) Server IP addresses currently used by the Router. Multiple DNS IP settings are common. Usually, the first available DNS Server is used.",
	"onli_time": "<B>Online Time</B> - The time that you are online. When you use <b>PPPoE</b> as WAN connection type, the online time is displayed here.",
	"secondary_conn": "<B>Secondary Connection</B> - The Secondary Connection will be shown in this area.",
	"sent_byte": "<B>Sent (Bytes)</B> - Traffic that counted in bytes has been sent out from the WAN port.",
	"sent_pack": "<B>Sent (Packets)</B> - Traffic that counted in packets has been sent out from WAN port.",
	"rece_bytes": "<b>Received (Bytes)</b> - Traffic that counted in bytes has been received from the WAN port.",
	"rece_packets": "<b>Received (Packets)</b> - Traffic that counted in packets has been received from the WAN port.",
	"system": "<B>System Up Time</B> - The length of time since the Router was last powered on or reset.",
	"refresh": "Click the <B>Refresh</B> button to get the latest status and settings of the Router."
};
var SysRebootHelpRpm =
{
	"header": "Reboot Help",
	"brief": "Click the <B>Reboot</B> button to reboot the Router.",
	"s_0": "Some settings of the Router will take effect only after rebooting, which include:",
	"s_1": "Change the LAN IP Address (system will reboot automatically).",
	"s_2": "Upgrade the firmware of the Router (system will reboot automatically).",
	"s_3": "Restore the Router\'s settings to the factory defaults (system will reboot automatically).",
	"s_4": "Update the configuration with the file (system will reboot automatically)."
};
var SysRouteTableHelpRpm =
{
	"header": "System Routing Table Help",
	"brief": "System routing table views all of the valid route entries in use. The Destination IP address, Subnet Mask, Gateway, and Interface will be displayed for each entry. Click the <B>Refresh</B> button to refresh the data displayed.",
	dest: "<B>Destination Network</B> - The Destination Network is the address of the network or host to which the static route is assigned.",
	mask: "<B>Subnet Mask</B> - The Subnet Mask determines which portion of an IP address is the network portion, and which portion is the host portion.",
	gw: "<B>Gateway</B> - This is the IP address of the gateway device that allows for contact between the Router and the network or host.",
	intf: "<B>Interface</B> - This interface tells you whether the Destination IP Address is on the <B>LAN & WLAN</B> (internal wired and wireless networks), the  <B>Internet Connection</B> or the <B>Secondary Connection</B> (internal connection with L2TP,PPTP or PPPoE Dual Access). "
};
var SystemLogHelpRpm =
{
	"header": "System Log Help",
	"brief": "<B>Log Type</B> - By selecting the log type, only logs of this type will be shown.",
	"log_leve": "<B>Log Level</B> - By selecting the log level, only logs of this level will be shown.",
	"refresh": "<B>Refresh</B> - Refresh the page to show the latest log list.",
	"clea_log": "<B>Clear Log</B> - All the logs will be deleted from the Router permanently, not just from the page.",
	"save_log": "<B>Save Log</B> - Click to save all the logs in a txt file.",
	"log_sett": "<B>Log Settings</B> - Click to set the logs in the screen.",
	"save_loca": "<B>Save Locally</B> - If Save Locally is selected, events will be recorded in the local memory.",
	"mini_level": "<B>Minimum Level</B> - Select the Minimum level in the drop-down list, for the Minimum Level, all logged events above or equal to the selected level will be displayed.",
	"save_remo": "<B>Save Remotely</B> - If Save Remotely is selected, events will be sent to the specified IP address and UDP port of the remote system log server."
};
var SystemStatisticHelpRpm =
{
	"header": "Statistics Help",
	"brief": "The Statistics page shows the network traffic of each PC on the LAN, including total traffic and the value of the last <B>Packets Statistic interval</B> in seconds.",
	"note": "<font color=\"#ff0000\">Note: If Hardware NAT is enabled, Statistics will NOT take effect, because these two modules cannot work at the same time.</font>",
	"statistics": "<B>Current Statistics Status</B> - Enabled or Disabled. The default value is disabled. To enable it, click the Enable button. If it is disabled, the function of DoS protection in Security settings will be disabled.",
	"statistics_0": "<B>Packets Statistics Interval</B> - The default value is 10. Select a value between 5 and 60 seconds in the pull-down list. The Packets Statistic interval value indicates the time section of the packets statistic.",
	"sort_rules": "<B>Sorted Rules</B>- Choose how the displayed statistics are sorted.",
	"auto_refr": "Click the <B>Auto-refresh</B> checkbox to refresh automatically.",
	"refresh": "Click the <B>Refresh</B> button to refresh the page.",
	"rese_all": "Click the <b>Reset All</b> button to reset the values of all entries to zero.",
	"dele_all": "Click the <b>Delete All</b> button to delete all entries in the table.",
	"stat_table": "<B>Statistics Table</B>",
	"address": "<B>IP Address/MAC Address</B> - The IP Address and MAC address are displayed with related statistics.",
	"total": "<B>Total</B>",
	"current": "<B>Current</B>",
	"operation": "<B>Operation</B>",
	t_packets: "<B>Packets</B> - The total number of packets received and transmitted by the Router.",
	t_bytes: "<B>Bytes</B> - The total number of bytes received and transmitted by the Router.",
	c_packets: "<B>Packets</B> - The number of packets received and transmitted per second at the specified Packets Statistics interval.",
	c_bytes: "<B>Bytes</B> - The number of bytes received and transmitted per second at the specified Packets Statistics interval.",
	icmpTx: "<B>ICMP Tx</B> - The number of ICMP packets transmitted to the WAN per second at the specified Packets Statistics interval. It is shown like \"current transmitting rate / Max transmitting rate\".",
	udpTx: "<B>UDP Tx</B> - The number of UDP packets transmitted to the WAN per second at the specified Packets Statistics interval. It is shown like \"current transmitting rate / Max transmitting rate\".",
	tcpTx: "<B>TCP SYN Tx</B> - The number of TCP SYN packets transmitted to the WAN per second at the specified Packets Statistics interval. It is shown like \"current transmitting rate / Max transmitting rate\".",
	t_reset: "<b>Reset</b> - Renew the values of the entry to zero.",
	t_delete: "<b>Delete</b> - Delete the existing entry in the table."
};
var UpnpCfgHelpRpm =
{
	"header": "UPnP Help",
	"brief": "The Universal Plug and Play (UPnP) feature allows the devices, such as Internet computers, to access the local host resources or devices as needed. UPnP devices can be automatically discovered by the UPnP service application on the LAN.",
	"current": "<B>Current UPnP Status</B> - UPnP can be enabled or disabled by clicking the <B>Enable</B> or <B>Disable</B> button. This feature is enabled by default.",
	"settings": "<B>Current UPnP Settings List</B>:",
	"s_0": "This table displays the current UPnP information.",
	"app_desc": "<B>App Description</B> - The description about the application which initiates the UPnP request.",
	"exte_port": "<B>External Port</B> - The port which the Router opened for the application.",
	"protocol": "<B>Protocol</B> - The type of protocol which is opened.",
	"inte_port": "<B>Internal Port</B> - The port which the Router opened for local host.",
	"ip_addr": "<B>IP Address</B> - The IP address of the local host which initiates the UPnP request.",
	"status": "<B>Status</B> - Either Enabled or Disabled, \"Enabled\" means that the port is still active; otherwise, the port is inactive.",
	"enable": "Click the <B>Enable</B> button to enable UPnP.",
	"disable": "Click the <B>Disable</B> button to disable UPnP.",
	"refresh": "Click the <B>Refresh</B> button to update the Current UPnP Settings List."
};
var UsbAccountHelp =
{
	"header": "USB Accounts Help",
	"brief": "In this page you can specify the user name and password for Storage Sharing and FTP Server users on this page. Storage Sharing users can access the folders by entering the following URL into the address field of your browser or Windows Explorer, such as. \\\\192.168.0.1. FTP Server users can log into the FTP Server via FTP Client. There are five users here, which provide means to control the access to the USB mass storage by Storage Sharing or FTP. The Super User has the right to read and write to Storage Sharing and FTP Server.",
	"s_0": "To add a new user account, please follow the steps below:",
	"choo_index": "1. Choose the index from the drop-down list of <B>Choose Index</B>.",
	"new_user": "2. Self-define a <B>New Username</B>.",
	"new_pass": "3. Enter the password in the <B>New Password</B> field.",
	"password": "4. Re-enter the password in the <B>Confirm password field</B>.",
	"set": "5. Click the <B>Set</B> button, and then a new entry will be added in the table.",
	"delete": "To delete an existing user account, please click <B>Delete</B> in the <B>Action</B> column."
};
var UsbDlnaHelp =
{
	"header": "Media Server Help",
	"brief": "In this page you can create media server that allows you to share stored content with other computers and devices on your home network and on the Internet.",
	"server_enab": "<B>Server Enable</B> Select this box to enable this function.",
	"serv_name": "<B>Server Name</B> The name of this Media Server.",
	"s_0": "To add a new share folder for your media server, please follow the instructions below:",
	"folder": "a) Click <B>Add New Folder</B> button, and you will see the screen.",
	"shar_name": "b) Enter the name of the share folder in <B>Share Name</B> field.",
	"apply": "c) Click the <B>Apply</B> button to apply the configuration.",
	"scan_now": "d) Click the <B>Scan now</B> to scan all the share folders immediately. You can also select the <B>Auto-scan</B>, at same time, select an auto scan interval time by drop-down list. In this case, the media server will auto scan the share folders."
};
var UsbFtpHelp =
{
	"header": "USB FTP Server Help",
	"brief": "you can create an FTP server that can be accessed from the Internet or your local network.",
	"server_stat": "<B>Server Status</B> Indicates the FTP Server\'s current status.",
	"inte_access": "<B>Internet Access</B> If <B>Internet Access</B> is enabled, user(s) in public network can access FTP server via <B>Internet Address</B>.",
	"inte_address": "<B>Internet Address</B> If <B>Internet Access</B> is enabled, WAN IP will be displayed here.",
	"serv_port": "<B>Service Port</B> Enter the FTP Port number to use. The default is 21.",
	"shar_name": "<B>Share Name</B> This folder\'s display name.",
	"directory": "<B>Directory</B> The real full path of the specified folder.",
	"user_inde": "<B>User Index</B> The authorization of the user is displayed.",
	"status": "<B>Status</B> The status of the entry is enabled or disabled.",
	"edit": "<B>Edit</B> Click <B>Edit</B> in the table, and then you can modify the entry.",
	"s_0": "To add a new folder, follow the instructions below.",
	"folder": "1. Click <B>Add New Folder</B>",
	"browse": "2. Click the <B>Browse</B> button, and then select the <B>Select Volume</B> from the drop-down list.",
	"shar_name_0": "3. Enter display name of the share folder in <B>Share Name</B> filed.",
	"apply": "4. Click the <B>Apply</B> button to apply the settings.",
	"upper": "You can click the upper button to go to the <B>upper</B> folder Click the <B>Enable/Disable Selected</B> button to enable or disable the selected entries. Click the <B>Delete Selected</B> button to delete the selected entries.",
	"s_1": "You could be able to access the folders by entering the following URL on Windows Explorer or other FTP software:",
	"s_2": "ftp://(<span class=\"T T_ipaddr\">IP Address</span>)</span>",
	"s_3": "eg. ftp://192.168.0.1",
	"s_4": "FTP Server will get restarted and all your current FTP connections will be terminated after you click Apply button.",
	"note": "<B>Note:</B>",
	"s_5": "1. The max share folders number is 10. If you want to share a new folder when the number has reached 10, you can delete an existing share folder and then add a new one.",
	"s_6": "2. If you want to change the Storage Sharing settings, you can click the Apply button to make the changes take effect."
};
var UsbMassHelp =
{
	"header": "USB Mass Storage Help",
	"brief": "In this page you can configure a USB disk drive attached to the router and view volume and share properties such as share name, capacity, status, and action.",
	"volume": "<B>Volume</B> The volume name of the USB drive the users have access to.",
	"file_syst": "<B>File System</B> The system of the USB drive.",
	"capacity": "<B>Capacity</B> The storage capacity of the USB driver.",
	"status": "<B>Status</B> Indicates the shared or non-shared status of the volume. Online means volume can be shared, while Offline means volume can not be shared. If Deactivate in Action field is enabled, Disabled will be displayed in the Status field, which means volume can not be shared.",
	"action": "<B>Action</B> When the volume is shared, you can click the Deactivate to stop sharing the volume; when volume is non-shared, you can click the Enable button to share the volume.",
	"note": "<B>Note:</B> Before removing the USB storage device, you should click <B>Disconnect</B> to make sure that all your data have been saved completely. Removing device directly may cause your USB storage device crashed.",
	"note_0": "<B>Note</B>:",
	"s_0": "1. Click the <B>Refresh</B> button to detect your USB device. The Router will automatically activate the first two USB storage devices or up to eight volumes;",
	"deactivate": "2. If you want to use other volumes in your storage device(s), please <B>Deactivate</B> some unused volumes and <B>Activate</B> the other desired volumes;",
	"disconnect": "3. Click <B>Disconnect</B> button before unplugging your USB device to avoid data loss or damage to the device.",
	"supported": "<B>Supported USB Mass Storage:</B> hard disk, flash disk or memory card reader;",
	"supported_0": "<B>Supported File Type:</B> FAT32 and NTFS;",
	"supp_volumes": "<B>Supported Volumes: </B> Only two USB storage devices with up to eight volumes could be activated simultaneously, up to four USB storage devices with about eighteen volumes could be recognized."
};
var UsbSharingHelp =
{
	"header": "USB Storage Sharing Help",
	"brief": "In this page you can configure a USB disk drive attached to the router and view volume and share properties.",
	"server_stat": "<B>Server Status</B> Indicates the Storage Sharing\'s current status.",
	"anonymous": "<B>Anonymous access to all volumes</B> This function is enabled by default, so users can access all activated volumes of Storage Sharing without accounts. If you want to add a shared folder which does not allow anonymous login, uncheck the box to disable this function. And <B>Folder Table</B> will be displayed as shown below.",
	"shar_name": "<B>Share Name</B> This folder\'s display name.",
	"directory": "<B>Directory</B> The real full path of the specified folder.",
	"user_acce": "<B>User Access</B> The authorization of the user is displayed. * users mean Super Users who have the full-access permission to all activated volumes and share folders. Grey users mean the users who have no right to use this function. Others are common users.",
	"status": "<B>Status</B> The status of the entry is enabled or disabled.",
	"edit": "<B>Edit</B> Click <B>Edit</B> in the table, and then you can modify the entry.",
	"s_0": "To add a new folder, follow the instructions below.",
	"folder": "1. Click <B>Add New Folder</B>",
	"browse": "2. Click the <B>Browse</B> button, and then select the <B>Select Volume</B> from the drop-down list.",
	"shar_name_0": "3. Enter display name of the share folder in <B>Share Name</B> filed.",
	"apply": "4. Click the <B>Apply</B> button to apply the settings.",
	"upper": "You can click the upper button to go to the <B>upper</B> folder Click the <B>Enable/Disable Selected</B> button to enable or disable the selected entries. Click the <B>Delete Selected</B> button to delete the selected entries.",
	"note": "<B>Note:</B>",
	"s_1": "1. The max share folders number is 10. If you want to share a new folder when the number has reached 10, you can delete an existing share folder and then add a new one.",
	"s_2": "2. If you want to change the Storage Sharing settings, you can click the Apply button to make the changes take effect.",
	"s_3": "3. Storage Sharing function is based on NetBIOS/SMB protocol which is supported by most Windows operating system and some other operating systems.",
	"s_4": "4. Anonymous: All active volume(s) will be shared and authentication is not required.",
	"s_5": "5. You will be able to access the folders with the following methods:",
	"windows": "<B>For Windows OS:</B>Open \"Run\" window in the Start menu and enter \\\\(IP Address) or \\\\(IP Address)\\(Share Name) <br />e.g. \\\\192.168.0.1 or \\\\192.168.0.1\\photo;",
	"for": "<B>For Mac OS:</B>Open \"Connect to Server\" window in the Go menu and enter smb://(IP Address) or smb://(IP Address)/(Share Name)</span> <br />e.g. smb://192.168.0.1 or smb://192.168.0.1/photo.</span>"
};
var VirtualServerHelpRpm =
{
	"header": "Virtual Server Help",
	"brief": "Virtual server can be used for setting up public services on your LAN. A virtual server is defined as a service port, and all requests from Internet to this service port will be redirected to the computer specified by the server IP. Any PC that was used for a virtual server must have a static or reserved IP address because its IP address may change when using the DHCP function.",
	"serv_port": "<B>Service Port</B> - The numbers of External Service Ports. You can enter a service port or a range of service ports (the format is XXX - YYY, XXX is Start port, YYY is End port).",
	"ip_addr": "<B>IP Address</B> - The IP address of the PC running the service application.",
	"inte_port": "<B>Internal Port</B> - The Internal Service Port number of the PC running the service application. You can leave it blank if the <B>Internal Port</B> is the same as the <B>Service Port</B>, or enter a specific port number when <B>Service Port</B> is a single one.",
	"protocol": "<B>Protocol</B> - The protocol used for this application, either <B>TCP, </B><B>UDP</B>, or <B>All </B>(all protocols supported by the Router).",
	"status": "<B>Status</B> - The status of this entry, \"Enabled\" means the virtual server entry is enabled.",
	"edit": "<b>Edit</b> - To edit an existing entry.",
	"virtual": "<B>To setup a virtual server entry</B>:",
	"add_new": "Click the <B>Add New</B> button.",
	"service": "Select the service you want to use from the <B>Common Service Port</B> list. If the <B>Common Service Port </B> menu does not list the service that you want to use, enter the number of the service port or service port range in the <B>Service Port</B> box.",
	"ip_addr_0": "Enter the IP address of the computer running the service application in the <B>IP Address</B> box.",
	"tcp": "Select the protocol used for this application from the pull-down list, either <B>TCP, </B><B>UDP</B>, or <B>All</B>.",
	"enabled": "Select the <B>Enabled</B> option in the <B>Status</B> pull-down list.",
	"save": "Click the <B>Save</B> button.",
	"note": "<B>Note</B>: It is possible that you have a computer or server that has more than one type of available service. If so, select another service, and type the same IP address for that computer or server.",
	"enable_sele": "Click the <B>Enable Selected</B> button to make selected entries enabled.",
	"disable_sele": "Click the <B>Disable Selected</B> button to make selected entries disabled.",
	"delete_sele": "Click the <B>Delete Selected</B> button to delete selected entries."
};
var Wan6to4TunnelCfgHelpRpm =
{
	"header": "IPv6 WAN Help",
	"brief": "<B>WAN Connection Type:</B>",
	"s_0": "Choosing the correct WAN connection type based on your ISP network topology.",
	"dhcpv": "<B>DHCPv6</B> - Connections which use dynamic IPv6 address assignment.",
	"stat_ipv": "<B>Static IPv6</B> - Connections which use static IPv6 address assignment.",
	"pppoev": "<B>PPPoEv6</B> - Connections which use PPPoEv6 that requires a user name and password.",
	"tunn_6to": "<B>Tunnel 6to4</B> - Connections which use 6to4 address assignment.",
	"s_1": "This type is used in the situation that your WAN connection is IPv4 while LAN connection is IPv6.",
	"save": "Click the <B>Save</B> button to save your settings."
};
var WanDynamicIpCfgHelpRpm =
{
	"header": "WAN Help",
	"brief": "<B>WAN Connection Type:</B>",
	"dyna_ip": "If your ISP is running a DHCP server, select the <B>Dynamic IP</B> option.",
	"stat_ip": "If your ISP provides a static or fixed IP Address, Subnet Mask, Gateway and DNS setting, select the <B>Static IP</B> option.",
	"pppoe": "If your ISP provides a PPPoE connection, select <B>PPPoE</B> option.",
	"bigp_cable": "If your ISP provides BigPond Cable (or Heart Beat Signal) connection, please select <B>BigPond Cable</B> option.",
	"l2tp": "If your ISP provides L2TP connection, please select <B>L2TP</B> option.",
	"pptp": "If your ISP provides PPTP connection, please select <B>PPTP</B> option.",
	"detect": "If you don\'t know how to choose the appropriate connection type, click the <B>Detect</B> button to allow the Router to automatically search your Internet connection for servers and protocols. The connection type will be reported when an active Internet service is successfully detected by the Router. This report is for your reference only. To make sure the connection type your ISP provides, please refer to the ISP. The various types of Internet connections that the Router can detect are as follows:",
	"pppoe_0": "<B>PPPoE</B> - Connections which use PPPoE that requires a user name and password.",
	"dyna_ip_0": "<B>Dynamic IP</B> - Connections which use dynamic IP address assignment.",
	"stat_ip_0": "<B>Static IP</B> - Connections which use static IP address assignment.",
	"ip_addr": "<B>IP Address</B> - The IP address assigned by your ISP dynamically.",
	"subn_mask": "<B>Subnet Mask</B> - The subnet mask assigned by your ISP dynamically.",
	"default_gate": "<B>Default Gateway</B> - The default gateway assigned dynamically by your ISP.",
	"renew": "Click the <B>Renew</B> button to renew the IP parameters from your ISP.",
	"release": "Click the <B>Release</B> button to release the IP parameters from your ISP.",
	"bytes": "<B>MTU Size(in bytes)</B> - The normal MTU (Maximum Transmission Unit) value for most Ethernet networks is 1500 Bytes. For some ISPs you need to modify the MTU. But this is rarely required, and should not be done unless you are sure it is necessary for your ISP connection.",
	"manually": "If your ISP gives you one or two DNS IP addresses, select <B>Set DNS server manually</B> and enter the <B>DNS Server</B> and <B>Secondary DNS Server</B> into the correct fields. Otherwise, the DNS servers will be assigned from ISP dynamically.",
	"prim_dns": "<B>Primary DNS</B> - Enter the DNS IP address in dotted-decimal notation provided by your ISP.",
	"seco_dns": "<B>Secondary DNS</B> - Enter another DNS IP address in dotted-decimal notation provided by your ISP.",
	"note": "<B>Note:</B> If you get Address not found error when you access a Web site, it is likely that your DNS servers are set up improperly. You should contact your ISP to get DNS server addresses.",
	"host_name": "<B>Host Name</B> - This option specifies the Host Name of the Router.",
	"unicast": "<B>Get IP with Unicast</B> - A few ISPs\' DHCP servers do not support the broadcast applications. If you can\'t get the IP Address normally, you can choose Unicast. (You generally need not to check this option).",
	"save": "Click the <B>Save</B> button to save your settings."
};
var WanDynamicIpV6CfgHelpRpm =
{
	"header": "IPv6 WAN Help",
	"brief": "<B>Connection Type:</B>",
	"s_0": "Choosing the correct WAN connection type based on your ISP network topology.",
	"dyna_ipv": "<B>Dynamic IPv6</B> - Connections which use dynamic IPv6 address assignment.",
	"stat_ipv": "<B>Static IPv6</B> - Connections which use static IPv6 address assignment.",
	"pppoev": "<B>PPPoEv6</B> - Connections which use PPPoEv6 that requires a user name and password.",
	"tunn_6to": "<B>Tunnel 6to4</B> - Connections which use 6to4 address assignment.",
	"ipv6_addr": "<B>IPv6 Address</B> - The IPv6 address assigned by your ISP dynamically.",
	"advance": "If your ISP gives you one or two DNS IPv6 addresses, click <b>Advance</b> and select <B>Set the IPv6 DNS Server manually</B> and enter the <B>Primary IPv6 DNS</B> and <B>Secondary IPv6 DNS</B> into the correct fields. Otherwise, the DNS servers will be assigned from ISP dynamically.",
	"primary": "<B>Primary IPv6 DNS</B> - Enter the DNS IPv6 address in colon-hexadecimal notation provided by your ISP.",
	"secondary": "<B>Secondary IPv6 DNS</B> - Enter another DNS IPv6 address in colon-hexadecimal notation provided by your ISP.",
	"note": "<B>Note:</B> If you get Address not found error when you access a Web site, it is likely that your DNS servers are set up improperly. You should contact your ISP to get DNS server addresses."
};
var WanStaticIpCfgHelpRpm =
{
	"header": "WAN Help",
	"brief": "<B>WAN Connection Type:</B>",
	"dyna_ip": "If your ISP is running a DHCP server, select the <B>Dynamic IP</B> option.",
	"stat_ip": "If your ISP provides a static or fixed IP Address, Subnet Mask, Gateway and DNS setting, select the <B>Static IP</B> option.",
	"russia": "If your ISP provides a PPPoE connection, select <B>PPPoE/Russia PPPoE</B> option.",
	"bigp_cable": "If your ISP provides BigPond Cable (or Heart Beat Signal) connection, please select <B>BigPond Cable</B> option.",
	"russia_0": "If your ISP provides L2TP connection, please select <B>L2TP/Russia L2TP</B> option.",
	"russia_1": "If your ISP provides PPTP connection, please select <B>PPTP/Russia PPTP</B> option.",
	"detect": "If you don\'t know how to choose the appropriate connection type, click the <B>Detect</B> button to allow the Router to automatically search your Internet connection for servers and protocols. The connection type will be reported when an active Internet service is successfully detected by the Router. This report is for your reference only. To make sure the connection type your ISP provides, please refer to the ISP. The various types of Internet connections that the Router can detect are as follows:",
	"russia_2": "<B>PPPoE/Russia PPPoE</B> - Connections which use PPPoE that requires a user name and password.",
	"dyna_ip_0": "<B>Dynamic IP</B> - Connections which use dynamic IP address assignment.",
	"stat_ip_0": "<B>Static IP</B> - Connections which use static IP address assignment.",
	"ip_addr": "<B>IP Address</B> - Enter the IP address in dotted-decimal notation provided by your ISP.",
	"subn_mask": "<B>Subnet Mask</B> - Enter the subnet Mask in dotted-decimal notation provided by your ISP.",
	"default_gate": "<B>Default Gateway</B> - Enter the default gateway in dotted-decimal notation provided by your ISP.",
	"mtu_size": "<B>MTU Size</B> - The normal MTU (Maximum Transmission Unit) value for most Ethernet networks is 1500 Bytes. For some ISPs, you may need to modify the MTU. But this is rarely required, and should not be done unless you are sure it is necessary for your ISP connection.",
	"prim_dns": "<B>Primary DNS</B> - Enter the DNS IP address in dotted-decimal notation provided by your ISP.",
	"seco_dns": "<B>Secondary DNS</B> - Enter another DNS IP address in dotted-decimal notation provided by your ISP.",
	"save": "Click the <B>Save</B> button when you finish changing the settings."
};
var WanStaticIpV6CfgHelpRpm =
{
	"header": "IPv6 WAN Help",
	"brief": "<B>Enable IPv6:</B>Enable or disable the IPv6 feature.",
	"connection": "<B>WAN Connection Type:</B>",
	"s_0": "Choosing the correct WAN connection type based on your ISP network topology.",
	"dhcpv": "<B>DHCPv6</B> - Connections which use dynamic IPv6 address assignment.",
	"stat_ipv": "<B>Static IPv6</B> - Connections which use static IPv6 address assignment.",
	"pppoev": "<B>PPPoEv6</B> - Connections which use PPPoEv6 that requires a user name and password.",
	"tunn_6to": "<B>Tunnel 6to4</B> - Connections which use 6to4 address assignment.",
	"ipv6_addr": "<B>IPv6 Address</B> - Enter the IPv6 address in colon-hexadecimal notation provided by your ISP.",
	"prefix_leng": "<B>Prefix Length</B> - Enter the IPv6 Prefix Length in dotted-decimal notation provided by your ISP.",
	"ipv6_gate": "<B>IPv6 Gateway</B> - Enter the default gateway in colon-hexadecimal notation provided by your ISP.",
	"server": "<B>IPv6 DNS Server</B> - Enter the DNS IPv6 address in colon-hexadecimal notation provided by your ISP.",
	"secondary": "<B>Secondary IPv6 DNS Server</B> - Enter another DNS IPv6 address in colon-hexadecimal notation provided by your ISP.",
	"mtu_size": "<B>MTU Size</B> - The normal MTU (Maximum Transmission Unit) value for most Ethernet networks is 1500 Bytes. For some ISPs, you may need to modify the MTU. But this is rarely required, and should not be done unless you are sure it is necessary for your ISP connection.",
	"save": "Click the <B>Save</B> button to save your settings."
};
var WlanAdvHelpRpm =
{
	"header": "Wireless Advanced Help",
	"brief": "<B>Transmit Power</B> - Here you can specify the transmit power of the Router. You can select High, Middle or Low which you would like. High is the default setting and is recommended.",
	"beacon_inte": "<B>Beacon Interval</B> - The beacons are the packets sent by the Router to synchronize a wireless network. Beacon Interval value determines the time interval of the beacons. You can specify a value between 40-1000 milliseconds. The default value is 100.",
	"rts_thre": "<B>RTS Threshold</B> - Here you can specify the RTS (Request to Send) Threshold. If the packet is larger than the specified RTS Threshold size, the Router will send RTS frames to a particular receiving station and negotiate the sending of a data frame. The default value is 2346.",
	"frag_threshold": "<B>Fragmentation Threshold</B> - This value is the maximum size determining whether packets will be fragmented. Setting the Fragmentation Threshold too low may result in poor network performance since excessive packets. 2346 is the default setting and is recommended.",
	"dtim_inte": "<B>DTIM Interval</B> - This value determines the interval of the Delivery Traffic Indication Message (DTIM). You can specify the value between 1-15 Beacon Intervals. The default value is 1, which indicates the DTIM Interval is the same as Beacon Interval.",
	"enable": "<B>Enable Short GI</B> - This function is recommended for it will increase the data capacity by reducing the guard interval time.",
	"isolation": "<B>Enable Client Isolation</B> - Isolate all connected wireless stations so that wireless stations cannot access each other through WLAN. This function will be disabled if WDS/Bridge is enabled.",
	"enab_wmm": "<B>Enable WMM</B> - WMM function can guarantee the packets with high- priority messages being transmitted preferentially. It is strongly recommended enabled.",
	"note": "<B>Note: </B>If you are not familiar with the setting items in this page, it\'s strongly recommended to keep the provided default values, otherwise may result in lower wireless network performance."
};
var WlanMacFilterHelpRpm =
{
	"header": "Wireless MAC Filtering Help",
	"brief": "The Wireless MAC Address Filtering feature allows you to control the wireless stations accessing the AP, which depend on the station\'s MAC addresses.",
	"mac_addr": "<B>MAC Address</B> - The wireless station\'s MAC address that you want to access.",
	"description": "<B>Description</B> - A simple description of the wireless station.",
	"status": "<B>Status</B> - The status of this entry , either <B>Enabled</B> or <B>Disabled</B>.",
	"host": "<B>Host</B> - The wireless name.",
	"disable": "To disable the Wireless MAC Address Filters feature, keep the default setting, <B>Disable</B>.",
	"enable": "To set up an entry, click <B>Enable</B>, and follow these instructions: <BR>First, you must decide whether the specified wireless stations can or cannot access the AP. If you desire that the specified wireless stations can access the AP, please select the radio button <B>Allow the stations specified by any enabled entries in the list to access</B>, otherwise, select the radio button <B>Deny the stations specified by any enabled entries in the list to access</B>.",
	"add_new": "To Add a Wireless MAC Address filtering entry, clicking the <B>Add New</B> button, and following these instructions:",
	"mac_addr_0": "Enter the appropriate MAC Address into the <B>MAC Address</B> field. The format of the MAC Address is XX:XX:XX:XX:XX:XX (X is any hexadecimal digit). For example, 00:0A:EB:B0:00:0B.",
	"description_0": "Enter a simple description of the wireless station in the <B>Description</B> field. For example, Wireless station A.",
	"status_0": "<B>Status</B> - Select <B>Enabled</B> or <B>Disabled</B> for this entry on the <B>Status</B> pull-down list.",
	"save": "Click the <B>Save</B> button to save this entry.",
	"s_0": "To add another entries, repeat steps 1~4.",
	"existing": "<B>To edit an existing entry</B>:",
	"edit": "Click the <B>Edit</B> button in the <B>Edit</B> column in the MAC Address Filtering Table.",
	"filtering": "Enter the value as desired in the <B>Add or Modify Wireless MAC Address Filtering entry</B> page, and click the <B>Save</B> button.",
	"enable_sele": "You can click the <B>Enable Selected</B> button to make the selected Entries enabled, click the <B>Disable Selected</B> button to make the selected Entries disabled, click the <B>Delete Selected</B> button to delete the selected entries.",
	"note": "<B>Note</B>: If you enable the function and select the <B>Allow the stations specified by any enabled entries in the list to access</B> for <B>Filtering Rules</B>, and there are not any enable entries in the list, thus, no wireless stations can access the AP."
};
var WlanNetworkHelpRpm =
{
	"header": "Wireless Settings Help",
	"brief": "<B>Note</B>: The operating distance or range of your wireless connection varies significantly based on the physical placement of the Router. For best results, place your Router:",
	"s_0": "Near the center of the area in which your wireless stations will operate.",
	"s_1": "In an elevated location such as a high shelf.",
	"s_2": "Away from the potential sources of interference, such as PCs, microwaves, and cordless phones.",
	"s_3": "With the Antenna in the upright position.",
	"s_4": "Away from large metal surfaces.",
	"note": "<B>Note</B>: Failure to follow these guidelines can result in significant performance degradation or inability to wirelessly connect to the Router.",
	"wireless": "<B>Wireless Network Name</B> - Enter a value of up to 32 characters. The same Name (SSID) must be assigned to all wireless devices in your network.",
	"region": "<b>Region</b> - Select your region from the pull-down list. This field specifies the region where the wireless function of the Router can be used. It may be illegal to use the wireless function of the Router in a region other than one of those specified in this filed. If your country or region is not listed, please contact your local government agency for assistance.",
	"mode": "<B>Mode</B> - You can choose the appropriate \"Mixed\" mode.",
	"chan_width": "<B>Channel Width</B> - The bandwidth of the wireless channel.",
	"channel": "<B>Channel</B> - This field determines which operating frequency will be used. It is not necessary to change the wireless channel unless you notice interference problems with another nearby access point. If you select auto, then AP will choose the best channel automatically.",
	"broadcast": "<B>Enable SSID Broadcast</B> - If you select the <B>Enable SSID Broadcast</B> checkbox, the wireless router will broadcast its name (SSID) on the air.",
	"enab_wds": "<B>Enable WDS</B> - You can select this to enable WDS Bridging, with this function, the Router can bridge two or more Wlans. NOTE: If this checkbox is selected, you had better make sure the following settings are correct.",
	"bridged": "<B>SSID(to be bridged)</B> - The SSID of the AP your Router is going to connect to as a client. You can also use the scan function to select the SSID to join.",
	"address": "<B>MAC Address(to be bridged)</B> - The MAC Address of the AP your Router is going to connect to as a client. You can also use the scan function to select the MAC Address to join.",
	"scan": "<B>Scan</B> - Click this button, you can search the AP which runs in the current channel.",
	"key_type": "<B>Key type</B> - This option should be chosen according to the AP\'s security configuration.It is recommended that the security type is the same as your AP\'s security type",
	"wep_inde": "<B>WEP Index</B> - This option should be chosen if the key type is WEP(ASCII) or WEP(HEX).It indicates the index of the WEP key.",
	"auth_type": "<B>Authentication Type</B> - This option should be chosen if the key type is WEP(ASCII) or WEP(HEX).It indicates the authorization type of the Root AP.",
	"encryption": "<B>Encryption</B> - Please select encryption type base on the source AP.",
	"password": "<B>Password</B> - If the AP your Router is going to connect needs password, you need to fill the password in this blank."
};
var WlanSecurityHelpRpm =
{
	"header": "Wireless Security Help",
	"brief": "You can select one of the following security options:",
	"wireless": "<b>Disable Wireless Security</b> - The wireless security function can be enabled or disabled. If disabled, the wireless stations will be able to connect the Router without encryption. It is recommended strongly that you choose one of following options to enable security.",
	"personal": "<B>WPA/WPA2 - Personal</B> - Select WPA based on pre-shared passphrase.",
	"enterprise": "<B>WPA/WPA2 - Enterprise</B> - Select WPA based on Radius Server.",
	"wep": "<B>WEP</B> - Select 802.11 WEP security.",
	"s_0": "Each security option has its own settings as described&nbsp; follows,",
	"personal_0": "<B>WPA/WPA2 - Personal</B> <b>Version</b> -&nbsp; You can select one of following versions,",
	"auto": "<B>Auto</B> - Select <B>WPA-PSK</B> or <B>WPA2-PSK</B> automatically based on the wireless station\'s capability and request.",
	"wpa_psk": "<B>WPA-PSK</B> - Pre-shared key of WPA.",
	"wpa2_psk": "<B>WPA2-PSK</B> - Pre-shared key of WPA2.",
	"encryption": "<B>Encryption</B> - You can select either <B>Auto</B>, or <B>TKIP</B> or <B>AES</B>.",
	"psk_pass": "<B>PSK Password</B> - You can enter <B>ASCII</B> or <B>Hexadecimal</B> characters. For <B>Hexadecimal</B>, the length should be between 8 and 64 characters; for <B>ASCII</B>, the length should be between 8 and 63 characters.",
	"update": "<B>Group Key Update Period</B> - Specify the group key update interval in seconds. The value can be either 0 or at least 30. Enter 0 to disable the update.",
	"enterprise_0": "<B>WPA/WPA2 - Enterprise</B><b>Version</b> -&nbsp; You can select one of following versions,",
	"auto_0": "<B>Auto</B> - Select <B>WPA</B> or <B>WPA2</B> automatically based on the wireless station\'s capability and request.",
	"wpa": "<B>WPA</B> - Wi-Fi Protected Access.",
	"wpa_0": "<B>WPA2</B> - WPA version 2.",
	"encryption_0": "<B>Encryption</B> - You can select either <B>Auto</B>, or <B>TKIP</B> or <B>AES</B>.",
	"radius": "<B>Radius Server IP</B> - Enter the IP address of the Radius Server.",
	"radius_0": "<B>Radius Server Port</B> - Enter the port that radius service used. (1-65535, 0 stands for default port 1812)",
	"password": "<B>Radius Server Password</B> - Enter the password for the Radius Server.",
	"update_0": "<B>Group Key Update Period</B> - Specify the group key update interval in seconds. The value can be either 0 or at least 30. Enter 0 to disable the update.",
	"wep_0": "<B>WEP</B>",
	"auth_type": "<B>Authentication Type</B> - You can select one of following types,",
	"auto_1": "<B>Auto</B> - Select <b>Shared Key</b> or <b>Open System</b> authentication type automatically based on the wireless station\'s capability and request.",
	"shar_key": "<B>Shared Key</B> - Select 802.11 Shared Key authentication.",
	"open_syst": "<B>Open System</B> - Select 802.11 Open System authentication.",
	"format": "<B>WEP Key Format</B> - You can select <B>ASCII</B> or <B>Hexadecimal</B> format. ASCII Format stands for any combination of keyboard characters in the specified length. Hexadecimal format stands for any combination of hexadecimal digits (0-9, a-f, A-F) in the specified length.",
	"settings": "<B>WEP Key settings</B> - Select which of the four  keys will be used and enter the matching WEP key information for your network in the selected key radio button. These values must be identical on all wireless stations in your network.",
	"key_type": "<B>Key Type</B> - You can select the WEP key length (<B>64-bit</B>, or <B>128-bit</B>.) for encryption. &quot;Disabled&quot; means this WEP key entry is invalid.",
	"bit": "For <B>64-bit</B> encryption - You can enter 10 hexadecimal digits (any combination of 0-9, a-f, A-F, and null key is not permitted) or 5 ASCII characters.",
	"bit_0": "For <B>128-bit</B> encryption - You can enter 26 hexadecimal digits (any combination of 0-9, a-f, A-F, and null key is not permitted) or 13 ASCII characters.",
	"note": "<B>Note</B>: If you do not set the key, the wireless security function is still disabled even if you have selected Shared Key as Authentication Type.",
	"save": "Be sure to click the <B>Save</B> button to save your settings on this page.",
	version: "<b>Version</b> -&nbsp; You can select one of following versions,"
};
var WlanStationHelpRpm =
{
	"header": "Wireless Statistics Help",
	"brief": "This page shows <b>MAC Address</b>, <b>Current Status</b>, <b>Received Packets</b>, <b>Sent Packets</b> and <b>SSID</b> for each connected wireless station.",
	"mac_addr": "<b>MAC Address</b> - the connected wireless station\'s MAC address",
	"curr_status": "<b>Current Status</b> - the connected wireless station\'s running status.",
	"rece_packets": "<b>Received Packets</b> - packets received by the station",
	"sent_pack": "<b>Sent Packets</b> - packets sent by the station",
	"ssid": "<b>SSID</b> - SSID that the station associates with",
	"refresh": "You cannot change any of the values on this page. To update this page and to show the current connected wireless stations, click on the <b>Refresh</b> button.",
	"note": "<b>Note:</b> This page will be refreshed automatically every 5 seconds."
};
var WlanWpsChkModeHelpRpm =
{
	"header": "Add A New Device Help",
	"brief": "This section will guide you add a new wireless device to an existing network manually. If the new device supports Wi-Fi Protected Setup and equipped with a configuration button, you can add it to the network by pressing the configuration button on the device, then choose the <B>\"Press the button of the new device in two minutes\"</B> and click the Connect button on this configuration web page within two minutes. In addition, you can also add the new device by entering the PIN of this device and then click the Connect button.",
	"device": "<B>Enter the new device\'s PIN</B> - Choose this setting if the new device supports the connection way by entering its PIN.",
	"pin": "<B>PIN</B> - Entering the PIN value of the new device here.",
	"minutes": "<B>Press the button of the new device in two minutes</B> - Choose this setting if the new device supports the connection way by pressing the button.",
	"back": "<B>Back</B> - Return to the <SCRIPT language=\"JavaScript\">document.write(str_wps_name_short);</SCRIPT> configuration page.",
	"connect": "<B>Connect</B> - Connect to the new device and add it to the existing network."
};
var WlanWpsHelpRpm =
{
	"header": "Wi-Fi Protected Setup Help",
	"brief": "WPS function will help you add a new device to the network quickly. If the new device supports Wi-Fi Protected Setup and is equipped with a configuration button, you can add it to the network by pressing the configuration button on the device and then press the button on the Router within two minutes. The status LED on the Router will light blue for five minutes if the device has been successfully added to the network. If the new device supports Wi-Fi Protected Setup and the connection way using PIN, you can add it to the network by entering the Router\'s PIN.",
	"wps_stat": "<B>WPS Status</B> - Enable or disable the WPS function here.",
	"curr_pin": "<B>Current PIN</B> - The current value of the Router\'s PIN displayed here. The default PIN of the Router can be found in the label or User Guide.",
	"rest_pin": "<B>Restore PIN</B> - Restore the PIN of the Router to its default.",
	"generate": "<B>Generate New PIN</B> - Click this button, and then you can get a new random value for the Router\'s PIN. You can ensure the network security by generating a new PIN.",
	"add_devi": "<B>Add Device</B> - You can add the new device to the existing network manually by clicking this button.",
	"note": "<B>Note: </B> The WPS function cannot be configured if the Wireless Function of the Router is disabled. Please make sure the Wireless Function is enabled before configuring the WPS."
};
var WzdAccessCtrlHostAddHelpRpm =
{
	"header": "Create a Host Entry Help",
	"brief": "You can create an entry for the host list on this page.",
	"host_desc": "<B>Host Description</B> - In this field, create a <B>unique</B> description for the host.",
	"mode": "<B>Mode</B> - Here are two options, IP Address and MAC Address. You can select either of them from the drop-down list.",
	"ip_addr": "If the <B>IP Address</B> is selected, you can see the following item:",
	"address": "<B>LAN IP Address</B> - Enter the IP address or address range of the host in dotted-decimal format, for example 192.168.0.23.",
	"mac_addr": "If the <b>MAC Address</b> is selected, you can see the following item:",
	"mac_addr_0": "<B>MAC Address</B> - Enter the MAC address of the host in XX:XX:XX:XX:XX:XX format, for example 00:11:22:33:44:AA.",
	"next": "Click the <B>Next</B> button to continue, or the <B>Back</B> button to go back to the previous page."
};
var WzdAccessCtrlRuleAddHelpRpm =
{
	"header": "Create an Internet Access Control Entry Help",
	"brief": "You can create a new rule on this page.",
	"rule": "<B>Rule</B> - In this field, create a name for the rule. Note that this name should be <b>unique</b>.",
	"host": "<B>Host</B> - In this field, select a host from the drop-down list for the rule.",
	"target": "<B>Target</B> - In this filed, select a target from the drop-down list for the rule. The default value is Any Target.",
	"schedule": "<B>Schedule</B> - In this field, select a schedule from the drop-down list for the rule. The default value is Anytime.",
	"status": "<B>Status</B> - In this field, there are two options, Enable or Disable. Select Enable so that the rule will take effect. Select Disable so that the rule won\'t take effect.",
	"finish": "Click the <B>Finish</B> button to apply the new Access Control Policy, or the <B>Back</B> button to go back to the previous page."
};
var WzdAccessCtrlSchedAddHelpRpm =
{
	"header": "Create an Advanced Schedule Entry Help",
	"brief": "You can create an entry for the host list on this page.",
	"schedule_desc": "<B>Schedule Description </B> - In this field, create a description for the schedule. Note that this description should be <b>unique</b>, for example Schedule_1.",
	"day": "<B>Day </B> - Choose Select Days and select the certain day (days), or choose Everyday.",
	"time": "<B>Time </B> - Select \"24 hours\", or specify the Start Time and Stop Time yourself.",
	"star_time": "<B>Start Time </B> - Enter the start time in HHMM format (HHMM are 4 numbers). For example 0800 is 8:00.",
	"stop_time": "<B>Stop Time </B> - Enter the stop time in HHMM format (HHMM are 4 numbers). For example 2000 is 20:00.",
	"next": "Click the <B>Next</B> button to continue, or the <B>Back</B> button to go back to the previous page."
};
var WzdAccessCtrlTargetAddHelpRpm =
{
	"header": "Create an Access Target Entry Help",
	"brief": "You can create an entry for the target list on this page.",
	"target_desc": "<B>Target Description</B> - In this field, create a description for the target. Note that this description should be <b>unique</b>.",
	"mode": "<B>Mode</B> - Here are two options, IP Address and Domain Name. You can choose either of them from the drop-down list.",
	"ip_addr": "If the <B>IP Address</B> is selected, you will see the following items:",
	"ip_addr_0": "<B>IP Address</B> - Enter the IP address (or address range) of the target (targets) in dotted-decimal format, for example 192.168.0.23.",
	"targ_port": "<B>Target Port</B> - Specify the port or port range for the target. For some common service ports, you can make use of the Common Service Port item below.",
	"protocol": "<B>Protocol</B> - Here are four options, All, TCP, UDP, and ICMP. Select one of them from the drop-down list for the target.",
	"service": "<B>Common Service Port</B> - Here lists some common service ports. Select one from the drop-down list, and the corresponding port number will be filled in the Target Port field automatically. For example, if you select \"FTP\", \"21\" will be filled in the Target Port automatically.",
	"doma_name": "If the <B>Domain Name</B> is selected, you will see the following items:",
	"doma_name_0": "<B>Domain Name</B> - Here you can enter 4 domain names, either the full name or the keywords (for example google). Any domain name with keywords in it (www.google.com, www.google.cn) will be blocked or allowed.",
	"next": "Click the <B>Next</B> button to continue, or the <B>Back</B> button to go back to the previous page."
};
var WzdConfirmHelpRpm =
{
	"header": "Confirm Help",
	"brief": "Please confirm all parameters.",
	"save": "Click the <B>Save</B> button to save all the parameters, or the <B>Back</B> button to return to the previous page."
};
var WzdFinishHelpRpm =
{
	"header": "Finish Help",
	"brief": "Click the <b>Finish</b> button to finish the <B>Quick Setup</B>."
};
var WzdL2TPHelpRpm =
{
	"header": "L2TP Help",
	"brief": "<B>User Name and Password</B> - Enter the User Name and Password provided by your ISP. These fields are case-sensitive.",
	"stat_ip": "Select <B>Static IP</B> if IP address,subnet mask,gateway and DNS server address have been provided by your ISP.Otherwise,please select <B>Dynamic IP</B>.",
	"s_0": "Enter server IP address or domain name provided by your ISP.",
	"next": "Click the <B>Next</B> button to continue, or the <B>Back</B> button to go back to the previous page."
};
var WzdPPPoEHelpRpm =
{
	"header": "PPPoE Help",
	"brief": "<B>User Name and Password</B> - Enter the User Name and Password provided by your ISP. These fields are case-sensitive.",
	"next": "Click the <B>Next</B> button to continue, or the <B>Back</B> button to go back to the previous page."
};
var WzdPPTPHelpRpm =
{
	"header": "PPTP Help",
	"brief": "<B>User Name and Password</B> - Enter the User Name and Password provided by your ISP. These fields are case-sensitive.",
	"stat_ip": "Select <B>Static IP</B> if IP address,subnet mask,gateway and DNS server address have been provided by your ISP.Otherwise,please select <B>Dynamic IP</B>.",
	"s_0": "Enter server IP address or domain name provided by your ISP.",
	"next": "Click the <B>Next</B> button to continue, or the <B>Back</B> button to go back to the previous page."
};
var WzdStartHelpRpm =
{
	"header": "Quick Setup Help",
	"brief": "With this guide, you can set the basic parameters to get a connection to the internet. Even if you are not familiar with this product, you can still finish the settings easily. If you are an expert, you can also choose to set what you want in the menu rather than to use this.",
	"next": "Click the <B>Next</B> button to continue."
};
var WzdStaticIpHelpRpm =
{
	"header": "Static IP Help",
	"brief": "The IP parameters should have been provided by your ISP.",
	"ip_addr": "<B>IP Address</B> - This is WAN IP address as seen by external users on the Internet (including your ISP). Enter the IP address into the field.",
	"subn_mask": "<B>Subnet Mask</B> - The Subnet Mask is used for the WAN IP address, it is usually 255.255.255.0.",
	"default_gate": "<B>Default Gateway</B> - Enter the default gateway into the blank.",
	"prim_dns": "<B>Primary DNS</B> - Enter the DNS IP address into the blank.",
	"seco_dns": "<B>Secondary DNS</B> - If your ISP provides another DNS IP address, enter it into this field.",
	"next": "Click the <B>Next</B> button to continue, or the <B>Back</B> button to return to the previous page."
};
var WzdWanMACHelpRpm =
{
	"header": "MAC Clone Help",
	"brief": "Most Cable ISPs (Internet Service Provider) register the unique MAC Address from the wired connection on your <span id = \"t_main_computer\" style=\"color:#FF0000\">MAIN COMPUTER - the last computer used to be connected with the Cable Modem and had Internet connection</span>.",
	"s_0": "If you add a router to the network, your ISP may not recognize the MAC address of the router and not allow it to connect.",
	"s_1": "However, TP-Link router can \"clone\" or replicate the registered MAC address of the MAIN COMPUTER. Then your ISP can release the Internet connection to the router and all the computers.",
	"next": "Click the <B>Next</B> button to continue, or the <B>Back</B> button to return to the previous page."
};
var WzdWanTypeHelpRpm =
{
	"header": "WAN Connection Type Help",
	"brief": "The <b>Quick Setup</b> supports five popular types of connection. To make sure the connection type your ISP provides, please refer to the ISP.",
	"auto_dete": "<b>Auto Detect</b> - If you do not know the connection type your ISP provides, use this option to allow the Quick Setup to search your Internet connection for servers and protocols and determine your ISP configuration. Make sure the cable is securely plugged into the WAN port before detection. The appropriate configuration page will be displayed when an active Internet service is successfully detected by the Router.",
	"dyna_ip": "<b>Dynamic IP </b> - When the Router connects to a DHCP server, or the ISP supplies you with DHCP connection, please choose this type. The Router will get the IP address automatically from the DHCP server or the ISP if you choose the Dynamic IP type.",
	"stat_ip": "<b>Static IP</b> - Your ISP provide you specified IP parameters.",
	"russia": "<b>PPPoE/Russia PPPoE</b> - If you have applied ADSL to realize Dial-up service, you should choose this type. Under this condition, you should fill in both the User Name and Password that the ISP supplied.",
	"russia_0": "<b>L2TP/Russia L2TP</b> - In this type, you should fill in the username, password and IP address/Domain name of VPN Server.",
	"russia_1": "<b>PPTP/Russia PPTP</b> - In this type, you should fill in the username, password and IP address/Domain name of VPN Server.",
	"next": "Click the <b>Next</b> button to continue or the <b>Back</b> button to go back to the previous page."
};
var WzdWlanHelpRpm =
{
	"header": "Wireless Help",
	"brief": "<b>Wireless Network Name</b> - Enter a string of up to 32 characters. The same Name (SSID) must be assigned to all wireless devices in your network. The default SSID is set to be <B> TP-LINK_xxxx</B>(xxxx indicates the last unique four characters of each Router\'s MAC address), which can ensure your wireless network security. But it is recommended strongly that you change your networks name (SSID) to a different value. This value is case-sensitive. For example, <b>MYSSID</b> is NOT the same as <b>MySsid</b>.",
	"region": "<b>Region</b> - Select your region from the pull-down list. This field specifies the region where the wireless function of the Router can be used. It may be illegal to use the wireless function of the Router in a region other than one of those specified in this filed. If your country or region is not listed, please contact your local government agency for assistance.",
	"band": "<b>Band</b> - This field determines the frequency band the radio will work on, there are two bands you can choose: 2.4G or 5G. please pick up suitable frequency band according to the policy of local government and your requirement.",
	"mode": "<b>Mode</b> - This field determines the wireless mode which the Router works on.",
	"chan_width": "<b>Channel Width</b> - The bandwidth of the wireless channel.",
	"channel": "<b>Channel</b> - This field determines which operating frequency will be used. It is not necessary to change the wireless channel unless you notice interference problems with another nearby access point. If you select auto, then the AP will select the best channel automatically.",
	"s_0": "You can select one of the following security options:",
	"disable_secu": "<b>Disable Security</b> - The wireless security function can be enabled or disabled. If disabled, the wireless stations will be able to connect the Router without encryption. It is recommended strongly that you choose one of following options to enable security.",
	"s_1": "",
	"wpa2": "<B>WPA2-PSK</B> - Select WPA based on pre-shared passphrase.",
	"psk_pass": "<B>PSK Password</B> - You can enter <B>ASCII</B> or <B>Hexadecimal</B> characters. <br><br> For <B>ASCII</B>,the length should be between 8 and 63 characters. <br><br> For <B>Hexadecimal</B>,the length should be between 8 and 64 characters.<br><br> Please note that the key is case sensitive.",
	"s_2": ""
};
var IPTVHelp = 
{
	"header": "IPTV Settings Help",
	"brief": "In this page you can config IPTV related features.",
	"igmp_snoop": "<b>IGMP Snooping</b> - IGMP snooping is designed to prevent hosts on a local network from receiving traffic for a multicast group they have not explicitly joined. IGMP snooping is especially useful for bandwidth-intensive IP multicast applications such as IPTV.",
	"igmp_proxy": "<b>IGMP Proxy</b> - Select to enable IGMP Proxy.",
	"igmp_version": "<b>IGMP Version</b> - Select the IGMP(Internet Group Management Protocol) Proxy Version, either V2 or V3, according to your ISP.",
	"iptv_enable": "<b>IPTV</b> - Select to enable the IPTV feature.",
	"iptv_mode": "<b>Mode</b> - Select the appropriate mode according to your ISP.",
	"lan": "<b>LAN 1/2/3/4</b> - Assign your LAN port to whether function as the Internet supplier or as the IPTV supplier."
};
var Wan6DisabledCfgHelpRpm = 
{
   "header": "IPv6 WAN Help",
   "brief": "<B>WAN Connection Type:</B>",
   "s_0": "Choosing the correct WAN connection type based on your ISP network topology.",
   "dhcpv": "<B>DHCPv6</B> - Connections which use dynamic IPv6 address assignment.",
   "stat_ipv": "<B>Static IPv6</B> - Connections which use static IPv6 address assignment.",
   "pppoev": "<B>PPPoEv6</B> - Connections which use PPPoEv6 that requires a user name and password.",
   "tunn_6to": "<B>Tunnel 6to4</B> - Connections which use 6to4 address assignment.",
   "save": "Click the <B>Save</B> button to save your settings.",
   "wan_disabled": "<B>Disabled</B> - Disable all IPv6 connections."
};
var name_str =
{
	"AccessCtrlAccessRulesAdvHelpRpm": AccessCtrlAccessRulesAdvHelpRpm,
	"AccessCtrlAccessRulesHelpRpm": AccessCtrlAccessRulesHelpRpm,
	"AccessCtrlAccessTargetsAdvHelpRpm": AccessCtrlAccessTargetsAdvHelpRpm,
	"AccessCtrlAccessTargetsHelpRpm": AccessCtrlAccessTargetsHelpRpm,
	"AccessCtrlHostsListsAdvHelpRpm": AccessCtrlHostsListsAdvHelpRpm,
	"AccessCtrlHostsListsHelpRpm": AccessCtrlHostsListsHelpRpm,
	"AccessCtrlTimeSchedAdvHelpRpm": AccessCtrlTimeSchedAdvHelpRpm,
	"AccessCtrlTimeSchedHelpRpm": AccessCtrlTimeSchedHelpRpm,
	"AssignedIpAddrListHelpRpm": AssignedIpAddrListHelpRpm,
	"BackNRestoreHelpRpm": BackNRestoreHelpRpm,
	"BasicSecurityHelpRpm": BasicSecurityHelpRpm,
	"BpaCfgHelpRpm": BpaCfgHelpRpm,
	"ChangeLoginPwdHelpRpm": ChangeLoginPwdHelpRpm,
	"DateTimeCfgHelpRpm": DateTimeCfgHelpRpm,
	"DdnsAddComexeHelpRpm": DdnsAddComexeHelpRpm,
	"DiagHelp": DiagHelp,
	"DMZHelpRpm": DMZHelpRpm,
	"DualBandSelectionHelpRpm": DualBandSelectionHelpRpm,
	"DynDdnsHelpRpm": DynDdnsHelpRpm,
	"FixMapCfgHelpRpm": FixMapCfgHelpRpm,
	"GuestNetUsbCfgHelpRpm": GuestNetUsbCfgHelpRpm,
	"GuestNetWirelessCfgHelpRpm": GuestNetWirelessCfgHelpRpm,
	"IPv6LanHelp": IPv6LanHelp,
	"IPv6StatusHelpRpm": IPv6StatusHelpRpm,
	"IPv6TunnelHelp": IPv6TunnelHelp,
	"L2tpCfgHelpRpm": L2tpCfgHelpRpm,
	"LanArpBindingHelpRpm": LanArpBindingHelpRpm,
	"LanArpBindingListHelpRpm": LanArpBindingListHelpRpm,
	"LanDhcpServerHelpRpm": LanDhcpServerHelpRpm,
	"LocalManageControlHelpRpm": LocalManageControlHelpRpm,
	"MacCloneCfgHelpRpm": MacCloneCfgHelpRpm,
	"ManageControlHelpRpm": ManageControlHelpRpm,
	"MediaServerCfgHelpRpm": MediaServerCfgHelpRpm,
	"MiscHelpRpm": MiscHelpRpm,
	"NasCfgHelpRpm": NasCfgHelpRpm,
	"NasFtpCfgHelpRpm": NasFtpCfgHelpRpm,
	"NasUserCfgHelpRpm": NasUserCfgHelpRpm,
	"NatStatusCfgHelpRpm": NatStatusCfgHelpRpm,
	"NetworkCfgHelpRpm": NetworkCfgHelpRpm,
	"NoipDdnsHelpRpm": NoipDdnsHelpRpm,
	"ParentCtrlAdvHelpRpm": ParentCtrlAdvHelpRpm,
	"ParentCtrlHelpRpm": ParentCtrlHelpRpm,
	"PingHelpRpm": PingHelpRpm,
	"PPPoECfgHelpRpm": PPPoECfgHelpRpm,
	"PPPoEv6CfgHelpRpm": PPPoEv6CfgHelpRpm,
	"PptpCfgHelpRpm": PptpCfgHelpRpm,
	"PrintServerCfgHelpRpm": PrintServerCfgHelpRpm,
	"QoSCfgHelpRpm": QoSCfgHelpRpm,
	"QoSRuleCfgHelpRpm": QoSRuleCfgHelpRpm,
	"QoSRuleListHelpRpm": QoSRuleListHelpRpm,
	"RestoreDefaultCfgHelpRpm": RestoreDefaultCfgHelpRpm,
	"SiteSurveyHelpRpm": SiteSurveyHelpRpm,
	"SoftwareUpgradeHelpRpm": SoftwareUpgradeHelpRpm,
	"SpecialAppHelpRpm": SpecialAppHelpRpm,
	"StaticRouteTableHelpRpm": StaticRouteTableHelpRpm,
	"StatusHelpRpm": StatusHelpRpm,
	"SysRebootHelpRpm": SysRebootHelpRpm,
	"SysRouteTableHelpRpm": SysRouteTableHelpRpm,
	"SystemLogHelpRpm": SystemLogHelpRpm,
	"SystemStatisticHelpRpm": SystemStatisticHelpRpm,
	"UpnpCfgHelpRpm": UpnpCfgHelpRpm,
	"UsbAccountHelp": UsbAccountHelp,
	"UsbDlnaHelp": UsbDlnaHelp,
	"UsbFtpHelp": UsbFtpHelp,
	"UsbMassHelp": UsbMassHelp,
	"UsbSharingHelp": UsbSharingHelp,
	"VirtualServerHelpRpm": VirtualServerHelpRpm,
	"Wan6to4TunnelCfgHelpRpm": Wan6to4TunnelCfgHelpRpm,
	"WanDynamicIpCfgHelpRpm": WanDynamicIpCfgHelpRpm,
	"WanDynamicIpV6CfgHelpRpm": WanDynamicIpV6CfgHelpRpm,
	"WanStaticIpCfgHelpRpm": WanStaticIpCfgHelpRpm,
	"WanStaticIpV6CfgHelpRpm": WanStaticIpV6CfgHelpRpm,
	"WlanAdvHelpRpm": WlanAdvHelpRpm,
	"WlanMacFilterHelpRpm": WlanMacFilterHelpRpm,
	"WlanNetworkHelpRpm": WlanNetworkHelpRpm,
	"WlanSecurityHelpRpm": WlanSecurityHelpRpm,
	"WlanStationHelpRpm": WlanStationHelpRpm,
	"WlanWpsChkModeHelpRpm": WlanWpsChkModeHelpRpm,
	"WlanWpsHelpRpm": WlanWpsHelpRpm,
	"WzdAccessCtrlHostAddHelpRpm": WzdAccessCtrlHostAddHelpRpm,
	"WzdAccessCtrlRuleAddHelpRpm": WzdAccessCtrlRuleAddHelpRpm,
	"WzdAccessCtrlSchedAddHelpRpm": WzdAccessCtrlSchedAddHelpRpm,
	"WzdAccessCtrlTargetAddHelpRpm": WzdAccessCtrlTargetAddHelpRpm,
	"WzdConfirmHelpRpm": WzdConfirmHelpRpm,
	"WzdFinishHelpRpm": WzdFinishHelpRpm,
	"WzdL2TPHelpRpm": WzdL2TPHelpRpm,
	"WzdPPPoEHelpRpm": WzdPPPoEHelpRpm,
	"WzdPPTPHelpRpm": WzdPPTPHelpRpm,
	"WzdStartHelpRpm": WzdStartHelpRpm,
	"WzdStaticIpHelpRpm": WzdStaticIpHelpRpm,
	"WzdWanMACHelpRpm": WzdWanMACHelpRpm,
	"WzdWanTypeHelpRpm": WzdWanTypeHelpRpm,
	"WzdWlanHelpRpm": WzdWlanHelpRpm,
	"IPTVHelp": IPTVHelp,
	"Wan6DisabledCfgHelpRpm" : Wan6DisabledCfgHelpRpm
};
