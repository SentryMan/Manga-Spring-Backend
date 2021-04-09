package com.mangasite.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceInfo {

  String userAgent;
  String os;
  String browser;

  @JsonProperty("os_version")
  String osVersion;

  @JsonProperty("browser_version")
  String browserVersion;

  public String getOs() {
    return os;
  }

  public void setOs(String os) {
    this.os = os;
  }

  public String getBrowser() {
    return browser;
  }

  public void setBrowser(String browser) {
    this.browser = browser;
  }

  public String getOsVersion() {
    return osVersion;
  }

  public void setOsVersion(String osVersion) {
    this.osVersion = osVersion;
  }

  public String getBrowserVersion() {
    return browserVersion;
  }

  public void setBrowserVersion(String browserVersion) {
    this.browserVersion = browserVersion;
  }

  public String getUserAgent() {
    return userAgent;
  }

  public void setUserAgent(String userAgent) {
    this.userAgent = userAgent;
  }

  @Override
  public String toString() {
    return "DeviceInfo ["
        + (userAgent != null ? "userAgent=" + userAgent + ", " : "")
        + (os != null ? "os=" + os + ", " : "")
        + (browser != null ? "browser=" + browser + ", " : "")
        + (osVersion != null ? "osVersion=" + osVersion + ", " : "")
        + (browserVersion != null ? "browserVersion=" + browserVersion : "")
        + "]";
  }
}
