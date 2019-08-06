import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from './components/heading/heading.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}
