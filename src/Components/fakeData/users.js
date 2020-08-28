const users = [
    {
      "id": 1,
      "name": "Introduction to HTML5",
      'price': 22500,
      "instructor": "Manuel Lorenz",
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHoEAxrts7pJowJfjD90cyc01jpcO-A8Yp3g&usqp=CAU',
      "description": "A Complete HTML5 Programming Course for Beginners",
      'students':"12,232",
      'rating':"⭐⭐⭐⭐⭐"
    },
    {
      "id": 2,
      "name": "Introduction to CSS3",
      'price': 32000,
      "instructor": "Maximilian Schwarzmüller",
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2B0jgb556iB3bft4AYqEReM2wopQYyxYWmQ&usqp=CAU',
      "description": "Learn CSS for the first time or brush up your CSS skills and dive in even deeper. EVERY web developer has to know CSS.",
      'students':"12,232",
      'rating':"⭐⭐⭐⭐⭐"
      
    },
    {
      "id": 3,
      "name": "JavaScript, jQuery, and JSON",
      'price': 14000,
      "instructor": "Jonas Schmedtmann",
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfGDrl6cb6FxNvbUdtGZNnPSFgsoGeFq454A&usqp=CAU',
      "description": "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
      'students':"12,232",
      'rating':"⭐⭐⭐⭐⭐"
    },
    {
      "id": 4,
      "name": "Full-Stack Web Development with React",
      'price': 13600,
      "instructor": "Maximilian Schwarzmüller",
      'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcKonBERI7XMU1Iatb4iuvjGXu-82apYIVeg&usqp=CAU',
      "description": "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      'students':'12,232',
      'rating':"⭐⭐⭐⭐⭐"
    },
    {
      "id": 5,
      "name": "Server-side Development with NodeJS",
      'price': 16600,
      "instructor": "Rob Percival",
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEekSFiBBt3dbY3B89BUvqv3BQlHW9-D__2A&usqp=CAU',
      "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Jest, and more!",
      'students':'12,232',
      'rating':"⭐⭐⭐⭐⭐"
    },
    {
      "id": 6,
      "name": "Front-End JavaScript Frameworks: Angular",
      'price': 35000,
      "instructor": "Nicolas Omar Gonzalez Passerino",
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI744KnCZD0bSh9ZUUMeoV6pA3Gz6MBlWfcQ&usqp=CAU',
      "description": "Master Angular 10 and build awesome, reactive web apps with the successor of Angular.js",
      'students':'12,232',
      'rating':"⭐⭐⭐⭐⭐"
    },
    {
      "id": 7,
      "name": "Web Development Vue JS - The Complete Guide ",
      'price': 16600,
      "instructor": "The Net Ninja (Shaun Pelling)",
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOWyg2E39mzoj9PoduH7CoMD2tvj7G1bHeCA&usqp=CAU',
      "description": "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
      'students':'12,232',
      'rating':"⭐⭐⭐⭐⭐"
    },
    {
      "id": 8,
      "name": "Building Web Applications in PHP",
      'price': 13800,
      "instructor": "Coding Faculty Solutions",
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZv7WekDuI9NX_wLQBHiQ8WtJoMjV-BIc7Jg&usqp=CAU',
      "description": "PHP for Beginners: learn everything you need to become a professional PHP developer with practical exercises & projects.",
      'students':'12,232',
      'rating':"⭐⭐⭐⭐⭐"
    },
    {
      "id": 9,
      "name": "Adobe Photoshop CC – Essentials Training Course",
      'price': 17500,
      "instructor": "Daniel Walter Scott",
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwLzHy7hERdZ7WleVxVVUvp1x3rdmHkkL8AA&usqp=CAU',
      "description": "This Adobe Photoshop Essentials course will teach you Photoshop Retouching as well as Photoshop for graphic design.",
      'students':'12,232',
      'rating':"⭐⭐⭐⭐⭐"
    },
    {
      "id": 10,
      "name": "Illustrator CC 2020 MasterClass",
      'price': 15600,
      "instructor": "Phil Ebiner",
      'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png',
      "description": "Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!",
      'students':'12,232',
      'rating':"⭐⭐⭐⭐⭐"
    },
    {
        "id": 11,
        "name": "After Effects CC: The Complete Motion Graphics Masterclass",
        'price': 19600,
        "instructor": "Louay Zambarakji",
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQteDwi12mNorqwzpfFfH-4SSZYxMxmqVo40g&usqp=CAU',
        "description": "Create stunning Motion Graphics, VFX Visual Effects & VFX Compositing with hands-on tutorials & 50+ practice projects.",
        'students':'12,232',
        'rating':"⭐⭐⭐⭐⭐"
      },
      {
        "id": 12,
        "name": "Adobe Lightroom Classic CC & CC: Photo Editing Masterclass",
        'price': 23000,
        "instructor": "Video School Online Inc",
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrdQmwuGcf1LrTqvAUx0jj7Uvy6aRN_ghf0w&usqp=CAU',
        "description": "Your complete guide to editing beautiful photos in Adobe Lightroom Classic CC and Adobe Lightroom CC, both versions!",
        'students':'12,232',
        'rating':"⭐⭐⭐⭐⭐"
      },
      {
        "id": 13,
        "name": "Microsoft Excel - Excel from Beginner to Advanced",
        'price': 18400,
        "instructor": "Office Newb LLC",
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToMtitMZpqwdMxBt7t4y4YQFSae9D9OrkMmQ&usqp=CAU',
        "description": "Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Office 365",
        'students':'12,232',
        'rating':"⭐⭐⭐⭐⭐"
      },
      {
        "id": 14,
        "name": "MySQL for Data Analysis - SQL Database for Beginners",
        'price': 15600,
        "instructor": "John Pauler",
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgDADxmgHfIpQIiLhrlFTEs8vt7fjxIIa3_A&usqp=CAU',
        "description": "024-648-3804",
        "website": "Learn SQL for Business Intelligence w/ MySQL Workbench. Intro to Relational Databases (apply to PostgreSQL & Oracle SQL)",
        'students':'12,232',
        'rating':"⭐⭐⭐⭐⭐"
      },
      {
        "id": 15,
        "name": "The Python Mega Course: Build 10 Real World Applications",
        'price': 25600,
        "instructor": "Tim Buchalka's Learn Programming Academy",
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBbVDF_KQMR0txsNVVIhhWxUfnYRawJPK5pw&usqp=CAU',
        "description": "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
        'students':'12,232',
        'rating':"⭐⭐⭐⭐⭐"
      }
  ]

  export default users;