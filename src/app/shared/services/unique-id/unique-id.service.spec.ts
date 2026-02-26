import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();

    expect(true).toBeTrue(); // Verdade se o valor literal true é igual a true. Usar essa comparação de preferência.
    expect(new Boolean(true)).toBe(new Boolean(true)); // Verdade se ps dois objetos são iguais. Ou seja, só serão iguais se apontarem para a mesma posição de memória.
    expect('a').toBeTruthy(); // Verdade se o valor não é nulo, undefined ou '' (vazio)
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should throw when called with empty`, () => {
      const emptyValues = [null, undefined, '', '0', '1'];
      emptyValues.forEach(emptyValue => {
        expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`) // Exibe qual valor no qual o teste falhou
        .toThrow();
      });
  });

});
