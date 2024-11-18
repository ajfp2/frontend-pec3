# Enumera y explica las principales ventajas que aporta el uso de TypeScript sobre JavaScript

### Para mi las principales ventajas son:
- Beneficios de tipado, al poder definir los tipos de datos en variables.
- Detección de errores antes de su ejecución

En el ejercicio ejer1.ts se ha definido una interfaz llamada DOG, con dos propiedades, una de tipo string y otra de tipo number. Luego se define la función baby que recibe dos parametros de tipo Dog, por lo que deben cumplir lo que marca la interfaz, por lo que no se puede asignar en Dog2 la propiedad kind a true, ya que no puede ser boolean y esto nos marca el siguiente error :
```
ejer1.ts:15:3 - error TS2322: Type 'boolean' is not assignable to type 'string'
```
sin embargo en javascript no nos da ningun error porque podemos cambiar el tipo de variable cuando queramos ya que es un lenguaje tipado dinámicamente.