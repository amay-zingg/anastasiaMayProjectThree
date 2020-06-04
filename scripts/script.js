// * * * * DOCUMENT READY FUNCTIONS ALLOWS PAGE TO LOAD BEFORE RUNNING ANY OF OUR SCRIPTS 
$(document).ready(function () {

    // * * * * DOG BREEDS DATA
    const dogBreedsResult = [
        {
            id: 'goldenRetriever',
            score: 0,
            img: '../assets/noemi-macavei-katocz-c7bUIRBqapA-unsplash.jpg',
            result: "You are a Golden" 
        },
        {
            id: 'beagle',
            score: 0,
            img: '../assets/noemi-macavei-katocz-c7bUIRBqapA-unsplash.jpg',
            result: "You are a Beagle"
        },
        {
            id: 'dachshund',
            score: 0,
            img: '../assets/noemi-macavei-katocz-c7bUIRBqapA-unsplash.jpg',
            result: "You are a Dachshund"
        },
        {
            id: 'pug',
            score: 0,
            img: '../assets/noemi-macavei-katocz-c7bUIRBqapA-unsplash.jpg',
            result: "You are a Pug"
        },
    ];

    // * * * * PREVENTING DEFAULT BROWSER BEHAVIOUR TO REFRESH THE PAGE
    $('button.next').on('click', function (event) {
        event.preventDefault();
    });

    // * * * * ARRAY TO CAPTURE USER INPUT

    // let goldenRetriever = 0;
    // let beagle = 0;
    // let pug = 0;
    // let dachshund = 0;
    
    let results = [];

    // * * * * LOOP THROUGH QUESTIONS - QUESTION ONE
    $('button.firstNext').click(function () {

        const value = $('input:radio[name=firstAnswer]:checked').val();
        // console.log(parseFloat(value));    
        
        if ($("input:radio[name=firstAnswer]:checked").length === 0) {
            alert("You must pick one!");
            return false;
        };
        // if ($('input:radio[name=firstAnswer]').not(':checked')) {
        //     alert("You must pick one!");
        // } 
        //not sure how to make this not reload to next question block


        //.pop() to make last answer disappear if previous question has a new/different value

        console.log(value);

        // * * * * RESULTS ARRAY
        results.push(parseFloat(value));
        
    });
        
    // * * * * LOOP THROUGH QUESTIONS - QUESTION TWO
    $("button.secondNext").click(function () {
        const value2 = $("input:radio[name=secondAnswer]:checked").val();
        // console.log(value2);

        // * * * * RESULTS ARRAY
        // let totalResult = [];
        results.push(parseFloat(value2));
        console.log(results);
    });

    // * * * * LOOP THROUGH QUESTIONS - QUESTION THREE
    $("button.thirdNext").click(function () {
        const value3 = $("input:radio[name=thirdAnswer]:checked").val();
        // console.log(value3);

        // * * * * RESULTS ARRAY
        // let totalResult = [];
        results.push(parseFloat(value3));
        console.log(results);
    });
    
    // * * * * LOOP THROUGH QUESTIONS - QUESTION FOUR
    $("button.result").click(function () {
        const value4 = $("input:radio[name=fourthAnswer]:checked").val();
        // console.log(value4);

        // * * * * RESULTS ARRAY
        results.push(parseFloat(value4));
        console.log(results);

        // * * * * ON CLICK OF RESULT OPEN RESULTS CONTAINER
        $('.quizContainerFour').hide();
        $(".dogBreedResult").fadeIn(1000);
        // function makeTotalArray() {
        // };

        // makeTotalArray();



        // * * * * MAKE 'RESULTS' ARRAY ALL ONE SUM

        let sumOfNumbers = results.reduce((acc, cur) => {
            return acc + cur;
        });

        console.log(sumOfNumbers);


    });
    
    // * * * * PICK DOG BREED BASED ON RESULTS


    // * * * * TO SELECT A PHOTO RADIO BUTTON
    $(".answer img").click(function () {
        $(this).prev().attr('checked', true);
    })

    // * * * * TO FLIP THROUGH PAGES
    $("button.firstNext").click(function () {
        $('.quizContainer').hide();
        $(".quizContainerTwo").fadeIn(1000);
    });

    $("button.secondNext").click(function () {
        $('.quizContainerTwo').hide();
        $(".quizContainerThree").fadeIn(1000);
    });

    $("button.thirdNext").click(function () {
        $('.quizContainerThree').hide();
        $(".quizContainerFour").fadeIn(1000);
    });
    
    $("button.firstPrevious").click(function () {
        $('.quizContainerTwo').hide();
        $(".quizContainer").fadeIn(1000);
    });

    $("button.secondPrevious").click(function () {
        $('.quizContainerThree').hide();
        $(".quizContainerTwo").fadeIn(1000);
    });

    $("button.thirdPrevious").click(function () {
        $('.quizContainerFour').hide();
        $(".quizContainerThree").fadeIn(1000);
    });


    // // * * * * QUESTIONS
    // const dogQuizQuestions = [
    //     {
    //         question: "Pick One",
    //         answers: {
    //             answerOne: false, //PUG
    //             answerTwo: false, //DACHSHUND
    //             answerThree: true, //BEAGLE
    //             answerFour: true
    //         } //GOLDEN
    //     },
    //     {
    //         question: "Do you like swimming?",
    //         answers: {
    //             answerOne: false,
    //             answerTwo: false,
    //             answerThree: true,
    //             answerFour: true
    //         }
    //     },
    //     {
    //         question: "Are you hairy?",
    //         answers: {
    //             answerOne: false,
    //             answerTwo: false,
    //             answerThree: true,
    //             answerFour: true
    //         }
    //     },
    //     {
    //         question: "Do you have a lot of opinions?",
    //         answers: {
    //             answerOne: false,
    //             answerTwo: false,
    //             answerThree: true,
    //             answerFour: true
    //         }
    //     }
    // ];


}); // * * * * END OF THE DOCUMENT READY