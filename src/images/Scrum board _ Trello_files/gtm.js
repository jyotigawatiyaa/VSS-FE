
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"57",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"snowplow.domain_userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"doubleClickOnPage"
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "convert_undefined_to":"false",
      "vtp_decodeCookie":false,
      "vtp_name":"token"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ed"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",8],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\\\/$","value","visit"],["map","key","^\/magic$","value","visit"],["map","key","^\/signup$","value","try"],["map","key","^\\\/en-US$","value","visit"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"BP_GTM_FPC"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ds_e1",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","[^.]ds_e1\\=[^.]","value",["macro",13]],["map","key","[^.]utm_source\\=[^.]","value",["macro",14]]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","[^.]ds_e1\\=[^.]","value","paid-search"],["map","key","[^.]utm_medium\\=[^.]","value",["macro",16]]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"keyword",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.historyChangeSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isLoggedIn"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction create_UUID(){var a=(new Date).getTime(),d=\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(b){var c=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"==b?c:c\u00263|8).toString(16)});return d}function createCookie(a,d,b){var c=new Date;c.setTime(c.getTime()+36E5*b);b=\"; expires \\x3d \"+c.toGMTString();document.cookie=d\u0026\u0026\"undefined\"!==d?a+\"\\x3d\"+d+b+\"; path\\x3d\/\":a+\"\\x3d\"+create_UUID()+b+\"; path\\x3d\/\"}createCookie(\"BP_GTM_FPC\",",["escape",["macro",12],8,16],",168);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]],["map","key","u4","value",["macro",4]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eval-c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",5],
      "vtp_url":["macro",6],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":3
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]],["map","key","u4","value",["macro",4]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"remar0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalStandard":["macro",5],
      "vtp_url":["macro",6],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":4
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]],["map","key","u4","value",["macro",4]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"tryint",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",5],
      "vtp_url":["macro",6],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":5
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]],["map","key","u4","value",["macro",4]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"trell0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalStandard":["macro",5],
      "vtp_url":["macro",6],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":6
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"856618376",
      "vtp_conversionLabel":"BfTJCN6g13AQiOu7mAM",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":8
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"856618376",
      "vtp_conversionLabel":"vj6iCOTq8HAQiOu7mAM",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":10
    },{
      "function":"__flc",
      "vtp_groupTag":"trell0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"trell1",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalStandard":["macro",5],
      "vtp_url":["macro",6],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":12
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","pagetype","value","viewed-any-not-login"]],
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"856618376",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",6],
      "vtp_enableRdpCheckbox":true,
      "tag_id":19
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","pagetype","value","Logged%20In"]],
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"856618376",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",6],
      "vtp_enableRdpCheckbox":true,
      "tag_id":20
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","pagetype","value","blog"]],
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"856618376",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",6],
      "vtp_enableRdpCheckbox":true,
      "tag_id":21
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"18000089",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":26
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800073245",
      "vtp_conversionLabel":"1hgkCJXA6IUBEJ3MwP0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":28
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048523",
      "vtp_conversionLabel":"I3jZCI_Nz4UBEIuLv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":29
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048529",
      "vtp_conversionLabel":"LmNRCJ223oUBEJGLv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":30
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048694",
      "vtp_conversionLabel":"HcgiCOS-6IUBELaMv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":31
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800066758",
      "vtp_conversionLabel":"FUp8CIzA6IUBEMaZwP0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":32
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":true,
      "tag_id":33
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"863319477",
      "vtp_conversionLabel":"5rdXCLfX0YoBELXr1JsD",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":35
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048529",
      "vtp_conversionLabel":"1-oCCPHVhJQBEJGLv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":36
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"800048529",
      "vtp_conversionLabel":"rkU5CLTUhJQBEJGLv_0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":37
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"44935",
      "tag_id":40
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u3","value",["macro",0]],["map","key","u4","value",["macro",4]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"trell0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"viewe0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"5406241",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",5],
      "vtp_url":["macro",6],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":44
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":110
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":111
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o3pk8",
      "tag_id":113
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=atlassian\u0026kpi=",["escape",["macro",11],12],"\u0026tag_id=110\u0026fpc=",["escape",["macro",12],12],"\u0026user_id=",["escape",["macro",0],12],"\u0026utm_source=",["escape",["macro",15],12],"\u0026utm_medium=",["escape",["macro",17],12],"\u0026order_value=",["escape",["macro",18],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",5],
      "tag_id":124
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=atlassian\u0026kpi=signup\u0026tag_id=110\u0026fpc=",["escape",["macro",12],12],"\u0026user_id=",["escape",["macro",0],12],"\u0026utm_source=",["escape",["macro",15],12],"\u0026utm_medium=",["escape",["macro",17],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",5],
      "tag_id":126
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_enableShippingData":false,
      "vtp_conversionId":"375826860",
      "vtp_conversionLabel":"8CjHCPfF3qkCEKzTmrMB",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":true,
      "tag_id":138
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=CompleteRegistration\u0026amp;cd[content_name]=Confirmed%20Evaluation\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=Try%20Intent\"\u003E\n\n\u003Cimg src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=Try%20Intent\" height=\"1\" width=\"1\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=Logged%20In\"\u003E\n\n\u003Cimg src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=Logged%20In\" height=\"1\" width=\"1\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=Viewed%20Any%20Not%20Login\"\u003E\n\n\u003Cimg src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=Viewed%20Any%20Not%20Login\" height=\"1\" width=\"1\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=Blog\"\u003E\n\n\u003Cimg src=\"https:\/\/www.facebook.com\/tr?id=1959661357604925\u0026amp;ev=ViewContent\u0026amp;cd[content_name]=Blog\" height=\"1\" width=\"1\" style=\"display:none\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({ec:\"trello\",ea:\"confirmed_evaluation\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"  \u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"6a46dd1a94fff700dd6bd0baede5d68d\",c=\"2041963\",d=\"https:\"==document.location.protocol?\"https:\/\/ct.capterra.com\":\"http:\/\/ct.capterra.com\",b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=d+\"\/capterra_tracker.js?vid\\x3d\"+c+\"\\x26vkey\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"594-ATC-127\",{asyncOnly:!0}))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=44935\u0026amp;conversionId=1390892\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"c805eab18dff4c19a2dd47cfa8920bb5\");qp(\"track\",\"ViewContent\");qp(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/c805eab18dff4c19a2dd47cfa8920bb5\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"  \u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"62710ee8149a8012cf47f8998227d090\",c=\"2152159\",d=\"https:\"==document.location.protocol?\"https:\/\/ct.capterra.com\":\"http:\/\/ct.capterra.com\",b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=d+\"\/capterra_tracker.js?vid\\x3d\"+c+\"\\x26vkey\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=44935\u0026amp;conversionId=3130132\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":118
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/cdn.bizible.com\/scripts\/bizible.js\" async=\"\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c,d,e){a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.id=e;a.src=d;b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"https:\/\/tag.demandbase.com\/BwkB5d1U.min.js\",\"demandbase_js_lib\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b){\"function\"!=typeof a.ClickTaleCreateDOMElement\u0026\u0026(a.ClickTaleCreateDOMElement=function(c){return b.createElementNS?b.createElementNS(\"http:\/\/www.w3.org\/1999\/xhtml\",c):b.createElement(c)});a.WRInitTime=(new Date).getTime();a=ClickTaleCreateDOMElement(\"script\");a.type=\"text\/javascript\";var d=\"https:\"==b.location.protocol?\"https:\/\/cdnssl.clicktale.net\/\":\"http:\/\/cdn.clicktale.net\/\";d+=\"www33\/ptc\/ef81b94c-8498-4f12-b358-eb76a000a247.js\";a.src=d;b.getElementsByTagName(\"body\")[0].appendChild(a)})(window,\ndocument);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"trello.possibleNewSignup"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/login(.*|\\\/)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/add-card.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/associate.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/confirmEmail.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/forgot.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(\\\u0026|\\%26|\\%2526|\\?|%3F|%253F)(email)=([^\u0026]*(?:\u0026[^\u0026=]+(?=\u0026|$))*)(?:\u0026|$)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/signup"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"trello.com"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/c\\\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello\\.com\\\/b\\\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"trello.com\\\/reset\\?.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"blog.trello.com"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/teams\/team-management"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/travel"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"info.trello.com"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/magic"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"\\b^(gmail|hotmail|yahoo|mail|outlook|qq|icloud|yandex|163|gmx|web|googlemail|live|me|hotmail.co|naver|yahoo.com|aol|protonmail|bk|msn|orange|yahoo.co|126|wp|t-online|comcast|ymail|ukr|seznam|inbox|list|ya|mac|rambler|o2|free|laposte|scryptmail|live.co|yopmail|libero|btinternet|sina|wanadoo|siemens|bluewin|interia|foxmail|mailinator|sbcglobal|uol.com|posteo|abv|rocketmail|bigpond|att|i.softbank|bol.com|freenet|hanmail|itesm|outlook.com|email|verizon|op|gmai|sfr|live.com|terra.com|rediffmail|cox|sky|telenet|hotmail.com|email.arizona|nate|onet|example|online|windowslive|shaw|ualberta|arcor|yeah|tut|bellsouth|139|sharklasers|rogers|centrum|aliyun|daum|zoho|ziggo|student.swin.edu|globo|xtra.co|post|u.northwestern|tiscali|tlen|optusnet.com|alice|neuf|poczta.onet|ntlworld|telia|virgilio|freemail|charter|iinet.net|xs4all|vip.qq|videotron|mail.usf|skynet|mail.mcgill|ig.com|earthlink|home|ieee|kpnmail|sapo|telus|live.unc|poczta|optonline|aim|blueyonder.co|aon|sympatico|bigpond.net|sohu|discovery|fastmail|bt|nifty|mail.missouri|virginmedia|gmail.com|bigmir|walla|planet|upcmail|iki|y7mail|mail.gvsu|talktalk|bbox|mail.uc|189|student.unsw.edu|aol.co|buckeyemail.osu|hispeed|email.sc|telefonica|ngs|gazeta|doctors.org|btopenworld|internode.on|email.wm|gwmail.gwu|juno|ua|hotmai|tpg.com|live.missouristate|mweb.co|gamail|sunrise|volny|hetnet|students.towson|club-internet|frontier|westnet.com|oi.com|bell|roadrunner|chello|casema|pobox|kabelmail|btconnect|umail.iu|usa|go2|azet|mynet|tiscali.co|tin|narod|numericable|netcourrier|sasktel|talk21|21cn|pacbell|mindspring|india|gmx.co|simnet|netscape|email.unc|trash-mail|nus.edu|tigermail.auburn|citromail|studenti.unimi|onlinehome|test|prodigy.net|quicknet|tom|telecomitalia|safetymail|telkomsa|netcologne|eircom|windstream|aliceadsl|msa.hinet|facebook|bluemail|hushmail|unitybox|ewetel|globomail|atlas|embarqmail|inwind|ybb.ne|cegetel|luukku|livemail|engineer|acm|virgin|cfl.rr|alum.mit|consultant|ozemail.com|nc.rr|binkmail|mchsi|imail|cableone|hotmal|kpnplanet|ancestry|cogeco|swbell|students.ecu|ono|runbox|centurylink|a1|vip.163|kimo|telfort|europe|zeelandnet|suddenlink|ameritech|prodigy|dispostable|zonnet|hot|berlin|wi.rr|vodamail.co|ptd|netcabo|iprimus.com|sibmail|tampabay.rr|myself|rediff|tds|noos|caramail|austin.rr|adam.com|otenet|rcn|comhem|vodafone|netspace.net|programmer|pt|bredband|dr|rochester.rr|student.tuwien.ac|solcon|zoominternet|swissonline|detik|fuse|adinet.com|webmail.co|carolina.rr|lyse|frontiernet|paran|optimum|dbmail|gmail.co|libertysurf|cs|hamburg|netzero|techie|yaho|spamgourmet|eastlink|sent|empal|scarlet|fibertel.com|aapt.net|vip.sina|singnet.com|centurytel|wowway|students.swinburne.edu|net|bigpond.com|excite|pandora|vtr|tx.rr|post.harvard|spray|o2online|zipmail.com|wegwerfemail|snet|triad.rr|lycos|cinci.rr|saintly|uniroma1|nycap.rr|hush|une.net|hawaii.rr|netplus|hccnet|columbus.rr|slingshot.co|tele2|linuxmail|htp-tel|eml|getmail|hotamil|iname|pchome.com|movistar|netvision.net|hotmial|satx.rr|neo.rr|globetrotter|gotmail|terra|ix.netcom|excite.co|wxs|9online|parrot|netvigator|san.rr|maine.rr|asia|sina.com|woh.rr|inode|exemail.com|mm|easypost|iol|twcny.rr|xoxy|vfemail|fastmail.co|lineone|writeme|korea|workmail|your-mail|sc.rr|seed.net|kc.rr|alice-dsl|telusplanet|mail2000.com|hoymail|bresnan|bellnet|ihug.co|gci|zoznam|caiway|katamail|nyc.rr|hughes|fastmail.com|besonet|ca.rr|bellaliant|mundo-r|unican|snafu|stny.rr|cheerful|new.rr|stanfordalumni|nm|r7|atlanticbb|teletu|socal.rr|suremail|me.com|singpost|speedy.com|qip|hotmaill|263|mailcatch|operamail|myfairpoint|hotail|mail.goo.ne|pisem|123|imap|jetable|saudia|knology|fea|tiscalinet|warpmail|voila|eim|about|montevideo.com|hotamail|sol|arnet.com|ftml|webspeed|sogetthis|trashmail|versatel|tradermail|peoplepc|broadpark|wavecable|ml1|hvc.rr|safe-mail|ggaweb|f-m|elitemail|mailcan|fmail.co|mailbolt|postpro|mailhaven|ec.rr|bobmail|t-email|xmsnet|ownmail|land|airpost|ghostmail|justemail|fastem|net2000|dsl.pipex|insight.rr|shitmail|rushpost|consolidated|compuserve|spaml|mail2world|freeler|hawaiiantel|front|pochta|naseej|doctor|mailforce|kabelfoon|nospammail|allmail|ns.sympatico|myfastmail|devnullmail|mail.telepac|xsmail|mailc|newmail|yepmail|mailworks|dslextreme|sprynet|letterboxes|petml|proinbox|123mail|portugalmail|speedpost|fast-email|spamex|mailservice|fsmail|emailplus|sci|150mail|mailmight|swift-mail|mailas|the-fastest|50mail|fastest|infinito|inoutbox|musician|imap-mail|students.fhu|hailmail|fastmailbox|fakeinbox|internet-mail|mailnator|reallyfast|mailup|promessage|fast-mail|2-mail|fmgirl|love|telecable|internetmailing|myway|firemail|bak.rr|h-mail|mail-central|emailengine|box|imapmail|mymacmail|internet-e-mail|4email|fastimap|ttmail|eresmas|yetnet|bigfoot|technologist|ma|mailite|speedymail|postinbox|mailandftp|fastemailer|epix|emailcorner|fmailbox|150ml|internetemails|mailnew|veryfast|fastemail|superonline|fastmessaging|bendbroadband|erols|jetemail|ebnett|mailftp|mailnull|innocent|bcpl|bestmail|emailgroups|mail-page|theinternetemail|execs|mailsent|cluemail|airmail|mailbox|byteme|vikenfiber|spambog|ssl-mail|realemail|emailuser|zippymail|shinternet|lavabit|discardmail|mail.net|fmguy|the-quickest|inorbit|mixmail|hot.rr|lawyer|jippii|freestart|homemail|mailingaddress|latinmail|veryspeedy|voo|euronet|adelphia|grandecom|sprintmail|citlink|nowmymail|frisurf|optushome.com|qwestoffice|internet|osite.com|comic|eyou|wideopenwest|seanet|journalist|earthling|xoom|fromru|pipeline|nb.sympatico|bright|hol|mailcity|interfree|cyberdude|redseven|tempinbox|sneakemail|ath.forthnet|hispavista|artlover|mailbox.co|no-spam|uni|mindless|computermail|gt.rr|insightbb|ureach|starpower|aeiou|techemail|name|wow|apollo|ragingbull|dublin|email.wsu|wo.com|kittymail|bolt|catlover|nycmail|financier|uymail|aliceposta|hulapla|onebox|cutey|icqmail|australiamail|unforgettable|stu.owensboro.kyschools|bikerider|posteo.co|in|dc.rr|guerrillamailblock|poste|o2.co|sanook|s0ny|mail333|meltmail|attglobal|games|geocities|yours|netmadeira|integra|freeuk|advalvas|diplomats|gishpuppy|swva|0815|au|graffiti|outgun|priest|hot-shot|chemist|dplanet|infovia.com|coxinet|e-mail|cgac|forthnet|okbank|itelefonica.com|zmail|ovi|4x4man|cable.net|money|gardener|incognitomail|37|postmaster.co|prontomail|firehost|sp|oddpost|dcemail|www|publicist|thisisnotmyrealemail|inmail|luxsci|mailme|mail15|mighty.co|chez|bikemechanics|doglover|mail.zp|x5g|africamail|kaixo|mailinator2|softhome|clerk|sendme|truemail.co|5iron|onewaymail|alibaba|rock|munich|music|clubducati|2die4|qwest|cybergal|counsellor|usermail|dontsendmespam|whoever|uk8|representative|argentina|poetic|slingshot|starmedia|popstar|bestweb|ravemail|winning|tvcablenet|scientist|monemail.fr|vnn|idirect|insurer|usit|guy2|presidency|geologist|uk2k|zipmail|boltonfans|uk7|gportal|webmails|repairman|covad|filzmail|uku.co|whatever|ausi|ananzi.co|concentric|netian|housemail|doramail|ukcool|citiz|upf|oceanfree|go|liverpoolfans|bigblue.net|webmail|spamherelots|gala|mailpride|nyc|csi|mac.hush|dbzmail|lagerlouts|cliffhanger|visitweb|1mum|freegates|witty|c3|supereva|metalfan|barcelona|emailaccount|thedoghousemail|club4x4|primposta|teewars|aknet|coolkiwi|us.army|archaeologist|f1fans|dca|postmail|mail.austria|samerica|cd2|netpiper|classicmail.co|columnist|qprfans|1me|mbox.com|bellatlantic|mail2one|enter|uno|clubalfa|333|rr|care2|clubhonda|callnetuk|deliveryman|space|la|hotbot|dog|hairdresser|bradfordfans|sify|netcom|email2me|jubiimail|mailpanda|maffia|fastermail|studiocom|hockeymail|guy|onmilwaukee|keromail|clubbers|edge|madrid|mail-temporaire|mail2dad|singmail|e-apollo|tempemail|umpire|posteo.com|rrohio|scottishmail.co|breathe|eastcoast.co|canada|ygm|oninet|inicia|rescueteam|vipmail|mail2uk|backpackers|peru|pro|registerednurses|sociologist|mail2007|wooow|temporaryinbox|fan|discofan|swirve|loveable|highveldmail.co|mail2alexa|10minutemail|thaimail|stealthmail|sanfranmail|mail2actor|gtmc|indiatimes|crosslink|croeso|16mail|mail2queen|magicmail.co|mauritius|access4less|myspace)\\b",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"trello.com"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/en-US"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"snowplow.loaded"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"^(\/(ja|fr|de|es|ru|cn|ko|nl|pl|cs|fi|hu|it|br|ro))?(\\\/(pricing|home|signup|login|business-class|contact|views|guide|teams|enterprise|platforms|magic|tour|free-trial)).*$",
      "ignore_case":true
    }],
  "rules":[
    [["if",2],["unless",0,1],["add",1,6,11,12,13,14,15,16,17,18,27,28,29,34,35,37,38,39,40,0]],
    [["if",4],["unless",1,10],["add",2,9,17,31],["block",3,5,11,19,21,22,26,36,0]],
    [["if",11,12,13],["add",3,5,11,17,21,26,30,36,0]],
    [["if",4,10],["add",4,8,11,17,21,25,32,36,41,42]],
    [["if",4,17],["add",7,10,11,17,21,32,33,36]],
    [["if",4,18],["add",19]],
    [["if",4,19],["add",20]],
    [["if",4,20],["add",21,32]],
    [["if",12,13,21],["add",22,26,0]],
    [["if",2],["unless",22],["add",23,24]],
    [["if",13,23,24],["add",26,0,43]],
    [["if",12,13,25],["add",26,0,43]],
    [["if",4,24,27],["add",43]],
    [["if",3,4],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,5],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,6],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,7],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,8],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,9],["block",1,2,3,4,5,6,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,34,35,36,37,38,39,40,41,42,0]],
    [["if",4,14],["block",4,8,11,17,19,20,21,22,25,26,27,32,34,35,36,39,41,42,0]],
    [["if",4,15],["block",4,8,11,17,19,20,21,22,25,26,27,32,34,35,36,39,41,42,0]],
    [["if",4,16],["block",4,8,11,17,19,20,21,22,25,26,27,32,34,35,36,39,41,42,0]],
    [["if",9,26],["block",27]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi","__twitter_website_tag"]}

};


