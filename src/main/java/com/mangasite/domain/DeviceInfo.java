package com.mangasite.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class DeviceInfo {

  String os;
  String browser;

  @JsonProperty("os_version")
  String osVersion;

  @JsonProperty("browser_version")
  String browserVersion;
}
