import Button from "react-bootstrap/esm/Button";
import { pizzaCart } from "../assets/pizzas";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  // const [cart, setCart] = useState(pizzaCart);
  const { cart, total } = useContext(CartContext);

  // const agregarPizza = (pizza) => {
  //   const nuevaPizza = [...cart];
  //   const indice = nuevaPizza.findIndex(
  //     (element) => element.name === pizza.name,
  //   );
  //   nuevaPizza[indice].count += 1;
  //   setCart(nuevaPizza);
  // };

  // const quitarPizza = (pizza) => {
  //   const restarPizza = [...cart];
  //   const indice = restarPizza.findIndex(
  //     (element) => element.name === pizza.name,
  //   );
  //   if (restarPizza[indice].count === 1) {
  //     const quitarPizza = restarPizza.filter(
  //       (element) => element.name !== pizza.name,
  //     );
  //     setCart(quitarPizza);
  //   } else {
  //     restarPizza[indice].count -= 1;
  //     setCart(restarPizza);
  //   }
  // };

  // const calcularTotal = () => {
  //   let total = 0;
  //   const carrito = [...cart];
  //   carrito.forEach((element) => (total += element.price * element.count));
  //   return total;
  // };

  // const total = calcularTotal();

  return (
    <div className="carro">
      <div className="contenedorDetalle">
        <div>
          <p>Detalles del pedido:</p>
        </div>
        <div className="Detalle">
          {cart?.map((pizza) => {
            return (
              <div className="pizzaCarrito" key={pizza.id}>
                <div>
                  <img src={pizza.img} width="50" height="50" /> {pizza.name}
                </div>
                <div>
                  ${pizza.price.toLocaleString("es-CL")}{" "}
                  <Button onClick={() => quitarPizza(pizza)}>-</Button>{" "}
                  {pizza.count}{" "}
                  <Button onClick={() => agregarPizza(pizza)}>+</Button>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ margin: "1rem" }}>
          Total: $: {total.toLocaleString("es-CL")}
        </div>
        <div style={{ margin: "1rem" }}>
          <Button>Pagar</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
