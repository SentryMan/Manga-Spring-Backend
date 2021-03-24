package com.mangasite.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceInfo {
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
}
