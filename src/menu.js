import chocolatedonut from './images/baked-chocolate-donuts.jpg';
import vanilladonut from './images/vanilla-donut.jpg';
import strawberrydonut from './images/strawberry-donut.jpg'

function menu(template){
    template.innerHTML = ` <div class="donuts-container">
                <div class="donut-container">
                    <div class="donut-picture-container">
                        <img src="${chocolatedonut}" alt="chocolate donuts" class="donut-picture">
                    </div>
                    <div class="donut-info">
                        <div class="donut-name">
                            Chocolate Donut
                        </div>
                        <div class="donut-price">
                            5$
                        </div>
                    </div>
                </div>
                <div class="donut-container">
                    <div class="donut-picture-container">
                        <img src="${vanilladonut}" alt="vanilla donut" class="donut-picture">
                    </div>
                    <div class="donut-info">
                        <div class="donut-name">
                            Vanilla Donut
                        </div>
                        <div class="donut-price">
                            4$
                        </div>
                    </div>
                </div>
                <div class="donut-container">
                    <div class="donut-picture-container">
                        <img src="${strawberrydonut}" alt="strawberry donut" class="donut-picture">
                    </div>
                    <div class="donut-info">
                        <div class="donut-name">
                            Strawberry Donut
                        </div>
                        <div class="donut-price">
                            6$
                        </div>
                    </div>
                </div>
            </div>`
}

export {menu};