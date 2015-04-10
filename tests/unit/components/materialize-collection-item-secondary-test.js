import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-collection-item-secondary', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it is added to the page', function(assert) {
  this.subject();
  this.render();
  assert.ok($('a').length);
});

test('is a A', function(assert) {
  this.subject();
  assert.equal('A', this.$().prop('tagName'));
});

test('it has a href', function(assert) {
  var link = '/link/to/a/page';
  var component = this.subject({linkTo: link});
  this.render();
  assert.equal(component.$().attr('href'), link);
});

test('it has class set', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('secondary-content'));
});
