/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${but_credit}", "click", function(sym, e) {
         
         window.open("http://aphall.com/", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${but_source}", "click", function(sym, e) {
         
         window.open("https://github.com/andyhall/edge-parallax", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${but_edge_an}", "click", function(sym, e) {
         
         window.open("http://html.adobe.com/edge/animate/", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         // style page
         sym.$(document.body).css("backgroundColor", "#000");
         
         
         // jQuery up a tall hidden div, to trigger scrolling
         var d = document.createElement("div");
         sym.$(d).css({
         	position:   "absolute",
         	top:        "0px",
         	height:     "2500%",
         	visibility: "hidden"
         }).html("&nbsp;");
         document.body.appendChild(d);
         
         
         // prevent Edge Animate stage from scrolling
         sym.getSymbolElement().css({ position:"fixed" });
         window.ref = sym;
         
         // animation frame loop: check scroll position 
         // each frame and move animation accordingly
         var lastScrollTop = 0;
         var animate = function() {
         	var scrollTop = $(window).scrollTop();
         	if (scrollTop != lastScrollTop) {
         		lastScrollTop = scrollTop;
         		var maxScroll = $(document).height()-$(window).height();
         		var scrollPos = scrollTop / maxScroll;
         		// scrollPos is 0..1
         		sym.stop( scrollPos * sym.getDuration() );
         	}
         	requestAnimationFrame(animate);
         }
         requestAnimationFrame(animate);
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'down_arrow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("down_arrow");
   //Edge symbol end:'down_arrow'

   //=========================================================
   
   //Edge symbol: 'header'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${adobe}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.adobe.com", "_self");

      });
      //Edge binding end

   })("header");
   //Edge symbol end:'header'

   //=========================================================
   
   //Edge symbol: 'p5_try_button'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${try_but_hitarea}", "click", function(sym, e) {
         
         window.open("https://creative.adobe.com/products/animate", "_blank");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${try_but_hitarea}", "mouseenter", function(sym, e) {
         
         sym.stop("show")
         sym.play("show");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${try_but_hitarea}", "mouseleave", function(sym, e) {
         
         sym.stop("hide")
         sym.play("hide");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         
         sym.stop()

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("try_button");
   //Edge symbol end:'try_button'

   //=========================================================
   
   //Edge symbol: 'try_button_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         
         sym.stop()

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${try_but_hitarea}", "click", function(sym, e) {
         
         window.open("https://helpx.adobe.com/creative-cloud/learn/tutorials/animate.html#get-started", "_blank");
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${try_but_hitarea}", "mouseenter", function(sym, e) {
         
         sym.stop("show")
         sym.play("show");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${try_but_hitarea}", "mouseleave", function(sym, e) {
         
         sym.stop("hide")
         sym.play("hide");
         

      });
         //Edge binding end

      })("help_button");
   //Edge symbol end:'help_button'

   //=========================================================
   
   //Edge symbol: 'code_box'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         // insert a textarea into this symbol
         
         var area = document.createElement('textarea');
         sym.$(area).css({
         	'margin':		'5px',
         	'width':			'97%',
         	'height': 		'94%',
         	'font-size': 	'10px',
         	'resize': 		'none',
         	'position': 	'absolute',
         	'font-family':	'source-code-pro',
         	'background-color': 'rgba(255, 0, 0, 0)'
         });
         
         area.spellcheck = false;
         area.value = [
         	'// jQuery up a tall hidden div, to trigger scrolling',
         	'var d = document.createElement("div");',
         	'sym.$(d).css({',
         	'	position:   "absolute",',
         	'	top:        "0px",',
         	'	height:     "1500%",',
         	'	visibility: "hidden"',
         	'}).html("&nbsp;");',
         	'document.body.appendChild(d);',
         	'',
         	'// prevent Edge Animate stage from scrolling',
         	'sym.getSymbolElement().css({ position:"fixed" });',
         	'',
         	'// animation frame loop: check scroll position ',
         	'// each frame and move animation accordingly',
         	'var lastScrollTop = 0;',
         	'var animate = function() {',
         	'	var scrollTop = $(window).scrollTop();',
         	'	if (scrollTop != lastScrollTop) {',
         	'		lastScrollTop = scrollTop;',
         	'		var maxScroll = $(document).height()-$(window).height();',
         	'		var scrollPos = scrollTop / maxScroll;',
         	'		// scrollPos is 0..1',
         	'		sym.stop( scrollPos * sym.getDuration() );',
         	'	}',
         	'	requestAnimationFrame(animate);',
         	'}',
         	'requestAnimationFrame(animate);',
         	''
         ].join('\n');
         
         // append textarea to this symbol's jQuery element
         sym.getSymbolElement().append(area);

      });
      //Edge binding end

   })("code_box");
   //Edge symbol end:'code_box'

   //=========================================================
   
   //Edge symbol: 'round_HL_button'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hit_area}", "mouseleave", function(sym, e) {
         
         sym.stop("hide");
         sym.play("hide");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hit_area}", "mouseenter", function(sym, e) {
         
         sym.stop("show");
         sym.play("show");

      });
      //Edge binding end

   })("round_HL_button");
   //Edge symbol end:'round_HL_button'

   //=========================================================
   
   //Edge symbol: 'bg_block'
   (function(symbolName) {   
   
   })("bg_block");
   //Edge symbol end:'bg_block'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-343491701");