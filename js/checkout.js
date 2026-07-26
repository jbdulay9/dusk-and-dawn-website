document.querySelectorAll(".order-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const item =
            btn.dataset.item ||
            btn.closest(".card")?.querySelector("h3")?.innerText ||
            "Item";

        const priceRaw =
            btn.dataset.price ||
            btn.closest(".card")?.querySelector(".price span")?.innerText ||
            "";

        const price = String(priceRaw).replace(/[^0-9.]/g, "");

        const params = new URLSearchParams({

            item: item,

            price: price

        });

        window.location.href =
            `checkout.html?${params.toString()}`;

    });

});