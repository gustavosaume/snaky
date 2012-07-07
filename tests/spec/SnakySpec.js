describe("Snaky component", function() {

  var component;

  beforeEach(function() {
    component = $("<ul></ul>");
    component.appendTo('body');
  });

  afterEach(function() {
    component.remove();
  });

  describe("when is empty", function() {
    beforeEach(function() {
      component.snaky();
    });

    it("no item class should be found", function() {
      expect(component.find('.snaky-item').length).toBe(0);
    });
  });

  describe("when using default configuration", function() {
    beforeEach(function() {
      $('<li data-label="01"></li> \
        <li data-label="02"></li>  \
        <li data-label="03"></li>  \
        <li data-label="04"></li>  \
        <li data-label="05"></li>  \
        <li data-label="06"></li>  \
        <li data-label="07"></li>  \
        <li data-label="08"></li>  \
        <li data-label="09"></li>  \
        <li data-label="10"></li>  \
        <li data-label="11"></li>  \
        <li data-label="12"></li>  \
        <li data-label="13"></li>  \
        <li data-label="14"></li>  \
        <li data-label="15"></li>  \
        <li data-label="16"></li>  \
        <li data-label="17"></li>  \
        <li data-label="18"></li>  \
        <li data-label="19"></li>  \
        <li data-label="20"></li>  \
        <li data-label="21"></li>').appendTo(component);
      component.snaky();
    });

    it("should have the .snaky class", function() {
      expect(component.hasClass("snaky")).toBeTruthy();
    });

    it("should have li.snaky-item as children (21)", function() {
      expect(component.find("li.snaky-item").length).toBe(21);
    });

    it("should have 7 columns", function() {
      expect(component.find(".snaky-item:nth-child(7)").is('.snaky-item-top, .snaky-item-right')).toBeTruthy();
      expect(component.find(".snaky-item:nth-child(14)").position().left).toBe(component.find(".snaky-item:nth-child(1)").position().left);
      expect(component.find(".snaky-item:nth-child(7)").position().left).toBe(component.find(".snaky-item:nth-child(8)").position().left);
    });

    it("should have one first item", function() {
      expect(component.children(".snaky-item:first").hasClass("snaky-item-first")).toBeTruthy();
      expect(component.children(".snaky-item:first").length).toBe(1);
      expect(component.children(".snaky-item:first").data('label')).toBe(1);
    });

    it("should have one last item", function() {
      expect(component.children(".snaky-item:last").hasClass("snaky-item-last")).toBeTruthy();
      expect(component.children(".snaky-item:last").length).toBe(1);
      expect(component.children(".snaky-item:last").data('label')).toBe(21);
    });

    it("should have the top right items with snaky-item-top and snaky-item-right class", function() {
      expect(component.find(".snaky-item.snaky-item-top.snaky-item-right").length).toBe(2);
      expect($(component.find(".snaky-item.snaky-item-top.snaky-item-right")[0]).data('label')).toBe(7);
      expect($(component.find(".snaky-item.snaky-item-top.snaky-item-right")[1]).data('label')).toBe(21);
    });

    it("should have the top left items with snaky-item-top and snaky-item-left class", function() {
      expect(component.find(".snaky-item.snaky-item-top.snaky-item-left").length).toBe(1);
      expect($(component.find(".snaky-item.snaky-item-top.snaky-item-left")[0]).data('label')).toBe(14);
    });

    it("should have the bottom right items with snaky-item-bottom and snaky-item-right class", function() {
      expect(component.find(".snaky-item.snaky-item-bottom.snaky-item-right").length).toBe(2);
      expect($(component.find(".snaky-item.snaky-item-bottom.snaky-item-right")[1]).data('label')).toBe(15);
    });

    it("should have the bottom left items with snaky-item-bottom and snaky-item-left class", function() {
      expect(component.find(".snaky-item.snaky-item-bottom.snaky-item-left").length).toBe(1);
      expect($(component.find(".snaky-item.snaky-item-bottom.snaky-item-left")[0]).data('label')).toBe(8);
    });
  });

  describe("when using custom configuration", function() {
    beforeEach(function() {
      $('<li class="item" data-label="01"></li> \
         <li class="item" data-label="02"></li>  \
         <li class="item" data-label="03"></li>  \
         <li class="item" data-label="04"></li>  \
         <li class="item" data-label="05"></li>  \
         <li class="item" data-label="06"></li>  \
         <li class="item" data-label="07"></li>  \
         <li class="item" data-label="08"></li>  \
         <li class="item" data-label="09"></li>  \
         <li class="item" data-label="10"></li>  \
         <li class="item" data-label="11"></li>  \
         <li class="item" data-label="12"></li>  \
         <li class="item" data-label="13"></li>  \
         <li class="item" data-label="14"></li>  \
         <li class="item" data-label="15"></li>  \
         <li class="item" data-label="16"></li>').appendTo(component);
      component.snaky({
        numOfCol: 8,
        element: '.item',
        componentClass: 'snaky-component',
        itemClass: 'snaky-item-class'
      });
    });

    it("should have the .snaky-component class", function() {
      expect(component.hasClass("snaky-component")).toBeTruthy();
    });

    it("should have .item.snaky-item-class as children", function() {
      expect(component.find(".item.snaky-item-class").length).toBe(16);
    });

    it("should have 8 columns", function() {
      expect(component.find(".snaky-item-class:nth-child(8)").is('.snaky-item-class-top, .snaky-item-class-right')).toBeTruthy();
      expect(component.find(".snaky-item-class:nth-child(16)").position().left).toBe(component.find(".snaky-item-class:nth-child(1)").position().left);
    });
  });
});