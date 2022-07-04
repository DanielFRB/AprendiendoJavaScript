const Component = (function() {
  const Constructor = function(options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  Constructor.prototype.render = function() {
    const $el = d.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
  };

  Constructor.prototype.setState = function(object) {
    for (let key in object) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = object[key];
      };
    };
    this.render();
  };

  Constructor.prototype.getState = function() {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();