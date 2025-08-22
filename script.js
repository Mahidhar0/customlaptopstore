document.addEventListener('DOMContentLoaded', () => {
    const productData = [
        { id: 1, name: '16GB DDR4 RAM', category: 'RAM', price: 75.00, description: 'High-performance 16GB DDR4 3200MHz RAM module. Perfect for gaming and multitasking.', featured: true, image: 'https://vipsystems.in/wp-content/uploads/2024/02/samsung_16gb_ddr4_ram_1626096585_b8596728_progressive-1-e1707572553755.jpg' },
        { id: 2, name: '1TB NVMe SSD', category: 'SSD', price: 120.00, description: 'Blazing fast 1TB NVMe M.2 SSD with read speeds up to 3,500 MB/s. Drastically reduces load times.', featured: true, image: 'https://placehold.co/600x400/111827/39FF14?text=SSD' },
        { id: 3, name: 'Intel Core i7 Processor', category: 'Processor', price: 350.00, description: '14-core Intel Core i7 processor designed for high-end gaming and content creation.', featured: true, image: 'https://placehold.co/600x400/111827/39FF14?text=CPU' },
        { id: 4, name: '15.6" FHD Screen', category: 'Screen', price: 95.00, description: 'A vibrant 15.6-inch Full HD (1920x1080) IPS display with a 144Hz refresh rate for smooth visuals.', featured: true, image: 'https://placehold.co/600x400/111827/39FF14?text=Screen' },
        { id: 5, name: '8GB DDR4 RAM', category: 'RAM', price: 40.00, description: 'Reliable 8GB DDR4 3200MHz RAM module. A great starting point for any build.', image: 'https://vipsystems.in/wp-content/uploads/2024/02/samsung_16gb_ddr4_ram_1626096585_b8596728_progressive-1-e1707572553755.jpg' },
        { id: 6, name: '512GB SATA SSD', category: 'SSD', price: 65.00, description: 'Cost-effective 512GB SATA III SSD. A huge upgrade over traditional hard drives.', image: 'https://placehold.co/600x400/111827/39FF14?text=SSD' },
        { id: 7, name: 'AMD Ryzen 5 Processor', category: 'Processor', price: 280.00, description: '6-core AMD Ryzen 5 processor with excellent multi-threaded performance for productivity.', image: 'https://placehold.co/600x400/111827/39FF14?text=CPU' },
        { id: 8, name: '14" QHD Screen', category: 'Screen', price: 150.00, description: 'A sharp 14-inch QHD (2560x1440) display with 100% sRGB color accuracy for creative professionals.', image: 'https://placehold.co/600x400/111827/39FF14?text=Screen' },
        { id: 9, name: '32GB DDR4 RAM Kit', category: 'RAM', price: 140.00, description: 'A dual-channel kit of 32GB (2x16GB) DDR4 3600MHz RAM for enthusiast-level performance.', image: 'https://vipsystems.in/wp-content/uploads/2024/02/samsung_16gb_ddr4_ram_1626096585_b8596728_progressive-1-e1707572553755.jpg' },
        { id: 10, name: '2TB NVMe SSD', category: 'SSD', price: 210.00, description: 'Massive 2TB NVMe M.2 SSD for storing your entire game library and large project files.', image: 'https://placehold.co/600x400/111827/39FF14?text=SSD' },
        { id: 13, name: 'NVIDIA GeForce RTX 3050', category: 'Graphics Card', price: 400.00, description: 'Entry-level ray tracing and DLSS with the NVIDIA RTX 3050. Great for 1080p gaming.', image: 'https://placehold.co/600x400/111827/39FF14?text=GPU' },
        { id: 14, name: 'NVIDIA GeForce RTX 4060', category: 'Graphics Card', price: 650.00, description: 'Mid-range powerhouse, the NVIDIA RTX 4060 offers excellent 1080p and 1440p gaming performance.', image: 'https://placehold.co/600x400/111827/39FF14?text=GPU' },
        { id: 15, name: 'AMD Radeon RX 7800M XT', category: 'Graphics Card', price: 750.00, description: 'High-end AMD graphics with the Radeon RX 7800M XT, perfect for competitive 1440p gaming.', image: 'https://placehold.co/600x400/111827/39FF14?text=GPU' },
        { id: 18, name: 'Standard AC Adapter', category: 'AC Adapter', price: 25.00, description: 'A reliable 65W AC adapter, compatible with a wide range of laptops.', image: 'https://placehold.co/600x400/111827/39FF14?text=Adapter' },
        { id: 19, name: 'Universal Power Cord', category: 'Power Cord', price: 10.00, description: 'Standard 3-prong power cord, 6 feet in length. Fits most AC adapters.', image: 'https://placehold.co/600x400/111827/39FF14?text=Cord' },
        { id: 20, name: 'Intel Core i3-1215U Processor', category: 'Processor', price: 150.00, description: 'An efficient Intel Core i3 processor for everyday computing tasks.', image: 'https://placehold.co/600x400/111827/39FF14?text=CPU' },
        { id: 21, name: 'Intel Core i5-12400H Processor', category: 'Processor', price: 220.00, description: 'A powerful Intel Core i5 processor, great for gaming and productivity.', image: 'https://placehold.co/600x400/111827/39FF14?text=CPU' },
        { id: 22, name: 'Intel Core i9-14900HX Processor', category: 'Processor', price: 550.00, description: 'The ultimate Intel Core i9 processor for extreme performance and mega-tasking.', image: 'https://placehold.co/600x400/111827/39FF14?text=CPU' },
        { id: 23, name: 'AMD Ryzen 3 7320U Processor', category: 'Processor', price: 140.00, description: 'An efficient AMD Ryzen 3 processor for everyday computing tasks.', image: 'https://placehold.co/600x400/111827/39FF14?text=CPU' },
        { id: 24, name: 'AMD Ryzen 7 7840HS Processor', category: 'Processor', price: 380.00, description: 'A high-performance AMD Ryzen 7 processor for demanding applications and gaming.', image: 'https://placehold.co/600x400/111827/39FF14?text=CPU' },
        { id: 25, name: 'AMD Ryzen 9 7945HX Processor', category: 'Processor', price: 580.00, description: 'The pinnacle of AMD mobile performance, the Ryzen 9 for enthusiasts.', image: 'https://placehold.co/600x400/111827/39FF14?text=CPU' },
    ];

    const buildComponents = {
        processor: [
            { name: 'Intel Core i3-1215U', price: 150, tier: 1 },
            { name: 'Intel Core i5-12400H', price: 220, tier: 2 },
            { name: 'Intel Core i7-13700HX', price: 350, tier: 3 },
            { name: 'Intel Core i9-14900HX', price: 550, tier: 4 },
            { name: 'AMD Ryzen 3 7320U', price: 140, tier: 1 },
            { name: 'AMD Ryzen 5 7640HS', price: 280, tier: 2 },
            { name: 'AMD Ryzen 7 7840HS', price: 380, tier: 3 },
            { name: 'AMD Ryzen 9 7945HX', price: 580, tier: 4 }
        ],
        graphics: [
            { name: 'Integrated Graphics (Basic)', price: 0, tier: 1 },
            { name: 'NVIDIA GeForce RTX 2050 (4GB)', price: 300, tier: 1.5 },
            { name: 'NVIDIA GeForce RTX 3050 (6GB)', price: 400, tier: 2 },
            { name: 'NVIDIA GeForce RTX 4050 (6GB)', price: 520, tier: 2.5 },
            { name: 'NVIDIA GeForce RTX 4060 (8GB)', price: 650, tier: 3 },
            { name: 'NVIDIA GeForce RTX 4070 (8GB)', price: 850, tier: 4 },
            { name: 'NVIDIA GeForce RTX 4080 (12GB)', price: 1100, tier: 5 },
            { name: 'AMD Radeon RX 7600M XT (8GB)', price: 550, tier: 3 },
            { name: 'AMD Radeon RX 7800M XT (12GB)', price: 750, tier: 4 },
            { name: 'AMD Radeon RX 7900M (16GB)', price: 950, tier: 5 }
        ],
        ram: [
            { name: '8GB DDR4', price: 40, tier: 1 },
            { name: '16GB DDR4', price: 75, tier: 2 },
            { name: '32GB DDR4', price: 140, tier: 3 },
            { name: '16GB DDR5', price: 90, tier: 3 },
            { name: '32GB DDR5', price: 180, tier: 4 },
            { name: '64GB DDR5', price: 350, tier: 5 }
        ],
        ssd: [
            { name: '256GB NVMe SSD', price: 45, tier: 1 },
            { name: '512GB NVMe SSD', price: 65, tier: 2 },
            { name: '1TB NVMe SSD', price: 120, tier: 3 },
            { name: '2TB NVMe SSD', price: 210, tier: 4 },
            { name: '4TB NVMe SSD', price: 400, tier: 5 },
            { name: '8TB NVMe SSD', price: 750, tier: 5 }
        ],
        screen: [
            { name: '14" FHD (1920x1080) 60Hz', price: 80, tier: 1 },
            { name: '15.6" FHD (1920x1080) 120Hz', price: 95, tier: 2 },
            { name: '15.6" QHD (2560x1440) 165Hz', price: 250, tier: 3 },
            { name: '17.3" FHD (1920x1080) 144Hz', price: 120, tier: 2 },
            { name: '17.3" QHD (2560x1440) 240Hz', price: 300, tier: 4 }
        ]
    };
    
    const componentIcons = {
        processor: '⚙️',
        graphics: '🎮',
        ram: '🔋',
        ssd: '💾',
        screen: '🖥️'
    };

    let cart = [];
    let currentBuild = {};

    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('.nav-link');
    const productGrid = document.getElementById('product-grid');
    const featuredGrid = document.getElementById('featured-products-grid');
    const filterContainer = document.getElementById('filters');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartBadge = document.getElementById('cart-badge');
    const addressSection = document.getElementById('address-section');
    const checkoutBtn = document.getElementById('checkout-btn');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const addressForm = document.getElementById('address-form');
    const formMessage = document.getElementById('form-message');
    const saveAddressCheckbox = document.getElementById('saveAddress');
    const buildOptionsContainer = document.getElementById('build-options');
    const buildSummaryBar = document.getElementById('build-summary-bar');
    const summaryText = document.getElementById('summary-text');
    const buildTotalEl = document.getElementById('build-total');
    const addBuildToCartBtn = document.getElementById('add-build-to-cart-btn');
    const buildErrorMessage = document.getElementById('build-error-message');
    const compatibilityMeter = document.getElementById('compatibility-meter');
    const compatibilityText = document.getElementById('compatibility-text');
    const compatibilityBar = document.getElementById('compatibility-bar');

    function navigateTo(viewId) {
        views.forEach(view => {
            view.classList.remove('active');
            if (view.id === viewId) {
                view.classList.add('active');
            }
        });
        window.scrollTo(0, 0);
        if (viewId === 'build') {
            buildSummaryBar.classList.remove('hidden');
        } else {
            buildSummaryBar.classList.add('hidden');
        }
        if (viewId !== 'cart') {
            addressSection.classList.add('hidden');
            checkoutBtn.classList.remove('hidden');
            placeOrderBtn.classList.add('hidden');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = e.currentTarget.getAttribute('data-target');
            navigateTo(targetView);
        });
    });

    function createProductCard(product) {
        return `
            <div class="product-card h-80">
                <div class="product-card-inner">
                    <div class="product-card-front bg-black rounded-none shadow-md overflow-hidden border border-gray-800">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/39FF14?text=Image+Not+Found';">
                        <div class="p-4">
                            <h3 class="font-semibold text-lg text-white">${product.name}</h3>
                            <div class="flex justify-between items-center mt-4">
                                <span class="font-bold text-xl text-[#39FF14]">$${product.price.toFixed(2)}</span>
                                <button class="add-to-cart-btn bg-[#39FF14] text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-lime-400" data-id="${product.id}">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-card-back bg-black rounded-none shadow-md p-4 flex flex-col border border-gray-800">
                        <h3 class="font-bold text-lg text-white mb-2">${product.name}</h3>
                        <hr class="mb-2 border-gray-700">
                        <p class="text-gray-300 text-sm flex-grow">${product.description}</p>
                        <div class="text-center text-xs text-gray-500 mt-2">Click to flip back</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    function renderProducts(filter = 'All') {
        productGrid.innerHTML = '';
        const filteredProducts = filter === 'All' ? productData : productData.filter(p => p.category === filter);
        filteredProducts.forEach(product => {
            productGrid.innerHTML += createProductCard(product);
        });
    }

    function renderFeaturedProducts() {
        featuredGrid.innerHTML = '';
        const featured = productData.filter(p => p.featured);
        featured.forEach(product => {
            featuredGrid.innerHTML += createProductCard(product);
        });
    }

    function setupFilters() {
        const categories = ['All', ...new Set(productData.map(p => p.category))];
        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-[#39FF14] hover:text-black transition-colors';
            if (category === 'All') {
                btn.classList.add('active');
            }
            btn.textContent = category;
            btn.dataset.filter = category;
            filterContainer.appendChild(btn);
        });

        filterContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                renderProducts(e.target.dataset.filter);
            }
        });
    }

    function addToCart(productId) {
        const product = productData.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId && !item.isBuild);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        renderCartItems();
        updateCartBadge();
        updateCartSummary();
    }

    function updateCartBadge() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            cartBadge.textContent = totalItems;
            cartBadge.classList.remove('hidden');
        } else {
            cartBadge.classList.add('hidden');
        }
    }
    
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-gray-400 bg-[#1F1F1F] p-6 rounded-lg">Your cart is empty.</p>';
            addressSection.classList.add('hidden');
            return;
        }
        cart.forEach(item => {
            const itemHtml = item.isBuild ? `
                <div class="bg-[#1F1F1F] p-4 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <div class="w-[80px] h-[80px] bg-gray-800 rounded-md flex items-center justify-center text-3xl">💻</div>
                        <div class="flex-grow">
                            <h3 class="font-semibold text-white">${item.name}</h3>
                            <ul class="text-xs text-gray-400 list-disc list-inside">
                                ${Object.values(item.components).map(c => `<li>${c.name}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="flex items-center space-x-3 text-white">
                            <button class="quantity-change text-lg font-bold" data-id="${item.id}" data-change="-1">-</button>
                            <span class="w-8 text-center">${item.quantity}</span>
                            <button class="quantity-change text-lg font-bold" data-id="${item.id}" data-change="1">+</button>
                        </div>
                        <span class="font-bold w-20 text-right text-white">$${(item.price * item.quantity).toFixed(2)}</span>
                        <button class="remove-item text-red-500 hover:text-red-700 font-bold" data-id="${item.id}">✕</button>
                            </div>
                        </div>
                    ` : `
                        <div class="bg-[#1F1F1F] p-4 rounded-lg flex items-center space-x-4">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image rounded-md" onerror="this.onerror=null;this.src='https://placehold.co/80x80/111827/39FF14?text=N/A';">
                            <div class="flex-grow">
                                <h3 class="font-semibold text-white">${item.name}</h3>
                                <p class="text-sm text-gray-400">$${item.price.toFixed(2)}</p>
                            </div>
                            <div class="flex items-center space-x-3 text-white">
                                <button class="quantity-change text-lg font-bold" data-id="${item.id}" data-change="-1">-</button>
                                <span class="w-8 text-center">${item.quantity}</span>
                                <button class="quantity-change text-lg font-bold" data-id="${item.id}" data-change="1">+</button>
                            </div>
                            <span class="font-bold w-20 text-right text-white">$${(item.price * item.quantity).toFixed(2)}</span>
                            <button class="remove-item text-red-500 hover:text-red-700 font-bold" data-id="${item.id}">✕</button>
                        </div>
                    `;
                    cartItemsContainer.innerHTML += itemHtml;
                });
            }

            function updateCartSummary() {
                const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
                const shipping = subtotal > 0 ? 5.00 : 0;
                const total = subtotal + shipping;

                document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
                document.getElementById('summary-shipping').textContent = `$${shipping.toFixed(2)}`;
                document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
                
                const summaryEl = document.getElementById('cart-summary');
                if(cart.length === 0) {
                    summaryEl.classList.add('hidden');
                } else {
                    summaryEl.classList.remove('hidden');
                }
            }

            function handleCartActions(e) {
                const target = e.target;
                if (target.classList.contains('quantity-change')) {
                    const productId = parseInt(target.dataset.id);
                    const item = cart.find(i => i.id === productId);
                    if (item) {
                        const change = parseInt(target.dataset.change);
                        item.quantity += change;
                        if (item.quantity <= 0) {
                            cart = cart.filter(i => i.id !== productId);
                        }
                    }
                    updateCart();
                }
                if (target.classList.contains('remove-item')) {
                    const productId = parseInt(target.dataset.id);
                    cart = cart.filter(i => i.id !== productId);
                    updateCart();
                }
            }

            function loadSavedAddress() {
                const savedAddress = localStorage.getItem('shippingAddress');
                if (savedAddress) {
                    const address = JSON.parse(savedAddress);
                    document.getElementById('fullName').value = address.fullName || '';
                    document.getElementById('address').value = address.address || '';
                    document.getElementById('city').value = address.city || '';
                    document.getElementById('state').value = address.state || '';
                    document.getElementById('zip').value = address.zip || '';
                    saveAddressCheckbox.checked = true;
                }
            }

            function renderBuildOptions() {
                buildOptionsContainer.innerHTML = '';
                Object.entries(buildComponents).forEach(([type, options]) => {
                    const section = document.createElement('div');
                    const titleText = type.charAt(0).toUpperCase() + type.slice(1);
                    let optionsHtml = `
                        <div class="flex items-center gap-4 mb-4">
                            <span class="component-icon">${componentIcons[type]}</span>
                            <h3 class="text-2xl font-bold text-gray-800" data-build-title="${type}">${titleText}</h3>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">`;
                    options.forEach((option, index) => {
                        const id = `${type}-${index}`;
                        optionsHtml += `
                            <div class="builder-option">
                                <input type="radio" id="${id}" name="${type}" value="${index}" class="hidden">
                                <label for="${id}" class="block p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-200 hover:border-black">
                                    <span class="font-semibold text-gray-800">${option.name}</span>
                                    <span class="block text-sm text-gray-600">+$${option.price.toFixed(2)}</span>
                                </label>
                            </div>
                        `;
                    });
                    optionsHtml += '</div>';
                    section.innerHTML = optionsHtml;
                    buildOptionsContainer.appendChild(section);
                });
                updateBuild();
            }

            function updateBuild() {
                let total = 100; // Base price
                let summaryParts = [];
                currentBuild = {};

                Object.keys(buildComponents).forEach(type => {
                    const selected = document.querySelector(`input[name="${type}"]:checked`);
                    const titleEl = document.querySelector(`[data-build-title="${type}"]`);
                    if(titleEl) titleEl.classList.remove('missing-selection');

                    if (selected) {
                        const option = buildComponents[type][selected.value];
                        total += option.price;
                        currentBuild[type] = option;
                        summaryParts.push(option.name);
                    }
                });

                buildTotalEl.textContent = `$${total.toFixed(2)}`;
                if (summaryParts.length > 0) {
                    summaryText.textContent = summaryParts.join(' / ');
                } else {
                    summaryText.textContent = 'Select components to see summary...';
                }

                // Compatibility Meter Logic
                const coreComponents = ['processor', 'graphics', 'ram', 'ssd', 'screen'];
                const selectedCoreComponents = coreComponents.filter(type => currentBuild[type]);

                if (selectedCoreComponents.length >= 2) {
                    compatibilityMeter.classList.remove('hidden');
                    const tiers = selectedCoreComponents.map(type => currentBuild[type].tier);
                    const maxDiff = Math.max(...tiers) - Math.min(...tiers);
                    
                    const textClasses = ['text-green-600', 'text-yellow-500', 'text-red-500'];
                    const barColorClasses = ['bg-green-500', 'bg-yellow-400', 'bg-red-500'];
                    
                    compatibilityText.classList.remove(...textClasses);
                    compatibilityBar.classList.remove(...barColorClasses);

                    if (maxDiff <= 1) { 
                        compatibilityText.textContent = 'Excellent';
                        compatibilityText.classList.add('text-green-600');
                        compatibilityBar.classList.add('bg-green-500');
                        compatibilityBar.style.width = '100%';
                    } else if (maxDiff <= 2) { 
                        compatibilityText.textContent = 'Great';
                        compatibilityText.classList.add('text-lime-500');
                        compatibilityBar.classList.add('bg-lime-400');
                        compatibilityBar.style.width = '80%';
                    } else if (maxDiff <= 3) { 
                        compatibilityText.textContent = 'Good';
                        compatibilityText.classList.add('text-yellow-500');
                        compatibilityBar.classList.add('bg-yellow-400');
                        compatibilityBar.style.width = '60%';
                    } else if (maxDiff <= 4) { 
                        compatibilityText.textContent = 'Fair';
                        compatibilityText.classList.add('text-orange-500');
                        compatibilityBar.classList.add('bg-orange-400');
                        compatibilityBar.style.width = '40%';
                    } else { 
                        compatibilityText.textContent = 'Poor';
                        compatibilityText.classList.add('text-red-500');
                        compatibilityBar.classList.add('bg-red-500');
                        compatibilityBar.style.width = '20%';
                    }
                } else {
                    compatibilityMeter.classList.add('hidden');
                }
            }
            
            document.body.addEventListener('click', (e) => {
                if (e.target.classList.contains('add-to-cart-btn')) {
                    const productId = parseInt(e.target.dataset.id);
                    addToCart(productId);
                } else if (e.target.closest('.product-card')) {
                    const card = e.target.closest('.product-card');
                    if (!e.target.closest('.add-to-cart-btn')) {
                        card.classList.toggle('is-flipped');
                    }
                }
            });

            cartItemsContainer.addEventListener('click', handleCartActions);
            buildOptionsContainer.addEventListener('change', updateBuild);

            addBuildToCartBtn.addEventListener('click', () => {
                let isValid = true;
                buildErrorMessage.classList.add('hidden');

                Object.keys(buildComponents).forEach(type => {
                    const selected = document.querySelector(`input[name="${type}"]:checked`);
                    const titleEl = document.querySelector(`[data-build-title="${type}"]`);
                    if (!selected) {
                        isValid = false;
                        if(titleEl) titleEl.classList.add('missing-selection');
                    }
                });

                if (!isValid) {
                    buildErrorMessage.classList.remove('hidden');
                    return;
                }

                const total = Object.values(currentBuild).reduce((sum, item) => sum + item.price, 100);
                const buildItem = {
                    id: Date.now(), // Unique ID for the build
                    name: 'Custom Built Laptop',
                    price: total,
                    quantity: 1,
                    isBuild: true,
                    components: { ...currentBuild }
                };
                cart.push(buildItem);
                updateCart();
                navigateTo('cart');
            });

            checkoutBtn.addEventListener('click', () => {
                if (cart.length > 0) {
                    addressSection.classList.remove('hidden');
                    checkoutBtn.classList.add('hidden');
                    placeOrderBtn.classList.remove('hidden');
                    addressSection.scrollIntoView();
                }
            });
            
            placeOrderBtn.addEventListener('click', () => {
                if (addressForm.checkValidity()) {
                    if (saveAddressCheckbox.checked) {
                        const address = {
                            fullName: document.getElementById('fullName').value,
                            address: document.getElementById('address').value,
                            city: document.getElementById('city').value,
                            state: document.getElementById('state').value,
                            zip: document.getElementById('zip').value,
                        };
                        localStorage.setItem('shippingAddress', JSON.stringify(address));
                    } else {
                        localStorage.removeItem('shippingAddress');
                    }

                    formMessage.textContent = 'Thank you! Your order has been placed successfully.';
                    formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-800');
                    formMessage.classList.add('bg-green-100', 'text-green-800');
                    
                    setTimeout(() => {
                        cart = [];
                        updateCart();
                        addressForm.reset();
                        saveAddressCheckbox.checked = false;
                        navigateTo('home');
                    }, 3000);

                } else {
                    formMessage.textContent = 'Please fill out all address fields.';
                    formMessage.classList.remove('hidden', 'bg-green-100', 'text-green-800');
                    formMessage.classList.add('bg-red-100', 'text-red-800');
                    addressForm.reportValidity();
                }
            });

            // Initial setup
            renderFeaturedProducts();
            renderProducts();
            setupFilters();
            renderBuildOptions();
            updateCart();
            loadSavedAddress();
        });
