<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a simple [Tailwind](https://tailwindui.com/) starter that includes:
* [PostCss](https://postcss.org/) to remove unused css.
* [autoprefixer](https://www.npmjs.com/package/autoprefixer) to add css vendor prefixes.
* [cssnano](https://www.npmjs.com/package/cssnano) to compress css.
* [live-server](https://www.npmjs.com/package/live-server) to add auto reload server to our development proccess.

Note: This project dose not use Webpack.

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

* yarn(or use npm)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moh1434/tailwind-starter.git
   ```
2. Install yarn packages
   ```sh
   yarn install
   ```

<!-- USAGE EXAMPLES -->
## Usage
You can modify `./public/index.html` as you need. \
Your css files should be only on `./style` folder. \
Note: the `./public/dist_style` folder is generated automaticaly by postcss, so you Should never modify it. Insted, write your css files in the `./style` folder that located on the root of the project. 

* For development proccess:
   ```sh
   yarn run dev
   ```
This will generate your css on `./public/dist_style` folder and start live server on (http://127.0.0.1:8080/) or (http://localhost:8080/). \
Note: you need to refresh the page every time you restart the `yarn run dev` or `yarn run only-server` command. \
Note: To make development proccess faster, tailwind unused css will removed only on production. 


* For Production:
   ```sh
   yarn run build
   ```
   
This will generate your css on `./public/dist_style` and optmize it to be ready to deploy. \

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License.
