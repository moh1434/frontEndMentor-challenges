<!-- ABOUT THE PROJECT -->
## About The Project
This solution is for [Chat-app-CSS-illustration](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY) challenge from frontEndMentor website.

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

* yarn(or use npm)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moh1434/frontEndMentor-challenges
   ```
   make sure you are in `Chat-app-CSS-illustration` branch
2. Install yarn packages
   ```sh
   yarn install
   ```

<!-- USAGE EXAMPLES -->
## Usage

* For development proccess:
   ```sh
   yarn run dev
   ```

* For Production:
   ```sh
   yarn run build
   ```
  
 ## What I learned
 I learned that using **BEM** naming convention with **tailwind** is **not a good idea**.
 for example i prefer to write:
```		
<section class="max-w-440 text-center lg:text-left">
   <h1 class="text-4xl font-bold py-8 text-violet-very-dark lg:text-5xl lg:font-medium">Simple booking</h1>
   <p class="text-violet-dark">Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
</section>
```
insted of:
 ```
<section class="text-section">
   <h1 class="text-section__title">Simple booking</h1>
   <p class="text-section__paragraph">Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
</section>

<!-- and css: -->
<style>
 .text-section {
	@apply text-center max-w-440;
}
.text-section .text-section__title {
	@apply text-4xl font-bold py-8 text-violet-very-dark;
}
.text-section .text-section__paragraph {
	@apply text-violet-dark;
}
@screen lg {
	.text-section {
		@apply text-left;
	}
	.text-section .text-section__title {
		@apply text-5xl font-medium;
	}
}
</style>
 ```
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
