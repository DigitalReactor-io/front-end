import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('registration-credentials', 'Integration | Component | registration credentials', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{registration-credentials}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#registration-credentials}}
      template block text
    {{/registration-credentials}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
