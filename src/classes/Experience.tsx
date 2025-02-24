export class Experience {
    name: string;
    link: string;
    description: string;
    summary: string;
    tags: string[] = [];
    image: string;
    type: string;

  constructor (name: string, link: string, summary: string, description: string, image: string, tags: string[] = [], type: string = 'p') {
    this.name = name;
    this.link = link;
    this.summary = summary;
    this.description = description;
    this.image = image;
    this.tags = tags;
    this.type = type;
  }
}

export const Experiences: Experience[] = [
    new Experience('Docker Tutorial', 'https://www.github.com/Axelvazslima/docker-studies', 'A comprehensive guide to learning Docker, including examples, explanations, and automation scripts using Python.', 'This project provides a detailed tutorial on Docker, covering various aspects such as installation, containerization, and orchestration.\nIt includes practical examples and automation scripts written in Python to help users understand and implement Docker in their own projects. It is designed for beginners and experienced users alike, providing a step-by-step guide to learning Docker and its features.\nLeave a star ⭐ to support the project!', 'svg-icons/docker-svgrepo-com.svg', ["Docker", "Python", "On going"]),
    new Experience('Clojure Tic Tac Toe game', 'https://www.github.com/Axelvazslima/clojure-tic-tac-toe', 'A Tic Tac Toe game implemented in Clojure.', 'This project is a simple implementation of the classic Tic Tac Toe game in Clojure. It provides a command-line interface for players to interact with the game and make their moves. The game logic is implemented in Clojure, making use of functional programming concepts and data structures.\nLeave a star ⭐ to support the project!', 'svg-icons/clojure-svgrepo-com.svg', ["Clojure", "Functional programming"]),
    new Experience('AvelDB', '', 'Go library for relational databases operations.', 'AvelDB is a Go library designed to simplify relational database operations with an intuitive API and efficient query execution.\nStarting with MySQL support, AvelDB minimizes boilerplate code and streamlines database interactions. Future updates will introduce PostgreSQL compatibility, making it a powerful and flexible choice for Go developers working with SQL databases.\nWith performance, maintainability, and Go idioms in mind, AvelDB ensures a seamless database experience.\nLeave a star ⭐ to support the project!', 'svg-icons/golang-svgrepo-com.svg', ["Go", "Database", "Library", "Soon"]),
]
