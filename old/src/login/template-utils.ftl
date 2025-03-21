<#-- Define utility functions for templates -->
<#function toJsDeclarationString obj prefix>
  <#local result = "">
  <#if obj?is_hash>
    <#list obj?keys as key>
      <#-- Skip if key is not a simple string or if it's a special FreeMarker property -->
      <#if key?is_string && !key?starts_with("__") && !key?starts_with("_")>
        <#-- Try to safely access the property -->
        <#attempt>
          <#if obj[key]??>
            <#if obj[key]?is_boolean>
              <#local result += prefix + "." + key + " = " + obj[key]?string("true", "false") + ";\n">
            <#elseif obj[key]?is_number>
              <#local result += prefix + "." + key + " = " + obj[key] + ";\n">
            <#elseif obj[key]?is_string>
              <#local result += prefix + "." + key + " = \"" + obj[key]?js_string + "\";\n">
            <#elseif obj[key]?is_hash && !obj[key]?is_enumerable>
              <#local result += prefix + "." + key + " = {};\n" + toJsDeclarationString(obj[key], prefix + "." + key)>
            <#elseif obj[key]?is_sequence>
              <#local result += prefix + "." + key + " = [];\n">
            <#else>
              <#-- Skip complex objects that can't be easily serialized -->
              <#local result += prefix + "." + key + " = {};\n">
            </#if>
          </#if>
        <#recover>
          <#-- If accessing the property fails, skip it -->
        </#attempt>
      </#if>
    </#list>
  </#if>
  <#return result>
</#function>
