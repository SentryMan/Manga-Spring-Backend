package com.mangasite.record;

import com.fasterxml.jackson.annotation.JsonProperty;

public record DeviceInfo(
    String userAgent,
    String os,
    String browser,
    @JsonProperty("os_version") String osVersion,
    @JsonProperty("browser_version") String browserVersion) {}
