const app = Vue.createApp({
  data() {
    return {
      productos: 
      [
        {nombre:'Labial', precio:120, cantidad:5},
        {nombre:'Base', precio:250, cantidad:10}
      ],

      nuevoName: '',
      nuevaCant: 0,
      nuevoPrecio: 0,
      ivaPorcentaje: 0.16
    }
  },

  methods: {
    aumentar(i) {
      this.productos[i].cantidad++;
    },
    disminuir(i) {
      if (this.productos[i].cantidad > 0) {
        this.productos[i].cantidad--;
      }
    },
    eliminar(i) {
      this.productos.splice(i, 1);
    },
    agregarProducto() {
      this.productos.push({
        nombre: this.nuevoName,
        cantidad: this.nuevaCant,
        precio: this.nuevoPrecio
      });

      this.nuevoName = '';
      this.nuevaCant = 0;
      this.nuevoPrecio = 0;
    }
  },

  computed: {
    subtotal() {
      let total = 0;
      for (const producto of this.productos) {
        total += producto.precio * producto.cantidad;
      }
      return total;
    },

    iva() {
      return this.subtotal * this.ivaPorcentaje;
    },

    total() {
      return this.subtotal + this.iva;
    },

    totalProductos() {
      let total = 0;
      for (const producto of this.productos) {
        total += producto.cantidad;
      }
      return total;
    }
  }
});
app.mount('#app');
