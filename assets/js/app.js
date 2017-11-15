function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

var RCApp = angular.module('RC', ['ngSanitize'])

RCApp.controller('PoCtrl',
    function ($scope, $sce, $window) {
        var title = window.location.href;
        console.log(title);
        $scope.portfolios = portfolios;
        $scope.title = getUrlParam('project');


        for (var i = 0; i < portfolios.length; i++) {
            //The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
            var t1 = portfolios[i].title.replace(/\s+/g, "");
            var t2 = $scope.title.replace(/\s+/g, "");
            portfolios[i].titleLower = t1.toLowerCase();
            // For img size control
            portfolios[i].picsStyle = {}
            if (portfolios[i].picsMaxHeight) {
                portfolios[i].picsStyle = {'max-height': portfolios[i].picsMaxHeight + 'px'}
            }
            if (portfolios[i].picsMaxWidth) {
                portfolios[i].picsStyle = {'max-width': portfolios[i].picsMaxWidth + 'px'}
            }

            if (portfolios[i].video) {
                $scope.URL = $sce.trustAsResourceUrl("http://" + portfolios[i].video)
                portfolios[i].video = $scope.URL;
            }
            if (t1.toLowerCase() == t2.toLowerCase()) {
                $scope.portfolio = portfolios[i];
                console.log(t2.toLowerCase());
            }
        }
        $scope.test = 123;

    });


/*

 0.xiaotao
 1.noise
 2.timing pill jar
 3.mirror
 4.nap
 5.ledrive
 6.microsoft
 7.bus
 8.warm
 9.emotional design lab
 10.FingerSonar
 11.3d interaction on gg
 12.rise
 13.ring-toss
 14.sleepcaster
 15.comming soon
 16.hobbies


 */


