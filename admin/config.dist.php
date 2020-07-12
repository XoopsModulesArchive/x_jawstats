<?php

  // core config parameters
  $sConfigDefaultView    = "thismonth.all";
  $bConfigChangeSites    = true;
  $bConfigUpdateSites    = true;
  $sUpdateSiteFilename   = "xml_update.php";

  // individual site configuration
  $aConfig["site1"] = array(
    "statspath"   => "/path/to/data/",
    "updatepath"  => "/path/to/awstats.pl/",
    "siteurl"     => "http://www.my-1st-domain.com",
    "theme"       => "default",
    "fadespeed"   => 250,
    "password"    => "my-1st-password",
    "includes"    => ""
  );

  $aConfig["site2"] = array(
    "statspath"   => "/path/to/data/",
    "updatepath"  => "/path/to/awstats.pl/",
    "siteurl"     => "http://www.my-2nd-domain.com",
    "theme"       => "default",
    "fadespeed"   => 250,
    "password"    => "my-2nd-password",
    "includes"    => ""
  );

?>
