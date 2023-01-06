import tool1 from "../assets/BMI.jpg"
import tool2 from "../assets/medical-help.jpg"
import tool3 from "../assets/hospital.jpg"
import tool4 from "../assets/hospital.jpg"

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
        view: "/bmr"
    },
    {
        imgsrc: tool3,
        title: "Nearby Hospitals",
        text: "The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting).",
        view: "/bmr"
    },
    {
        imgsrc: tool4,
        title: "BMR",
        text: "We provide you all details of your nearby hospitals. Check anytime about the hospitals, services, current conditions and stats, bed availability etc. Just put your location or prefered hospitals to check.",
        view: "/bmr"
    }
];

export default ToolCardData;