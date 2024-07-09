#!/bin/sh

# $Id: //WIFI_SOC/MP/SDK_4_3_0_0/RT288x_SDK/source/user/rt2880_app/scripts/config-vlan.sh#2 $
#
# usage: config-vlan.sh <switch_type> <vlan_type>
#   switch_type: 0=IC+, 1=vtss
#   vlan_type: 0=no_vlan, 1=vlan, LLLLW=wan_4, WLLLL=wan_0
# 

BR_NAME=${1:-br0}

restoreEsw()
{
	switch reg w 14 5555
	switch reg w 40 1001
	switch reg w 44 1001
	switch reg w 48 1001
	switch reg w 4c 1
	switch reg w 50 2001
	switch reg w 70 ffffffff
	switch reg w 98 7f7f
	switch reg w e4 7f
	
	#clear mac table if vlan configuration changed
	switch clear
}


#
# port0: WAN
# port1: LAN1
# port2: LAN2
# port3: LAN3
# port4: LAN4
# port5: NAN
# port6: CPU
#
configLAN()
{
    if [ -f /sys/devices/virtual/net/${BR_NAME}/bridge/multicast_snooping ] && [ "$(cat /sys/devices/virtual/net/${BR_NAME}/bridge/multicast_snooping)" == 1 ]
    then
        switch reg w 14 C05555          # Forward IGMP to CPU port only, Enable VLAN, Port[0~6] priority = 1
        switch reg w 50 3002            # VID0=2, VID1=3
        switch reg w 54 5004            # VID2=4, VID3=5
        switch reg w 58 6               # VID4=6
        switch reg w 98 7f3f            # ENAGING, UNTAG, TEMOVAL
        switch reg w e4 3f              # DOUBLE TAG
        switch reg w 40 3002            # port0 (WAN)  PVID=2, port1 (LAN1) PVID=3
        switch reg w 44 5004            # port2 (LAN2) PVID=4, port3 (LAN3) PVID=5
        switch reg w 48 6               # port4 (LAN4) PVID=6
        switch reg w 70 48444241        # VLAN0 member: CPU, WAN
                                        # VLAN1 member: CPU, LAN1
                                        # VLAN2 member: CPU, LAN2
                                        # VLAN3 member: CPU, LAN3
        switch reg w 74 50              # VLAN4 member: CPu, LAN4
    else
        switch reg w 14 405555          # Forward IGMP to CPU port only, Enable VLAN, Port[0~6] priority = 1
        switch reg w 50 2003
        switch reg w 98 7f3f
        switch reg w e4 3f
        switch reg w 40 3002
        switch reg w 44 3003
        switch reg w 48 3003
        switch reg w 70 0000417e
        switch reg w 74 00
    fi

    switch clear                    # clear mac table if vlan configuration changed
}


restoreEsw
configLAN
