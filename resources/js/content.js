const root_dir = "resources/img/artworks/";

let gallery_imgs = [
  
  { src: `${root_dir}android_things.webp`, title: "Tech setup", desc: "A sleek collection of modern gadgets (not for a apple user) including a tablet, smartwatches, camera, earbuds, and a gaming phone, neatly arranged on a reflective surface.", tag: "Models Low-poly" },
  
  { src: `${root_dir}shield.webp`, title: "Guardian Shields", desc: "A pair of sturdy wooden shields, each with a different design. The left shield features two metal braces for added protection, while the right shield has a central metal hub with a glowing orb in the center. The shields are said to be enchanted with protective magic, making them nearly impenetrable to enemy attacks.", tag: "Models Low-poly Weapon" },
  
  { src: `${root_dir}HoverScout.webp`, title: "Explorer Robo", desc: "A cube-shaped robot with mechanical arms and a wheel for movement, traversing a mysterious and foggy landscape in a futuristic world.", tag: "Game Assets 3D" },
  
  { src: `${root_dir}futuristic_chess_console.webp`, title: "Sci-fi Chess Board", desc: "A high-tech, glowing chessboard with advanced mechanisms and bold geometric lines for futuristic gameplay.", tag: "Game Weapon Sci-fi" },
  
  { src: `${root_dir}Yellow_car_studio.webp`, title: "Volvo P1800 [Isometric]", desc: "A Volvo P1800 in a futuristic yellow studio, highlighting the timeless charm of vintage automotive design under modern lighting.", tag: "Assets High-poly Isometric" },
  
  { src: `${root_dir}basketball_court.webp`, title: "BasketBall Court [Isometric]", desc: " A vibrant basketball court, adorned with dynamic graffiti and essential equipment, captures the essence of urban athleticism and community spirit.", tag: "Weapon Sci-fi Isometric" },
  
  { src: `${root_dir}BedRoom.webp`, title: "BedRoom [Isometric]", desc: "A minimalist bedroom, bathed in soft blue hues, offers a tranquil escape with its clean lines, comfortable bedding,a prayer Jainamaj, and a touch of oriental charm.", tag: "Assets High-poly Isometric" },
  
  { src: `${root_dir}home_office.webp`, title: "Home Office [Isometric]", desc: "A functional and inviting home office, featuring a minimalist desk, comfortable seating, and a well-stocked bookshelf, provides a productive and inspiring workspace.", tag: "Game Assets 3D Isometric" },
  
  { src: `${root_dir}gaming_room.webp`, title: "Gaming Room [Isometric]", desc: "A futuristic gaming den, featuring a high-tech setup, immersive decor, and comfortable seating, provides the ultimate escape for gaming enthusiasts.", tag: "Models High-poly Isometric" },
  
  { src: `${root_dir}police_car_studio.webp`, title: "Police SUV [Isometric]", desc: "A modern car studio, showcasing a sleek and futuristic electric car model, features state-of-the-art equipment, professional lighting, and a backdrop designed to highlight the vehicle's innovative design.", tag: "Assets High-poly Isometric" },
  
  { src: `${root_dir}living_room.webp`, title: "Living Room [Isometric]", desc: "A cozy living room, adorned with traditional furnishings, intricate calligraphy, and warm lighting, offers a welcoming and inviting atmosphere.", tag: "Isometric Models" },
  
  { src: `${root_dir}concert_hall.webp`, title: "Concert Stage [Isometric]", desc: "A futuristic and immersive event space, featuring a large Ethereum logo projection, a dynamic stage setup, and comfortable seating, is ready to host a vibrant and exciting launch party for the Ethereum community.", tag: "Game Assets 3D Isometric" },
  
  { src: `${root_dir}chess_championshin_room.webp`, title: "Chess Championship Room [Isometric]", desc: "A professional chess championship studio, featuring a large chessboard, a live broadcast setup, and spectator seating, provides an immersive experience for viewers and participants alike.", tag: "Isometric High-poly Sci-fi" },
  
  { src: `${root_dir}red_car_studio.webp`, title: " Ferrari 488 GTE [Isometric]", desc: "A striking red racing car is showcased in a vibrant room with circular windows, surrounded by modern decoration and creative lighting, highlighting its dynamic design.", tag: "Game Assets 3D Isometric" },
  
  { src: `${root_dir}Crusher.webp`, title: "Morningstar", desc: "A mace-like weapon with a cylindrical head covered in sharp, pyramid-shaped spikes. The head is attached to a wooden handle with metal rings at the top and bottom. The background is a textured, gray wall.", tag: "Untextured Weapon Sci-fi" },
  
  { src: `${root_dir}white_car_studio.webp`, title: "Mercedes-Benz 300 SL Gullwing [Isometric]", desc: "A sleek vintage car set in a modern photography studio, capturing its timeless design under studio lights.", tag: "Models High-poly Isometric" },
  
  { src: `${root_dir}Spear.webp`, title: "Glaive of the Crimson Dawn", desc: "A fearsome polearm with a long, curved blade and a wooden shaft wrapped in red and gold cord. The blade's edge is serrated, and the tip is sharp and pointed. The weapon is said to have been forged in the heart of a volcano and imbued with the power of fire.", tag: "Models Low-poly Weapon" },
  
  { src: `${root_dir}Sword.webp`, title: "Flamefang", desc: " A sleek and stylish sword with a silver blade and a red and gold hilt. The pommel is shaped like a flame, and the guard is adorned with intricate engravings. The blade is said to be capable of cutting through steel like butter.", tag: "Assets High-poly Weapon Models" },
  
  { src: `${root_dir}Sword_yellow.webp`, title: "Sunblade", desc: " A majestic sword with a long, straight blade that shimmers with a golden light. The hilt is adorned with intricate carvings and a glowing gem at the pommel. The blade is said to be forged from the heart of a star, and its light can blind enemies and heal the wounded.", tag: "Game Assets 3D" },
  
  { src: `${root_dir}Axe.webp`, title: "Double-Bladed Battle Axe", desc: "A fearsome double-bladed battle axe, with a central spike and a red-wrapped wooden handle. Ideal for close-quarters combat, this weapon's design is both intimidating and visually striking.", tag: "Weapon Sci-fi" },
  
  { src: `${root_dir}apple_things.webp`, title: "Apple Setup", desc: "A stylish assortment of Apple devices including an iPhone, iPad with apple pencil, Apple watch, AirPods, Apple air tag,and a classic camera, all meticulously organized on a smooth reflective surface.", tag: "Assets High-poly" },
  
  { src: `${root_dir}Sword_silver.webp`, title: "Shadowblade", desc: "A sleek and deadly blade with a long, straight edge and a black, textured grip. The blade is designed to be lightweight and easily concealed, making it ideal for stealthy combat. The blade is said to be capable of cutting through almost anything, and its sharp edge can inflict devastating wounds.", tag: "Assets Weapon Sci-fi" },
  
  { src: `${root_dir}Hammer.webp`, title: "Thunderstrike", desc: "A mighty warhammer with a heavy metal head and a long, red-wrapped handle. The head is adorned with gold accents and a glowing red gem in the center. The hammer is said to be capable of shattering stone and metal with a single blow, and its thunderous impact can stun enemies and shake the earth.", tag: "Assets High-poly Weapon" },
  
  { src: `${root_dir}old_weapon_set.webp`, title: "The Hero's Arsenal", desc: "The Hero's Arsenal is a collection of powerful weapons, each with its own unique abilities and history. These weapons are said to have been forged by ancient gods and passed down through generations of heroes, granting their wielders extraordinary power and courage.", tag: "Game Assets 3D" },
  
  { src: `${root_dir}loot_box.webp`, title: "Treasure Chest", desc: "A wooden chest with a blue metal frame and a small wooden sign that reads 'Loot.' The chest is closed and appears to be locked. It is likely filled with valuable items or treasures.", tag: "Weapon Assets" },
  
  { src: `${root_dir}spistolblue.webp`, title: "Photon Blasters", desc: "A pair of futuristic hand cannons with a sleek, blue and orange design. The weapons feature a large, circular chamber that emits a powerful beam of light when fired. The handles are textured and ergonomic for easy grip.", tag: "Assets High-poly Sci-fi Weapon" },
  
  { src: `${root_dir}spistolsilver.webp`, title: "Neutron Pulse Pistols", desc: "A pair of powerful, futuristic hand cannons with a sleek, black and white design. The weapons feature a large, cylindrical chamber that emits a concentrated beam of neutron particles when fired. The handles are textured and ergonomic for easy grip.", tag: "Game Assets 3D Weapon Sci-fi" },

{ src: `${root_dir}sgunblue.webp`, title: "Quantum Ray Gun", desc: "A futuristic, high-powered ray gun with a sleek, white and blue design. The weapon features a large, rectangular barrel that emits a concentrated beam of energy. The grip is textured for easy handling, and the trigger is large and easy to press.", tag: "Assets Weapon Sci-fi" },
  
{ src: `${root_dir}srifelblack.webp`, title: "Tachyon Pulse Rifle", desc: "A powerful, futuristic rifle with a sleek, black and white design. The weapon features a long, barrel with a scope attached, as well as a variety of lights and indicators. The rifle fires a rapid-fire beam of tachyon particles, capable of penetrating even the toughest armor.", tag: "Models High-poly Assets 3D" },
  
{ src: `${root_dir}robot_yellow.webp`, title: "Orion", desc: "A small, friendly robot with a yellow body and black tracks. Beep has a large, expressive screen for a face that displays various emotions. It has two antennas on top and two small cannons mounted on its sides. Beep is designed to be a helpful companion and can perform a variety of tasks, such as exploring new environments and assisting humans.", tag: "Assets High-poly Sci-fi" },
  
{ src: `${root_dir}car.webp`, title: "Neon Nights", desc: "A sleek, modern sports car bathed in the glow of neon lights. The car's dark exterior contrasts beautifully with the vibrant blue and red accents, creating a striking and futuristic aesthetic. The car appears to be parked in a dimly lit garage or underground parking lot.", tag: "Models 3D" },
  
{ src: `${root_dir}car_2.webp`, title: "1972 Datsun 240K GT", desc: "A classic 1972 Datsun 240K GT, showcased in a minimalist, dimly lit studio. The car's sleek lines and timeless design are highlighted by the dark, reflective surface it's parked on. The 'Hakosuka' nickname, derived from the Japanese word 'hako' meaning 'box,' is a nod to the car's distinctive boxy shape.", tag: "High-poly Sci-fi" },
  
{ src: `${root_dir}Portion.webp`, title: "Elixir of Eternal Youth", desc: "A small, round glass vial filled with a vibrant purple liquid that bubbles and shimmers slightly. Sealed with a cork, the vial is said to contain a powerful elixir capable of granting eternal youth to anyone who drinks it. The liquid is rumored to have been created by ancient alchemists using rare and magical ingredients.", tag: "3D Models" },
  
{ src: `${root_dir}Chair.webp`, title: "Husk Chair", desc: " A modern and stylish armchair featuring a unique, organic shape with soft, quilted cushions. The chair's base is a sleek, white pedestal with a rotating swivel mechanism, allowing for easy movement. The cushions are upholstered in a neutral gray fabric, providing a comfortable and inviting seating experience.", tag: "3D Models" },

{ src: `${root_dir}Drone_base.webp`, title: "X-Frame Drone Frame", desc: "A lightweight and durable drone frame made from high-quality carbon fiber. The frame features an X-shaped design, providing excellent stability and maneuverability. It's designed to accommodate various components, including flight controllers, motors, and propellers, making it a versatile choice for building custom drones.", tag: "Assets Weapon Sci-fi" },
  
{ src: `${root_dir}Rolex.webp`, title: "Time Suspended", desc: "A Rolex Submariner watch seemingly defying gravity, hovering between two cylindrical magnetic platforms. The watch's black dial and polished steel case are beautifully illuminated, highlighting its intricate design and luxurious craftsmanship. The image creates a sense of mystery and intrigue, as if the watch is frozen in time.", tag: "3D Models Sci-fi" },

{ src: `${root_dir}Camera.webp`, title: "Lens of Possibilities", desc: "A Canon EOS 5D Mark IV camera surrounded by a variety of interchangeable lenses, all suspended in mid-air against a dark background. The image captures the versatility and creativity of photography, showcasing the different perspectives and focal lengths that can be achieved with a single camera body.", tag: "Models 3D Sci-fi" },
  
{ src: `${root_dir}Headphone.webp`, title: "Tech and Treasure", desc: "A laptop with a vibrant, colorful display sits open on a desk, illuminated by the surrounding neon lights. Next to it lies a worn, leather-bound book titled 'The Treasure,' hinting at a hidden adventure. A pair of stylish headphones with a rainbow-colored LED strip rests nearby, ready to immerse the user in a world of music or gaming.", tag: "3D Models Sci-fi" },

{ src: `${root_dir}Playstation5.webp`, title: "Heart of Gaming", desc: "A sleek, white PlayStation 5 console stands tall against a dark background, illuminated by a blue light. A matching DualSense controller rests nearby, showcasing the console's futuristic design and cutting-edge technology. The image evokes a sense of excitement and anticipation for the next generation of gaming experiences.", tag: "Models Assets 3D" },
  
{ src: `${root_dir}chat_coffee.webp`, title: "Meeting of Minds", desc: "A minimalist scene featuring two modern chairs facing a small, square table on a checkered floor. A laptop, notebook, phone, and coffee cups are arranged on the table, suggesting a productive meeting or brainstorming session. The clean lines and neutral colors create a calm and focused atmosphere.", tag: "Models" },

{ src: `${root_dir}Chair_2.webp`, title: "Director's Duo", desc: "A pair of classic folding chairs with a dark wooden frame and a gray canvas seat. These chairs are often used on movie sets and are synonymous with the filmmaking industry. Their simple yet elegant design makes them versatile pieces that can be used both indoors and outdoors.", tag: "3D Models" },
  
{ src: `${root_dir}Wall_art.webp`, title: "Serene Sunset", desc: "A tranquil living room scene featuring a modern console table with a vase of fresh flowers, a collection of books, and a captivating painting of a mountain landscape bathed in the golden light of a setting sun. A comfortable rocking chair invites relaxation and contemplation in this peaceful setting.", tag: "3D Models" },

{ src: `${root_dir}Planet.webp`, title: "Celestial Serenity", desc: "A tranquil cosmic scene featuring a distant, Earth-like planet bathed in the soft glow of starlight. The planet's surface is a mesmerizing blend of blue oceans, white clouds, and verdant continents, reminiscent of our own world. The image evokes a sense of wonder and awe at the vastness of the universe and the possibility of life beyond our own planet.", tag: "Sci-fi" },

{ src: `${root_dir}sword_person.webp`, title: "The Sword", desc: "A shining magical sword gleamed with an ethereal light, its hilt adorned with intricate runes. Its blade, sharp as a razor, seemed to hum with an ancient power, ready to strike down any foe.", tag: "Weapon Sci-fi" },

{ src: `${root_dir}Surface_back.webp`, title: "A Modern Masterpiece: Microsoft Surface Pro 4", desc: "This sleek and versatile Surface Pro 4 tablet, showcased in a minimalist gym setting, seamlessly blends power and portability. Its powerful processor and stunning display make it ideal for work, play, and everything in between. The iconic Microsoft logo adorns the back, a testament to its quality and innovation.", tag: "Untextured Weapon Sci-fi" },

{ src: `${root_dir}fire_grenade.webp`, title: "Fire balls", desc: "A futuristic weapon, the sci-fi fire grenade emits a concentrated burst of plasma energy upon detonation. Its fiery blast can incinerate targets and ignite surrounding materials with incredible intensity. The grenade's casing is often made of a heat-resistant alloy, designed to withstand the extreme temperatures it generates.", tag: "Weapon Sci-fi" }

];

  