var portfolios = [
    {
        title          : 'Xiaotao App',
        time           : '2014 Summer',
        team           : '2 Members Project',
        role           : 'UI/UX Developer',
        simpleDes      : 'Business Innovation Design',
        brief          : 'In this project, we need to find a business opportunity and create a business model for a certain field.',
        goal           : 'Create a brand new business model combined with the online shopping, second-hand items transaction, online-to-of- fline, etc. Find the conflict in traditional fields and break the limits.',
        plan           : 'To create a business model, service ecosystem, and a minimum viable product include prototype of web-app.',
        pics           : [2, 3, 4, 5, 6],
        relatedProjects: [1, 5, 9, 14],
        finished       : true
    },
    {
        title          : 'Noisescape',
        time           : '2014 Summer',
        team           : '4 Members Project',
        role           : 'Hardware/UX Developer',
        simpleDes      : 'Information Design',
        theme          : 'dark',
        brief          : 'Noisescape can ivestigate the noise of a certain area. My main contribution lies in interactive design, circuit and software programming.',
        goal           : 'Create a brand new method of data visualization combined with big data, software, hardware, etc.',
        plan           : 'To find the solutions concerning intuitive and timely method of data visualization. To design the product based on researches.',
        pics           : [2, 3, 4, 5, 6],
        relatedProjects: [14, 3, 5, 6],
        video          : 'player.vimeo.com/video/204590399?title=0&byline=0&portrait=0&autoplay=0&loop=1',
        videoWidth     : "70%",
        videoHeight    : 440,
        finished       : true
    },
    {
        title          : 'Timing Pill Jar',
        time           : '2015 Spring',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'Concept Design',
        brief          : 'Timming Pill Jar is designed for elders to take medicine on time . It can be a big release for elders to remember themselves to take pills.',
        goal           : '',
        plan           : '',
        pics           : [2, 3, 4, 5],
        relatedProjects: [13, 4, 3, 12],
        finished       : true
    },
    {
        title          : 'Projector Corner Mirror',
        time           : '2015 Summer',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'Social Innovation',
        theme          : 'dark',
        brief          : 'It can help to project an advance warning for drivers and passerbys therefore to avoid the collision of vehicles and pedestrians on the street corner.',
        goal           : 'Pedestrains could be warned in advance when they encounter approaching cars. The product should be affordable and accessible.',
        plan           : 'To figure out the correct method of forecasting coming cars.We should pay attention to the visualization of traffic information in order that projected warnings could be easily recognised.',
        pics           : [2, 3, 4],
        relatedProjects: [1, 3, 4, 5],
        finished       : true
    },
    {
        title          : 'Nap Pillow',
        time           : '2015 ' +
        '',
        team           : '6 Members Project',
        role           : 'UX/Product Designer',
        simpleDes      : 'Product Design',
        brief          : 'Nap Pillow is a device that can guide user to form a efficient nap habit. It could wake users up before they enter the deep sleep stage.',
        goal           : 'To find interesting and reliable way of waking-up for users, to guide them efficiently and correctly.',
        plan           : "To conduct research about white collar workers' current habits of sleeping and current pillows and find the problems. To find the solutions concerning nap habits, to design the product based on researches and prototypes.",
        pics           : [2, 3, 4, 5, 6, 7],
        relatedProjects: [13, 2, 12, 3],
        finished       : true
    },
    {
        title          : 'LeDrive',
        time           : '2014 Summer',
        team           : 'Intern Project',
        role           : 'Product Assistant Intern',
        simpleDes      : 'Interaction Design',
        theme          : 'dark',
        brief          : "This project need use the advantage of smart phone device to design this special APP. Not just to design a single product, we're expected to design a ecosystem that might include the hardware, software and service.",
        goal           : 'This design should combined big data, OBD devices, etc, helping users check vehicle information.',
        plan           : 'To find a point to design this APP via marketing research and user interview. To optimize UE so that the APP could be more effective.',
        pics           : [2, 3, 4, 5],
        relatedProjects: [0, 1, 14, 6],
        finished       : true
    },
    {
        title          : 'Microsoft Dictionary',
        time           : '2015 Winter',
        team           : 'Intern Project',
        role           : 'Interaction Design Intern',
        simpleDes      : 'Interaction Design & Programming',
        brief          : "Microsoft dictionary is an interactive website which can explain acronyms related to institutional knowledge and present more detailed information and graphs to users.",
        goal           : 'By using the machine learning technology and interactive interface, this design should provide data efficiently and systematically to help users collect clusters of information.',
        plan           : 'To find a point to design this website via technology background research and information architecture. To realize the front-end interface and optimize the user experience.',
        pics           : [2, 3, 4],
        relatedProjects: [0, 1, 14, 5],
        finished       : true,
        preview        : "http://preview.ruichen.info/microsoftdictionary"
    },
    {
        title          : 'Self-Circulate Public Bike System',
        time           : '2015 Spring',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'System Innovation',
        brief          : 'This is a group work for the competition held by ILAB from France, named "Breath in City". So we designed a public bike self circulate system , powed by current bus system.',
        goal           : 'Use the minimum cost to improve the public bike scheduling system.',
        plan           : 'To do full survey and brainstrom. To proposale a viable bike circulate concept.',
        pics           : [2, 3],
        relatedProjects: [1, 2, 3, 4],
        finished       : true
    },


    /*Other works*/

    {
        title          : 'Warm-light',
        time           : '2014 Spring',
        team           : '4 Members Project',
        role           : 'Product Designer',
        simpleDes      : 'Concept Design',
        theme          : 'dark',
        brief          : 'When the temperature drops, stray animals tend to gather around ground lamps to keep them warm. Also, a shelter space is necessary to prevent animals from getting wet during the rainy days. As a solution dfor those homeless animals, warm-light is a street ground-lamp which can provide a safety and warm interspace for stray animals by re-using the wasted heat',
        goal           : '',
        plan           : '',
        pics           : [3],
        picsMaxHeight  : 800,
        relatedProjects: [2, 3, 4, 12],
        finished       : true
    },
    {
        title          : 'Emotional Design Lab',
        time           : '2017 Spring',
        team           : '2 Members Project',
        role           : 'UX/Web Developer',
        simpleDes      : 'Computing Creativity and Design Cognition',
        brief          : 'Emotional design is a concept proposed from Norman. The key idea of it is that a product should evoke an emotion when the user is interacting with the product. However, the involvement of users emotional factors is very easy to be ignored during current student designers’ idea development. In this project, issues related to how to build a design tool to help student designers improve their creative ability and how emotional design concept development may be affected by the new design tool are discussed',
        goal           : '',
        plan           : '',
        pics           : [],
        relatedProjects: [1, 2, 13, 7],
        preview        : "http://preview.ruichen.info/lab"


    },
    {
        title          : 'FingerSonar',
        time           : '2017 Summer',
        team           : 'Summer Research, Ubicomp Lab',
        role           : 'Designer, Researcher',
        simpleDes      : 'Research',
        theme          : 'dark',
        brief          : 'Despite years of research and development and substantial progress made, providing appropriate means for input to wearable devices remains a considerable challenge. The size and comfort required for continuous use of a wearable device, as well as the need to operate in mobile contexts with minimal difficulty and attention, make the options of keyboards and touchscreens less desirable. Given this motivation for a convenient and socially appropriate wearable input solution, we introduce FingerSonar, a novel wrist and thumb-mounted sensing solution to enable one handed input.' +
        '<br/><i>The results of this project have been written and submitted to CHI 2018.<i/>',
        concept        : 'FingerSonar is a novel sensing technique that can recognize various fine-grained hand poses by analyzing acoustic resonance features. <br/>FingerSonar relies on detecting various hand configurations based on how that configuration impacts the propagation of sound waves injected at the thumb and propagating around the hand. A surface-transducer mounted on a thumb ring injects acoustic chirps to the body. Four receivers distributed on the wrist and thumb collect the chirps. Different hand poses of the hand create distinct paths for the acoustic chirps to travel, creating unique frequency responses at the four receivers.',
        goal           : '',
        plan           : '',
        pics           : [2, 3],
        picsMaxHeight  : 450,
        relatedProjects: [11, 6, 1, 5],
        video          : 'player.vimeo.com/video/235812031?title=0&byline=0&portrait=0&color=ff795b',
        videoWidth     : 640,
        videoHeight    : 360,
        finished       : true


    },
    {
        title          : '3D interactions on the Google Glass',
        time           : '2017 Spring',
        team           : '4 Members Project',
        role           : 'Designer, Researcher',
        simpleDes      : 'Research',
        brief          : 'The small physical size of wearable spectacle devices limits the user experience and prevents the user from a deep engagement process with the wearable technology compared to smartphones, tablets, or laptops. Much of the user-device interaction today is primarily driven by touch-based methods and the size and form factor of wearable spectacles provides a very small surface area relative to the finger to perform such touch interactions. This imposes restrictions on the user’s set of interactions. While simple operations, like tapping the frame of the wearable spectacle to select an application, can be performed, more powerful interactions such as multi-touch or gesture-based text input are difficult. There is a need to extend the input to a larger space that has the potential to support a richer set of input gestures.',
        concept        : 'In this project, our team explores using 3-dimensional gestures as a means to extend the input capabilities of the Glass. We use SoundTrak, an active acoustic sensing technique that enables a user to interact with the Google Glass in the surrounding 3D space by continuously tracking the finger position with high resolution. The user wears a ring with an embedded miniature speaker sending an acoustic signal at a specific frequency, which is captured by an array of miniature, inexpensive microphones on the target wearable device.',
        goal           : '',
        plan           : '',
        pics           : [2, 3, 4],
        relatedProjects: [10, 6, 1, 5],
        picsMaxWidth   : 740,
        video          : 'player.vimeo.com/video/213444011?title=0&byline=0&portrait=0&color=ff795b',
        videoWidth     : 640,
        videoHeight    : 360
    },

    {
        title          : 'Rise and Fall',
        time           : '2014 Summer',
        team           : 'Individual Project',
        role           : 'Product Designer',
        simpleDes      : 'Cultural Innovation',
        brief          : 'Rise-and-fall is a humidifier that was inspired by chinese traditional incense culture.',
        goal           : '',
        plan           : '',
        pics           : [2, 3],
        picsMaxHeight  : 600,
        relatedProjects: [2, 4, 13, 7],
        finished       : true
    },
    {
        title          : 'Ring-toss',
        time           : '2016 Summer',
        team           : 'Graduation Project',
        role           : 'Product Designer',
        simpleDes      : 'Emotional Design',
        brief          : 'The amount of information received by everyone is increasing rapidly with the development of the Internet. So we can say that this is an era of information. In this era, it’s distinct characteristics and the tide of digitalization need to be reformed by design, the humanized design and the design’s communication attribute need to be re-examined. This design chooses emotional design as a starting point to explore the reasonable relationship between people and machines. I tries to explore a feasible decompression solution to the office workers. The goal is to design a white noise audio based on interactive design.',
        concept        : '"Ring-Toss"  is an interactive white noise audio which is based on emotional design.  It will play user’s custom sound effect according to the number of wooden rings.  The product is inspired by the ringtoss game. Each pillar on the “Ring-Toss”  represents a type of sound effect. By this way, the product can arouse emotion sympathy and provoke thought through a more natural interaction.',
        goal           : '',
        plan           : '',
        pics           : [2],
        picsMaxHeight  : 1200,
        relatedProjects: [2, 4, 12, 9],
        finished       : true
    },
    {
        title    : 'Sleepcaster',
        time     : '2016 Fall',
        team     : '4 Members Project',
        role     : 'UI/UX Designer',
        simpleDes: 'Interaction Design',
        theme    : 'dark',
        brief    : 'Sleepcaster is a solution for sleep management for college students.The application allows students to manage their sleep by crowdsourcing the time required to complete assignments and predict the future workload.',

        goal           : 'This design should adopt a friendly way to guide users to have a healthy sleep management.',
        plan           : 'To develop the entire application experience focusing on the problems faced by college students. To develop a sleep management tool based around college student. To go through the whole user centered design process.',
        pics           : [2, 3, 4, 5, 6],
        relatedProjects: [0, 1, 5, 6],
        video          : 'player.vimeo.com/video/199720880?title=0&byline=0&portrait=0&color=ff0179',
        videoWidth     : 320,
        videoHeight    : 570,
        finished       : true
    },

    {
        title          : 'Coming soon',
        time           : 'N/A',
        team           : 'N/A',
        role           : 'N/A',
        simpleDes      : '',
        relatedProjects: [16, 15, 15, 15]
    },
    {
        title          : 'Painting is fun',
        time           : 'Always',
        team           : 'Individual',
        role           : 'Cartoonist',
        simpleDes      : 'Hobby',
        theme          : 'dark',
        brief          : 'Thanks to painting which I have been insisting on, I learn the significance of passion. Wartercolor and colored pencil are my favorite styles.',
        pics           : [2, 3, 4, 5],
        picsMaxHeight  : 700,
        relatedProjects: [9, 13, 4, 2],
        finished       : true
    }
];

