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

    // * * * * TO SELECT A PHOTO RADIO BUTTON
    $(".answer img").click(function () {
        $(this).prev().attr('checked', true);
    });

    // * * * * GO THROUGH QUESTIONS
    results.init = function () {

        // * * * * GO THROUGH QUESTIONS - QUESTION ONE
        $(".quizChoicesOne img").on("dblclick", function() {
            const value = $('input:radio[name=firstAnswer]:checked').val();

             // * * * * TO GO TO SECOND PAGE ON DOUBLE CLICK
            $('.quizContainer').hide();
            $(".quizContainerTwo").fadeIn(1000);

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value));
        });

        // * * * * QUESTION ONE - NEXT BUTTON
        $("button.firstNext").on("click", function () {
            const value = $('input:radio[name=firstAnswer]:checked').val();

            if ($("input:radio[name=firstAnswer]:checked").length === 0) {
                alert("You must pick one!");
                return false;
            } else {
                 // * * * * TO GO TO SECOND PAGE 
                $('.quizContainer').hide();
                $(".quizContainerTwo").fadeIn(1000);
            };

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value));
        });
        
    
        // * * * * GO THROUGH QUESTIONS - QUESTION TWO
        $(".quizChoicesTwo img").on("dblclick", function () {
            const value2 = $('input:radio[name=secondAnswer]:checked').val();

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value2));

            // * * * * TO GO TO THIRD PAGE ON DOUBLE CLICK
            $('.quizContainerTwo').hide();
            $(".quizContainerThree").fadeIn(1000);
        });
        
        // * * * * QUESTION TWO - NEXT BUTTON
        $("button.secondNext").on("click", function () {
            const value2 = $("input:radio[name=secondAnswer]:checked").val();

            if ($("input:radio[name=secondAnswer]:checked").length === 0) {
                alert("You must pick one!");
                return false;
            } else {
                // * * * * TO GO TO THIRD PAGE
                $('.quizContainerTwo').hide();
                $(".quizContainerThree").fadeIn(1000);
            };

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value2));
        });

        // * * * * GO THROUGH QUESTIONS - QUESTION THREE
        $(".quizChoicesThree img").on("dblclick",function () {
            const value3 = $("input:radio[name=thirdAnswer]:checked").val();

            // * * * * TO GO TO FOURTH PAGE ON DOUBLE CLICK
            $('.quizContainerThree').hide();
            $(".quizContainerFour").fadeIn(1000);

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value3));
        });

        // * * * * QUESTION THREE - NEXT BUTTON
        $("button.thirdNext").on("click", function () {
            const value3 = $("input:radio[name=thirdAnswer]:checked").val();

            if ($("input:radio[name=thirdAnswer]:checked").length === 0) {
                alert("You must pick one!");
                return false;
            } else {
                $('.quizContainerThree').hide();
                $(".quizContainerFour").fadeIn(1000);
            };

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value3));
        });

        // * * * * GO THROUGH QUESTIONS - QUESTION FOUR (BOTH DOUBLE CLICK AND RESULTS BUTTON)
        $(".quizChoicesFour img").on("dblclick", function() {
            const value4 = $("input:radio[name=fourthAnswer]:checked").val();

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value4));

            $('.quizContainerFour').hide();
            $(".dogBreedResult").fadeIn(1000);

            // * * * * MAKE 'RESULTS' ARRAY ALL ONE SUM
            let totalResult = results.reduce((acc, cur) => {
                return acc + cur;
            });

            // * * * * PICK DOG BREED BASED ON RESULTS
            function showResult() {
                if (totalResult >= 13, totalResult <= 16) {
                    $('div.dogBreedResult').html(
                        $(`<h3>Congrats! You are a ${dogBreedsResult[0].id}!</h3><img src="${dogBreedsResult[0].img}" alt="A guilty golden retriever | Photo from www.dogshaming.com"><p class="result">${dogBreedsResult[0].result}</p>`)
                    );
                };
                if (totalResult >= 11, totalResult <= 12) {
                    $('div.dogBreedResult').html(
                        $(`<h3>Congrats! You are a ${dogBreedsResult[1].id}!</h3><img src="${dogBreedsResult[1].img}" alt="A guilty beagle | Photo from www.dogshaming.com"><p class="result">${dogBreedsResult[1].result}</p>`)
                    );
                };
                if (totalResult >= 8, totalResult <= 10) {
                    $('div.dogBreedResult').html(
                        $(`<h3>Congrats! You are a ${dogBreedsResult[2].id}!</h3><img src="${dogBreedsResult[2].img}" alt="A guilty dashchund | Photo from www.dogshaming.com"><p class="result">${dogBreedsResult[2].result}</p>`)
                    );
                };
                if (totalResult <= 7) {
                    $('div.dogBreedResult').html(
                        $(`<h3>Congrats! You are a ${dogBreedsResult[3].id}!</h3><img src="${dogBreedsResult[3].img}" alt="A guilty pug | Photo from www.dogshaming.com"><p class="result">${dogBreedsResult[3].result}</p>`)
                    );
                };

                $(".redoQuiz").fadeIn(2000);
                $("input[type=reset]").on("click", function () {
                    window.location.reload()
                });
            };

            showResult();

        });

        // * * * * QUESTION FOUR - RESULT BUTTON
        $("button.result").on("click", function () {
            const value4 = $("input:radio[name=fourthAnswer]:checked").val();

            if ($("input:radio[name=fourthAnswer]:checked").length === 0) {
                alert("You must pick one!");
                return false;
            };

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value4));

            // * * * * ON CLICK OF RESULT OPEN RESULTS CONTAINER
            $('.quizContainerFour').hide();
            $(".dogBreedResult").fadeIn(1000);

            // * * * * MAKE 'RESULTS' ARRAY ALL ONE SUM
            let totalResult = results.reduce((acc, cur) => {
                return acc + cur;
            });

            // * * * * PICK DOG BREED BASED ON RESULTS
            function showResult() {
                if (totalResult >= 13, totalResult <= 16) {
                    $('div.dogBreedResult').html(
                        $(`<h3>Congrats! You are a ${dogBreedsResult[0].id}!</h3><img src="${dogBreedsResult[0].img}" alt="A guilty golden retriever | Photo from www.dogshaming.com"><p class="result">${dogBreedsResult[0].result}</p>`)
                    );
                };
                if (totalResult >= 11, totalResult <= 12) {
                    $('div.dogBreedResult').html(
                        $(`<h3>Congrats! You are a ${dogBreedsResult[1].id}!</h3><img src="${dogBreedsResult[1].img}" alt="A guilty beagle | Photo from www.dogshaming.com"><p class="result">${dogBreedsResult[1].result}</p>`)
                    );
                };
                if (totalResult >= 8, totalResult <= 10) {
                    $('div.dogBreedResult').html(
                        $(`<h3>Congrats! You are a ${dogBreedsResult[2].id}!</h3><img src="${dogBreedsResult[2].img}" alt="A guilty dashchund | Photo from www.dogshaming.com"><p class="result">${dogBreedsResult[2].result}</p>`)
                    );
                };
                if (totalResult <= 7) {
                    $('div.dogBreedResult').html(
                        $(`<h3>Congrats! You are a ${dogBreedsResult[3].id}!</h3><img src="${dogBreedsResult[3].img}" alt="A guilty pug | Photo from www.dogshaming.com"><p class="result">${dogBreedsResult[3].result}</p>`)
                    );
                };

                $(".redoQuiz").fadeIn(2000);
                $("input[type=reset]").on("click", function () {
                    window.location.reload()
                });
            };

            showResult();

        });

        }; // * * * *  END OF RESULTS INIT
       
        
    $(function () {
        results.init();
    });
 
    }); // * * * * END OF THE DOCUMENT READY