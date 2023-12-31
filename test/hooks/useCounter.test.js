import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => { 
    test('debe de retornae los valores por defecto', () => { 
        const { result } = renderHook( ()=> useCounter() );
        const { Counter, increment, decrement, reset } = result.current;

        expect( Counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));
     });

     test('debe de generar el counter con el valor de 100', () => { 
        const { result }  = renderHook( () => useCounter(100) );

        expect( result.current.Counter ).toBe(100);
      });

      test('debe de incrementar el contador', () => { 
        const { result } = renderHook( ()=> useCounter(100) );
        const { Counter, increment } = result.current;

        act(()=> {
            increment();
            increment(2);
        });

        expect( result.current.Counter ).toBe(103);
      });

      test('debe de decrementar el contador', () => { 
        const { result } = renderHook( ()=> useCounter(100) );
        const { Counter, decrement } = result.current;

        act(()=> {
            decrement();
            decrement(2);
        });

        expect( result.current.Counter ).toBe(97);
      });


      test('debe de resetear el contador', () => { 
        const { result } = renderHook( ()=> useCounter(100) );
        const { Counter, decrement, reset } = result.current;

        act(()=> {
            decrement();
            reset();
        });

        expect( result.current.Counter ).toBe(100);
      });
 })