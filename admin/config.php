<?php
	global $xoopsModuleConfig;
	include_once("../include/functions.php");
  // core config parameters
  $sConfigDefaultView    = "thismonth.all";
  $bConfigChangeSites    = true;
  $bConfigUpdateSites    = true;
  $sUpdateSiteFilename   = "xml_update.php";

	$sname = "www.yoursite.com";
	$spath = "/path/to/awstats/statistics/files/";
	$upath = "/path/to/awstats.pl/";
	$surl = "http://www.yoursite.com"; 
	$fspeed = 250;

  $aConfig[$sname] = array(
    "statspath"   => $spath,
    "updatepath"  => $upath,
    "siteurl"     => $surl,
    "theme"       => "default",
    "fadespeed"   => $fspeed,
    "password"    => "",
    "includes"    => ""
  );

?>
