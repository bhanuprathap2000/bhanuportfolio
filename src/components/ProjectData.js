import Weatherapp from "../assets/projects_images/weatherapp.png"
import UrlShortener from "../assets/projects_images/urlshortener.png"
import CustomerBook from "../assets/projects_images/customerbook.png"
import indexcal from "../assets/projects_images/indexcal.png"

const data_projects = [
    

   

    

    {
        name: 'Weatherapp',
        image: Weatherapp,
        deployed_url: 'https://bhanuprathapweatherapp.herokuapp.com/',
        github_url: 'https://github.com/bhanuprathap2000/weatherapp',
        category: ['node.js']
    },
    {
        name: 'Url Shortener',
        image: UrlShortener,
        deployed_url: 'https://urlshortenerappbhanu.herokuapp.com/',
        github_url: 'https://github.com/bhanuprathap2000/urlshortenerapp',
        category: ['node.js','mongoDB']
    },
    {
        name: 'Customer Book',
        image: CustomerBook,
        deployed_url: '#',
        github_url: 'https://github.com/bhanuprathap2000/customerbook',
        category: ['node.js','mongoDB']
    },
    {
        name: 'Stock Index Range Calculator',
        image: indexcal,
        deployed_url: 'https://stockindexrange.herokuapp.com/',
        github_url: 'https://github.com/bhanuprathap2000/stockindexcalculator',
        category: ['python']
    }
]

export default data_projects;