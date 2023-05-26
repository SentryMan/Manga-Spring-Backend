package com.mangasite.records;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record DeviceInfo(
    String userAgent,
    String os,
    String browser,
    @JsonAlias("os_version") String osVersion,
    @JsonAlias("browser_version") String browserVersion) {}
