import tool1 from "../assets/BMI.jpg"
import tool2 from "../assets/medical-help.jpg"
import tool3 from "../assets/hospital.jpg"


const ToolCardData =[
    {
        imgsrc: tool1,
        title: "BMI",
        text: "Body mass index, or BMI, is a measure of body size. It combines a person’s weight with their height. The results of a BMI measurement can give an idea about whether a person has the correct weight for their height",
        view: "/bmi"
    },
    {
        imgsrc: tool2,
        title: "Medical Help",
        text: "It's our responsibility to help each other whenever we need. We try to provide any kind of medical help, checkup, medicine and emergency support, care for well-beings. Contact us for any medical help.",
        view: ""
    },
    {
        imgsrc: tool3,
        title: "Nearby Hospitals",
        text: "We provide you all details of your nearby hospitals. Check anytime about the hospitals, services, current conditions and stats, bed availability etc. Just put your location or prefered hospitals to check.",
        view: "https://www.google.com/search?q=nearby+hospitals&oq=nearby+hospitals&aqs=chrome..69i57j0i457i512j0i512l6j0i10i512.10542j0j4&sourceid=chrome&ie=UTF-8"
    }
];

export default ToolCardData;