If you find any bugs please post on the Xoops forums or send a comment from my website (http://www.optikool.com/modules/liaise/). 

X JAWStats is a module that uses JAWStats and AWStats to display website statistics. JAWStats reads the statistics files of AWStats and displays statistics using php and jquery. AWStats must already be installed and working correctly before you can read the files.

Update the config.php file located in the admin folder. That's all there is to it. This module is currenly only compatible with xoops 2.3.

$sname:
	This is the full name of your website. (www.yoursite.com or subsite.yoursite.com)

$spath:
	This is the path to where awstats generates your statistics. Statistics files look similar to, awstats200901.www.yoursite.com.txt. (/path/to/awstats/statistics/files/)

$upath:
	This is the path to where your awstats.pl file is located on the server. (/path/to/awstats.pl/)

$surl:
	This is the http link of your site. (http://www.yoursite.com or http://subsite.yoursite.com)

$fspeed:
	This is the fade speed of jquery effects. (250)
 
