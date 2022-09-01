package com.mangasite.record;

import com.fasterxml.jackson.annotation.JsonAlias;

public record DeviceInfo(
    String userAgent,
    String os,
    String browser,
    @JsonAlias("os_version") String osVersion,
    @JsonAlias("browser_version") String browserVersion) {}
