
import test from 'node:test';
import assert from 'node:assert/strict';

import { emailValido } from '../src/utils/validacao.js';

test('UT-01: deve aceitar um e-mail válido', () => {
  assert.equal(emailValido('usuario@email.com'), true);
});

test('UT-02: deve rejeitar e-mail sem @', () => {
  assert.equal(emailValido('usuarioemail.com'), false);
});

test('UT-03: deve rejeitar e-mail sem domínio completo', () => {
  assert.equal(emailValido('usuario@email'), false);
});

test('UT-04: deve rejeitar e-mail com mais de 100 caracteres', () => {
  const email = 'a'.repeat(91) + '@email.com';

  assert.equal(emailValido(email), false);
});

test('UT-05: deve rejeitar valores que não sejam strings', () => {
  assert.equal(emailValido(null), false);
  assert.equal(emailValido(undefined), false);
  assert.equal(emailValido(123), false);
});
