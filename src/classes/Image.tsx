export class Image{
    path: string
    domain: string[]
    name: string
    link: string
    content: string

    constructor(path: string, domain: string[], name: string, content:string = "", link: string = ""){
        this.path = path;
        this.domain = domain;
        this.name = name;
        this.link = link;
        this.content = content;
    }
}

export const SvgIcons = [
    new Image("svg-icons/docker-svgrepo-com.svg", ["learning", "stack"], "Docker", "A containerization platform that simplifies development, deployment, and scaling.", "https://github.com/Axelvazslima/docker-studies"),
    new Image("svg-icons/github-icon-name.svg", ["contact"], "GitHub Icon", "The world's leading platform for version control and collaboration.", "https://github.com/Axelvazslima"),
    new Image("svg-icons/linux-svgrepo-com.svg", ["learning"], "Bash Scripting", "A Unix shell and command language that provides powerful scripting capabilities for automating tasks and managing system operations."),
    new Image("svg-icons/gihub-icon-white.svg", ["contact"], "GitHub Icon White", "A variation of the GitHub logo for different design preferences.", "https://github.com/Axelvazslima"),
    new Image("svg-icons/gmail-icon.svg", ["contact"], "Gmail Icon", "Google's widely-used email service for communication and networking.", "mailto:axelvaz45@gmail.com"),
    new Image("svg-icons/java-svgrepo-com.svg", ["stack"], "Java and Spring", "A versatile programming language with Spring framework for building scalable applications."),
    new Image("svg-icons/python-svgrepo-com.svg", ["stack"], "Python", "A popular, high-level programming language known for its simplicity and versatility."),
    new Image("svg-icons/git-svgrepo-com.svg", ["learning", "stack"], "Git", "A distributed version control system for tracking code changes efficiently."),
    new Image("svg-icons/go-svgrepo-com.svg", ["learning"], "Go", "A statically typed language designed for performance and concurrency."),
    new Image("svg-icons/linkedin-icon.svg", ["contact"], "LinkedIn Icon", "A professional networking platform for career growth and connections.", "https://www.linkedin.com/in/axelvaz/"),
    new Image("svg-icons/react-svgrepo-com.svg", ["this-site"], "React", "A JavaScript library for building interactive and efficient user interfaces."),
    new Image("svg-icons/aws-svgrepo-com.svg", ["learning"], "Cloud Computing", "A comprehensive cloud computing platform offering a wide range of services for storage, computing, and networking."),
    new Image("svg-icons/mysql-svgrepo-com.svg", ["stack"], "MySQL", "An open-source relational database management system for storing and managing data."),
]