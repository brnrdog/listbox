// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var EventHandlers = require("./EventHandlers.bs.js");
var Controls_Listbox = require("./Controls/Controls_Listbox.bs.js");
var Controls_DropdownListbox = require("./Controls/Controls_DropdownListbox.bs.js");

function noop(param) {
  
}

function useListbox(options, multiSelectOpt, param) {
  var multiSelect = multiSelectOpt !== undefined ? multiSelectOpt : false;
  var size = options.length;
  var match = Controls_Listbox.useControls(multiSelect, size);
  var selectPrev = match.selectPrev;
  var selectNext = match.selectNext;
  var selectIndex = match.selectIndex;
  var selectHighlighted = match.selectHighlighted;
  var selectedIndexes = match.selectedIndexes;
  var resetHighlighted = match.resetHighlighted;
  var highlightPrev = match.highlightPrev;
  var highlightNext = match.highlightNext;
  var highlightLast = match.highlightLast;
  var highlightIndex = match.highlightIndex;
  var highlightFirst = match.highlightFirst;
  var getOptionProps = function (index) {
    return {
            "aria-selected": Belt_Array.some(selectedIndexes, (function (i) {
                    return i === index;
                  })),
            role: "option",
            onClick: (function (param) {
                return EventHandlers.onClick(index, selectIndex, param);
              })
          };
  };
  var getContainerProps = function (param) {
    return {
            role: "listbox",
            tabIndex: 0,
            onBlur: (function (param) {
                return EventHandlers.onBlur(resetHighlighted, param);
              }),
            onKeyDown: (function (param) {
                return EventHandlers.onKeyDown(true, noop, highlightFirst, highlightLast, highlightNext, highlightPrev, selectPrev, selectNext, selectHighlighted, noop, param);
              }),
            onFocus: (function (param) {
                return EventHandlers.onFocus(selectedIndexes, highlightIndex, param);
              })
          };
  };
  return {
          highlightedIndex: match.highlightedIndex,
          selectedIndex: match.selectedIndex,
          selectedIndexes: selectedIndexes,
          getContainerProps: getContainerProps,
          getOptionProps: getOptionProps
        };
}

function useDropdownListbox(options, multiSelectOpt, param) {
  var multiSelect = multiSelectOpt !== undefined ? multiSelectOpt : false;
  var size = options.length;
  var match = Controls_DropdownListbox.useControls(multiSelect, size);
  var showMenu = match.showMenu;
  var selectPrev = match.selectPrev;
  var selectNext = match.selectNext;
  var selectIndex = match.selectIndex;
  var selectHighlighted = match.selectHighlighted;
  var selectedIndexes = match.selectedIndexes;
  var resetHighlighted = match.resetHighlighted;
  var menuVisible = match.menuVisible;
  var highlightPrev = match.highlightPrev;
  var highlightNext = match.highlightNext;
  var highlightLast = match.highlightLast;
  var highlightIndex = match.highlightIndex;
  var highlightFirst = match.highlightFirst;
  var hideMenu = match.hideMenu;
  var getOptionProps = function (index) {
    return {
            "aria-selected": Belt_Array.some(selectedIndexes, (function (i) {
                    return i === index;
                  })),
            role: "option",
            onClick: (function (param) {
                return EventHandlers.onClick(index, selectIndex, param);
              })
          };
  };
  var getContainerProps = function (param) {
    return {
            role: "listbox",
            tabIndex: 0,
            onBlur: (function (param) {
                return EventHandlers.onBlur(resetHighlighted, param);
              }),
            onKeyDown: (function (param) {
                
              }),
            onFocus: (function (param) {
                return EventHandlers.onFocus(selectedIndexes, highlightIndex, param);
              })
          };
  };
  var getDropdownProps = function (param) {
    return {
            role: "button",
            tabIndex: 0,
            onClick: (function (param) {
                return EventHandlers.onDropdownClick(menuVisible, hideMenu, showMenu, param);
              }),
            onKeyDown: (function (param) {
                return EventHandlers.onKeyDown(menuVisible, hideMenu, highlightFirst, highlightLast, highlightNext, highlightPrev, selectPrev, selectNext, selectHighlighted, showMenu, param);
              })
          };
  };
  return {
          highlightedIndex: match.highlightedIndex,
          menuVisible: menuVisible,
          selectedIndex: match.selectedIndex,
          selectedIndexes: selectedIndexes,
          getContainerProps: getContainerProps,
          getDropdownProps: getDropdownProps,
          getOptionProps: getOptionProps,
          hideMenu: hideMenu,
          showMenu: showMenu
        };
}

exports.noop = noop;
exports.useListbox = useListbox;
exports.useDropdownListbox = useDropdownListbox;
/* Controls_Listbox Not a pure module */
