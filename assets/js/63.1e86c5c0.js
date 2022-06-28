(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{252:function(e,t,a){e.exports=a.p+"assets/img/fnc.db82cbbb.png"},253:function(e,t,a){e.exports=a.p+"assets/img/gs128-2.21f6dc0c.png"},254:function(e,t,a){e.exports=a.p+"assets/img/gs128.32fbec5c.png"},255:function(e,t,a){e.exports=a.p+"assets/img/code128-part4.b6f5428f.png"},256:function(e,t,a){e.exports=a.p+"assets/img/code128-part3.a77b28e3.png"},257:function(e,t,a){e.exports=a.p+"assets/img/code128-part2.b5faf31a.png"},258:function(e,t,a){e.exports=a.p+"assets/img/code128-part1.e088514d.png"},259:function(e,t,a){e.exports=a.p+"assets/img/code128-2.387c13ba.png"},260:function(e,t,a){e.exports=a.p+"assets/img/code128-1.7efcda3e.png"},422:function(e,t,a){"use strict";a.r(t);var i=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h2",{attrs:{id:"code-128"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-128","aria-hidden":"true"}},[e._v("#")]),e._v(" CODE 128")]),e._v(" "),i("p",[e._v("CODE 128 is the barcode developed by Computer Identics Corporation (U.S.A.) in 1981.\nCODE 128 can represent all 128 ASCII code characters (numbers, upper case/lower case letters, symbols and control codes). Since it can represent all characters (except Japanese kanji, hiragana and katakana) that can be used with a computer keyboard, it is a computer friendly barcode.")]),e._v(" "),i("h3",{attrs:{id:"code-128-组成"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-128-组成","aria-hidden":"true"}},[e._v("#")]),e._v(" CODE 128 组成")]),e._v(" "),i("p",[e._v("The basic composition is as follows:\n"),i("img",{attrs:{src:a(260),alt:"image"}})]),e._v(" "),i("ul",[i("li",[e._v("There are 4 types of bar size.")]),e._v(" "),i("li",[e._v("One character is represented by 3 bars and 3 spaces (total six elements).")]),e._v(" "),i("li",[e._v('A start character has three types; "CODE-A", "CODE-B" and "CODE-C". The type of start character determines the character composition of subsequent characters. (See the table of character composition on page 41. For example, when CODE A is used as a start character, the characters in the CODE-A column can be represented.)\n'),i("img",{attrs:{src:a(259),alt:"image"}})]),e._v(" "),i("li",[e._v("When CODE-C is used, 2-digits numbers can be represented by one type of bar pattern. This allows the very high data density.")]),e._v(" "),i("li",[e._v("When code set characters (CODE-A, CODE-B and CODE-C) are used, the barcode started with the start character of CODE-A can be changed to use the characters in the CODE-B or CODE-C column in the middle of barcode processing.")]),e._v(" "),i("li",[e._v('When "SHIFT" is used, only one character next to the SHIFT can be changed to the character in the next column (A to B, B to C, C to A). (Similar to the SHIFT key operation of on the computer keyboard)\n・"Modulus 103" is used as a check digit.')])]),e._v(" "),i("h3",{attrs:{id:"code-128-字符"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-128-字符","aria-hidden":"true"}},[e._v("#")]),e._v(" CODE 128 字符")]),e._v(" "),i("p",[i("img",{attrs:{src:a(258),alt:"image"}}),e._v(" "),i("img",{attrs:{src:a(257),alt:"image"}}),e._v(" "),i("img",{attrs:{src:a(256),alt:"image"}}),e._v(" "),i("img",{attrs:{src:a(255),alt:"image"}})]),e._v(" "),i("h3",{attrs:{id:"code-128-特点"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-128-特点","aria-hidden":"true"}},[e._v("#")]),e._v(" CODE 128 特点")]),e._v(" "),i("ul",[i("li",[e._v("CODE 128 barcode can include all 128 ASCII code characters (including control codes such as [ESC], [STX], [ETX], [CR] and [LF]).")]),e._v(" "),i("li",[e._v("When CODE-C is used as the start character, one bar pattern can represent 2-digits numbers. This allows very efficient barcode composition. If the barcode data has 12 or more digits, CODE 128 provides smaller size than ITF.")]),e._v(" "),i("li",[e._v("Since CODE 128 uses 4 types of bar size, printers with high print quality are required. CODE 128 is not suitable for printing with dot matrix printers and FA ink-jet printers and for flexographic printing on corrugated cardboards.")])]),e._v(" "),i("h3",{attrs:{id:"code-128-应用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-128-应用","aria-hidden":"true"}},[e._v("#")]),e._v(" CODE 128 应用")]),e._v(" "),i("p",[e._v("Use of CODE-C as the start code allows CODE 128 to provide the barcode with very high data density, if only numbers are handled.\nGS1-128 makes use of the characteristics of CODE 128 and is currently used in many industrial applications. With GS1-128, various data are included in the barcode, such as manufacturing date of the product, open date, weight, size, lot number, destination, customer's account, etc..\nCODE 128 is used in the following industries:")]),e._v(" "),i("ul",[i("li",[e._v("U.S.A. apparel industry")]),e._v(" "),i("li",[e._v("U.S.A. food process industry")]),e._v(" "),i("li",[e._v("U.S.A. drugs and medical equipment industry")]),e._v(" "),i("li",[e._v("Food industries in Australia and New Zealand")]),e._v(" "),i("li",[e._v("European drugs and medical instruments industry")])]),e._v(" "),i("h2",{attrs:{id:"gs1-128"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gs1-128","aria-hidden":"true"}},[e._v("#")]),e._v(" GS1-128")]),e._v(" "),i("h3",{attrs:{id:"what-is-gs1-128"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-is-gs1-128","aria-hidden":"true"}},[e._v("#")]),e._v(" What Is GS1-128?")]),e._v(" "),i("p",[e._v("GS1-128 is the barcode that provides various data including distribution and business transaction data in addition to the data provided by the JAN code and the standard distribution code (ITF) currently available.")]),e._v(" "),i("p",[e._v("Following data can be included in GS1-128 barcode:")]),e._v(" "),i("ul",[i("li",[e._v("Package number")]),e._v(" "),i("li",[e._v("Quantity in package")]),e._v(" "),i("li",[e._v("Weight, capacity and cubic capacity")]),e._v(" "),i("li",[e._v("Manufacturing date and validity of quality・Lot number")]),e._v(" "),i("li",[e._v("Location number (destination)")]),e._v(" "),i("li",[e._v("Customer's account code")]),e._v(" "),i("li",[e._v("Customer's order number\nNecessary data is used to form the barcode label for the various applications.")])]),e._v(" "),i("p",[e._v("For example, On-line purchasing/ordering using EDI (the system for exchanging electronic data between companies), management of open date for foods, management of drugs validity, simplifying the work for checking incoming products, sorting packages for every destination, etc.. (The following label is a sample from a food manufacturer.)\n"),i("img",{attrs:{src:a(254),alt:"image"}})]),e._v(" "),i("h3",{attrs:{id:"background-of-gs1-128-establishment"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#background-of-gs1-128-establishment","aria-hidden":"true"}},[e._v("#")]),e._v(" Background of GS1-128 Establishment")]),e._v(" "),i("p",[e._v("JAN code and the standard distribution code (ITF) are the barcodes for indicating the product itself and its quantity and not for the data such as manufacturing date, package number, validity of quality and order number.\nWhile CODE 39 allows such data to be included in the barcode, the exchange of such data between companies is not allowed because the definition and the number of digits of the data are different.\nGS1-128 is established as the world universal barcode for common use, with the items and the number of digits of the data and the type of the barcode being standardized.")]),e._v(" "),i("h3",{attrs:{id:"gs1-128-composition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gs1-128-composition","aria-hidden":"true"}},[e._v("#")]),e._v(" GS1-128 Composition")]),e._v(" "),i("p",[e._v("The basic composition of GS1-128 is as follows:")]),e._v(" "),i("ul",[i("li",[e._v("Code 128 is used as the barcode.")]),e._v(" "),i("li",[e._v('In order to separate the required data such as weight and open data, the "application identifier (AI)" is added which is followed by the data. If more than one data is represented, each data shall be linked.\n'),i("img",{attrs:{src:a(253),alt:"image"}})])]),e._v(" "),i("p",[e._v('In the sample above, following the application identifier "01", 14-digits code is assigned to identify the delivery container (minimum package unit for corrugated cardboard boxes). Following the application identifier "15", the data representing the validity of quality (consumption validity or drug validity) is given to show August 27, \'95. Following the last application identifier "30", the data representing the delivery quantity is given to show 3 pieces.\nThere are about 100 application identifiers except the above. The required data is selected and included in the barcodes by users.')]),e._v(" "),i("p",[e._v("GS1-128 is not intended to represent fixed data, but the data is selectable by the user. Therefore, for consistent use of GS1-128 among companies, the standards for the barcode system with the data available shall be prepared by the respective industry and the groups of companies involved.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("In order to distinguish GS1-128 from CODE 128, it is required to give [FNC 1](function 1) following the start code (CODE-A to C).")])]),e._v(" "),i("li",[i("p",[e._v("Even if the number of digits for the data following the application identifier is a variable-length, [FNC 1] is given to separate the data.\n"),i("img",{attrs:{src:a(252),alt:"image"}})])]),e._v(" "),i("li",[i("p",[e._v("With GS1-128 being added to EAN code and the standard distribution code (ITF), it can be used as the code to add more data.\nGS1-128 is designed to represent the application identifiers and the products relative data or the transaction data of the companies using CODE 128.\nIn other words, GS1-128 is the standard for the applications to represent the various data. CODE 128 is the standard just for the barcode itself. The difference between GS1-128 and CODE 128 is whether it represents the application or not.\nSince GS1-128 uses the barcode composition of CODE 128, any barcode reader that can read CODE 128 can be used to read the GS1-128 data.")])])]),e._v(" "),i("h3",{attrs:{id:"application-identifier"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-identifier","aria-hidden":"true"}},[e._v("#")]),e._v(" Application Identifier")]),e._v(" "),i("p",[e._v("refer to the gs1 specification.")]),e._v(" "),i("h3",{attrs:{id:"fnc1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fnc1","aria-hidden":"true"}},[e._v("#")]),e._v(" FNC1")]),e._v(" "),i("p",[e._v("Every GS1-128 barcode begins with the (FNC1) “Function Code One” character and an Application Identifier (AI) number. The AI defines a specific purpose for the data field after it. The combination of the AI and its data field is referred to as the element string. The AI is represented with parentheses around it in the Human Readable representation below the barcode. Multiple element strings may also be encoded according to GS-1 specifications. Variable element strings should be encoded last in the symbol and FNC1 characters must be encoded between two or more variable length element strings.")]),e._v(" "),i("h2",{attrs:{id:"条码在线生成"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#条码在线生成","aria-hidden":"true"}},[e._v("#")]),e._v(" 条码在线生成")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("http://www.terryburton.co.uk/barcodewriter/generator/")])]),e._v(" "),i("li",[i("p",[e._v("http://barcode.tec-it.com/barcode-generator.aspx?LANG=en")])]),e._v(" "),i("li",[i("p",[e._v("http://www.morovia.com/free-online-barcode-generator/")])]),e._v(" "),i("li",[i("p",[e._v("http://www.waspbarcode.com/Barcode_Maker/generator.aspx")])])]),e._v(" "),i("h2",{attrs:{id:"条码读取"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#条码读取","aria-hidden":"true"}},[e._v("#")]),e._v(" 条码读取")]),e._v(" "),i("h3",{attrs:{id:"第一个fnc1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#第一个fnc1","aria-hidden":"true"}},[e._v("#")]),e._v(" 第一个FNC1")]),e._v(" "),i("p",[e._v('第一个FNC1，如果转换的话，很多扫码工具都会输出为"]C1",也有不输出的。\nzxing转换的话，需要打开ASSUME_GS1')]),e._v(" "),i("div",{staticClass:"language-java line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-java"}},[i("code",[e._v(" Map"),i("span",{attrs:{class:"token generics function"}},[i("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("DecodeHintType"),i("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" DecodeHintType"),i("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" hints "),i("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),i("span",{attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),i("span",{attrs:{class:"token class-name"}},[e._v("HashMap")]),i("span",{attrs:{class:"token punctuation"}},[e._v("(")]),i("span",{attrs:{class:"token punctuation"}},[e._v(")")]),i("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nhints"),i("span",{attrs:{class:"token punctuation"}},[e._v(".")]),i("span",{attrs:{class:"token function"}},[e._v("put")]),i("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ASSUME_GS1"),i("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("ASSUME_GS1"),i("span",{attrs:{class:"token punctuation"}},[e._v(")")]),i("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br"),i("span",{staticClass:"line-number"},[e._v("2")]),i("br")])]),i("p",[e._v("从规范上来看，其实不必输出。")]),e._v(" "),i("h3",{attrs:{id:"变长数据之间的fnc1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#变长数据之间的fnc1","aria-hidden":"true"}},[e._v("#")]),e._v(" 变长数据之间的FNC1")]),e._v(" "),i("p",[e._v("变长数据之间使用FNC1分隔，如果不分割，就无法知道变长数据是否结束了。")]),e._v(" "),i("p",[e._v("例如：01990052711300923102001830300001102020082101")]),e._v(" "),i("p",[e._v("两个变长数据之间有一个FNC1控制符gs（ascii码是29，16进制是1d）。这个控制码是一个不可打印，不可见的字符。也就是说无论打印还是在屏幕上输出，是看不到的。")]),e._v(" "),i("p",[e._v("变长数据间的FNC1必须得到输出，扫码工具不能把这个符号过滤，否则影响数据的处理。")])])}],s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},i,!1,null,null,null);n.options.__file="code128.md";t.default=n.exports}}]);