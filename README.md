About
=====

Snaky is a simple JQuery component used to render html elements in a S or snake sort of path, going left to right for the even rows (starting at 0) and then right to left for the odd rows. Like this:

	-----------------
	| 1 | 2 | 3 | 4 |
	-----------------
	| 8 | 7 | 6 | 5 |
	-----------------

Options
=======

* numOfCol: number of columns the component will draw. (default: 7)
* element: html element that's going to be repositioned. (default: li)
* componentClass: css class to be assigned to the main component. (default: snaky)
* itemClass: css class to be assigned to the main component elements. (default: snaky-item)

Usage
=====

You only have to call the snaky method on the parent or container component. So, if this is our html

	<ul>
		<li data-label="1"></li>
		<li data-label="2"></li>
		<li data-label="3"></li>
		<li data-label="4"></li>
		<li data-label="5"></li>
		<li data-label="6"></li>
		<li data-label="7"></li>
		<li data-label="8"></li>
	</ul>

We will have to do:

	$('ul').snaky({
		numOfCol: 4
	});

And the component will reorder the li's in their proper position, with the following html as a result

	<ul class="snaky" style="height: 290px; width: 732px; ">
		<li data-label="01" class="snaky-item snaky-item-bottom-left" style="width: 183px; left: 0px; top: 0px; "></li>
		<li data-label="02" class="snaky-item" style="width: 183px; left: 183px; top: 0px; "></li>
		<li data-label="03" class="snaky-item" style="width: 183px; left: 366px; top: 0px; "></li>
		<li data-label="04" class="snaky-item snaky-item-top-right" style="width: 183px; left: 549px; top: 0px; "></li>
		<li data-label="05" class="snaky-item snaky-item-bottom-right" style="width: 183px; left: 549px; top: 30px; "></li>
		<li data-label="06" class="snaky-item" style="width: 183px; left: 366px; top: 30px; "></li>
		<li data-label="07" class="snaky-item" style="width: 183px; left: 183px; top: 30px; "></li>
		<li data-label="08" class="snaky-item snaky-item-top-left" style="width: 183px; left: 0px; top: 30px; "></li>
    </ul>

Additionally, the component reads the height and margin (bottom) attributes from their respective css classes.