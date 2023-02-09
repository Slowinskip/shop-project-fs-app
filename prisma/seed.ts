import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProduct() {
  return [
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e01',
      name: 'Puma-SC',
      category: 'MEN',
      information:
        'Quisque mauris ex, venenatis id tellus sed, malesuada placerat purus. Aliquam semper, neque commodo pharetra laoreet.',
      price: 120,
      oldPrice: 140,
      image: 'Puma-SC1.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e02',
      name: 'Lacoste-BN',
      category: 'MEN',
      information:
        'Ut non orci sit amet orci sagittis pretium quis ac purus. Quisque commodo nulla et elit interdum congue. Vestibulum nec aliquam dolor.',
      price: 180,
      oldPrice: 0,
      image: 'Lacoste-BN1.jpg',
    },

    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e03',
      name: 'CK-MN',
      category: 'MEN',
      information:
        'Nunc et tellus a est consectetur tristique sollicitudin et ante. Vestibulum aliquet nulla nec ligula hendrerit suscipit.',
      price: 100,
      oldPrice: 210,
      image: 'CK-MN.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e04',
      name: 'Boss',
      category: 'MEN',
      information:
        'Nullam in nisl varius, aliquet justo eu, commodo turpis. Proin nec interdum velit, et elementum risus.',
      price: 50,
      oldPrice: 0,
      image: 'Boss.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e05',
      name: 'Tommy H',
      category: 'MEN',
      information:
        'Nulla condimentum odio quis ornare pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      price: 250,
      oldPrice: 280,
      image: 'tommy.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e06',
      name: 'Emporio',
      category: 'MEN',
      information:
        'Nullam in nisl varius, aliquet justo eu, commodo turpis. Proin nec interdum velit, et elementum risus.',
      price: 450,
      oldPrice: 0,
      image: 'ea1.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e07',
      name: 'HUGO',
      category: 'MEN',
      information:
        'Proin nec interdum velit, et elementum risus. Nullam in nisl varius, aliquet justo eu, commodo turpis. ',
      price: 150,
      oldPrice: 0,
      image: 'hugo.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e08',
      name: 'CK Pink',
      category: 'WOMAN',
      information:
        'Etiam scelerisque porttitor erat, at pellentesque nisi efficitur sit amet. Maecenas venenatis, felis non dapibus eleifend, nunc dolor rutrum est, sed vehicula tortor velit at enim.',
      price: 70,
      oldPrice: 0,
      image: 'ck-woman.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e09',
      name: 'Replay',
      category: 'WOMAN',
      information:
        'Maecenas venenatis, felis non dapibus eleifend, nunc dolor rutrum est, sed vehicula tortor velit at enim. Etiam scelerisque porttitor erat, at pellentesque nisi efficitur sit amet. ',
      price: 290,
      oldPrice: 0,
      image: 'replay.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e10',
      name: 'Buffalo',
      category: 'WOMAN',
      information:
        'Felis non dapibus eleifend, nunc dolor rutrum est, Maecenas venenatis.  Sed vehicula tortor velit at enim. Etiam scelerisque porttitor erat, at pellentesque nisi efficitur sit amet. ',
      price: 290,
      oldPrice: 380,
      image: 'buffalo.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e11',
      name: 'Levis',
      category: 'WOMAN',
      information:
        'Nunc dolor Felis non dapibus eleifend,  rutrum est, Maecenas venenatis.  Sed vehicula tortor velit at enim. Etiam scelerisque porttitor erat, at pellentesque nisi efficitur sit amet. ',
      price: 110,
      oldPrice: 180,
      image: 'levis.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
      name: 'Skechers',
      category: 'WOMAN',
      information:
        'Rutrum est, nunc dolor Felis non dapibus eleifend, maecenas venenatis.  Sed vehicula tortor velit at enim. Etiam scelerisque porttitor erat, at pellentesque nisi efficitur sit amet. ',
      price: 440,
      oldPrice: 0,
      image: 'skechers.jpg',
    },
  ];
}

