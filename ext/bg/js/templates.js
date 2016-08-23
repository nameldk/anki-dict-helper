(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <script src=\""
    + container.escapeExpression(((helper = (helper = helpers.root || (depth0 != null ? depth0.root : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"root","hash":{},"data":data}) : helper)))
    + "/js/frame.js\"></script>\n    </body>\n</html>\n";
},"useData":true});
templates['header.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title></title>\n        <style>\n            @font-face {\n                font-family: kanji-stroke-orders;\n                src:         url('"
    + alias4(((helper = (helper = helpers.root || (depth0 != null ? depth0.root : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"root","hash":{},"data":data}) : helper)))
    + "/ttf/kanji-stroke-orders.ttf');\n            }\n            @font-face {\n                font-family: vl-gothic-regular;\n                src:         url('"
    + alias4(((helper = (helper = helpers.root || (depth0 != null ? depth0.root : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"root","hash":{},"data":data}) : helper)))
    + "/ttf/vl-gothic-regular.ttf');\n            }\n        </style>\n        <link rel=\"stylesheet\" href=\""
    + alias4(((helper = (helper = helpers.root || (depth0 != null ? depth0.root : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"root","hash":{},"data":data}) : helper)))
    + "/css/frame.css\">\n    </head>\n    <body>\n";
},"useData":true});
templates['kanji-link.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"#\" class=\"kanji-link\">"
    + container.escapeExpression(((helper = (helper = helpers.kanji || (depth0 != null ? depth0.kanji : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"kanji","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"useData":true});
templates['kanji-list.html'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["kanji.html"],depth0,{"name":"kanji.html","hash":{"sequence":(depths[1] != null ? depths[1].sequence : depths[1]),"options":(depths[1] != null ? depths[1].options : depths[1]),"root":(depths[1] != null ? depths[1].root : depths[1])},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["header.html"],depth0,{"name":"header.html","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.definitions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["footer.html"],depth0,{"name":"footer.html","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
templates['kanji.html'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "    <div class=\"action-bar\" data-sequence=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].sequence : depths[1]), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.enableAnkiConnect : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression;

  return "        <a href=\"#\" title=\"Add Kanji\" class=\"action-add-note disabled\" data-mode=\"kanji\" data-index=\""
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias1(container.lambda((depths[1] != null ? depths[1].root : depths[1]), depth0))
    + "/img/add_kanji.png\"></a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <dt>Meanings</dt>\n            <dd>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.glossary : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </dd>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(data && data.last),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return ", ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <dt>Kun'yomi</dt>\n            <dd class=\"kanji-reading\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.kunyomi : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </dd>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <dt>On'yomi</dt>\n            <dd class=\"kanji-reading\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.onyomi : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </dd>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"kanji-definition\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.options : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"kanji-glyph\">"
    + container.escapeExpression(((helper = (helper = helpers.character || (depth0 != null ? depth0.character : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"character","hash":{},"data":data}) : helper)))
    + "</div>\n\n    <div class=\"kanji-info\">\n        <dl>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.glossary : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.kunyomi : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.onyomi : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </dl>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true});
templates['term-list.html'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["term.html"],depth0,{"name":"term.html","hash":{"sequence":(depths[1] != null ? depths[1].sequence : depths[1]),"options":(depths[1] != null ? depths[1].options : depths[1]),"root":(depths[1] != null ? depths[1].root : depths[1])},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["header.html"],depth0,{"name":"header.html","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.definitions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["footer.html"],depth0,{"name":"footer.html","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
templates['term.html'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "	<div class=\"action-bar\" data-sequence=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].sequence : depths[1]), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enableAudioPlayback : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enableAnkiConnect : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression;

  return "		<a href=\"#\" title=\"Play audio\" class=\"action-play-audio\" data-index=\""
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias1(container.lambda((depths[1] != null ? depths[1].root : depths[1]), depth0))
    + "/img/play_audio.png\"></a>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression;

  return "		<a href=\"#\" title=\"Add vocabulary as expression\" class=\"action-add-note disabled\" data-mode=\"vocab_kanji\" data-index=\""
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias1(container.lambda((depths[1] != null ? depths[1].root : depths[1]), depth0))
    + "/img/add_vocab_kanji.png\"></a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<span class=\"term-reading\">"
    + container.escapeExpression(((helper = (helper = helpers.reading || (depth0 != null ? depth0.reading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"reading","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<span class=\"tag tag-"
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <li><span>"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</span></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"term-definition\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.options : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"term-expression\">\n		<span class=\"term-word\">"
    + container.escapeExpression(((helper = (helper = helpers.expression || (depth0 != null ? depth0.expression : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"expression","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.reading : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n\n    <div class=\"term-glossary\">\n        <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.glossary : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true});
})();