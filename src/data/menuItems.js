export const menuItems = [
  // ===== Bella Napoli (id: 1) =====
  { id: 101, restaurantId: 1, category: 'Пиццы', name: 'Маргарита Classica', description: 'Томатный соус, моцарелла фиор ди латте, свежий базилик, оливковое масло', price: 520, image: '/images/menu/pizza-margherita.jpg', popular: true },
  { id: 102, restaurantId: 1, category: 'Пиццы', name: 'Пеппероні Picante', description: 'Томатный соус, моцарелла, острый пепперони, перец чили', price: 680, image: '/images/menu/pizza-pepperoni.jpg', popular: true },
  { id: 103, restaurantId: 1, category: 'Пиццы', name: 'Четыре сыра', description: 'Моцарелла, горгонзола, пармезан, рикотта, мёд трюфельный', price: 750, image: '/images/menu/pizza-4cheese.jpg', popular: false },
  { id: 104, restaurantId: 1, category: 'Пиццы', name: 'Дьяволо', description: 'Острый томатный соус, моцарелла, салями, халапеньо, оливки', price: 690, image: '/images/menu/pizza-diavola.jpg', popular: false },
  { id: 105, restaurantId: 1, category: 'Паста', name: 'Паста Карбонара', description: 'Спагетти, гуанчале, яичный желток, пармезан, чёрный перец', price: 490, image: '/images/menu/pasta-carbonara.jpg', popular: true },
  { id: 106, restaurantId: 1, category: 'Паста', name: 'Тальятелле Болоньезе', description: 'Тальятелле, соус болоньезе из говядины и свинины, пармезан', price: 510, image: '/images/menu/pasta-bolognese.jpg', popular: false },
  { id: 107, restaurantId: 1, category: 'Напитки', name: 'Лимонад Лимоне', description: 'Свежевыжатый лимон, мята, газированная вода, сахарный сироп', price: 220, image: '/images/menu/lemonade.jpg', popular: false },
  { id: 108, restaurantId: 1, category: 'Напитки', name: 'Тирамису', description: 'Классический итальянский десерт с маскарпоне и кофе', price: 320, image: '/images/menu/tiramisu.jpg', popular: true },

  // ===== Tokyo Garden (id: 2) =====
  { id: 201, restaurantId: 2, category: 'Роллы', name: 'Филадельфия Классик', description: 'Лосось, сливочный сыр, огурец, авокадо, нори', price: 590, image: '/images/menu/roll-philadelphia.jpg', popular: true },
  { id: 202, restaurantId: 2, category: 'Роллы', name: 'Дракон Маки', description: 'Креветка темпура, авокадо, угорь, соус унаги', price: 720, image: '/images/menu/roll-dragon.jpg', popular: true },
  { id: 203, restaurantId: 2, category: 'Роллы', name: 'Спайси Тунец', description: 'Тунец, спайси соус, кунжут, зелёный лук', price: 650, image: '/images/menu/roll-spicy-tuna.jpg', popular: false },
  { id: 204, restaurantId: 2, category: 'Роллы', name: 'Калифорния', description: 'Крабовый микс, авокадо, огурец, икра масаго', price: 480, image: '/images/menu/roll-california.jpg', popular: false },
  { id: 205, restaurantId: 2, category: 'Сашими', name: 'Сашими Лосось', description: '5 слайсов свежего норвежского лосося', price: 550, image: '/images/menu/sashimi-salmon.jpg', popular: true },
  { id: 206, restaurantId: 2, category: 'Сашими', name: 'Сашими Тунец', description: '5 слайсов премиального голубого тунца', price: 680, image: '/images/menu/sashimi-tuna.jpg', popular: false },
  { id: 207, restaurantId: 2, category: 'Горячее', name: 'Рамен Тонкоцу', description: 'Наваристый бульон, чашу, яйцо аджицуке, нори, ростки бамбука', price: 620, image: '/images/menu/ramen.jpg', popular: true },
  { id: 208, restaurantId: 2, category: 'Напитки', name: 'Зелёный чай Матча', description: 'Премиальный церемониальный матча, взбитый традиционным способом', price: 280, image: '/images/menu/matcha.jpg', popular: false },

  // ===== Burger Republic (id: 3) =====
  { id: 301, restaurantId: 3, category: 'Бургеры', name: 'Classic Smash', description: 'Котлета Angus 180г, чеддер, маринованный огурец, лук, горчица, кетчуп', price: 490, image: '/images/menu/burger-classic.jpg', popular: true },
  { id: 302, restaurantId: 3, category: 'Бургеры', name: 'Bacon BBQ', description: 'Двойная котлета, бекон, чеддер, BBQ соус, хрустящий лук', price: 650, image: '/images/menu/burger-bbq.jpg', popular: true },
  { id: 303, restaurantId: 3, category: 'Бургеры', name: 'Mushroom Swiss', description: 'Котлета, жареные грибы, швейцарский сыр, соус трюфель-майо', price: 590, image: '/images/menu/burger-mushroom.jpg', popular: false },
  { id: 304, restaurantId: 3, category: 'Бургеры', name: 'Чикен Спайси', description: 'Хрустящая куриная котлета, перец халапеньо, айоли, салат', price: 470, image: '/images/menu/burger-chicken.jpg', popular: false },
  { id: 305, restaurantId: 3, category: 'Картошка', name: 'Картошка фри', description: 'Хрустящий картофель фри с морской солью', price: 190, image: '/images/menu/fries.jpg', popular: true },
  { id: 306, restaurantId: 3, category: 'Картошка', name: 'Картошка по-деревенски', description: 'Дольки с розмарином, чесночным айоли', price: 230, image: '/images/menu/potato-wedges.jpg', popular: false },
  { id: 307, restaurantId: 3, category: 'Напитки', name: 'Клубничный шейк', description: 'Натуральная клубника, сливочное мороженое, молоко', price: 320, image: '/images/menu/milkshake.jpg', popular: true },
  { id: 308, restaurantId: 3, category: 'Напитки', name: 'Кола', description: 'Coca-Cola, 0.5л', price: 150, image: '/images/menu/cola.jpg', popular: false },

  // ===== Dragon Palace (id: 4) =====
  { id: 401, restaurantId: 4, category: 'Вок', name: 'Говядина в устричном соусе', description: 'Нежная говядина, перец, лук, устричный соус, рис', price: 590, image: '/images/menu/wok-beef.jpg', popular: true },
  { id: 402, restaurantId: 4, category: 'Вок', name: 'Курица Кунг Пао', description: 'Курица, арахис, перец чили, сычуаньский перец, рис', price: 520, image: '/images/menu/wok-kungpao.jpg', popular: true },
  { id: 403, restaurantId: 4, category: 'Дим-самы', name: 'Дим-самы с креветкой', description: '6 штук. Рисовое тесто, тигровые креветки, бамбук', price: 420, image: '/images/menu/dimsum-shrimp.jpg', popular: false },
  { id: 404, restaurantId: 4, category: 'Дим-самы', name: 'Дим-самы со свининой', description: '6 штук. Рисовое тесто, свинина, имбирь, зелёный лук', price: 380, image: '/images/menu/dimsum-pork.jpg', popular: false },
  { id: 405, restaurantId: 4, category: 'Супы', name: 'Том Ям Кунг', description: 'Остро-кислый тайский суп, тигровые креветки, грибы шиитаке', price: 480, image: '/images/menu/tomyam.jpg', popular: true },

  // ===== Sushi Sakura (id: 5) =====
  { id: 501, restaurantId: 5, category: 'Роллы', name: 'Сакура Специал', description: 'Лосось, тунец, авокадо, огурец, икра тобико', price: 680, image: '/images/menu/roll-sakura.jpg', popular: true },
  { id: 502, restaurantId: 5, category: 'Роллы', name: 'Радуга Маки', description: 'Ассорти рыбы (лосось, тунец, желтохвост), авокадо', price: 720, image: '/images/menu/roll-rainbow.jpg', popular: true },
  { id: 503, restaurantId: 5, category: 'Нигири', name: 'Нигири Лосось', description: '2 штуки. Рис, свежий лосось, васаби', price: 280, image: '/images/menu/nigiri-salmon.jpg', popular: false },
  { id: 504, restaurantId: 5, category: 'Нигири', name: 'Нигири Угорь', description: '2 штуки. Рис, запечённый угорь, соус унаги', price: 320, image: '/images/menu/nigiri-eel.jpg', popular: false },

  // ===== Pizza Storm (id: 6) =====
  { id: 601, restaurantId: 6, category: 'Пиццы', name: 'Гавайская', description: 'Томатный соус, моцарелла, ветчина, ананас', price: 450, image: '/images/menu/pizza-hawaii.jpg', popular: true },
  { id: 602, restaurantId: 6, category: 'Пиццы', name: 'Мясная буря', description: 'Томатный соус, моцарелла, говядина, курица, бекон, пепперони', price: 620, image: '/images/menu/pizza-meat.jpg', popular: true },
  { id: 603, restaurantId: 6, category: 'Пиццы', name: 'Овощная', description: 'Томатный соус, моцарелла, томаты, перец, лук, шампиньоны, оливки', price: 420, image: '/images/menu/pizza-veggie.jpg', popular: false },
  { id: 604, restaurantId: 6, category: 'Десерты', name: 'Чизкейк Нью-Йорк', description: 'Классический чизкейк с клубничным кули', price: 290, image: '/images/menu/cheesecake.jpg', popular: true },

  // ===== Smash Burger Co. (id: 7) =====
  { id: 701, restaurantId: 7, category: 'Смэш-бургеры', name: 'The Original Smash', description: 'Двойная котлета Angus, американский сыр, маринованный огурец, лук', price: 520, image: '/images/menu/smash-original.jpg', popular: true },
  { id: 702, restaurantId: 7, category: 'Смэш-бургеры', name: 'Truffle Smash', description: 'Котлета Wagyu, трюфельное масло, пармезан, руккола', price: 890, image: '/images/menu/smash-truffle.jpg', popular: true },
  { id: 703, restaurantId: 7, category: 'Хот-доги', name: 'NY Style Hot Dog', description: 'Говяжья сосиска, маринованный огурец, горчица, кетчуп, лук', price: 350, image: '/images/menu/hotdog.jpg', popular: false },

  // ===== Pasta Maestro (id: 8) =====
  { id: 801, restaurantId: 8, category: 'Паста', name: 'Лазанья Болоньезе', description: 'Слоёная лазанья, соус болоньезе, соус бешамель, пармезан', price: 580, image: '/images/menu/lasagna.jpg', popular: true },
  { id: 802, restaurantId: 8, category: 'Паста', name: 'Феттучини Альфредо', description: 'Феттучини, сыр пармезан, сливочное масло, чёрный перец', price: 490, image: '/images/menu/fettuccine.jpg', popular: true },
  { id: 803, restaurantId: 8, category: 'Ризотто', name: 'Ризотто с грибами', description: 'Карнароли, белые грибы, пармезан, трюфельное масло', price: 620, image: '/images/menu/risotto.jpg', popular: false },
  { id: 804, restaurantId: 8, category: 'Ризотто', name: 'Ризотто с морепродуктами', description: 'Карнароли, тигровые креветки, кальмары, мидии, шафран', price: 720, image: '/images/menu/risotto-seafood.jpg', popular: true },
  { id: 805, restaurantId: 8, category: 'Десерты', name: 'Тирамису', description: 'Классический рецепт, маскарпоне, савоярди, эспрессо', price: 340, image: '/images/menu/tiramisu2.jpg', popular: true },
];
