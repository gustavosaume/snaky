;(function($) {

	// Default options
	var settings = {
		numOfCol: 7,
		element: 'li',
		componentClass: 'snaky',
		itemClass: 'snaky-item'
	};

	// styles classes
	var leftStyle, rightStyle, topStyle, bottomStyle;
	
	var getStyle = function(index) {
		var x = index % settings.numOfCol;
		var row = Math.floor(index / settings.numOfCol);

		// if the current row is odd we go right to left, so we
		// substract the current X to the total number of rows
		var style = {
			x: row % 2 ? settings.numOfCol - x - 1 : x,
            y: row,
            name: row % 2 ? leftStyle : rightStyle
		};

		// when we fill the whole row we move to the next one and set the style
		// on the items on the corners
		if (x == (settings.numOfCol-1)) {
			style.name += topStyle;
		} else if (x === 0) {
			style.name += bottomStyle;
		}
		
		return style;
	};

	var setStyle = function(obj, index, colwidth, rowHeight) {
		var style = getStyle(index);
		
		obj.addClass(style.name);
		obj.css({
			'width': colwidth,
            'left': style.x * colwidth,
            'top': style.y * rowHeight
		});
	};

	var methods = {
		init: function(options) {
			if (options && typeof options === 'object') {
				$.extend(settings, options);
			}
			
			// build the style classes
			leftStyle = ' ' + settings.itemClass + '-left';
			rightStyle = ' ' + settings.itemClass + '-right';
			topStyle = ' ' + settings.itemClass + '-top';
			bottomStyle = ' ' + settings.itemClass + '-bottom';

			// set the base classes
			this.addClass(settings.componentClass);
			this.children(settings.element).addClass(settings.itemClass);
			this.children(settings.element+':first').addClass(settings.itemClass+'-first');
			this.children(settings.element+':last').addClass(settings.itemClass+'-last');

			var colwidth = Math.round(this.width() / settings.numOfCol);
			var rowGap = parseFloat($('.'+settings.itemClass).css('margin-bottom'));
			var rowHeight = rowGap + parseFloat($('.'+settings.itemClass).css('height'));

			this.children(settings.element).each(function(e) {
				setStyle($(this), e, colwidth, rowHeight);
			});

			// set the main container dimensions
			this.height((Math.ceil(this.children(settings.element).length / settings.numOfCol) * rowHeight)-rowGap);
			this.width(colwidth * settings.numOfCol);

			return this;
		},
		destroy: function() {

		}
	};
	
	$.fn.snaky = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slica.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.snaky');
		}
	};
})(jQuery);