// * * * * DOCUMENT READY FUNCTIONS ALLOWS PAGE TO LOAD BEFORE RUNNING ANY OF OUR SCRIPTS 
$(document).ready(function () {

    // * * * * DOG BREEDS DATA
    const dogBreedsResult = [
        {
            id: 'Golden Retriever',
            img: './assets/goldenRetriever.jpg',
            result: "You make an excellent companion and bring laughter and joy to anyone and everyone!" 
        },
        {
            id: 'Beagle',
            img: './assets/beagle.jpg',
            result: "You're curious, clever and energetic!"
        },
        {
            id: 'Dachshund',
            img: './assets/dachshund.jpg',
            result: "You are strong-willed, energetic and entertaining!"
        },
        {
            id: 'Pug',
            img: './assets/pug.jpg',
            result: "You're a lot of dog in a small space!"
        },
    ];

    // * * * * PREVENTING DEFAULT BROWSER BEHAVIOUR TO REFRESH THE PAGE
    $('button.next').on('click', function (event) {
        event.preventDefault();
    });

    // * * * * ARRAY TO CAPTURE USER INPUT

    let results = [];

    // * * * * LOOP THROUGH QUESTIONS - QUESTION ONE
    $('button.firstNext').click(function () {

        const value = $('input:radio[name=firstAnswer]:checked').val();  
        
        if ($("input:radio[name=firstAnswer]:checked").length === 0) {
            alert("You must pick one!");
            return false;
        };
        // if ($('input:radio[name=firstAnswer]').not(':checked')) {
        //     alert("You must pick one!");
        // } 
        //not sure how to make this not reload to next question block

        //.pop() to make last answer disappear if previous question has a new/different value

        // console.log(value);

        // * * * * RESULTS ARRAY
        results.push(parseFloat(value));
        
    });
        
    // * * * * LOOP THROUGH QUESTIONS - QUESTION TWO
    $("button.secondNext").click(function () {
        const value2 = $("input:radio[name=secondAnswer]:checked").val();

        // * * * * RESULTS ARRAY
        results.push(parseFloat(value2));
        console.log(results);
    });

    // * * * * LOOP THROUGH QUESTIONS - QUESTION THREE
    $("button.thirdNext").click(function () {
        const value3 = $("input:radio[name=thirdAnswer]:checked").val();

        // * * * * RESULTS ARRAY
        results.push(parseFloat(value3));
        console.log(results);
    });
    
    // * * * * LOOP THROUGH QUESTIONS - QUESTION FOUR
    $("button.result").click(function () {
        const value4 = $("input:radio[name=fourthAnswer]:checked").val();

        // * * * * RESULTS ARRAY
        results.push(parseFloat(value4));
        console.log(results);

        // * * * * ON CLICK OF RESULT OPEN RESULTS CONTAINER
        $('.quizContainerFour').hide();
        $(".dogBreedResult").fadeIn(1000);
        
        // * * * * MAKE 'RESULTS' ARRAY ALL ONE SUM

        let totalResult = results.reduce((acc, cur) => {
            return acc + cur;
        });

        console.log(totalResult);

        // * * * * PICK DOG BREED BASED ON RESULTS

        function showResult() {
            if (totalResult >= 14, totalResult <= 16) {
                $('div.dogBreedResult').html(
                    $(`<h3 class="result">Congrats! You are a ${dogBreedsResult[0].id}!</h3><img src="${dogBreedsResult[0].img}" alt="A guilty golden retriever | Photo from www.dogshaming.com" /><p class="result">${dogBreedsResult[0].result}</p>`)
                    );
            };
            if (totalResult >= 10, totalResult <= 12) {
                $('div.dogBreedResult').html(
                    $(`<h3 class="result">Congrats! You are a ${dogBreedsResult[1].id}!</h3><img src="${dogBreedsResult[1].img}" alt="A guilty beagle | Photo from www.dogshaming.com" /><p class="result">${dogBreedsResult[1].result}</p>`)
                );
            };
            if(totalResult >= 6, totalResult <= 9) {
                $('div.dogBreedResult').html(
                    $(`<h3 class="result">Congrats! You are a ${dogBreedsResult[2].id}!</h3><img src="${dogBreedsResult[2].img}" alt="A guilty dashchund | Photo from www.dogshaming.com" /><p class="result">${dogBreedsResult[2].result}</p>`)
                );
            };
            if (totalResult <= 5) {
                $('div.dogBreedResult').html(
                    $(`<h3 class="result">Congrats! You are a ${dogBreedsResult[3].id}!</h3><img src="${dogBreedsResult[3].img}" alt="A guilty pug | Photo from www.dogshaming.com" /><p class="result">${dogBreedsResult[3].result}</p>`)
                );
            };
        };

        showResult();

    });
    
    
    


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