const { Food } = require("../models");
const db = require("../models");
const queryInterface = db.sequelize.getQueryInterface();
const bcrypt = require("bcrypt");

async function seedFood() {
  try {
    await queryInterface.bulkDelete(
      "Food",
      {},
      { truncate: true, restartIdentity: true, cascade: true }
    );

    await Food.bulkCreate([
      {
        name: "Burger",
        description: "Actually not a burger, just a kraby patty",
        price: 35000,
        imgUrl:
          "https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg",
        authorId: 1,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pizza",
        description: "Pizza with pineapple and corn",
        price: 125000,
        imgUrl:
          "https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe",
        authorId: 2,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Goreng",
        description: "Rice fried for twenty minutes",
        price: 55000,
        imgUrl:
          "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
        authorId: 3,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Lemak",
        description: "Fatty rice but actually less fat",
        price: 61000,
        imgUrl:
          "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
        authorId: 2,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger",
        description: "Actually not a burger, just a kraby patty",
        price: 35000,
        imgUrl:
          "https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg",
        authorId: 1,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pizza",
        description: "Pizza with pineapple and corn",
        price: 125000,
        imgUrl:
          "https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe",
        authorId: 2,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Goreng",
        description: "Rice fried for twenty minutes",
        price: 55000,
        imgUrl:
          "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
        authorId: 3,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Lemak",
        description: "Fatty rice but actually less fat",
        price: 61000,
        imgUrl:
          "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
        authorId: 2,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger",
        description: "Actually not a burger, just a kraby patty",
        price: 35000,
        imgUrl:
          "https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg",
        authorId: 1,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pizza",
        description: "Pizza with pineapple and corn",
        price: 125000,
        imgUrl:
          "https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe",
        authorId: 2,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Goreng",
        description: "Rice fried for twenty minutes",
        price: 55000,
        imgUrl:
          "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
        authorId: 3,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Lemak",
        description: "Fatty rice but actually less fat",
        price: 61000,
        imgUrl:
          "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
        authorId: 2,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger",
        description: "Actually not a burger, just a kraby patty",
        price: 35000,
        imgUrl:
          "https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg",
        authorId: 1,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pizza",
        description: "Pizza with pineapple and corn",
        price: 125000,
        imgUrl:
          "https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe",
        authorId: 2,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Goreng",
        description: "Rice fried for twenty minutes",
        price: 55000,
        imgUrl:
          "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
        authorId: 3,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Lemak",
        description: "Fatty rice but actually less fat",
        price: 61000,
        imgUrl:
          "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
        authorId: 2,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger",
        description: "Actually not a burger, just a kraby patty",
        price: 35000,
        imgUrl:
          "https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg",
        authorId: 1,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pizza",
        description: "Pizza with pineapple and corn",
        price: 125000,
        imgUrl:
          "https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe",
        authorId: 2,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Goreng",
        description: "Rice fried for twenty minutes",
        price: 55000,
        imgUrl:
          "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
        authorId: 3,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Lemak",
        description: "Fatty rice but actually less fat",
        price: 61000,
        imgUrl:
          "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
        authorId: 2,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Goreng",
        description: "Rice fried for twenty minutes",
        price: 55000,
        imgUrl:
          "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
        authorId: 3,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Lemak",
        description: "Fatty rice but actually less fat",
        price: 61000,
        imgUrl:
          "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
        authorId: 2,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger",
        description: "Actually not a burger, just a kraby patty",
        price: 35000,
        imgUrl:
          "https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg",
        authorId: 1,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pizza",
        description: "Pizza with pineapple and corn",
        price: 125000,
        imgUrl:
          "https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe",
        authorId: 2,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Goreng",
        description: "Rice fried for twenty minutes",
        price: 55000,
        imgUrl:
          "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
        authorId: 3,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Lemak",
        description: "Fatty rice but actually less fat",
        price: 61000,
        imgUrl:
          "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
        authorId: 2,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Burger",
        description: "Actually not a burger, just a kraby patty",
        price: 35000,
        imgUrl:
          "https://images.tokopedia.net/img/JFrBQq/2022/9/14/cdbb36e2-af59-43fb-bfde-ba71f5287d8e.jpg",
        authorId: 1,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pizza",
        description: "Pizza with pineapple and corn",
        price: 125000,
        imgUrl:
          "https://img.kurio.network/1CSjUZ6M_zPjaBlNBXUTxfYk-ow=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/09/725f3d76-6591-466f-ba9c-f01844267fda.jpe",
        authorId: 2,
        categoryId: 1,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Goreng",
        description: "Rice fried for twenty minutes",
        price: 55000,
        imgUrl:
          "https://awsimages.detik.net.id/community/media/visual/2022/09/17/resep-nasi-goreng-udang-kemangi_43.jpeg?w=1200",
        authorId: 3,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Lemak",
        description: "Fatty rice but actually less fat",
        price: 61000,
        imgUrl:
          "https://doyanresep.com/wp-content/uploads/2020/02/resep-nasi-lemak.jpg",
        authorId: 2,
        categoryId: 2,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  } catch (error) {
    console.log(error, "<<<<<<<<<<<<<<<<<<<");
  }
}

module.exports = seedFood;