function getImages() {
  return [
    {
      image: 'skechers.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
    },
    {
      image: 'skechers3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
    },
    {
      image: 'skechers2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
    },
    {
      image: 'skechers1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
    },
    {
      image: 'levis.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e11',
    },
    {
      image: 'levis3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e11',
    },
    {
      image: 'levis2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e11',
    },

    {
      image: 'levis1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e11',
    },
    {
      image: 'buffalo.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e10',
    },
    {
      image: 'buffalo3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e10',
    },
    {
      image: 'buffalo2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e10',
    },

    {
      image: 'buffalo1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e10',
    },
    {
      image: 'replay.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e09',
    },
    {
      image: 'replay3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e09',
    },
    {
      image: 'replay2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e09',
    },
    {
      image: 'replay1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e09',
    },
    {
      image: 'ck-woman.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e08',
    },
    {
      image: 'ck-woman2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e08',
    },
    {
      image: 'ck-woman3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e08',
    },

    {
      image: 'ck-woman1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e08',
    },
    {
      image: 'hugo.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e07',
    },

    {
      image: 'hugo2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e07',
    },
    {
      image: 'hugo3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e07',
    },
    {
      image: 'hugo1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e07',
    },
    {
      image: 'ea1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e06',
    },
    {
      image: 'ea4.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e06',
    },
    {
      image: 'ea3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e06',
    },

    {
      image: 'ea2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e06',
    },
    {
      image: 'Puma-SC1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e01',
    },
    {
      image: 'Puma-SC2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e01',
    },
    {
      image: 'Puma-SC3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e01',
    },

    {
      image: 'Puma-SC4.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e01',
    },
    {
      image: 'Lacoste-BN1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e02',
    },

    {
      image: 'Lacoste-BN2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e02',
    },
    {
      image: 'Lacoste-BN3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e02',
    },

    {
      image: 'Lacoste-BN4.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e02',
    },
    {
      image: 'CK-MN.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e03',
    },
    {
      image: 'CK-MN1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e03',
    },
    {
      image: 'CK-MN2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e03',
    },

    {
      image: 'CK-MN2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e03',
    },
    {
      image: 'Boss.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e04',
    },
    {
      image: 'Boss1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e04',
    },
    {
      image: 'Boss2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e04',
    },
    {
      image: 'Boss3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e04',
    },
    {
      image: 'tommy.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e05',
    },
    {
      image: 'tommy1.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e05',
    },
    {
      image: 'tommy2.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e05',
    },
    {
      image: 'tommy3.jpg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e05',
    },
  ];
}
function getSize() {
  return [
    {
      size: 31,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
    },
    {
      size: 32,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
    },
    {
      size: 33,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
    },
    {
      size: 34,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e12',
    },
    {
      size: 29,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e11',
    },
    {
      size: 30,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e11',
    },
    {
      size: 31,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e11',
    },

    {
      size: 32,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e11',
    },
    {
      size: 30,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e10',
    },
    {
      size: 31,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e10',
    },
    {
      size: 32,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e10',
    },

    {
      size: 33,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e10',
    },
    {
      size: 31,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e09',
    },
    {
      size: 32,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e09',
    },
    {
      size: 33,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e09',
    },
    {
      size: 34,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e09',
    },
    {
      size: 27,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e08',
    },
    {
      size: 28,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e08',
    },
    {
      size: 29,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e08',
    },

    {
      size: 30,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e08',
    },
    {
      size: 39,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e07',
    },

    {
      size: 40,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e07',
    },
    {
      size: 41,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e07',
    },
    {
      size: 42,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e07',
    },
    {
      size: 40,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e06',
    },
    {
      size: 41,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e06',
    },
    {
      size: 42,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e06',
    },

    {
      size: 43,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e06',
    },
    {
      size: 41,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e01',
    },
    {
      size: 42,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e01',
    },
    {
      size: 43,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e01',
    },

    {
      size: 44,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e01',
    },
    {
      size: 42,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e02',
    },

    {
      size: 43,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e02',
    },
    {
      size: 44,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e02',
    },

    {
      size: 45,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e02',
    },
    {
      size: 40,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e03',
    },
    {
      size: 41,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e03',
    },
    {
      size: 42,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e03',
    },

    {
      size: 43,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e03',
    },
    {
      size: 38,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e04',
    },
    {
      size: 39,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e04',
    },
    {
      size: 40,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e04',
    },
    {
      size: 41,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e04',
    },
    {
      size: 40,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e05',
    },
    {
      size: 41,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e05',
    },
    {
      size: 42,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e05',
    },
    {
      size: 43,
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e05',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProduct().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}
async function seed1() {
  await Promise.all(
    getImages().map((image) => {
      return db.images.create({ data: image });
    }),
  );
}
async function seed2() {
  await Promise.all(
    getSize().map((size) => {
      return db.size.create({ data: size });
    }),
  );
}

seed();
seed1();
seed2();
