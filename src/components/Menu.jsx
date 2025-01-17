import React from "react";
import Pizza from "./Pizza";

function Menu({ pizzas }) {
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>

                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    We're still working on our menu. Please come back later :)
                </p>
            )}

            {/* <Pizza
            name="Pizza Spinaci"
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            photoName="pizzas/spinaci.jpg"
            price={10}
          />
          <Pizza
            name="Pizza Funghi"
            ingredients="Tomato, mushrooms"
            price={12}
            photoName="pizzas/funghi.jpg"
          /> */}
        </main>
    );
}

export default Menu;