/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},la={};try{la.__proto__=ja;ia=la.a;break a}catch(a){}ia=!1}fa=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=fa,oa=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Bj=b.prototype},pa=this||self,qa=function(a){return a};var ra=function(a,b){this.g=a;this.s=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ta=function(){this.B={};this.F=!1;this.H={}},ua=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ta.prototype.get=function(a){return this.B["dust."+a]};ta.prototype.set=function(a,b){this.F||(a="dust."+a,this.H.hasOwnProperty(a)||(this.B[a]=b))};
ta.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var wa=function(a,b){b="dust."+b;a.F||a.H.hasOwnProperty(b)||delete a.B[b]};ta.prototype.tb=function(){this.F=!0};var k=function(a){this.s=new ta;this.g=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.g[Number(b)]=a[Number(b)]:this.s.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if(!this.B)if("length"===a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else sa(a)?this.g[Number(a)]=b:this.s.set(a,b)};aa.get=function(a){return"length"===a?this.length():sa(a)?this.g[Number(a)]:this.s.get(a)};aa.length=function(){return this.g.length};aa.sb=function(){for(var a=ua(this.s,1),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};var xa=function(a,b){sa(b)?delete a.g[Number(b)]:wa(a.s,b)};aa=k.prototype;
aa.pop=function(){return this.g.pop()};aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};aa.has=function(a){return sa(a)&&this.g.hasOwnProperty(a)||this.s.has(a)};aa.tb=function(){this.B=!0;Object.freeze(this.g);this.s.tb()};var ya=function(){function a(f,g){if(b[f]){if(b[f].td+g>b[f].max)throw Error("Quota exceeded");b[f].td+=g}}var b={},c=void 0,d=void 0,e={Pi:function(f){c=f},mg:function(){c&&a(c,1)},Ri:function(f){d=f},ub:function(f){d&&a(d,f)},ej:function(f,g){b[f]=b[f]||{td:0};b[f].max=g},vi:function(f){return b[f]&&b[f].td||0},reset:function(){b={}},gi:a};e.onFnConsume=e.Pi;e.consumeFn=e.mg;e.onStorageConsume=e.Ri;e.consumeStorage=e.ub;e.setMax=e.ej;e.getConsumed=e.vi;e.reset=e.reset;e.consume=e.gi;return e};var za=function(a,b){this.B=a;this.R=function(c,d,e){return c.apply(d,e)};this.F=b;this.s=new ta;this.g=this.H=void 0};za.prototype.add=function(a,b){Ba(this,a,b,!1)};var Ba=function(a,b,c,d){if(!a.s.F)if(a.B.ub(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.s;e.set(b,c);e.H["dust."+b]=!0}else a.s.set(b,c)};
za.prototype.set=function(a,b){this.s.F||(!this.s.has(a)&&this.F&&this.F.has(a)?this.F.set(a,b):(this.B.ub(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.s.set(a,b)))};za.prototype.get=function(a){return this.s.has(a)?this.s.get(a):this.F?this.F.get(a):void 0};za.prototype.has=function(a){return!!this.s.has(a)||!(!this.F||!this.F.has(a))};var Da=function(a){var b=new za(a.B,a);a.H&&(b.H=a.H);b.R=a.R;b.g=a.g;return b};var Ea={},Fa=function(a,b){Ea[a]=Ea[a]||[];Ea[a][b]=!0},Ga=function(a){for(var b=[],c=Ea[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ha=function(){},Ia=function(a){return"function"==typeof a},n=function(a){return"string"==typeof a},Ja=function(a){return"number"==typeof a&&!isNaN(a)},Ka=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Fa("TAGGING",4):Fa("TAGGING",5);return b},Ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Na=function(a,b){if(a&&Ka(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Pa=function(a,b){if(!Ja(a)||!Ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Sa=function(a,b){for(var c=new Qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Va=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Wa=
function(a){return Math.round(Number(a))||0},Xa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ya=function(a){var b=[];if(Ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Za=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},$a=function(){return new Date(Date.now())},cb=function(){return $a().getTime()},Qa=function(){this.prefix="gtm.";this.values={}};Qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Qa.prototype.get=function(a){return this.values[this.prefix+a]};
var db=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},fb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},gb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},hb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},ib=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},jb=function(a,b){var c=A;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Ma(b,d))return}return d},kb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},lb=/^\w{1,9}$/,mb=function(a){var b=[];Ta(a,function(c,d){lb.test(c)&&d&&b.push(c)});return b.join(",")};var nb=function(a,b){ta.call(this);this.R=a;this.Fa=b};oa(nb,ta);nb.prototype.toString=function(){return this.R};nb.prototype.sb=function(){return new k(ua(this,1))};nb.prototype.g=function(a,b){a.B.mg();return this.Fa.apply(new ob(this,a),Array.prototype.slice.call(arguments,1))};nb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var qb=function(a,b){for(var c,d=0;d<b.length&&!(c=pb(a,b[d]),c instanceof ra);d++);return c},pb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof nb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.H;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},ob=function(a,b){this.s=a;this.g=b},F=function(a,b){var c=a.g;return Ka(b)?pb(c,b):b},G=function(a){return a.s.R};var rb=function(){ta.call(this)};oa(rb,ta);rb.prototype.sb=function(){return new k(ua(this,1))};var ub={control:function(a,b){return new ra(a,F(this,b))},fn:function(a,b,c){var d=this.g,e=F(this,b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.B.ub(a.length+f.length);return new nb(a,function(){return function(g){var h=Da(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=F(this,l[m]),l[m]instanceof ra)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var r=qb(h,f);if(r instanceof ra)return"return"===r.g?r.s:r}}())},list:function(a){var b=this.g.B;b.ub(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=F(this,arguments[d]);"string"===typeof e&&b.ub(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.B,c=new rb,d=0;d<arguments.length-1;d+=2){var e=F(this,arguments[d])+"",f=F(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.ub(g);c.set(e,f)}return c},undefined:function(){}};var vb=function(){this.B=ya();this.g=new za(this.B)},wb=function(a,b,c){var d=new nb(b,c);d.tb();a.g.set(b,d)},xb=function(a,b,c){ub.hasOwnProperty(b)&&wb(a,c||b,ub[b])};vb.prototype.Nb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.s(c)};vb.prototype.s=function(a){for(var b,c=0;c<arguments.length;c++)b=pb(this.g,arguments[c]);return b};vb.prototype.F=function(a,b){var c=Da(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=pb(c,arguments[e]);return d};var yb,Ab=function(){if(void 0===yb){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}yb=a}else yb=a}return yb};var Cb=function(a,b){this.g=b===Bb?a:""};Cb.prototype.toString=function(){return this.g+""};var Bb={},Db=function(a){var b=Ab(),c=b?b.createScriptURL(a):a;return new Cb(c,Bb)};var Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Fb;a:{var Gb=pa.navigator;if(Gb){var Hb=Gb.userAgent;if(Hb){Fb=Hb;break a}}Fb=""}var Ib=function(a){return-1!=Fb.indexOf(a)};var Kb=function(a,b,c){this.g=c===Jb?a:""};Kb.prototype.toString=function(){return this.g.toString()};var Lb=function(a){return a instanceof Kb&&a.constructor===Kb?a.g:"type_error:SafeHtml"},Jb={},Mb=function(a){var b=Ab(),c=b?b.createHTML(a):a;return new Kb(c,null,Jb)},Nb=new Kb(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Jb);var Ob=function(a,b){a.src=b instanceof Cb&&b.constructor===Cb?b.g:"type_error:TrustedResourceUrl";var c,d,e=(a.ownerDocument&&a.ownerDocument.defaultView||window).document,f=null===(d=e.querySelector)||void 0===d?void 0:d.call(e,"script[nonce]");(c=f?f.nonce||f.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var Pb=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ub=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Vb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Lb(Nb);return!c.parentElement}),Wb=function(a,b){if(Vb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Lb(b)};var A=window,J=document,Xb=navigator,Yb=J.currentScript&&J.currentScript.src,Zb=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},$b=function(a){var b=J.getElementsByTagName("script")[0]||J.body||J.head;b.parentNode.insertBefore(a,b)},ac=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},bc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},cc=function(a,b,c,d){var e=J.createElement("script");
d&&Ta(d,function(f,g){f=f.toLowerCase();bc.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;Ob(e,Db(a));ac(e,b);c&&(e.onerror=c);$b(e);return e},dc=function(){if(Yb){var a=Yb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=J.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=J.body&&J.body.lastChild||J.body||J.head;d.parentNode.insertBefore(c,
d);ac(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},K=function(a){A.setTimeout(a,0)},ic=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},lc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},mc=function(a){var b=J.createElement("div"),c=Mb("A<div>"+a+"</div>");Wb(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},nc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
oc=function(a){Xb.sendBeacon&&Xb.sendBeacon(a)||fc(a)},pc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var qc=function(a,b){return F(this,a)&&F(this,b)},rc=function(a,b){return F(this,a)===F(this,b)},sc=function(a,b){return F(this,a)||F(this,b)},tc=function(a,b){a=F(this,a);b=F(this,b);return-1<String(a).indexOf(String(b))},uc=function(a,b){a=String(F(this,a));b=String(F(this,b));return a.substring(0,b.length)===b},vc=function(a,b){a=F(this,a);b=F(this,b);switch(a){case "pageLocation":var c=A.location.href;b instanceof rb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var xc=function(){this.g=new vb;wc(this)};xc.prototype.Nb=function(a){return this.g.s(a)};var wc=function(a){xb(a.g,"map");var b=function(c,d){wb(a.g,c,d)};b("and",qc);b("contains",tc);b("equals",rc);b("or",sc);b("startsWith",uc);b("variable",vc)};var yc=function(a){if(a instanceof yc)return a;this.Sa=a};yc.prototype.toString=function(){return String(this.Sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Cc=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Dc=function(a){if(null==a)return String(a);var b=Cc.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ec=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fc=function(a){if(!a||"object"!=Dc(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ec(a,"constructor")&&!Ec(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ec(a,b)},M=function(a,b){var c=b||("array"==Dc(a)?[]:{}),d;for(d in a)if(Ec(a,d)){var e=a[d];"array"==Dc(e)?("array"!=Dc(c[d])&&(c[d]=[]),c[d]=M(e,c[d])):Fc(e)?(Fc(c[d])||(c[d]={}),c[d]=M(e,c[d])):c[d]=e}return c};var Hc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=ua(h,1),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Ma(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.sb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof rb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof nb){var u=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Gc(t[v],b,!!c);var w=b?b.B:ya(),y=new za(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(t)))};d.push(h);e.push(u);f(h,u);return u}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Gc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Ma(d,
h);if(-1<l)return e[l];if(Ka(h)||Va(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Fc(h)){var q=new rb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new nb("",function(t){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Hc(F(this,v[w]),b,!!c);return g((0,this.g.R)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var u=typeof h;if(null===h||"string"===u||"number"===u||"boolean"===u)return h;};return g(a)};var Ic=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Jc=function(a){if(void 0===a||Ka(a)||Fc(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Kc={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ic(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):xa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ic(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):xa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Lc="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Mc=new ra("break"),Nc=new ra("continue"),Oc=function(a,b){return F(this,a)+F(this,b)},Pc=function(a,b){return F(this,a)&&F(this,b)},Yc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Ma(Lc,b)){var d=Hc(c);return Gc(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var e=a.get(b);if(e instanceof nb){var f=Ic(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ma(Kc.supportedMethods,b)){var g=
Ic(c);g.unshift(this.g);return Kc[b].apply(a,g)}}if(a instanceof nb||a instanceof rb){if(a.has(b)){var h=a.get(b);if(h instanceof nb){var l=Ic(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof nb?a.R:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ic(c))}if(a instanceof yc&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Zc=function(a,b){a=F(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=F(this,b);c.set(a,d);return d},$c=function(a){var b=Da(this.g),c=qb(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},ad=function(){return Mc},bd=function(a){for(var b=F(this,a),c=0;c<b.length;c++){var d=F(this,b[c]);if(d instanceof ra)return d}},cd=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=F(this,arguments[c+1]);Ba(b,d,e,!0)}}},dd=function(){return Nc},ed=function(a,b,c){var d=new k;b=F(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,F(this,f))},fd=function(a,b){return F(this,a)/F(this,b)},gd=function(a,b){a=F(this,a);b=F(this,b);var c=a instanceof yc,d=b instanceof yc;return c||d?c&&d?a.Sa==b.Sa:!1:a==b},hd=function(a){for(var b,c=0;c<arguments.length;c++)b=
F(this,arguments[c]);return b};function id(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=qb(f,d);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}}}function jd(a,b,c){if("string"===typeof b)return id(a,function(){return b.length},function(f){return f},c);if(b instanceof rb||b instanceof k||b instanceof nb){var d=b.sb(),e=d.length();return id(a,function(){return e},function(f){return d.get(f)},c)}}
var kd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return jd(function(e){d.set(a,e);return d},b,c)},ld=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return jd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},md=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return jd(function(e){var f=Da(d);f.add(a,e);return f},b,c)},od=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return nd(function(e){d.set(a,e);return d},b,c)},pd=
function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return nd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},qd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return nd(function(e){var f=Da(d);f.add(a,e);return f},b,c)};
function nd(a,b,c){if("string"===typeof b)return id(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return id(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var rd=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var u=f.get(r);q.add(u,p.get(u))}}var f=F(this,a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=F(this,d);var h=Da(g);for(e(g,h);pb(h,b);){var l=qb(h,d);if(l instanceof ra){if("break"===l.g)break;if("return"===l.g)return l}var m=Da(g);e(h,m);pb(m,c);h=m}},sd=function(a){a=F(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},td=function(a,b){var c;a=F(this,a);b=F(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof rb||a instanceof k||a instanceof nb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof yc)return;return c},ud=function(a,b){return F(this,a)>F(this,
b)},vd=function(a,b){return F(this,a)>=F(this,b)},wd=function(a,b){a=F(this,a);b=F(this,b);a instanceof yc&&(a=a.Sa);b instanceof yc&&(b=b.Sa);return a===b},Dd=function(a,b){return!wd.call(this,a,b)},Ed=function(a,b,c){var d=[];F(this,a)?d=F(this,b):c&&(d=F(this,c));var e=qb(this.g,d);if(e instanceof ra)return e},Fd=function(a,b){return F(this,a)<F(this,b)},Gd=function(a,b){return F(this,a)<=F(this,b)},Hd=function(a,b){return F(this,a)%F(this,b)},Id=function(a,b){return F(this,a)*F(this,b)},Jd=function(a){return-F(this,
a)},Kd=function(a){return!F(this,a)},Ld=function(a,b){return!gd.call(this,a,b)},Md=function(){return null},Nd=function(a,b){return F(this,a)||F(this,b)},Od=function(a,b){var c=F(this,a);F(this,b);return c},Pd=function(a){return F(this,a)},Qd=function(a){return Array.prototype.slice.apply(arguments)},Rd=function(a){return new ra("return",F(this,a))},Sd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
nb||a instanceof k||a instanceof rb)&&a.set(b,c);return c},Td=function(a,b){return F(this,a)-F(this,b)},Ud=function(a,b,c){a=F(this,a);var d=F(this,b),e=F(this,c);if(!Ka(d)||!Ka(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===F(this,d[h]))if(f=F(this,e[h]),f instanceof ra){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=F(this,e[e.length-1]),f instanceof ra&&("return"===f.g||"continue"===
f.g)))return f},Vd=function(a,b,c){return F(this,a)?F(this,b):F(this,c)},Wd=function(a){a=F(this,a);return a instanceof nb?"function":typeof a},Xd=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Yd=function(a,b,c,d){var e=F(this,d);if(F(this,c)){var f=qb(this.g,e);if(f instanceof ra){if("break"===f.g)return;if("return"===f.g)return f}}for(;F(this,a);){var g=qb(this.g,e);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}F(this,
b)}},Zd=function(a){return~Number(F(this,a))},$d=function(a,b){return Number(F(this,a))<<Number(F(this,b))},ae=function(a,b){return Number(F(this,a))>>Number(F(this,b))},be=function(a,b){return Number(F(this,a))>>>Number(F(this,b))},ce=function(a,b){return Number(F(this,a))&Number(F(this,b))},de=function(a,b){return Number(F(this,a))^Number(F(this,b))},ee=function(a,b){return Number(F(this,a))|Number(F(this,b))};var ge=function(){this.g=new vb;fe(this)};ge.prototype.Nb=function(a){return he(this.g.s(a))};
var ne=function(a,b){return he(ie.g.F(a,b))},fe=function(a){var b=function(d,e){xb(a.g,d,String(e))};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){wb(a.g,String(d),e)};c(0,Oc);c(1,Pc);c(2,Yc);c(3,Zc);c(53,$c);c(4,ad);c(5,bd);c(52,cd);c(6,dd);c(9,bd);c(50,ed);c(10,fd);c(12,gd);c(13,hd);c(47,kd);c(54,ld);c(55,md);c(63,rd);c(64,od);c(65,pd);c(66,qd);c(15,sd);c(16,td);c(17,td);c(18,ud);c(19,vd);c(20,wd);c(21,Dd);c(22,Ed);c(23,Fd);c(24,Gd);c(25,Hd);c(26,Id);c(27,
Jd);c(28,Kd);c(29,Ld);c(45,Md);c(30,Nd);c(32,Od);c(33,Od);c(34,Pd);c(35,Pd);c(46,Qd);c(36,Rd);c(43,Sd);c(37,Td);c(38,Ud);c(39,Vd);c(40,Wd);c(41,Xd);c(42,Yd);c(58,Zd);c(57,$d);c(60,ae);c(61,be);c(56,ce);c(62,de);c(59,ee)},pe=function(){var a=ie,b=oe();wb(a.g,"require",b)},qe=function(a,b){a.g.g.R=b};function he(a){if(a instanceof ra||a instanceof nb||a instanceof k||a instanceof rb||a instanceof yc||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var re=function(){var a=function(b){return{toString:function(){return b}}};return{ah:a("consent"),Kd:a("consent_always_fire"),sf:a("convert_case_to"),tf:a("convert_false_to"),uf:a("convert_null_to"),vf:a("convert_true_to"),wf:a("convert_undefined_to"),nj:a("debug_mode_metadata"),rb:a("function"),Mh:a("instance_name"),Oh:a("live_only"),Ph:a("malware_disabled"),Qh:a("metadata"),qj:a("original_activity_id"),rj:a("original_vendor_template_id"),Sh:a("once_per_event"),Vf:a("once_per_load"),tj:a("priority_override"),
uj:a("respected_consent_types"),Zf:a("setup_tags"),$f:a("tag_id"),ag:a("teardown_tags")}}();
var se=[],te={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ue=function(a){return te[a]},ve=/[\x00\x22\x26\x27\x3c\x3e]/g;var ze=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ae={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Be=function(a){return Ae[a]};
se[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ze,Be)+"'"}};var He=/['()]/g,Ie=function(a){return"%"+a.charCodeAt(0).toString(16)};se[12]=function(a){var b=
encodeURIComponent(String(a));He.lastIndex=0;return He.test(b)?b.replace(He,Ie):b};var Je=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ke={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Le=function(a){return Ke[a]};se[16]=function(a){return a};var Ne;
var Oe=[],Pe=[],Qe=[],Re=[],Se=[],Te={},Ue,Ve,We,Xe=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ye=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Te[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.kg&&b.kg(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===re.Kd.toString()&&a[f]){}d&&b&&b.jg&&(e.vtp_gtmCachedValues=b.jg);return void 0!==d?d(e):Ne(c,e,b)},$e=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Ze(a[e],b,c));return d},Ze=function(a,b,c){if(Ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ze(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Oe[f];if(!g||b.Re(g))return;c[f]=!0;try{var h=$e(g,b,c);h.vtp_gtmEventId=b.id;d=Ye(h,b);We&&(d=We.hi(d,h))}catch(y){b.Dg&&b.Dg(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ze(a[l],b,c)]=Ze(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=Ze(a[p],b,c);Ve&&(m=m||q===Ve.jd);d.push(q)}return Ve&&m?Ve.ki(d):d.join("");case "escape":d=Ze(a[1],b,c);if(Ve&&Ka(a[1])&&"macro"===a[1][0]&&Ve.Di(a))return Ve.Ui(d);d=
String(d);for(var r=2;r<a.length;r++)se[a[r]]&&(d=se[a[r]](d));return d;case "tag":var u=a[1];if(!Re[u])throw Error("Unable to resolve tag reference "+u+".");return d={sg:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=af(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},af=function(a,b,c){try{return Ue($e(a,b,c))}catch(d){JSON.stringify(a)}return 2};var bf=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.s=a;this.g=c};oa(bf,Error);function cf(a,b){if(Ka(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)cf(a[c],b[c])}};var df=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.B=a;this.s=b;this.g=[]};oa(df,Error);var ff=function(){return function(a,b){a instanceof df||(a=new df(a,ef));b&&a.g.push(b);throw a;}};function ef(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ja(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var jf=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}for(var c=[],d=[],e=gf(a),f=0;f<Pe.length;f++){var g=Pe[f],h=hf(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<Re.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},hf=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},gf=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=af(Qe[c],a));return b[c]}};var kf={hi:function(a,b){b[re.sf]&&"string"===typeof a&&(a=1==b[re.sf]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(re.uf)&&null===a&&(a=b[re.uf]);b.hasOwnProperty(re.wf)&&void 0===a&&(a=b[re.wf]);b.hasOwnProperty(re.vf)&&!0===a&&(a=b[re.vf]);b.hasOwnProperty(re.tf)&&!1===a&&(a=b[re.tf]);return a}};var lf=function(){this.g={}};function mf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new bf(c,d,g);}}function nf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));mf(e,b,d,g);mf(f,b,d,g)}}}};var Af=function(a){var b=of.N,c=this;this.s=new lf;this.g={};var d={},e=nf(this.s,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ta(a,function(f,g){var h={};Ta(g,function(l,m){var p=pf(l,m);h[l]=p.assert;d[l]||(d[l]=p.V)});c.g[f]=function(l,m){var p=h[l];if(!p)throw qf(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},Cf=function(a){return Bf.g[a]||
function(){}};function pf(a,b){var c=Xe(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=qf;try{return Ye(c)}catch(d){return{assert:function(e){throw new bf(e,{},"Permission "+e+" is unknown.");},V:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function qf(a,b,c){return new bf(a,b,c)};var Df=!1;var Ef={};Ef.mj=Xa('false');Ef.ni=Xa('true');var Ff=Df,Gf=Ef.ni,Hf=Ef.mj;
var Wf=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Xf=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Wf(b,"/*")&&(b=b.slice(0,-2));Wf(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Yf=/^[a-z0-9-]+$/i,Zf=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ag=function(a,b){var c;if(!(c=!$f(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Yf.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Zf.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var u=l.hostname,t=q;if(0!==t.indexOf("*."))r=u.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=u.toLowerCase().indexOf(t.toLowerCase());r=-1===v?!1:u.length===t.length?
!0:u.length!==t.length+v?!1:"."===u[v-1]}if(r){var w=p.slice(p.indexOf("/"));h=Xf(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},$f=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var bg=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,cg={Fn:"function",DustMap:"Object",List:"Array"},N=function(a,b,c){for(var d=0;d<b.length;d++){var e=bg.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof nb?p="Fn":l instanceof k?p="List":l instanceof rb?p="DustMap":
l instanceof yc&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(cg[h]||h)+".");}}};function dg(a){if(a instanceof rb)return a.toString();if(a instanceof k)return"["+a.toString()+"]";if(a instanceof nb)return a.toString()+"()";if(n(a))return'"'+a+'"';return""+a}
function eg(a,b){var c=[];var d=[],e=[],f=function(){return 0===e.length?"":"Property "+e.join(".")+": "},g=function(h,l){if(0<=d.indexOf(l))c.push(f()+"Expected value contained a cycle.");else if(h!==l)if(l instanceof k)if(h instanceof k)if(h.length()!==l.length())c.push(f()+"Expected array to contain "+l.length()+" item(s), actually "+h.length()+".");else for(var m=0;m<l.length();m++)e.push(m),d.push(l),g(h.get(m),l.get(m)),d.pop(),e.pop();else c.push(f()+"Expected to be an array, actually "+
dg(h)+".");else if(l instanceof rb)if(h instanceof rb){for(var p=ua(h,1),q={},r=0;r<p.length;r++)q[p[r]]=!0;for(var u=ua(l,1),t=[],v=0;v<u.length;v++){var w=u[v];q[w]?(t.push(w),q[w]=!1):c.push(f()+'Expected property "'+w+'" was not found in actual.')}for(var y=0;y<p.length;y++)q[p[y]]&&c.push(f()+'Unexpected property "'+p[y]+'" found in actual.');for(var x=0;x<t.length;x++){var z=t[x];e.push(z);d.push(l);g(h.get(z),l.get(z));d.pop();e.pop()}}else c.push(f()+"Expected to be an object, actually "+
dg(h)+".");else c.push(f()+"Expected "+dg(l)+", actually "+dg(h)+".")};g(a,b);return c};var fg=function(a,b){var c=new nb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=F(this,d[e]);var f=this.g.g;f&&f.Ea&&(f.Ea.oc[a]=f.Ea.oc[a]||[],f.Ea.oc[a].push(d));return b.apply(this,d)});c.tb();return c},gg=function(a,b){var c=new rb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ia(e)?c.set(d,fg(a+"_"+d,e)):(Ja(e)||n(e)||"boolean"==typeof e)&&c.set(d,e)}c.tb();return c};var hg=function(a,b){N(G(this),["apiName:!string","message:?string"],arguments);var c={},d=new rb;return d=gg("AssertApiSubject",c)};var ig=function(a,b){N(G(this),["actual:?*","message:?string"],arguments);var c={},d=new rb;
return d=gg("AssertThatSubject",c)};function jg(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Hc(arguments[d],c));return Gc(a.apply(null,b))}}var lg=function(){for(var a=Math,b=kg,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=jg(a[e].bind(a)))}return c};var mg=function(a){var b;return b};var ng=function(a){var b;return b};var og=function(a){N(G(this),["uri:!string"],arguments);return encodeURI(a)};var pg=function(a){N(G(this),["uri:!string"],arguments);return encodeURIComponent(a)};var qg=function(a){N(G(this),["message:?string"],arguments);};var rg=function(a,b){N(G(this),["min:!number","max:!number"],arguments);return Pa(a,b)};var sg=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.ai.apply(null,Array.prototype.slice.call(arguments,1))};var tg=function(){sg(this,"read_container_data");var a=new rb;a.set("containerId",'GTM-PJ8M5SK');a.set("version",'57');a.set("environmentName",'Production');a.set("debugMode",Ff);a.set("previewMode",Hf);a.set("environmentMode",Gf);a.tb();return a};var ug=function(){return(new Date).getTime()};var vg=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof nb)return"function";if(a instanceof yc){a=a.Sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var wg=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Ff||Hf)&&a.call(this,e.message)}}}return{parse:b(function(c){return Gc(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Hc(c))})}};var xg=function(a){return Wa(Hc(a,this.g))};var yg=function(a){return Number(Hc(a,this.g))};var zg=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ag=function(a,b,c){var d=null,e=!1;N(G(this),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new rb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof rb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var kg="floor ceil round max min abs pow sqrt".split(" ");var Bg=function(){var a={};return{wi:function(b){return a.hasOwnProperty(b)?a[b]:void 0},fj:function(b,c){a[b]=c},reset:function(){a={}}}},Cg=function(a,b){N(G(this),["apiName:!string","mock:?*"],arguments);};var Dg={};
Dg.keys=function(a){return new k};
Dg.values=function(a){return new k};
Dg.entries=function(a){return new k};Dg.freeze=function(a){return a};var Fg=function(){this.g={};this.s={};};Fg.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;c=Gg(a,b)||c;return c};
Fg.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ia(b)?fg(a,b):gg(a,b)};
var Hg=function(a,b,c){if(a.s.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.s[b]=Ia(c)?fg(b,c):gg(b,c)};function Gg(a,b){var c=void 0;var d=b.g.g;d&&d.Ea&&(c=d.Ea.Ue.wi(a));return c};function Ig(){var a={};return a};var O={hc:"_ee",pd:"_syn_or_mod",vj:"_uei",ie:"_eu",sj:"_pci",Fb:"event_callback",Yc:"event_timeout",Ga:"gtag.config",Oa:"gtag.get",ya:"purchase",Db:"refund",ib:"begin_checkout",Bb:"add_to_cart",Cb:"remove_from_cart",kh:"view_cart",yf:"add_to_wishlist",Na:"view_item",Tc:"view_promotion",Sc:"select_promotion",Nd:"select_item",Wb:"view_item_list",xf:"add_payment_info",jh:"add_shipping_info",Za:"value_key",Ya:"value_callback",Ha:"allow_ad_personalization_signals",ac:"restricted_data_processing",Xb:"allow_google_signals",
Ka:"cookie_expires",Yb:"cookie_update",cc:"session_duration",cd:"session_engaged_time",Ra:"user_properties",ra:"transport_url",T:"ads_data_redaction",za:"user_data",Zb:"first_party_collection",D:"ad_storage",I:"analytics_storage",Ld:"region",rf:"wait_for_update",Ja:"conversion_linker",Ia:"conversion_cookie_prefix",ia:"value",fa:"currency",Pf:"trip_type",aa:"items",If:"passengers",Od:"allow_custom_scripts",Ib:"session_id",Nf:"quantity",qb:"transaction_id",mb:"language",Xc:"country",Vc:"allow_enhanced_conversions",
Td:"aw_merchant_id",Rd:"aw_feed_country",Sd:"aw_feed_language",Qd:"discount",Cf:"developer_id",ed:"delivery_postal_code",Zd:"estimated_delivery_date",Xd:"shipping",fe:"new_customer",Ud:"customer_lifetime_value",Yd:"enhanced_conversions",Eb:"page_view",qa:"linker",O:"domains",ob:"decorate_forms"};O.Sf=[O.ya,O.Db,O.ib,O.Bb,O.Cb,O.kh,O.yf,O.Na,O.Tc,O.Sc,O.Wb,O.Nd,O.xf,O.jh];O.Rf=[O.Ha,O.Xb,O.Yb];O.Tf=[O.Ka,O.Yc,O.cc,O.cd];var Kg=function(a){Fa("GTM",a)};var Lg=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Mg=new Lg(1936,!0),Ng=new Lg(1933);var Pg=function(){var a=Og;if(a.Pe&&a.hasOwnProperty("Pe"))return a.Pe;var b=new a;return a.Pe=b};var Og=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[Ng.g]=!0}},Qg=function(a){return Pg().g(a.g,a.defaultValue)};var Rg=[];function Sg(){var a=Zb("google_tag_data",{});a.ics||(a.ics={entries:{},set:Tg,update:Ug,addListener:Vg,notifyListeners:Wg,active:!1,usedDefault:!1});return a.ics}
function Tg(a,b,c,d,e,f){var g=Sg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&n(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&A.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Xg(a),Wg(),Fa("TAGGING",2))},f)}}}
function Ug(a,b){var c=Sg();c.active=!0;if(void 0!=b){var d=Yg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Yg(a);f.quiet?(f.quiet=!1,Xg(a)):g!==d&&Xg(a)}}function Vg(a,b){Rg.push({De:a,ri:b})}function Xg(a){for(var b=0;b<Rg.length;++b){var c=Rg[b];Ka(c.De)&&-1!==c.De.indexOf(a)&&(c.Fg=!0)}}function Wg(a){for(var b=0;b<Rg.length;++b){var c=Rg[b];if(c.Fg){c.Fg=!1;try{c.ri({fi:a})}catch(d){}}}}
var Yg=function(a){var b=Sg().entries[a]||{};return void 0!==b.update?b.update:b.initial},Zg=function(a){return(Sg().entries[a]||{}).initial},$g=function(a){return!(Sg().entries[a]||{}).quiet},ah=function(){return Qg(Ng)?Sg().active:!1},bh=function(){return Sg().usedDefault},ch=function(a,b){Sg().addListener(a,b)},dh=function(a){Sg().notifyListeners(a)},eh=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!$g(b[e]))return!0;return!1}if(c()){var d=!1;ch(b,function(e){d||c()||(d=!0,a(e))})}else a({})},
fh=function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Yg(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=n(b)?[b]:b,e={};c().length!==d.length&&ch(d,function(f){var g=c();0<g.length&&(f.De=g,a(f))})};function gh(a){for(var b=[],c=0;c<hh.length;c++){var d=a(hh[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var hh=[O.D,O.I],ih=function(a){var b=a[O.Ld];b&&Kg(40);var c=a[O.rf];c&&Kg(41);for(var d=Ka(b)?b:[b],e={Rb:0};e.Rb<d.length;e={Rb:e.Rb},++e.Rb)Ta(a,function(f){return function(g,h){if(g!==O.Ld&&g!==O.rf){var l=d[f.Rb];Sg().set(g,h,l,"IN","IN-MP",c)}}}(e))},jh=function(a,b){Ta(a,function(c,d){Sg().update(c,d)});dh(b)},kh=function(a){var b=Yg(a);return void 0!=b?b:!0},lh=function(){return"G1"+gh(Yg)},mh=function(a,b){ch(a,b)},nh=function(a,b){fh(a,b)},oh=function(a,b){eh(a,
b)};var sh=function(a){return rh?J.querySelectorAll(a):null},th=function(a,b){if(!rh)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!J.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},uh=!1;if(J.querySelectorAll)try{var vh=J.querySelectorAll(":root");vh&&1==vh.length&&vh[0]==J.documentElement&&(uh=!0)}catch(a){}var rh=uh;var wh,xh=!1;var yh=function(a){if(J.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!A.getComputedStyle)return!0;var c=A.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=A.getComputedStyle(d,
null))}return!1};var Hh=/:[0-9]+$/,Ih=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Lh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Jh(a.protocol)||Jh(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(Hh,"").toLowerCase());return Kh(a,b,c,d,e)},Kh=function(a,b,c,d,e){var f,g=Jh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Mh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Hh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Fa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ma(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ih(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Jh=function(a){return a?a.replace(":",
"").toLowerCase():""},Mh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Nh=function(a){var b=J.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Fa("TAGGING",1),c="/"+c);var d=b.hostname.replace(Hh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Oh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=Nh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var Ph={},Qh=!0,Rh=!1;var Th=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Uh=new RegExp(/@(gmail|googlemail)\./i),Vh=new RegExp(/support|noreply/i),Wh="SCRIPT STYLE IMG SVG PATH BR".split(" "),Xh=["BR"],Yh={};
function Zh(a){var b;if(a===J.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=Zh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}function $h(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}
function ai(a){if(0==a.length)return null;var b;b=$h(a,function(c){return!Vh.test(c.ma)});b=$h(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=$h(b,function(c){return!yh(c.element)});return b[0]}
var bi=function(a){var b=!a||!!a.zg,c=!a||!!a.Ag,d=b+"."+c;a&&a.vc&&a.vc.length&&(d+="."+a.vc.join("."));var e=Yh[d];if(e&&200>cb()-e.timestamp)return e.result;var f;var g=[],h=J.body;if(h){for(var l=h.querySelectorAll("*"),m=0;m<l.length&&1E4>m;m++){var p=l[m];if(!(0<=Wh.indexOf(p.tagName.toUpperCase()))){for(var q=!1,r=0;r<p.childElementCount&&1E4>r;r++)if(!(0<=Xh.indexOf(p.children[r].tagName.toUpperCase()))){q=!0;break}q||g.push(p)}}f={elements:g,status:1E4<l.length?"2":"1"}}else f={elements:g,
status:"4"};for(var u=f,t=u.elements,v=[],w=0;w<t.length;w++){var y=t[w],x=y.textContent;y.value&&(x=y.value);if(x){var z=x.match(Th);if(z){var B=z[0],D;if(A.location){var C=Kh(A.location,"host",!0);D=0<=B.toLowerCase().indexOf(C)}else D=!1;D||v.push({element:y,ma:B})}}}var E;var H=a&&a.vc;if(H&&0!==H.length){for(var Q=[],L=0;L<v.length;L++){for(var U=!0,S=0;S<H.length;S++){var W=H[S];if(W&&th(v[L].element,W)){U=!1;break}}U&&Q.push(v[L])}E=Q}else E=v;var I=ai(E),T=[];if(I){var ca=I.element,P={ma:I.ma,
tagName:ca.tagName,type:1};b&&(P.querySelector=Zh(ca));c&&(P.isVisible=!yh(ca));T.push(P)}var na={elements:T,status:10<v.length?"3":u.status};Yh[d]={timestamp:cb(),result:na};return na},ci=function(a){return a.tagName+":"+a.isVisible+":"+a.ma.length+":"+Uh.test(a.ma)};
var di=function(a){return/^e\d+$/.test(a)||/^[0-9A-Za-z_-]{43}$/.test(a)},ei=function(a){return void 0===a||null===a?"":n(a)?Za(String(a)):"e0"},gi=function(a){return a.replace(fi,"")},ii=function(a){return hi(a.replace(/\s/g,""))},hi=function(a){return Za(a.replace(ji,"").toLowerCase())},li=function(a){a=a.replace(/[\s-()/.]/g,"");"+"!==a.charAt(0)&&(a="+"+a);return ki.test(a)?a:"e0"},ni=function(a){var b=a.toLowerCase().split("@");if(2==b.length){var c=b[0];/^(gmail|googlemail)\./.test(b[1])&&(c=
c.replace(/\./g,""));c=c+"@"+b[1];if(mi.test(c))return c}return"e0"},qi=function(a,b,c){window.Promise||c([],[]);Promise.all(a.map(function(d){return d.value&&oi(d.name)?pi(d.value).then(function(e){d.value=e}):Promise.resolve()})).then(function(){c(a,b)}).catch(function(){c([],[])})},pi=function(a){if(""===a||"e0"===a)return Promise.resolve(a);if(A.crypto&&A.crypto.subtle)try{var b=ri(a);return A.crypto.subtle.digest("SHA-256",b).then(function(c){var d=Array.from(new Uint8Array(c)).map(function(e){return String.fromCharCode(e)}).join("");
return A.btoa(d).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}).catch(function(){return"e2"})}catch(c){return Promise.resolve("e2")}else return Promise.resolve("e1")},ri=function(a){var b;if(A.TextEncoder)b=(new A.TextEncoder("utf-8")).encode(a);else{for(var c=[],d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?c.push(e):2048>e?c.push(192|e>>6,128|e&63):55296>e||57344<=e?c.push(224|e>>12,128|e>>6&63,128|e&63):(e=65536+((e&1023)<<10|a.charCodeAt(++d)&1023),c.push(240|e>>18,128|e>>12&63,128|
e>>6&63,128|e&63))}b=new Uint8Array(c)}return b},ji=/[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,mi=/^\S+@\S+\.\S+$/,ki=/^\+\d{11,15}$/,fi=/[.~]/g,si={},ti=(si.email="em",si.phone_number="pn",si.first_name="fn",si.last_name="ln",si.street="sa",si.city="ct",si.region="rg",si.country="co",si.postal_code="pc",si.error_code="ec",si),ui=function(a,b,c){function d(t,v,w){var y=t[v];Ka(y)||(y=[y]);for(var x=0;x<y.length;++x){var z=ei(y[x]);""!==z&&g.push({name:v,value:w(z),index:void 0})}}function e(t,v,w,y){var x=
ei(t[v]);""!==x&&g.push({name:v,value:w(x),index:y})}function f(t){return function(v){Kg(64);return t(v)}}var g=[],h=[];if("https:"===A.location.protocol){d(a,"email",ni);d(a,"phone_number",li);d(a,"first_name",f(ii));d(a,"last_name",f(ii));var q=a.home_address||{};d(q,"street",f(hi));d(q,"city",f(hi));d(q,"postal_code",f(gi));d(q,"region",f(hi));d(q,"country",f(gi));var r=a.address||{};Ka(r)||(r=[r]);for(var u=0;u<r.length;u++)e(r[u],"first_name",ii,u),e(r[u],"last_name",ii,u),e(r[u],"street",hi,u),e(r[u],"city",hi,u),e(r[u],"postal_code",gi,
u),e(r[u],"region",hi,u),e(r[u],"country",gi,u);qi(g,h,c)}else g.push({name:"error_code",value:"e3",index:void 0}),c(g,h)},vi=function(a,b){ui(a,[],function(c,d){for(var e=["tv.1"],f=0;f<c.length;++f){var g=c[f].name,h=c[f].value,l=c[f].index,m=ti[g];m&&h&&(!oi(g)||di(h))&&(void 0!==l&&(m+=l),e.push(m+"."+h))}b(encodeURIComponent(e.join("~")),d)})},wi=function(a,b){if(A.Promise)try{return new Promise(function(c){ui(a,b,function(d,e){for(var f=["tv.1"],g=0;g<d.length;++g){var h=d[g].name,l=d[g].value,
m=d[g].index,p=ti[h];p&&l&&(!oi(h)||di(l))&&(void 0!==m&&(p+=m),f.push(p+"."+l))}c({Fc:encodeURIComponent(f.join("~")),sc:e})})})}catch(c){}},oi=function(a){return-1!==["email","phone_number","first_name","last_name","street"].indexOf(a)};var of={},xi=null,yi=Math.random();of.N="GTM-PJ8M5SK";of.od="7e0";of.pj="";of.dh="ChEI8MXUhwYQhOr7mrPpmsDEARIkAK67nT5j10P6C/MBOe5XSJTSz32Ld4Uzl+7+JklFyMt/T+G9GgKYYQ\x3d\x3d";var zi={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Ai={__paused:!0,__tg:!0},Bi;for(Bi in zi)zi.hasOwnProperty(Bi)&&(Ai[Bi]=!0);var Ci="www.googletagmanager.com/gtm.js";
var Di=Ci,Ei=Xa(""),Fi=null,Gi=null,Hi="https://www.googletagmanager.com/a?id="+of.N+"&cv=57",Ii={},Ji={},Ki=function(){var a=xi.sequence||1;xi.sequence=a+1;return a};of.bh="";var Li={},Mi=new Qa,Ni={},Oi={},Ri={name:"dataLayer",set:function(a,b){M(kb(a,b),Ni);Pi()},get:function(a){return Qi(a,2)},reset:function(){Mi=new Qa;Ni={};Pi()}},Qi=function(a,b){return 2!=b?Mi.get(a):Si(a)},Si=function(a,b){var c=a.split(".");b=b||[];for(var d=Ni,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ma(b,d))return}return d},Ti=function(a,b){Oi.hasOwnProperty(a)||(Mi.set(a,b),M(kb(a,b),Ni),Pi())},Ui=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=Qi(c,1);if(Ka(d)||Fc(d))d=M(d);Oi[c]=d}},Pi=function(a){Ta(Oi,function(b,c){Mi.set(b,c);M(kb(b,void 0),Ni);M(kb(b,c),Ni);a&&delete Oi[b]})},Wi=function(a,b,c){Li[a]=Li[a]||{};Li[a][b]=Vi(b,c)},Vi=function(a,b){var c,d=1!==(void 0===b?2:b)?Si(a):Mi.get(a);"array"===Dc(d)||"object"===Dc(d)?c=M(d):c=d;return c},Xi=function(a,b){if(Li[a])return Li[a][b]},Yi=function(a,b){Li[a]&&delete Li[a][b]};
var Zi=function(a,b,c){if(c){var d=c.selector_type,e=String(c.value),f;if("js_variable"===d)if(e=e.replace(/\["?'?/g,".").replace(/"?'?\]/g,""),0===e.indexOf("dataLayer."))f=Qi(e.substring(10));else{var g=e.split(".");f=A[g.shift()];for(var h=0;h<g.length;h++)f=f&&f[g[h]]}else if("css_selector"===d&&rh){var l=sh(e);l&&0<l.length&&(f=lc(l[0])||Za(l[0].value))}f&&(a[b]=f)}},$i=function(a){if(a){var b={};Zi(b,"email",a.email);Zi(b,"phone_number",a.phone);b.address=[];for(var c=a.name_and_address||[],
d=0;d<c.length;d++){var e={};Zi(e,"first_name",c[d].first_name);Zi(e,"last_name",c[d].last_name);Zi(e,"street",c[d].street);Zi(e,"city",c[d].city);Zi(e,"region",c[d].region);Zi(e,"country",c[d].country);Zi(e,"postal_code",c[d].postal_code);b.address.push(e)}return b}},aj=function(a){if(a)switch(a.mode){case "selectors":return $i(a.selectors);case "auto_detect":var b=a.auto_detect,c=bi({zg:!1,Ag:!1,vc:b&&b.exclude_element_selectors}).elements,d={};if(0<c.length)for(var e=0;e<c.length;e++){var f=c[e];
if(1===f.type){d.email=f.ma;break}}return d}},bj=function(a){switch(a.enhanced_conversions_mode){case "manual":var b=a.enhanced_conversions_manual_var;return void 0!==b?b:A.enhanced_conversion_data;case "automatic":return $i(a.enhanced_conversions_automatic_settings)}};var cj={},dj=function(a,b){if(A._gtmexpgrp&&A._gtmexpgrp.hasOwnProperty(a))return A._gtmexpgrp[a];void 0===cj[a]&&(cj[a]=Math.floor(Math.random()*b));return cj[a]};function ej(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function fj(a){return"null"!==a.origin};var ij=function(a,b,c,d){return gj(d)?ej(a,String(b||hj()),c):[]},lj=function(a,b,c,d,e){if(gj(e)){var f=jj(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=kj(f,function(g){return g.wd},b);if(1===f.length)return f[0].id;f=kj(f,function(g){return g.Gc},c);return f[0]?f[0].id:void 0}}};function mj(a,b,c,d){var e=hj(),f=window;fj(f)&&(f.document.cookie=a);var g=hj();return e!=g||void 0!=c&&0<=ij(b,g,!1,d).indexOf(c)}
var qj=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!gj(c.Va))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=nj(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Ni);g=e(g,"samesite",
c.aj);c.cj&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=oj(),q=void 0,r=!1,u=0;u<p.length;++u){var t="none"!==p[u]?p[u]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!pj(t,c.path)&&mj(v,a,b,c.Va))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return pj(m,c.path)?1:mj(g,a,b,c.Va)?0:1},rj=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return qj(a,b,c)};
function kj(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function jj(a,b,c){for(var d=[],e=ij(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),wd:1*l[0]||1,Gc:1*l[1]||1}))}}return d}
var nj=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},sj=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,tj=/(^|\.)doubleclick\.net$/i,pj=function(a,b){return tj.test(window.document.location.hostname)||"/"===b&&sj.test(a)},hj=function(){return fj(window)?window.document.cookie:""},oj=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;tj.test(e)||sj.test(e)||a.push("none");return a},gj=function(a){if(!Qg(Ng)||!a||!ah())return!0;if(!$g(a))return!1;var b=Yg(a);return null==b?!0:!!b};var uj=function(){return[Math.round(2147483647*Math.random()),Math.round(cb()/1E3)].join(".")},xj=function(a,b,c,d,e){var f=vj(b);return lj(a,f,wj(c),d,e)},yj=function(a,b,c,d){var e=""+vj(c),f=wj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},vj=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},wj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function zj(a,b,c){var d,e=Number(null!=a.wb?a.wb:void 0);0!==e&&(d=new Date((b||cb())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Aj=["1"],Bj={},Fj=function(a){var b=Cj(a.prefix);if(!Bj[b]&&!Dj(b,a.path,a.domain)){var c=uj();if(0===Ej(b,c,a)){var d=Zb("google_tag_data",{});d._gcl_au?Fa("GTM",57):d._gcl_au=c}Dj(b,a.path,a.domain)}};function Ej(a,b,c){var d=yj(b,"1",c.domain,c.path),e=zj(c);e.Va="ad_storage";return rj(a,d,e)}function Dj(a,b,c){var d=xj(a,b,c,Aj,"ad_storage");d&&(Bj[a]=d);return d}function Cj(a){return(a||"_gcl")+"_au"};var Gj=function(a){for(var b=[],c=J.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({kf:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function Hj(a,b){var c=Gj(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].kf]||(d[c[e].kf]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),Ca:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].kf].push(g)}}return d};function Ij(){for(var a=Jj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Kj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Jj,Lj;
function Mj(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Lj[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Jj=Jj||Kj();Lj=Lj||Ij();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Nj;var Rj=function(){var a=Oj,b=Pj,c=Qj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){gc(J,"mousedown",d);gc(J,"keyup",d);gc(J,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Sj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Qj().decorators.push(f)},Tj=function(a,b,c){for(var d=Qj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==J.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&gb(e,g.callback())}}return e},Qj=function(){var a=Zb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Uj=/(.*?)\*(.*?)\*(.*)/,Vj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Wj=/^(?:www\.|m\.|amp\.)+/,Xj=/([^?#]+)(\?[^#]*)?(#.*)?/;function Yj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var ak=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Jj=Jj||Kj();Lj=Lj||Ij();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),u=p?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=r>>2,w=(r&3)<<4|u>>4,y=(u&15)<<2|t>>6,x=t&63;q||(x=64,p||(y=64));l.push(Jj[v],Jj[w],Jj[y],Jj[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Zj(z),
z].join("*")},Zj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Nj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Nj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Nj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ck=function(){return function(a){var b=Nh(A.location.href),
c=b.search.replace("?",""),d=Ih(c,"_gl",!1,!0)||"";a.query=bk(d)||{};var e=Lh(b,"fragment").match(Yj("_gl"));a.fragment=bk(e&&e[3]||"")||{}}},dk=function(a){var b=ck(),c=Qj();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(gb(d,e.query),a&&gb(d,e.fragment));return d},bk=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Uj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Zj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=Mj(r[u+1]);return q}}}}catch(t){}};function ek(a,b,c,d){function e(p){var q=p,r=Yj(a).exec(q),u=q;if(r){var t=r[2],v=r[4];u=r[1];v&&(u=u+t+v)}p=u;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Xj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function fk(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Tj(b,1,c),e=Tj(b,2,c),f=Tj(b,3,c);if(hb(d)){var g=ak(d);c?gk("_gl",g,a):hk("_gl",g,a,!1)}if(!c&&hb(e)){var h=ak(e);hk("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){hk(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){gk(m,p,q);break a}}"string"==typeof q&&ek(m,p,q,void 0)}}
function hk(a,b,c,d){if(c.href){var e=ek(a,b,c.href,void 0===d?!1:d);Eb.test(e)&&(c.href=e)}}
function gk(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=J.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=ek(a,b,c.action);Eb.test(m)&&(c.action=m)}}}
var Oj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||fk(e,e.hostname)}}catch(g){}},Pj=function(a){try{if(a.action){var b=Lh(Nh(a.action),"host");fk(a,b)}}catch(c){}},ik=function(a,b,c,d){Rj();Sj(a,b,"fragment"===c?2:1,!!d,!1)},jk=function(a,b){Rj();Sj(a,[Kh(A.location,"host",!0)],b,!0,!0)},kk=function(){var a=J.location.hostname,b=Vj.exec(J.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Wj,""),l=e.replace(Wj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},lk=function(a,b){return!1===a?!1:a||b||kk()};var mk={};var nk=/^\w+$/,ok=/^[\w-]+$/,pk={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},qk=function(){if(!Qg(Ng)||!ah())return!0;var a=Yg("ad_storage");return null==a?!0:!!a},rk=function(a,b){$g("ad_storage")?qk()?a():fh(a,"ad_storage"):b?Fa("TAGGING",3):eh(function(){rk(a,!0)},["ad_storage"])},wk=function(a){return vk(a).map(function(b){return b.Ca})},vk=function(a){var b=[];if(!fj(A)||!J.cookie)return b;var c=ij(a,J.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Pc:d.Pc},e++){var f=xk(c[e]);if(null!=f){var g=f,h=g.version;d.Pc=g.Ca;var l=g.timestamp,m=g.labels,p=Na(b,function(q){return function(r){return r.Ca===q.Pc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=yk(p.labels,m||[])):b.push({version:h,Ca:d.Pc,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return zk(b)};function yk(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Ak(a){return a&&"string"==typeof a&&a.match(nk)?a:"_gcl"}
var Ck=function(){var a=Nh(A.location.href),b=Lh(a,"query",!1,void 0,"gclid"),c=Lh(a,"query",!1,void 0,"gclsrc"),d=Lh(a,"query",!1,void 0,"wbraid"),e=Lh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||Ih(f,"gclid",!1,void 0);c=c||Ih(f,"gclsrc",!1,void 0);d=d||Ih(f,"wbraid",!1,void 0)}return Bk(b,c,e,d)},Bk=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&ok.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(ok))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Ek=function(a){var b=Ck();rk(function(){Dk(b,a)})};
function Dk(a,b,c,d){function e(p,q){var r=Fk(p,f);r&&(rj(r,q,g),h=!0)}b=b||{};d=d||[];var f=Ak(b.prefix);c=c||cb();var g=zj(b,c,!0);g.Va="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==mk.enable_gbraid_cookie_write?0:mk.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var Hk=function(a,b){var c=dk(!0);rk(function(){for(var d=Ak(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==pk[f]){var g=Fk(f,d),h=c[g];if(h){var l=Math.min(Gk(h),cb()),m;b:{var p=l;if(fj(A))for(var q=ij(g,J.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(Gk(q[r])>p){m=!0;break b}m=!1}if(!m){var u=zj(b,l,!0);u.Va="ad_storage";rj(g,h,u)}}}}Dk(Bk(c.gclid,c.gclsrc),b)})},Fk=function(a,b){var c=pk[a];if(void 0!==c)return b+c},Gk=function(a){return 0!==Ik(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function xk(a){var b=Ik(a.split("."));return 0===b.length?null:{version:b[0],Ca:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Ik(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!ok.test(a[2])?[]:a}
var Jk=function(a,b,c,d,e){if(Ka(b)&&fj(A)){var f=Ak(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Fk(a[l],f);if(m){var p=ij(m,J.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};rk(function(){ik(g,b,c,d)})}},zk=function(a){return a.filter(function(b){return ok.test(b.Ca)})},Kk=function(a,b){if(fj(A)){for(var c=Ak(b.prefix),d={},e=0;e<a.length;e++)pk[a[e]]&&(d[a[e]]=pk[a[e]]);rk(function(){Ta(d,function(f,g){var h=ij(c+g,J.cookie,void 0,"ad_storage");h.sort(function(u,
t){return Gk(t)-Gk(u)});if(h.length){var l=h[0],m=Gk(l),p=0!==Ik(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==Ik(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];Dk(q,b,m,p)}})})}};function Lk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Mk=function(a){function b(e,f,g){g&&(e[f]=g)}if(ah()){var c=Ck();if(Lk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);jk(function(){return d},3);jk(function(){var e={};return e._up="1",e},1)}}};function Nk(a,b){var c=Ak(b),d=Fk(a,c);if(!d)return 0;for(var e=vk(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function Ok(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var Pk=/^\d+\.fls\.doubleclick\.net$/;function Qk(a,b){$g(O.D)?kh(O.D)?a():fh(a,O.D):b?Kg(42):oh(function(){Qk(a,!0)},[O.D])}function Rk(a){var b=Nh(A.location.href),c=Lh(b,"host",!1);if(c&&c.match(Pk)){var d=Lh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Sk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=Rk("gcl"+a);if(d)return d.split(".")}var e=Ak(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!kh(O.D)&&c,g;g=Ck()[a]||[];if(0<g.length)return f?["0"]:g}var h=Fk(a,e);return h?wk(h):[]}function Tk(a){var b=[];Ta(a,function(c,d){d=zk(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].Ca);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var Uk=function(a){var b=Rk("gac");return b?!kh(O.D)&&a?"0":decodeURIComponent(b):Tk(qk()?Hj():{})},Vk=function(a){var b=Rk("gacgb");return b?!kh(O.D)&&a?"0":decodeURIComponent(b):Tk(qk()?Hj("_gac_gb",!0):{})},Wk=function(a,b){var c=Ck(),d=[],e=c.gclid,f=c.dclid,g=c.gclsrc||"aw";!e||"aw.ds"!==g&&"aw"!==g&&"ds"!==g||d.push({Ca:e,Ke:g});!f||d.push({Ca:f,Ke:"ds"});Qk(function(){Fj(b);var h=Bj[Cj(b.prefix)],l=!1;if(h&&0<d.length)for(var m=xi.joined_auid=xi.joined_auid||{},p=0;p<d.length;p++){var q=d[p],r=q.Ca,u=q.Ke,t=(b.prefix||"_gcl")+"."+u+"."+r;if(!m[t]){var v="https://adservice.google.com/pagead/regclk";v="gb"===u?v+"?gbraid="+r+"&auid="+h:v+"?gclid="+r+"&auid="+h+"&gclsrc="+u;oc(v);l=m[t]=!0}}null==a&&(a=l);if(a&&h){var w=Cj(b.prefix),y=Bj[w];y&&Ej(w,y,b)}})},
Xk=function(a){var b;if(Rk("gclaw")||Rk("gac")||0<(Ck().aw||[]).length)b=!1;else{var c;if(0<(Ck().gb||[]).length)c=!0;else{var d=Math.max(Nk("aw",a),Ok(qk()?Hj():{}));c=Math.max(Nk("gb",a),Ok(qk()?Hj("_gac_gb",!0):{}))>d}b=c}return b};var Yk=/[A-Z]+/,Zk=/\s/,$k=function(a){if(n(a)&&(a=Za(a),!Zk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Yk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],P:d}}}}},bl=function(a){for(var b={},c=0;c<a.length;++c){var d=$k(a[c]);d&&(b[d.id]=d)}al(b);var e=[];Ta(b,function(f,g){e.push(g)});return e};
function al(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.P[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var cl=function(){var a=!1;return a};var el=function(a,b,c,d){return(2===dl()||d||"http:"!=A.location.protocol?a:b)+c},dl=function(){var a=dc(),b;if(1===a)a:{var c=Di;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=J.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var ql=function(a,b){var c=a?bj(a):A.enhanced_conversion_data,d=(a||{}).enhanced_conversions_mode;if(A.Promise)try{return c?wi(c,b).then(function(e){e.Be=d;return e}):Promise.resolve({Fc:"",sc:[],Be:d})}catch(e){}};
var rl=function(a){if(kh(O.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=Oh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=Oh(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},sl=function(){var a;if(!(a=Ei)){var b;if(!0===A._gtmdgs)b=!0;else{var c=Xb&&Xb.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Wa("1");return dj(1,100)<d?dj(2,2):-1},tl=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var ul=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),vl={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wl={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},xl="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var yl=function(){var a=!1;return a},Al=function(a){var b=Qi("gtm.allowlist")||Qi("gtm.whitelist");b&&Kg(9);yl()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&ib(Ya(b),vl),d=Qi("gtm.blocklist")||
Qi("gtm.blacklist");d||(d=Qi("tagTypeBlacklist"))&&Kg(3);d?Kg(8):d=[];zl()&&(d=Ya(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ma(Ya(d),"google")&&Kg(2);var e=d&&ib(Ya(d),wl),f={};return function(g){var h=g&&g[re.rb];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Ji[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Ma(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Ma(c,l[q])){Kg(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var u=0<=Ma(e,h);if(u)r=u;else{var t=Sa(e,l||[]);t&&Kg(10);r=t}}var v=!m||r;v||!(0<=Ma(l,"sandboxedScripts"))||c&&-1!==Ma(c,"sandboxedScripts")||(v=Sa(e,xl));return f[h]=v}},zl=function(){return ul.test(A.location&&A.location.hostname)};var Bl={active:!0,isAllowed:function(){return!0}},Cl=function(a){var b=xi.zones;return b?b.checkState(of.N,a):Bl},Dl=function(a){var b=xi.zones;!b&&a&&(b=xi.zones=a());return b};var El=function(){},Fl=function(){};var Gl=!1,Hl=0,Il=[];function Jl(a){if(!Gl){var b=J.createEventObject,c="complete"==J.readyState,d="interactive"==J.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Gl=!0;for(var e=0;e<Il.length;e++)K(Il[e])}Il.push=function(){for(var f=0;f<arguments.length;f++)K(arguments[f]);return 0}}}function Kl(){if(!Gl&&140>Hl){Hl++;try{J.documentElement.doScroll("left"),Jl()}catch(a){A.setTimeout(Kl,50)}}}var Ll=function(a){Gl?a():Il.push(a)};var Nl=function(a,b){this.g=!1;this.F=[];this.H={tags:[]};this.R=!1;this.s=this.B=0;Ml(this,a,b)},Ol=function(a,b,c,d){if(Ai.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Fc(d)&&(e=M(d,e));e.id=c;e.status="timeout";return a.H.tags.push(e)-1},Pl=function(a,b,c,d){var e=a.H.tags[b];e&&(e.status=c,e.executionTime=d)},Ql=function(a){if(!a.g){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.g=!0;a.F.length=0}},Ml=function(a,b,c){Ia(b)&&a.nc(b);c&&A.setTimeout(function(){return Ql(a)},Number(c))};
Nl.prototype.nc=function(a){var b=this,c=fb(function(){return K(function(){a(of.N,b.H)})});this.g?c():this.F.push(c)};var Rl=function(a){a.B++;return fb(function(){a.s++;a.R&&a.s>=a.B&&Ql(a)})};var Sl=function(){function a(d){return!Ja(d)||0>d?0:d}if(!xi._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=Ja(Ri.get("gtm.start"))?Ri.get("gtm.start"):0;xi._li={cst:a(c-b),cbt:a(Gi-b)}}},Tl=function(a){A.performance&&A.performance.mark(of.N+"_"+a+"_start")},Ul=function(a){if(A.performance){var b=of.N+"_"+a+"_start",c=of.N+"_"+a+"_duration";A.performance.measure(c,b);var d=A.performance.getEntriesByName(c)[0];A.performance.clearMarks(b);A.performance.clearMeasures(c);
var e=xi._p||{};void 0===e[a]&&(e[a]=d.duration,xi._p=e);return d.duration}},Vl=function(){if(A.performance&&A.performance.now){var a=xi._p||{};a.PAGEVIEW=A.performance.now();xi._p=a}};var Wl={},Xl=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},Yl=!1;
var cm=function(a){},bm=function(){return A.GoogleAnalyticsObject||"ga"},dm=function(a,b){return function(){var c=Xl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var km=function(a){},om=function(a){},pm=
function(){return"&tc="+Re.filter(function(a){return a}).length},sm=function(){2022<=qm().length&&rm()},tm=function(a){return 0===a.indexOf("gtm.")?encodeURIComponent(a):"*"},vm=function(){um||(um=A.setTimeout(rm,500))},rm=function(){um&&(A.clearTimeout(um),um=void 0);void 0===wm||xm[wm]&&!ym&&!zm||(Am[wm]||Bm.Ei()||0>=Cm--?(Kg(1),Am[wm]=!0):(Bm.Xi(),fc(qm(!0)),xm[wm]=!0,Dm=Em=Fm=zm=ym=""))},qm=function(a){var b=wm;if(void 0===b)return"";var c=Ga("GTM"),d=Ga("TAGGING");return[Gm,xm[b]?"":"&es=1",
Hm[b],km(b),c?"&u="+c:"",d?"&ut="+d:"",pm(),ym,zm,Fm,Em,om(a),Dm,"&z=0"].join("")},Jm=function(){Gm=Im()},Im=function(){return[Hi,"&v=3&t=t","&pid="+Pa(),"&rv="+of.od].join("")},nm=["L","S","Y"],jm=["S","E"],Km={sampleRate:"0.005000",Vg:"",Ug:Number("5")},Lm=0<=J.location.search.indexOf("?gtm_latency=")||0<=J.location.search.indexOf("&gtm_latency="),Mm;if(!(Mm=Lm)){var Nm=Math.random(),Om=Km.sampleRate;Mm=Nm<Om}var Pm=Mm,Qm={label:of.N+" Container",children:[{label:"Initialization",children:[]}]},Gm=Im(),xm={},ym="",zm="",Dm="",Em="",mm={},lm=!1,im={},Rm={},Fm="",wm=void 0,Hm={},Am={},um=void 0,Sm=2;0<Km.Ug&&(Sm=Km.Ug);var Bm=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);
return{Ei:function(){return c<a?!1:cb()-d[c%a]<b},Xi:function(){var f=c++%a;d[f]=cb()}}}(Sm,1E3),Cm=1E3,Um=function(a,b){if(Pm&&!Am[a]&&wm!==a){rm();wm=a;Dm=ym="";Hm[a]="&e="+tm(b)+"&eid="+a;vm();}},Vm=function(a,b,c,d){if(Pm&&b){var e,f=String(b[re.rb]||
"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var g=c+e;if(!Am[a]){a!==wm&&(rm(),wm=a);ym=ym?ym+"."+g:"&tr="+g;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");
var l=(Te[h]?"1":"2")+e;Dm=Dm?Dm+"."+l:"&ti="+l;vm();sm()}}};var bn=function(a,b,c){if(Pm&&!Am[a]){a!==wm&&(rm(),
wm=a);var d=c+b;zm=zm?zm+"."+d:"&epr="+d;vm();sm()}},cn=function(a,b,c){};function dn(a,b,c,d){var e=Re[a],f=en(a,b,c,d);if(!f)return null;var g=Ze(e[re.Zf],c,[]);if(g&&g.length){var h=g[0];f=dn(h.index,{onSuccess:f,onFailure:1===h.sg?b.terminate:f,terminate:b.terminate},c,d)}return f}
function en(a,b,c,d){function e(){if(f[re.Ph])h();else{var w=$e(f,c,[]);var y=w[re.ah];if(null!=y)for(var x=0;x<y.length;x++)if(!kh(y[x])){h();return}var z=Ol(c.cb,String(f[re.rb]),Number(f[re.$f]),w[re.Qh]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var E=cb()-C;Vm(c.id,Re[a],"5",E);Pl(c.cb,z,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var E=cb()-C;Vm(c.id,Re[a],"6",E);Pl(c.cb,z,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Vm(c.id,f,"1");var D=function(){var E=cb()-C;Vm(c.id,f,"7",E);Pl(c.cb,z,"exception",E);B||(B=!0,h())};var C=cb();try{Ye(w,c)}catch(E){D(E)}}}var f=Re[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Re(f))return null;var m=Ze(f[re.ag],c,[]);if(m&&m.length){var p=m[0],q=dn(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.sg?l:q}if(f[re.Vf]||f[re.Sh]){var r=f[re.Vf]?Se:
c.gj,u=g,t=h;if(!r[a]){e=fb(e);var v=fn(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](u,t)}}return e}function fn(a,b,c){var d=[],e=[];b[a]=gn(d,e,c);return{onSuccess:function(){b[a]=hn;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=jn;for(var f=0;f<e.length;f++)e[f]()}}}function gn(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hn(a){a()}function jn(a,b){b()};var mn=function(a,b){for(var c=[],d=0;d<Re.length;d++)if(a[d]){var e=Re[d];if(e[re.Oh])continue;var f=Rl(b.cb);try{var g=dn(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Te[p];l.call(h,{Qg:m,Gg:q?q.priorityOverride||0:0,Nb:g})}else kn(d,b),f()}catch(t){f()}}var r=b.cb;r.R=!0;r.s>=r.B&&Ql(r);c.sort(ln);for(var u=0;u<c.length;u++)c[u].Nb();
return 0<c.length};function ln(a,b){var c,d=b.Gg,e=a.Gg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Qg,h=b.Qg;f=g>h?1:g<h?-1:0}return f}function kn(a,b){if(!Pm)return;var c=function(d){var e=b.Re(Re[d])?"3":"4",f=Ze(Re[d][re.Zf],b,[]);f&&f.length&&c(f[0].index);Vm(b.id,Re[d],e);var g=Ze(Re[d][re.ag],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var nn=!1,tn=function(a){var b=cb(),c=a["gtm.uniqueEventId"],d=a.event;if("gtm.js"===d){if(nn)return!1;nn=!0;}var g=Cl(c),h=!1;if(!g.active){if("gtm.js"!==d)return!1;h=!0;g=Cl(Number.MAX_SAFE_INTEGER)}
Um(c,d);var l=a.eventCallback,m=a.eventTimeout,p=l;var q={id:c,name:d,Re:Al(g.isAllowed),gj:[],Dg:function(){Kg(6)},kg:on(c),cb:new Nl(p,m)};q.jg=pn();
qn(c,q.cb);var r=jf(q);h&&(r=rn(r));var u=mn(r,q);"gtm.js"!==d&&"gtm.sync"!==d||cm(of.N);switch(d){case "gtm.init":u&&Kg(20)}return sn(r,u)};function on(a){return function(b){Pm&&(Jc(b)||cn(a,"input",b))}}
function qn(a,b){Wi(a,"event",1);Wi(a,"ecommerce",1);Wi(a,"gtm");Wi(a,"eventModel");}function pn(){var a={};a.event=Vi("event",1);a.ecommerce=Vi("ecommerce",1);a.gtm=Vi("gtm");a.eventModel=Vi("eventModel");return a}function rn(a){for(var b=[],c=0;c<a.length;c++)a[c]&&zi[String(Re[c][re.rb])]&&(b[c]=!0);return b}
function sn(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Re[c]&&!Ai[String(Re[c][re.rb])])return!0;return!1}function un(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Nh(""+c+b).href}}function vn(a,b){return wn()?un(a,b):void 0}function wn(){var a=!1;return a};var xn=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},yn=function(a){var b=new xn;b.eventModel=a;return b},zn=function(a,b){a.targetConfig=b;return a},An=function(a,b){a.containerConfig=b;return a},Bn=function(a,b){a.remoteConfig=b;return a},Cn=function(a,
b){a.globalConfig=b;return a},Dn=function(a,b){a.onSuccess=b;return a},En=function(a,b){a.setContainerTypeLoaded=b;return a},Fn=function(a,b){a.getContainerTypeLoaded=b;return a},Gn=function(a,b){a.onFailure=b;return a};
xn.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Hn=function(a){function b(d){for(var e=Object.keys(d),f=0;f<e.length;++f)c[e[f]]=1}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);return Object.keys(c)},In=function(a,b){function c(f){Fc(f)&&Ta(f,function(g,h){e=!0;d[g]=h})}var d={},e=!1;c(a.globalConfig[b]);c(a.remoteConfig[b]);c(a.containerConfig[b]);c(a.targetConfig[b]);c(a.eventModel[b]);return e?d:void 0};var Jn;if(3===of.od.length)Jn="g";else{var Kn="G";Jn=Kn}
var Ln={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Jn,OPT:"o"},Mn=function(a){var b=of.N.split("-"),c=b[0].toUpperCase(),d=Ln[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===of.od.length){var g="w";f="2"+g}else f="";return f+d+of.od+e};function Nn(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var On=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Pn=function(){return Ib("iPhone")&&!Ib("iPod")&&!Ib("iPad")};Ib("Opera");Ib("Trident")||Ib("MSIE");Ib("Edge");!Ib("Gecko")||-1!=Fb.toLowerCase().indexOf("webkit")&&!Ib("Edge")||Ib("Trident")||Ib("MSIE")||Ib("Edge");-1!=Fb.toLowerCase().indexOf("webkit")&&!Ib("Edge")&&Ib("Mobile");Ib("Macintosh");Ib("Windows");Ib("Linux")||Ib("CrOS");var Qn=pa.navigator||null;Qn&&(Qn.appVersion||"").indexOf("X11");Ib("Android");Pn();Ib("iPad");Ib("iPod");Pn()||Ib("iPad")||Ib("iPod");Fb.toLowerCase().indexOf("kaios");var Rn=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null},Sn=function(a){var b=J;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Tn=function(){};var Un=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Vn=function(a,b){this.s=a;this.g=null;this.F={};this.R=0;this.H=void 0===b?500:b;this.B=null};oa(Vn,Tn);
var Xn=function(a){return"function"===typeof a.s.__tcfapi||null!=Wn(a)};
Vn.prototype.addEventListener=function(a){var b={},c=Ub(function(){return a(b)}),d=0;-1!==this.H&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.H));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Un(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Yn(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Vn.prototype.removeEventListener=function(a){a&&a.listenerId&&Yn(this,"removeEventListener",null,a.listenerId)};
var $n=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Zn(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||Qg(Mg)&&"CH"===a.publisherCC)?!0:m&&Zn(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Zn(a.purpose.legitimateInterests,b)&&Zn(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Zn=function(a,b){return!(!a||!a[b])},Yn=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Wn(a)){ao(a);var f=++a.R;a.F[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Wn=function(a){if(a.g)return a.g;a.g=Rn(a.s,"__tcfapiLocator");return a.g},
ao=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},On(a.s,a.B))};var bo=!0;bo=!1;var co={1:0,3:0,4:0,7:3,9:3,10:3},eo=Nn("",550),fo=Nn("",500);function go(){var a=xi.tcf||{};return xi.tcf=a}
var ho=function(a,b){this.B=a;this.g=b;this.s=cb();},io=function(a){},jo=function(a){},po=function(){var a=go(),b=new Vn(A,bo?3E3:-1),c=new ho(b,a);if((ko()?!0===A.gtag_enable_tcf_support:!1!==A.gtag_enable_tcf_support)&&!a.active&&("function"===typeof A.__tcfapi||Xn(b))){a.active=!0;a.Ic={};lo();var d=null;bo?d=A.setTimeout(function(){mo(a);no(a);d=null},fo):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)mo(a),no(a),io(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=oo(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in co)if(co.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Un(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:$n(m,"1",0):!1;g["1"]=l}else g[h]=$n(e,h,co[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Ic=f,no(a),io(c))}}),jo(c)}catch(e){d&&(clearTimeout(d),d=null),mo(a),no(a)}}};function mo(a){a.type="e";a.tcString="tcunavailable";bo&&(a.Ic=oo())}function lo(){var a={},b=(a.ad_storage="denied",a.wait_for_update=eo,a);ih(b)}
var ko=function(){var a=!1;a=!0;return a};function oo(){var a={},b;for(b in co)co.hasOwnProperty(b)&&(a[b]=!0);return a}function no(a){var b={},c=(b.ad_storage=a.Ic["1"]?"granted":"denied",b);qo();jh(c,0)}
var ro=function(){var a=go();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},qo=function(){var a=go();return a.active?a.tcString||"":""},so=function(){var a=go();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},to=function(a){if(!co.hasOwnProperty(String(a)))return!0;var b=go();return b.active&&b.Ic?!!b.Ic[String(a)]:!0};function uo(a){var b=String(A.location).split(/[?#]/)[0],c=of.dh||A._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,g=1,h,l,m;if(f)for(g=0,l=f.length-1;0<=l;l--)m=f.charCodeAt(l),g=(g<<6&268435455)+m+(m<<14),h=g&266338304,g=0!=h?g^h>>21:g;e=String(g)}else e="0";d=e}else d="";return d}
function vo(a){function b(t){var v;xi.reported_gclid||(xi.reported_gclid={});v=xi.reported_gclid;var w;w=!g||ah()&&!kh(O.D)?l+(t?"gcu":"gcs"):l+"."+(f.prefix||"_gcl")+(t?"gcu":"gcs");if(!v[w]){v[w]=!0;var y=[],x={},z=function(L,U){U&&(y.push(L+"="+encodeURIComponent(U)),x[L]=!0)},B="https://www.google.com";if(ah()){var D=kh(O.D);z("gcs",lh());t&&z("gcu","1");bh()&&z("gcd","G1"+gh(Zg));xi.dedupe_gclid||
(xi.dedupe_gclid=""+uj());z("rnd",xi.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&kh(O.D)){var C=wk("_gcl_aw");z("gclaw",C.join("."))}z("url",String(A.location).split(/[?#]/)[0]);z("dclid",wo(d,p));var E=!1;E=!0;D||!d&&!E||(B="https://pagead2.googlesyndication.com")}
z("gdpr_consent",qo()),z("gdpr",so());"1"===dk(!1)._up&&z("gtm_up","1");z("gclid",wo(d,l));z("gclsrc",m);if(!(x.gclid||x.dclid||x.gclaw)&&(z("gbraid",wo(d,q)),!x.gbraid&&ah()&&kh(O.D))){var H=wk("_gcl_gb");z("gclgb",H.join("."))}z("gtm",Mn(!e));g&&kh(O.D)&&(Fj(f||{}),z("auid",Bj[Cj(f.prefix)]||""));
a.pg&&z("did",a.pg);var Q=B+"/pagead/landing?"+y.join("&");oc(Q)}}var c=!!a.Ce,d=!!a.wa,e=a.W,f=void 0===a.ud?{}:a.ud,g=void 0===a.Ad?!0:a.Ad,h=Ck(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),u=ah();if(r||u)u?oh(function(){b();kh(O.D)||nh(function(t){return b(!0,t.fi)},O.D)},[O.D]):b()}function wo(a,b){var c=a&&!kh(O.D);return b&&c?"0":b}var xo=function(){this.g={}},yo=function(a,b,c){null!=c&&(a.g[b]=c)},zo=function(a){return Object.keys(a.g).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.g[b])}).join("&")},Bo=function(a,b,c,d){};var Do=!1,Eo=Number("200");function Fo(){if(!A.Promise)return!1;Ia(J.interestCohort)||Do||(Do=!0,Sn("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));return Ia(J.interestCohort)}
function Go(){var a=xi.floc;if(a){var b=a.ts,c=a.floc;if(b&&c&&1E3>cb()-b)return Promise.resolve(c)}var d=void 0;try{d=Promise.race([J.interestCohort().then(function(e){xi.floc={ts:cb(),floc:e};return e}),new Promise(function(e){A.setTimeout(function(){return e()},Eo)})]).catch(function(){})}catch(e){return}return d}
var bp=function(){if(!kh(O.D)||!ap&&!Sn("AyAn/mFtBYa4Wyk+GnNjBOd+4bBUeWbwyAOxMR+8EnXgn06S1FFiyBquja0zc/37lDGh1P547ivAAKXoCT+9YAgAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ21hbmFnZXIuY29tOjQ0MyIsImZlYXR1cmUiOiJDb252ZXJzaW9uTWVhc3VyZW1lbnQiLCJleHBpcnkiOjE2MzE2NjM5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"))return!1;ap=!0;var a=J.featurePolicy;if(a&&Ia(a.features)&&-1!==a.features().indexOf("conversion-measurement"))return!0;return!1},cp=function(a){return!(void 0===a||null===a||0===(a+"").length)},dp=function(a,b){var c;if(2===b.Ba)return a("ord",Pa(1E11,1E13)),!0;if(3===b.Ba)return a("ord","1"),a("num",Pa(1E11,
1E13)),!0;if(4===b.Ba)return cp(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.Ba)c="1";else if(6===b.Ba)c=b.df;else return!1;cp(c)&&a("qty",c);cp(b.vd)&&a("cost",b.vd);cp(b.transactionId)&&a("ord",b.transactionId);return!0},hp=function(a,b,c){function d(I,T,ca){v.hasOwnProperty(I)||(T=String(T),t.push(";"+I+"="+(ca?T:ep(T))))}function e(I,T){T&&d(I,T)}function f(){if(cp(a.Bd)){var I=a.Bd||"";q||m||!a.wa||(I=Oh(I));d("~oref",I)}var T=l+t.join("")+"?";
h?ec(T,a.onSuccess):fc(T,a.onSuccess,a.onFailure);L&&fc("https://"+g+".fls.doubleclick.net/activityi;register_conversion=1"+t.join("")+"?");}var g=a.Ie,h=a.hf,l=a.protocol,m=a.Ne,p=[],q=kh(O.D);l+=h?"//"+g+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var r=";",u=!1;u=!0;
kh(O.D)||m||!a.wa&&!u||(l="https://ade.googlesyndication.com/ddm/activity",r="/",h=!1);var t=[r,"src="+ep(g),";type="+ep(a.Me),";cat="+ep(a.kc)],v=a.li||{};Ta(v,function(I,T){t.push(";"+ep(I)+"="+ep(T+""))});if(dp(d,a)){cp(a.Jd)&&d("u",a.Jd);cp(a.Id)&&d("tran",a.Id);d("gtm",Mn());ah()&&!m&&(d("gcs",lh()),c&&d("gcu","1"));e("gdpr_consent",qo()),e("gdpr",so());"1"===dk(!1)._up&&d("gtm_up","1");!1===a.Yh&&d("npa","1");
if(a.Ee){var w=void 0===a.wa?!0:!!a.wa,y=Sk("dc",a.ja,w),x=!1;y&&y.length&&(d("gcldc",y.join(".")),x=!0);var z=!0;z=h;if(z){var B="_gcl"!==Ak(a.ja);if(fp&&!x&&Xk(a.ja)){var D=Sk("gb",a.ja,w);D.length&&d("gclgb",D.join("."));if(!B||!gp){var C=Vk(w);C&&d("gacgb",C)}}else{var E=Sk("aw",a.ja,w);E&&E.length&&(d("gclaw",E.join(".")),Kg(59));var H=Uk(w);H&&(B?(Kg(60),gp||d("gac",
H)):d("gac",H))}}Fj({prefix:a.ja,wb:a.ji,domain:a.ii,flags:a.xj});var Q=Bj[Cj(a.ja)];Q&&d("auiddc",Q)}cp(a.Ze)&&d("prd",a.Ze,!0);Ta(a.nf,function(I,T){d(I,T)});t.push(b||"");var L=bp();L&&t.push(";ps=1");var U=!1;if(U&&a.ma){var S=wi(a.ma,[]);S&&(S=S.then(function(I){cp(I.Fc)&&d("em",I.Fc,!0)}),p.push(S))}if(p.length)try{Promise.all(p).then(function(){f()});return}catch(I){}f()}else K(a.onFailure)},fp=!1;fp=!0;var gp=!1;var ep=encodeURIComponent,ap=!1,ip=function(a,b){!ah()||a.Ne?hp(a,b):oh(function(){hp(a,b);kh(O.D)||nh(function(){hp(a,b,!0)},O.D)},[O.D])};var Dp=function(){var a=!0;to(7)&&to(9)&&to(10)||(a=!1);var b=!0;b=!1;b&&!Cp()&&(a=!1);return a},Cp=function(){var a=!0;to(3)&&to(4)||(a=!1);return a};var gq=!1;var hq=!1;function iq(){var a=xi;return a.gcq=a.gcq||new jq}
var kq=function(a,b,c){iq().register(a,b,c)},lq=function(a,b,c,d){iq().push("event",[b,a],c,d)},mq=function(a,b){iq().push("config",[a],b)},nq=function(a,b,c,d){iq().push("get",[a,b],c,d)},oq=function(a){return iq().getRemoteConfig(a)},pq={},qq=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s={};this.B=null;this.g=!1},rq=function(a,b,c,d,e){this.type=a;this.B=b;this.W=c||"";this.g=d;this.s=e},jq=function(){this.s={};this.B={};this.g=[];this.F={AW:!1,
UA:!1};this.enableDeferrableCommandAfterConfig=gq},sq=function(a,b){var c=$k(b);return a.s[c.containerId]=a.s[c.containerId]||new qq},tq=function(a,b,c){if(b){var d=$k(b);if(d&&1===sq(a,b).status){sq(a,b).status=2;var e={};Pm&&(e.timeoutId=A.setTimeout(function(){Kg(38);vm()},3E3));a.push("require",[e],d.containerId);pq[d.containerId]=cb();if(cl()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=vn(c,g)||h;cc(l)}}}},uq=function(a,b,c,d){if(d.W){var e=sq(a,d.W),f=e.B;if(f){var g=M(c),h=M(e.targetConfig[d.W]),l=M(e.containerConfig),m=M(e.remoteConfig),p=M(a.B),q=Qi("gtm.uniqueEventId"),r=$k(d.W).prefix,u=fb(function(){var v=
g[O.Fb];v&&K(v)}),t=Fn(En(Gn(Dn(Cn(Bn(An(zn(yn(g),h),l),m),p),function(){bn(q,r,"2");hq&&u()}),function(){bn(q,r,"3");hq&&u()}),function(v,w){a.F[v]=w}),function(v){return a.F[v]});try{bn(q,r,"1");f(d.W,b,d.B,t)}catch(v){bn(q,r,"4");}}}};
jq.prototype.register=function(a,b,c){var d=sq(this,a);if(3!==d.status){d.B=b;d.status=3;if(c){M(d.remoteConfig,c);d.remoteConfig=c}var e=$k(a),f=pq[e.containerId];if(void 0!==f){var g=xi[e.containerId].bootstrap,h=e.prefix.toUpperCase();xi[e.containerId]._spx&&(h=h.toLowerCase());var l=Qi("gtm.uniqueEventId"),m=h,p=cb()-g;if(Pm&&!Am[l]){l!==wm&&(rm(),wm=l);var q=m+"."+Math.floor(g-
f)+"."+Math.floor(p);Em=Em?Em+","+q:"&cl="+q}delete pq[e.containerId]}this.flush()}};jq.prototype.push=function(a,b,c,d){var e=Math.floor(cb()/1E3);tq(this,c,b[0][O.ra]||this.B[O.ra]);gq&&c&&sq(this,c).g&&(d=!1);this.g.push(new rq(a,e,c,b,d));d||this.flush()};jq.prototype.insert=function(a,b,c){var d=Math.floor(cb()/1E3);0<this.g.length?this.g.splice(1,0,new rq(a,d,c,b,!1)):this.g.push(new rq(a,d,c,b,!1))};
jq.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.s)gq?!f.W||sq(this,f.W).g?(f.s=!1,this.g.push(f)):c.push(f):(f.s=!1,this.g.push(f)),this.g.shift();else{switch(f.type){case "require":if(3!==sq(this,f.W).status&&!a){gq&&this.g.push.apply(this.g,c);return}Pm&&A.clearTimeout(f.g[0].timeoutId);break;case "set":Ta(f.g[0],function(r,u){M(kb(r,u),b.B)});break;case "config":e.Ma={};Ta(f.g[0],function(r){return function(u,t){M(kb(u,t),r.Ma)}}(e));var g=!!e.Ma[O.fd];
delete e.Ma[O.fd];var h=sq(this,f.W),l=$k(f.W),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.W]={});h.g&&g||uq(this,O.Ga,e.Ma,f);h.g=!0;delete e.Ma[O.hc];m?M(e.Ma,h.containerConfig):M(e.Ma,h.targetConfig[f.W]);gq&&(d=!0);break;case "event":e.Oc={};Ta(f.g[0],function(r){return function(u,t){M(kb(u,t),r.Oc)}}(e));uq(this,f.g[1],e.Oc,f);break;case "get":var p={},q=(p[O.Za]=f.g[0],p[O.Ya]=f.g[1],p);uq(this,O.Oa,q,f)}this.g.shift();vq(this,f)}e={Ma:e.Ma,Oc:e.Oc}}gq&&(this.g.push.apply(this.g,
c),d&&this.flush())};var vq=function(a,b){if("require"!==b.type)if(b.W)for(var c=a.getCommandListeners(b.W)[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var g=f.s[b.type]||[],h=0;h<g.length;h++)g[h]()}};jq.prototype.getRemoteConfig=function(a){return sq(this,a).remoteConfig};jq.prototype.getCommandListeners=function(a){return sq(this,a).s};function wq(a,b){var c=this;};function xq(a,b,c){};function yq(a,b,c,d){};function zq(a){};var Aq=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":pc(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||pc(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||pc(a,"href")||a.src||a.code||a.codebase||"";return d},Bq=function(a){xi.hasOwnProperty("autoEventsSettings")||(xi.autoEventsSettings={});var b=xi.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},Cq=function(a,b,c){Bq(a)[b]=c},Dq=function(a,b,c,d){var e=Bq(a),f=db(e,b,d);e[b]=c(f)},Eq=function(a,b,c){var d=Bq(a);return db(d,b,c)};var Fq=["input","select","textarea"],Gq=["button","hidden","image","reset","submit"],Hq=function(a){var b=a.tagName.toLowerCase();return!Na(Fq,function(c){return c===b})||"input"===b&&Na(Gq,function(c){return c===a.type.toLowerCase()})?!1:!0},Iq=function(a){return a.form?a.form.tagName?a.form:J.getElementById(a.form):nc(a,["form"],100)},Jq=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Hq(g)){if(g.dataset[c]===d)return f;f++}}return 0};
function Nq(a){};var Oq={},Pq=[],Qq={},Rq=0,Sq=0;
function Zq(a,b){}
function gr(a,b){}
;function hr(){};var ir={},jr=[];
var qr=function(a,b){};

function tr(a,b){};var ur=/^\s*$/,vr,wr=!1;
function Hr(a,b){}function Ir(a,b,c){};var Jr=!!A.MutationObserver,Kr=void 0,Lr=function(a){if(!Kr){var b=function(){var c=J.body;if(c)if(Jr)(new MutationObserver(function(){for(var e=0;e<Kr.length;e++)K(Kr[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,K(function(){d=!1;for(var e=0;e<Kr.length;e++)K(Kr[e])}))})}};Kr=[];J.body?b():K(b)}Kr.push(a)};var Nr=["www.youtube.com","www.youtube-nocookie.com"],Or,Pr=!1,Qr=0;
function $r(a,b){}function as(a,b){return!0};function bs(a,b,c){};function cs(a,b){var c;N(G(this),["path:!string"],[a]);sg(this,"access_globals","execute",a);for(var d=a.split("."),e=A,f=e[d[0]],g=1;f&&g<d.length;g++)if(e=f,f=f[d[g]],e===A||e===J)return;if("function"!==Dc(f))return;var h=!1;for(var l=[],m=1;m<arguments.length;m++)l.push(Hc(arguments[m],this.g,h));var p=(0,this.g.R)(f,e,l);
c=Gc(p,this.g);void 0===c&&void 0!==p&&Kg(45);return c};function ds(a){};function es(a){};var fs=!1,gs=[];function hs(){if(!fs){fs=!0;for(var a=0;a<gs.length;a++)K(gs[a])}}var is=function(a){fs?K(a):gs.push(a)};function js(a){N(G(this),["listener:!Fn"],arguments);sg(this,"process_dom_events","window","load");is(Hc(a))};function ks(a){var b;return b};function ls(a,b){var c;var d=!1;var e=Gc(c,this.g,d);void 0===e&&void 0!==c&&Kg(45);return e};function ms(a){var b;N(G(this),["path:!string"],arguments);sg(this,"access_globals","read",a);var c=a.split("."),d=jb(c,[A,J]);if(!d)return;var e=d[c[c.length-1]],f=!1;b=Gc(e,this.g,f);void 0===b&&void 0!==e&&Kg(45);return b};function ns(a,b){var c=null,d=!1;N(G(this),["functionPath:!string","arrayPath:!string"],arguments);sg(this,"access_globals","readwrite",a);sg(this,"access_globals","readwrite",b);var e=[A,J],f=a.split("."),g=jb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ia(l))return null;
if(l)return Gc(l,this.g,d);var m;l=function(){if(!Ia(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),q=jb(p,e),r=p[p.length-1];if(void 0===q)throw Error("Path "+p+" does not exist.");m=q[r];void 0===m&&(m=[],q[r]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};return Gc(c,this.g,d)};function os(a){var b;var g=!1;return Gc(b,this.g,g)};function ps(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var qs=new Qa;function rs(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=qs.get(e);f||(f=new RegExp(b,d),qs.set(e,f));return f.test(a)}catch(g){return!1}}
function ss(a,b){function c(g){var h=Nh(g),l=Lh(h,"protocol"),m=Lh(h,"host",!0),p=Lh(h,"port"),q=Lh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ts(a){return us(a)?1:0}
function us(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ka(c)){for(var d=0;d<c.length;d++){var e=M(a,{});M({arg1:c[d],any_of:void 0},e);if(ts(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return ps(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ma(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return rs(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ss(b,c)}return!1};function vs(a){return!1}var ws;function xs(a){var b=!1;return b};var ys=function(a){var b;return b};function zs(a,b){b=void 0===b?!0:b;var c;return c};function As(a){var b=null;return b};function Bs(a,b){var c;return c};function Cs(a,b){var c;return c};function Ds(a){var b="";return b};function Es(a,b){var c;return c};function Fs(a){var b="";return b};function Gs(){sg(this,"get_user_agent");return A.navigator.userAgent};function Hs(a,b){};var Is={};function Js(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],cc(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)K(g[h]);g.push=function(l){K(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)K(g[h]);e[f]=null},b)):cc(a,c,d,b)}
function Ks(a,b,c,d){N(G(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);sg(this,"inject_script",a);var e=this.g;Js(a,void 0,function(){b&&b.s(e)},function(){c&&c.s(e)},Is,d);}var Ls=Object.freeze({dl:1,id:1}),Ms={};
function Ns(a,b,c,d){};function Os(a){var b=!0;return b};var Ps=function(){return!1},Qs={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Rs=["textContent","value","tagName","children","childElementCount"];
function Ss(a){var b;return b};function Ts(){};function Us(a,b){var c;return c};function Vs(a){var b=void 0;return b};function Ws(a,b){var c=!1;return c};function Xs(){var a="";return a};function Ys(){var a="";return a};var Zs=["set","get","config","event"];
function $s(a,b,c){};function at(){};function bt(a,b,c,d){d=void 0===d?!1:d;};function ct(a,b,c){};function dt(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function et(a){N(G(this),["consentSettings:!DustMap"],arguments);for(var b=a.sb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==O.Ld&&sg(this,"access_consent",e,"write")}ih(Hc(a))};function ft(a,b,c){N(G(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);sg(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=jb(e,[A,J]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Hc(b,this.g,d),!0;return!1};function gt(a,b,c){}
;var ht=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function it(a,b,c,d){var e=this;};function jt(a,b,c){}
;var kt={},lt={};kt.getItem=function(a){var b=null;return b};
kt.setItem=function(a,b){};
kt.removeItem=function(a){};kt.clear=function(){};var mt=function(a){var b;return b};function nt(a){N(G(this),["consentSettings:!DustMap"],arguments);var b=Hc(a),c;for(c in b)b.hasOwnProperty(c)&&sg(this,"access_consent",c,"write");jh(b)};var oe=function(){var a=new Fg;cl()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",Hs),a.add("injectScript",Ks));var b=ct;a.add("Math",lg());a.add("TestHelper",Ig());a.add("addEventCallback",zq);a.add("aliasInWindow",as);a.add("assertApi",hg);a.add("assertThat",ig);a.add("callInWindow",
cs);a.add("callLater",ds);a.add("copyFromDataLayer",ls);a.add("copyFromWindow",ms);a.add("createArgumentsQueue",ns);a.add("createQueue",os);a.add("decodeUri",mg);a.add("decodeUriComponent",ng);a.add("encodeUri",og);a.add("encodeUriComponent",pg);a.add("fail",qg);a.add("fromBase64",ys,!("atob"in A));a.add("generateRandom",rg);a.add("getContainerVersion",tg);a.add("getCookieValues",zs);a.add("getQueryParameters",Bs);a.add("getReferrerQueryParameters",Cs);a.add("getReferrerUrl",Ds);a.add("getTimestamp",
ug);a.add("getTimestampMillis",ug);a.add("getType",vg);a.add("getUrl",Fs);a.add("localStorage",Qs,!Ps());a.add("logToConsole",Ts);a.add("makeInteger",xg);a.add("makeNumber",yg);a.add("makeString",zg);a.add("makeTableMap",Ag);a.add("mock",Cg);a.add("parseUrl",Vs);a.add("queryPermission",Ws);a.add("readCharacterSet",Xs);a.add("readTitle",Ys);a.add("sendPixel",b);a.add("setCookie",dt);a.add("setInWindow",ft);a.add("sha256",it);a.add("templateStorage",kt);a.add("toBase64",mt,!("btoa"in A));a.add("JSON",
wg(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;
c=!0;c&&a.add("setDefaultConsentState",et);a.add("updateConsentState",nt);
a.add("isConsentGranted",Os);a.add("addConsentListener",wq);
Hg(a,"callOnWindowLoad",js);cl()?Hg(a,"internal.injectScript",
Ha):Hg(a,"internal.injectScript",Ns);Hg(a,"internal.locateUserData",Ss);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.s.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.zc();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.s.hasOwnProperty(d)?a.s[d]:void 0;m=Gg(d,this)||m;e=m}else throw Error(d+" is not a valid API name.");}return e}};var ot=function(){var a=xi.consumeTestResult;if(a&&Ia(a))return!0;return!1},pt=function(){var a={};return function(b,c,d){if(!ot())return;var e=a[b]||{testName:b,status:c,logMessages:[],elapsedTime:0};a[b]=e;switch(c){case 4:e.logMessages.push(d);break;case 3:d&&(e.error=d);break;case 5:e.returnValue=d}if(2===c||3===c){e.status=c;var f=xi.consumeTestResult;f&&f(e)}}};var ie,Bf;
function qt(){var a=data.runtime||[],b=data.runtime_lines;ie=new ge;rt();Ne=function(e,f,g){st(f);var h=new rb;Ta(f,function(u,t){var v=Gc(t);void 0===v&&void 0!==t&&Kg(44);h.set(u,v)});ie.g.g.H=ff();var l={ai:Cf(e),eventId:void 0!==g?g.id:void 0,nc:void 0!==g?function(u){return g.cb.nc(u)}:void 0,zc:function(){return e},log:function(){}};if(ot()){var m=pt(),
p=void 0,q=void 0;l.Ea={oc:{},Ob:function(u,t,v){1===t&&(p=u);7===t&&(q=v);m(u,t,v)},Ue:Bg()};l.log=function(u,t){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:u,source:q,message:v})}}}var r=ne(l,[e,h]);ie.g.g.H=void 0;r instanceof ra&&"return"===r.g&&(r=r.s);return Hc(r)};pe();for(var c=0;c<a.length;c++){var d=a[c];if(!Ka(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&cf(d,b[c]);ie.Nb(d)}}
function st(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ia(b)&&(a.gtmOnSuccess=function(){K(b)});Ia(c)&&(a.gtmOnFailure=function(){K(c)})}function rt(){var a=ie;xi.SANDBOXED_JS_SEMAPHORE=xi.SANDBOXED_JS_SEMAPHORE||0;qe(a,function(b,c,d){xi.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{xi.SANDBOXED_JS_SEMAPHORE--}})}function tt(a){void 0!==a&&Ta(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ji[e]=Ji[e]||[];Ji[e].push(b)}})};var ut="HA GF G UA AW DC".split(" "),vt=!1;var wt=!1,xt={},yt=!1;function zt(a,b){var c={event:a};b&&(c.eventModel=M(b),b[O.Fb]&&(c.eventCallback=b[O.Fb]),b[O.Yc]&&(c.eventTimeout=b[O.Yc]));return c}function At(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Ki()});return a["gtm.uniqueEventId"]}
function Bt(){return wt}
var Et={config:function(a){var b,c;c=At(a);void 0===c&&(c=Ki());return b},consent:function(a){function b(){Bt()&&M(a[2],{subcommand:a[1]})}if(3===a.length){Kg(39);var c=Ki(),d=a[1];"default"===d?(b(),ih(a[2])):"update"===d&&(b(),jh(a[2],c))}},event:function(a){var b=a[1];if(!(2>
a.length)&&n(b)){var c;if(2<a.length){if(!Fc(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=zt(b,c),e=void 0;e=At(a),d["gtm.uniqueEventId"]=e;void 0===e&&Ki();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){yt=!0;Bt();var b={event:"gtm.js","gtm.start":a[1].getTime()};b["gtm.uniqueEventId"]=At(a);return b}},policy:function(a){if(3===
a.length){var b=a[1],c=a[2],d=Bf.s;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Fc(a[1])?b=M(a[1]):3==a.length&&n(a[1])&&(b={},Fc(a[2])||Ka(a[2])?b[a[1]]=M(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Ft={policy:!0};var Gt=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},It=function(a){var b=Ht(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Zt=function(a){if(Yt(a))return a;this.g=a};Zt.prototype.zi=function(){return this.g};var Yt=function(a){return!a||"object"!==Dc(a)||Fc(a)?!1:"getUntrustedUpdateValue"in a};Zt.prototype.getUntrustedUpdateValue=Zt.prototype.zi;var $t=[],au=!1,bu=!1,cu=!1,du=function(a){return A["dataLayer"].push(a)},eu=function(a){var b=xi["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function fu(a){var b=a._clear;Ta(a,function(d,e){"_clear"!==d&&(b&&Ti(d,void 0),Ti(d,e))});Fi||(Fi=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Ki(),a["gtm.uniqueEventId"]=c,Ti("gtm.uniqueEventId",c));return tn(a)}function gu(){var a=$t[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Va(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function hu(){for(var a=!1;!cu&&0<$t.length;){var b=!1;b=!0;if(b&&!bu&&gu()){var c={};$t.unshift((c.event=
"gtm.init",c));bu=!0}var d=!1;d=!0;if(d&&!au&&gu()){var e={};$t.unshift((e.event="gtm.init_consent",e));au=!0}cu=!0;delete Ni.eventModel;Pi();var f=$t.shift();if(null!=f){var g=Yt(f);
if(g){var h=f;f=Yt(h)?h.getUntrustedUpdateValue():void 0;Ui()}try{if(Ia(f))try{f.call(Ri)}catch(v){}else if(Ka(f)){var l=f;if(n(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=Qi(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if(Va(f)){a:{var u=f;if(u.length&&n(u[0])){var t=Et[u[0]];if(t&&(!g||!Ft[u[0]])){f=t(u);break a}}f=void 0}if(!f){cu=!1;continue}}a=fu(f)||a}}finally{g&&Pi(!0)}}cu=!1}
return!a}function iu(){var b=hu();try{Gt(A["dataLayer"],of.N)}catch(c){}return b}
var ku=function(){var a=Zb("dataLayer",[]),b=Zb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ll(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});is(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<xi.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Zt(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);$t.push.apply($t,e);if(300<
this.length)for(Kg(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return hu()&&h};var d=a.slice(0);$t.push.apply($t,d);if(ju()){K(iu)}},ju=function(){var a=!0;return a};var lu={};lu.jd=new String("undefined");
var mu=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===lu.jd?b:a[d]);return c.join("")}};mu.prototype.toString=function(){return this.g("undefined")};mu.prototype.valueOf=mu.prototype.toString;lu.Uh=mu;lu.te={};lu.ki=function(a){return new mu(a)};var nu={};lu.Yi=function(a,b){var c=Ki();nu[c]=[a,b];return c};lu.ng=function(a){var b=a?0:1;return function(c){var d=nu[c];if(d&&"function"===typeof d[b])d[b]();nu[c]=void 0}};lu.Di=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};lu.Ui=function(a){if(a===lu.jd)return a;var b=Ki();lu.te[b]=a;return'google_tag_manager["'+of.N+'"].macro('+b+")"};lu.Oi=function(a,b,c){a instanceof lu.Uh&&(a=a.g(lu.Yi(b,c)),b=Ha);return{Ai:a,onSuccess:b}};var yu=A.clearTimeout,zu=A.setTimeout,R=function(a,b,c){if(cl()){b&&K(b)}else return cc(a,b,c)},Au=function(){return new Date},Bu=function(){return A.location.href},Cu=function(a){return Lh(Nh(a),"fragment")},Du=function(a){return Mh(Nh(a))},Eu=function(a,b){return Qi(a,b||2)},Fu=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=du(a)):d=du(a);return d},Gu=function(a,b){A[a]=b},X=function(a,b,c){b&&
(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},Hu=function(a,b,c){return ij(a,b,void 0===c?!0:!!c)},Iu=function(a,b,c){return 0===rj(a,b,c)},Ju=function(a,b){if(cl()){b&&K(b)}else ec(a,b)},Ku=function(a){return!!Eq(a,"init",!1)},Lu=function(a){Cq(a,"init",!0)},Mu=function(a){var b=Di+"?id="+encodeURIComponent(a)+"&l=dataLayer";R(el("https://","http://",b))},Nu=function(a,b,c){Pm&&(Jc(a)||cn(c,b,a))};var Ou=lu.Oi;var kv=encodeURI,Y=encodeURIComponent,lv=fc;var mv=function(a,b){if(!a)return!1;var c=Lh(Nh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var nv=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Uw(){return A.gaGlobal=A.gaGlobal||{}}var Vw=function(){var a=Uw();a.hid=a.hid||Pa();return a.hid},Ww=function(a,b){var c=Uw();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var wx=function(){if(Ia(A.__uspapi)){var a="";try{A.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Rx=window,Sx=document,Tx=function(a){var b=Rx._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Rx["ga-disable-"+a])return!0;try{var c=Rx.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ej("AMP_TOKEN",String(Sx.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Sx.getElementById("__gaOptOutExtension")?!0:!1};var Ux={};function Xx(a){delete a.eventModel[O.hc];Zx(a.eventModel)}
var Zx=function(a){Ta(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[O.Ra]||{};Ta(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var by=function(a,b,c){lq(b,c,a)},cy=function(a,b,c){lq(b,c,a,!0)},gy=function(a,b){};
function dy(a,b){}var Z={h:{}};

Z.h.flc=[],function(){function a(c,d){d=d?d.slice(0,-1):void 0;ip(c,d)}var b=!1;(function(c){Z.__flc=c;Z.__flc.m="flc";Z.__flc.o=!0;Z.__flc.priorityOverride=0})(function(c){var d=!c.hasOwnProperty("vtp_enableConversionLinker")||!!c.vtp_enableConversionLinker,e=nv(c.vtp_customVariable||[],"key",
"value")||{};var p={kc:c.vtp_activityTag,Ee:d,ja:c.vtp_conversionCookiePrefix||void 0,vd:void 0,Ba:{UNIQUE:3,SESSION:4}[c.vtp_ordinalType]||2,Ie:c.vtp_advertiserId,Me:c.vtp_groupTag,onFailure:c.vtp_gtmOnFailure,onSuccess:c.vtp_gtmOnSuccess,Bd:c.vtp_useImageTag?void 0:c.vtp_url,protocol:"",df:void 0,
hf:!c.vtp_useImageTag,sessionId:c.vtp_sessionId,Id:c.vtp_transactionVariable,transactionId:void 0,Jd:c.vtp_userVariable,ma:c.vtp_userDataVariable,nf:e},q=!1;var r=!(kh(O.D)||q)&&void 0!=Eu(O.T)&&!1!==Eu(O.T);p.wa=r;if(c.vtp_enableAttribution){var u=c.vtp_attributionFields||[];if(u.length){R("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(p,X("google_attr").build([nv(u,"key","value")||{}]))},c.vtp_gtmOnFailure);return}}a(p)})}();
Z.h.sp=["google"],function(){var a=!1;(function(b){Z.__sp=b;Z.__sp.m="sp";Z.__sp.o=!0;Z.__sp.priorityOverride=0})(function(b){function c(){var q={};"DATA_LAYER"==b.vtp_customParamsFormat?q=b.vtp_dataLayerVariable:"USER_SPECIFIED"==b.vtp_customParamsFormat&&(q=nv(b.vtp_customParams,"key","value"));return q}if(a){}else{var g=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?
"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",h=b.vtp_gtmOnFailure,l=function(){var q=X("google_trackConversion");if(Ia(q)){var r=c(),u={google_conversion_id:b.vtp_conversionId,google_conversion_label:b.vtp_conversionLabel,google_custom_params:r,google_remarketing_only:!0,onload_callback:b.vtp_gtmOnSuccess,google_gtm:Mn()};b.vtp_enableDynamicRemarketing&&(b.vtp_eventName&&(r.event=b.vtp_eventName),b.vtp_eventValue&&(u.google_conversion_value=
b.vtp_eventValue),b.vtp_eventItems&&(u.google_gtag_event_data={items:b.vtp_eventItems}));var t=function(w,y){(u.google_additional_params=u.google_additional_params||{})[w]=y};b.vtp_rdp&&(u.google_restricted_data_processing=!0);b.vtp_userId&&(u.google_user_id=b.vtp_userId);t("gdpr_consent",qo()),t("gdpr",so());q(u)||h()}else h()},m=function(){R(g,l,h)},p=!1;ah()&&!p?oh(function(){kh(O.D)?m():fh(m,O.D)},[O.D]):(Sl(),m())}});}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.m="e";Z.__e.o=!0;Z.__e.priorityOverride=0})(function(a){var b=String(Xi(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.m="f";Z.__f.o=!0;Z.__f.priorityOverride=0})(function(a){var b=Eu("gtm.referrer",1)||J.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Lh(Nh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Du(String(b)):String(b)})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.m="k";Z.__k.o=!0;Z.__k.priorityOverride=0})(function(a){return Hu(a.vtp_name,Eu("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid "+b+" request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.m="access_globals";Z.__access_globals.o=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!n(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Ma(e,r))return}else if("write"===q){if(-1<Ma(f,r))return}else if("readwrite"===q){if(-1<Ma(f,r)&&-1<Ma(e,r))return}else if("execute"===q){if(-1<Ma(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},V:a}})}();Z.h.r=["google"],function(){(function(a){Z.__r=a;Z.__r.m="r";Z.__r.o=!0;Z.__r.priorityOverride=0})(function(a){return Pa(a.vtp_min,a.vtp_max)})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.m="u";Z.__u.o=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Eu("gtm.url",1))||Bu();var d=b[a("vtp_component")];if(!d||"URL"==d)return Du(String(c));var e=Nh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ka(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=Lh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Lh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.m="v";Z.__v.o=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Eu(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Nu(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.m="inject_script";Z.__inject_script.o=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!n(f))throw d(e,{},"Script URL must be a string.");try{if(ag(Nh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},V:a}})}();




Z.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"];(function(b){Z.__gclidw=b;Z.__gclidw.m="gclidw";Z.__gclidw.o=!0;Z.__gclidw.priorityOverride=100})(function(b){K(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||kk())&&Hk(a,h));Ek(h);Kk(["aw","dc"],h);Wk(g,h);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Jk(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var p=Eu(O.T);vo({Ce:!1,wa:void 0!=p&&!1!==p,ud:h,Ad:!0});b.vtp_enableUrlPassthrough&&Mk(["aw","dc","gb"])})}();


Z.h.awct=["google"],function(){var a=!1;var b=!1,c=[],d=function(h){var l=X("google_trackConversion"),m=h.gtm_onFailure;"function"==typeof l?l(h)||m():m()},e=function(){for(;0<c.length;)d(c.shift())},f=function(){return function(){e();b=!1}},g=function(){return function(){e();c={push:d};}};
(function(h){Z.__awct=h;Z.__awct.m="awct";Z.__awct.o=!0;Z.__awct.priorityOverride=0})(function(h){function l(P,na,va){return"DATA_LAYER"===P?Eu(va):h[na]}function m(){S("gdpr_consent",qo()),S("gdpr",so());}
function p(){var P=[];return P}function q(){if(h.vtp_enableEnhancedConversion){var P;void 0===
h.vtp_dataSource?P=h.vtp_cssProvidedEnhancedConversionValue||h.vtp_enhancedConversionObject:"DATA_OBJECT"===h.vtp_dataSource?P=h.vtp_enhancedConversionObject:"INDIVIDUAL_FIELDS"===h.vtp_dataSource&&(P=h.vtp_cssProvidedEnhancedConversionValue);if(P)return{enhanced_conversions_mode:"manual",enhanced_conversions_manual_var:P}}}function r(P){var na=[],va=[];if(P){na=p();if(t){var ha={};h.vtp_conversionCookiePrefix&&(ha.prefix=h.vtp_conversionCookiePrefix);Fj(ha);S("auid",Bj[Cj(ha.prefix)])}}if((h.vtp_enableEnhancedConversions||h.vtp_enableEnhancedConversion)&&P){var La=ql(q(),na);La&&va.push(La.then(function(Ra){S("em",
Ra.Fc);}))}if(va.length)try{Promise.all(va).then(function(){c.push(H)});return}catch(Ra){}c.push(H)}function u(){bh()&&S("gcd","G1"+gh(Zg));}var t=!h.hasOwnProperty("vtp_enableConversionLinker")||
!!h.vtp_enableConversionLinker,v=!!h.vtp_enableEnhancedConversions||!!h.vtp_enableEnhancedConversion;if(a){}else{Sl();var H={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:h.vtp_conversionId,google_conversion_label:h.vtp_conversionLabel,google_conversion_value:h.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:h.vtp_gtmOnSuccess,gtm_onFailure:h.vtp_gtmOnFailure,google_gtm:Mn()};H.google_gtm_experiments={capi:!0};
h.vtp_rdp&&(H.google_restricted_data_processing=!0);void 0!=Eu(O.T)&&!1!==Eu(O.T)&&(H.google_gtm_url_processor=function(P){return P=rl(P)});var Q=function(P){return function(na,va,ha){var Aa=l(P,va,ha);Aa&&(H[na]=Aa)}},L=Q("JSON");L("google_conversion_currency","vtp_currencyCode");L("google_conversion_order_id","vtp_orderId");h.vtp_enableProductReporting&&(L=Q(h.vtp_productReportingDataSource),L("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),L("google_basket_feed_country","vtp_awFeedCountry",
"aw_feed_country"),L("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),L("google_basket_discount","vtp_discount","discount"),L("google_conversion_items","vtp_items","items"),H.google_conversion_items&&H.google_conversion_items.map&&(H.google_conversion_items=H.google_conversion_items.map(function(P){return{value:P.price,quantity:P.quantity,item_id:P.id}})));var U=function(P,na){(H.google_additional_params=H.google_additional_params||{})[P]=na},S=function(P,na){void 0!==na&&((H.google_additional_conversion_params=
H.google_additional_conversion_params||{})[P]=na)},W=function(P){return function(na,va,ha,Aa){var La=l(P,va,ha);Aa(La)&&S(na,La)}};var I=Eu("developer_id"),T=mb(Fc(I)?I:{});T&&S("did",T);(function(){if(!h.vtp_enableShippingData)return;S("delopc",h.vtp_deliveryPostalCode);S("oedeld",h.vtp_estimatedDeliveryDate);S("delc",h.vtp_deliveryCountry);
S("shf",h.vtp_shippingFee);if(h.vtp_enableProductReporting){var P=l(h.vtp_productReportingDataSource,"vtp_items","items");S("iedeld",tl(P))}})();h.vtp_transportUrl&&(H.google_transport_url=h.vtp_transportUrl);var ca=vn(h.vtp_transportUrl,"/pagead/conversion_async.js");ca||(ca=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");h.vtp_enableNewCustomerReporting&&
(L=W(h.vtp_newCustomerReportingDataSource),L("vdnc","vtp_awNewCustomer","new_customer",function(P){return void 0!=P&&""!==P}),L("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(P){return void 0!=P&&""!==P}));t?(h.vtp_conversionCookiePrefix&&(H.google_gcl_cookie_prefix=h.vtp_conversionCookiePrefix),H.google_read_gcl_cookie_opt_out=!1):H.google_read_gcl_cookie_opt_out=!0;"1"===dk(!1)._up&&S("gtm_up","1");m();(function(){var P=!1;!ah()||P?r(!0):oh(function(){m();var na=kh(O.D),va=void 0!=Eu(O.T)&&!1!==Eu(O.T),ha=!1;ha=!0;h.vtp_transportUrl||na||!va&&!ha||(H.google_transport_url="https://pagead2.googlesyndication.com/");S("gcs",lh());u();r(na);na||nh(function(){H=M(H);m();!h.vtp_transportUrl&&H.google_transport_url&&delete H.google_transport_url;
S("gcs",lh());u();S("gcu","1");r(!0)},O.D)},[O.D])})();b||(b=!0,R(ca,g(),f(ca)))}})}();
Z.h.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.m="remm";Z.__remm.o=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Nu(f,"remm",a.vtp_gtmEventId);return f})}();
Z.h.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.m="baut";Z.__baut.o=!0;Z.__baut.priorityOverride=0})(function(b){function c(){var m=X(h);if(Array.isArray(m)){var p=b.vtp_customConfigTable?nv(b.vtp_customConfigTable,"customConfigName","customConfigValue"):{},q;for(q in p)"true"===p[q]?p[q]=!0:"false"===p[q]&&(p[q]=!1);var r={navTimingApi:"vtp_c_navTimingApi",storeConvTrackCookies:"vtp_c_storeConvTrackCookies",
removeQueryFromUrls:"vtp_c_removeQueryFromUrls"},u;for(u in r)p[u]=p[u]||b[r[u]];p.ti=b.vtp_tagId;p.q=m;p.tm="gtm001";var t;try{t=Pb(X("UET"),p)}catch(v){}t?(A[h]=t,t.push("pageLoad"),b.vtp_gtmOnSuccess()):K(b.vtp_gtmOnFailure)}else b.vtp_gtmOnSuccess()}var d=b.vtp_eventType;switch(d){case "PAGE_LOAD":d="pageView";break;case "VARIABLE_REVENUE":d="variableRevenue";break;case "CUSTOM":d="custom"}var e="pageView"!==d&&b.vtp_customParamTable?nv(b.vtp_customParamTable,"customParamName","customParamValue"):
{},f={pageViewSpa:{page_path:"vtp_p_page_path",page_title:"vtp_p_page_title"},variableRevenue:{currency:"vtp_p_currency",revenue_value:"vtp_goalValue"},custom:{event_category:"vtp_eventCategory",event_label:"vtp_eventLabel",event_value:"vtp_eventValue",currency:"vtp_p_currency",revenue_value:"vtp_goalValue"},ecommerce:{ecomm_prodid:"vtp_p_ecomm_prodid",ecomm_pagetype:"vtp_p_ecomm_pagetype",ecomm_totalvalue:"vtp_p_ecomm_totalvalue",ecomm_category:"vtp_p_ecomm_category"},hotel:{currency:"vtp_p_currency",
hct_base_price:"vtp_p_hct_base_price",hct_booking_xref:"vtp_p_hct_booking_xref",hct_checkin_date:"vtp_p_hct_checkin_date",hct_checkout_date:"vtp_p_hct_checkout_date",hct_length_of_stay:"vtp_p_hct_length_of_stay",hct_partner_hotel_id:"vtp_p_hct_partner_hotel_id",hct_total_price:"vtp_p_hct_total_price",hct_pagetype:"vtp_p_hct_pagetype"},travel:{travel_destid:"vtp_p_travel_destid",travel_originid:"vtp_p_travel_originid",travel_pagetype:"vtp_p_travel_pagetype",travel_startdate:"vtp_p_travel_startdate",
travel_enddate:"vtp_p_travel_enddate",travel_totalvalue:"vtp_p_travel_totalvalue"}},g;for(g in f[d]||{})e[g]=e[g]||b[f[d][g]];var h=b.vtp_uetqName||"uetq",l=X(h,[],!0);if("pageView"!==d)"pageViewSpa"===d?l.push("event","page_view",e):l.push("event",b.vtp_customEventAction||b.vtp_eventAction||"",e),b.vtp_gtmOnSuccess();else if(Array.isArray(l))if(a)c();else try{R("https://bat.bing.com/bat.js",function(){a=!0;c()},b.vtp_gtmOnFailure)}catch(m){K(b.vtp_gtmOnFailure)}else b.vtp_gtmOnSuccess()})}();





Z.h.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.m="paused";Z.__paused.o=!0;Z.__paused.priorityOverride=0})(function(a){K(a.vtp_gtmOnFailure)})}();

Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=J.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,ac(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){K(g)}}}var c=function(d){if(J.body){var e=
d.vtp_gtmOnFailure,f=Ou(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Ai,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(J.body,mc(g),h,e)()}else zu(function(){c(d)},
200)};Z.__html=c;Z.__html.m="html";Z.__html.o=!0;Z.__html.priorityOverride=0}();




Z.h.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.m="img";Z.__img.o=!0;Z.__img.priorityOverride=0})(function(a){var b=mc('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}lv(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var hy={};hy.macro=function(a){if(lu.te.hasOwnProperty(a))return lu.te[a]},hy.onHtmlSuccess=lu.ng(!0),hy.onHtmlFailure=lu.ng(!1);hy.dataLayer=Ri;hy.callback=function(a){Ii.hasOwnProperty(a)&&Ia(Ii[a])&&Ii[a]();delete Ii[a]};hy.bootstrap=0;hy._spx=!1;function iy(){xi[of.N]=hy;gb(Ji,Z.h);Ve=Ve||lu;We=kf}
function jy(){var a=!1;a&&Tl("INIT");Pg().s();xi=A.google_tag_manager=A.google_tag_manager||{};po();
mk.enable_gbraid_cookie_write=!0;if(xi[of.N]){var b=xi.zones;b&&b.unregisterChild(of.N);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Oe.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Re.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)Qe.push(h[l]);for(var m=c.rules||[],p=0;p<m.length;p++){for(var q=m[p],r={},u=
0;u<q.length;u++)r[q[u][0]]=Array.prototype.slice.call(q[u],1);Pe.push(r)}Te=Z;Ue=ts;var t=data.permissions||{},v=data.sandboxed_scripts,w=data.security_groups;qt();Bf=new Af(t);if(void 0!==v)for(var y=["sandboxedScripts"],x=0;x<v.length;x++){var z=v[x].replace(/^_*/,"");Ji[z]=y}tt(w);iy();ku();Gl=!1;Hl=0;if("interactive"==J.readyState&&!J.createEventObject||"complete"==J.readyState)Jl();else{gc(J,"DOMContentLoaded",Jl);gc(J,"readystatechange",Jl);if(J.createEventObject&&J.documentElement.doScroll){var B=
!0;try{B=!A.frameElement}catch(Q){}B&&Kl()}gc(A,"load",Jl)}fs=!1;"complete"===J.readyState?hs():gc(A,"load",hs);Pm&&A.setInterval(Jm,864E5);
Gi=(new Date).getTime();if(a){var H=Ul("INIT");
}}}
(function(a){if(!A["__TAGGY_INSTALLED"]){var b=!1;if(J.referrer){var c=Nh(J.referrer);b="cct.google"===Kh(c,"host")}if(!b){var d=ij("googTaggyReferrer");b=d.length&&d[0].length}b&&(A["__TAGGY_INSTALLED"]=!0,cc("https://cct.google/taggy/agent.js"))}var f=function(){var m=A["google.tagmanager.debugui2.queue"];m||(m=[],A["google.tagmanager.debugui2.queue"]=m,cc("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:Yb,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};of.bh&&(p.data.initialPublish=!0);m.push(p)},g="x"===Lh(A.location,"query",!1,void 0,"gtm_debug");if(!g&&J.referrer){var h=Nh(J.referrer);g="tagassistant.google.com"===Kh(h,"host")}if(!g){var l=ij("__TAG_ASSISTANT");g=l.length&&l[0].length}A.__TAG_ASSISTANT_API&&(g=!0);g&&Yb?f():a()})(jy);

})()
