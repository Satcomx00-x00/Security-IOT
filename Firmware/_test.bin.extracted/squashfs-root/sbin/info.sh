#!/bin/sh
while true
do
	ps
	sleep 1
	cat /proc/meminfo > /dev/console
	sleep 2
	cat /proc/buddyinfo > /dev/console
	sleep 2
	iwpriv ra0 show psinfo
	sleep 60
done
