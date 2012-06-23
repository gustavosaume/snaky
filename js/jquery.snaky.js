(function($) {

	// Default options
	var myOptions = {
		numOfCol: 5,
		offsetX: 5,
		offsetY: 5,
		element: 'li',
		rowHeight: 30,
	};
	
	//dynamic variable
	var container, colwidth;
	var rowCount = 0;
	
	//ie indexOf fix
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(elt /*, from*/) {
			var len = this.length >>> 0;

			var from = Number(arguments[1]) || 0;
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0)
				from += len;

				for (; from < len; from++) {
					if (from in this &&
					this[from] === elt)
					return from;
				}
			return -1;
		};
	}
	
	var getPostion = function(index)
	{
		var x = index % myOptions.numOfCol;
		
		// if the current row is odd we go right to left, so we
		// substract the current X to the total number of rows
		var position = {
			x: rowCount % 2 ? myOptions.numOfCol - x - 1 : x,
			y: rowCount,
		};

		// when we fill the whole row we move to the next one
		if (x == (myOptions.numOfCol-1))
			rowCount++;
		
		return position;
	}

	var setPosition = function(obj, index) {
		var pos = getPostion(index);
		var itemWidth = colwidth - (obj.outerWidth() - obj.width());

		obj.css({
			'width': itemWidth,
			'left': pos.x * colwidth,
			'top': pos.y * myOptions.rowHeight,
			'position': 'absolute'
		});
	}
	
	$.fn.snaky = function(options) {
		if (options && typeof options === 'object') {
			$.extend(myOptions, options);
		}
		
		container = $(this);
		colwidth = container.width() / myOptions.numOfCol;

		container.children(myOptions.element).each(function(e) {
			setPosition($(this), e);
		});
		
		container.height((rowCount * myOptions.rowHeight)+20);
		container.css('position', 'relative');
		return this;
	}
})(jQuery);