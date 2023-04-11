'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Food', [
    {
      name: 'Burger',
      description: 'Actually not a burger, just a kraby patty',
      price: 35000,
      imgUrl: 'https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg',
      authorId: 1,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pizza',
      description: 'Pizza with pineapple and corn',
      price: 125000,
      imgUrl: 'https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe',
      authorId: 2,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Goreng',
      description: 'Rice fried for twenty minutes',
      price: 55000,
      imgUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200',
      authorId: 3,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Lemak',
      description: 'Fatty rice but actually less fat',
      price: 61000,
      imgUrl: 'https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg',
      authorId: 4,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Salad',
      description: 'Veggies with mayo',
      price: 45000,
      imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
      authorId: 5,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Capcay',
      description: 'Vegetables with viscous soup',
      price: 74000,
      imgUrl: 'https://kurio-img.kurioapps.com/22/03/01/9dd05cbd-f275-41d4-aa62-b65f117d2b55.jpe',
      authorId: 1,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Beef Steak',
      description: 'Beef steak with potato and barbeque sauces',
      price: 255000,
      imgUrl: 'https://img-global.cpcdn.com/recipes/9fb2de56bf287e18/680x482cq70/beef-steak-foto-resep-utama.jpg',
      authorId: 1,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chicken Steak',
      description: 'Like roasted chicken but has better sauces',
      price: 211000,
      imgUrl: 'https://ikneadtoeat.com/wp-content/uploads/2022/11/grilled-chicken-steak-7.jpg',
      authorId: 2,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Burger',
      description: 'Actually not a burger, just a kraby patty',
      price: 35000,
      imgUrl: 'https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg',
      authorId: 1,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pizza',
      description: 'Pizza with pineapple and corn',
      price: 125000,
      imgUrl: 'https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe',
      authorId: 2,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Goreng',
      description: 'Rice fried for twenty minutes',
      price: 55000,
      imgUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200',
      authorId: 3,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Lemak',
      description: 'Fatty rice but actually less fat',
      price: 61000,
      imgUrl: 'https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg',
      authorId: 4,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Salad',
      description: 'Veggies with mayo',
      price: 45000,
      imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
      authorId: 5,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Capcay',
      description: 'Vegetables with viscous soup',
      price: 74000,
      imgUrl: 'https://kurio-img.kurioapps.com/22/03/01/9dd05cbd-f275-41d4-aa62-b65f117d2b55.jpe',
      authorId: 1,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Beef Steak',
      description: 'Beef steak with potato and barbeque sauces',
      price: 255000,
      imgUrl: 'https://img-global.cpcdn.com/recipes/9fb2de56bf287e18/680x482cq70/beef-steak-foto-resep-utama.jpg',
      authorId: 1,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chicken Steak',
      description: 'Like roasted chicken but has better sauces',
      price: 211000,
      imgUrl: 'https://ikneadtoeat.com/wp-content/uploads/2022/11/grilled-chicken-steak-7.jpg',
      authorId: 2,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Burger',
      description: 'Actually not a burger, just a kraby patty',
      price: 35000,
      imgUrl: 'https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg',
      authorId: 1,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pizza',
      description: 'Pizza with pineapple and corn',
      price: 125000,
      imgUrl: 'https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe',
      authorId: 2,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Goreng',
      description: 'Rice fried for twenty minutes',
      price: 55000,
      imgUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200',
      authorId: 3,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Lemak',
      description: 'Fatty rice but actually less fat',
      price: 61000,
      imgUrl: 'https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg',
      authorId: 4,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Salad',
      description: 'Veggies with mayo',
      price: 45000,
      imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
      authorId: 5,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Capcay',
      description: 'Vegetables with viscous soup',
      price: 74000,
      imgUrl: 'https://kurio-img.kurioapps.com/22/03/01/9dd05cbd-f275-41d4-aa62-b65f117d2b55.jpe',
      authorId: 1,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Beef Steak',
      description: 'Beef steak with potato and barbeque sauces',
      price: 255000,
      imgUrl: 'https://img-global.cpcdn.com/recipes/9fb2de56bf287e18/680x482cq70/beef-steak-foto-resep-utama.jpg',
      authorId: 1,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chicken Steak',
      description: 'Like roasted chicken but has better sauces',
      price: 211000,
      imgUrl: 'https://ikneadtoeat.com/wp-content/uploads/2022/11/grilled-chicken-steak-7.jpg',
      authorId: 2,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Burger',
      description: 'Actually not a burger, just a kraby patty',
      price: 35000,
      imgUrl: 'https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg',
      authorId: 1,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pizza',
      description: 'Pizza with pineapple and corn',
      price: 125000,
      imgUrl: 'https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe',
      authorId: 2,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Goreng',
      description: 'Rice fried for twenty minutes',
      price: 55000,
      imgUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200',
      authorId: 3,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Lemak',
      description: 'Fatty rice but actually less fat',
      price: 61000,
      imgUrl: 'https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg',
      authorId: 4,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Salad',
      description: 'Veggies with mayo',
      price: 45000,
      imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
      authorId: 5,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Capcay',
      description: 'Vegetables with viscous soup',
      price: 74000,
      imgUrl: 'https://kurio-img.kurioapps.com/22/03/01/9dd05cbd-f275-41d4-aa62-b65f117d2b55.jpe',
      authorId: 1,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Beef Steak',
      description: 'Beef steak with potato and barbeque sauces',
      price: 255000,
      imgUrl: 'https://img-global.cpcdn.com/recipes/9fb2de56bf287e18/680x482cq70/beef-steak-foto-resep-utama.jpg',
      authorId: 1,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chicken Steak',
      description: 'Like roasted chicken but has better sauces',
      price: 211000,
      imgUrl: 'https://ikneadtoeat.com/wp-content/uploads/2022/11/grilled-chicken-steak-7.jpg',
      authorId: 2,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Burger',
      description: 'Actually not a burger, just a kraby patty',
      price: 35000,
      imgUrl: 'https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg',
      authorId: 1,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pizza',
      description: 'Pizza with pineapple and corn',
      price: 125000,
      imgUrl: 'https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe',
      authorId: 2,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Goreng',
      description: 'Rice fried for twenty minutes',
      price: 55000,
      imgUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200',
      authorId: 3,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Lemak',
      description: 'Fatty rice but actually less fat',
      price: 61000,
      imgUrl: 'https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg',
      authorId: 4,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Salad',
      description: 'Veggies with mayo',
      price: 45000,
      imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
      authorId: 5,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Capcay',
      description: 'Vegetables with viscous soup',
      price: 74000,
      imgUrl: 'https://kurio-img.kurioapps.com/22/03/01/9dd05cbd-f275-41d4-aa62-b65f117d2b55.jpe',
      authorId: 1,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Beef Steak',
      description: 'Beef steak with potato and barbeque sauces',
      price: 255000,
      imgUrl: 'https://img-global.cpcdn.com/recipes/9fb2de56bf287e18/680x482cq70/beef-steak-foto-resep-utama.jpg',
      authorId: 1,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chicken Steak',
      description: 'Like roasted chicken but has better sauces',
      price: 211000,
      imgUrl: 'https://ikneadtoeat.com/wp-content/uploads/2022/11/grilled-chicken-steak-7.jpg',
      authorId: 2,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Burger',
      description: 'Actually not a burger, just a kraby patty',
      price: 35000,
      imgUrl: 'https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg',
      authorId: 1,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pizza',
      description: 'Pizza with pineapple and corn',
      price: 125000,
      imgUrl: 'https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe',
      authorId: 2,
      categoryId: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Goreng',
      description: 'Rice fried for twenty minutes',
      price: 55000,
      imgUrl: 'https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200',
      authorId: 3,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nasi Lemak',
      description: 'Fatty rice but actually less fat',
      price: 61000,
      imgUrl: 'https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg',
      authorId: 4,
      categoryId: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Salad',
      description: 'Veggies with mayo',
      price: 45000,
      imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
      authorId: 5,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Capcay',
      description: 'Vegetables with viscous soup',
      price: 74000,
      imgUrl: 'https://kurio-img.kurioapps.com/22/03/01/9dd05cbd-f275-41d4-aa62-b65f117d2b55.jpe',
      authorId: 1,
      categoryId: 3,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Beef Steak',
      description: 'Beef steak with potato and barbeque sauces',
      price: 255000,
      imgUrl: 'https://img-global.cpcdn.com/recipes/9fb2de56bf287e18/680x482cq70/beef-steak-foto-resep-utama.jpg',
      authorId: 1,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chicken Steak',
      description: 'Like roasted chicken but has better sauces',
      price: 211000,
      imgUrl: 'https://ikneadtoeat.com/wp-content/uploads/2022/11/grilled-chicken-steak-7.jpg',
      authorId: 2,
      categoryId: 4,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Food', null, {})
  }
};
