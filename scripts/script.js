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

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value));
        });

        $("button.firstNext").on("click", function () {
            const value = $('input:radio[name=firstAnswer]:checked').val();

            if ($("input:radio[name=firstAnswer]:checked").length === 0) {
                alert("You must pick one!");
                return false;
            };

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value));
        });

        // * * * * TO GO TO SECOND PAGE
        $(".quizChoicesOne img").on("dblclick", function () {
            $('.quizContainer').hide();
            $(".quizContainerTwo").fadeIn(1000);
        });

        $("button.firstNext").on("click", function () {
            $('.quizContainer').hide();
            $(".quizContainerTwo").fadeIn(1000);
        });
    
        // * * * * GO THROUGH QUESTIONS - QUESTION TWO
        $(".quizChoicesTwo img").on("dblclick", function () {
            const value2 = $('input:radio[name=secondAnswer]:checked').val();

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value2));
        });
        
        $("button.secondNext").on("click", function () {
            const value2 = $("input:radio[name=secondAnswer]:checked").val();

            if ($("input:radio[name=secondAnswer]:checked").length === 0) {
                alert("You must pick one!");
                return false;
            };

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value2));
        });

        // * * * * TO GO TO THIRD PAGE
        $(".quizChoicesTwo img").on("dblclick", function () {
            $('.quizContainerTwo').hide();
            $(".quizContainerThree").fadeIn(1000);
        });

        $("button.secondNext").on("click", function () {
            $('.quizContainerTwo').hide();
            $(".quizContainerThree").fadeIn(1000);
        });

        // * * * * GO THROUGH QUESTIONS - QUESTION THREE
        $(".quizChoicesThree img").on("dblclick",function () {
            const value3 = $("input:radio[name=thirdAnswer]:checked").val();

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value3));
        });

        $("button.thirdNext").on("click", function () {
            const value3 = $("input:radio[name=thirdAnswer]:checked").val();

            if ($("input:radio[name=thirdAnswer]:checked").length === 0) {
                alert("You must pick one!");
                return false;
            };

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value3));
        });

        // * * * * TO GO TO FOURTH PAGE
        $(".quizChoicesThree img").on("dblclick", function () {
            $('.quizContainerThree').hide();
            $(".quizContainerFour").fadeIn(1000);
        });

        $("button.thirdNext").on("click", function () {
            $('.quizContainerThree').hide();
            $(".quizContainerFour").fadeIn(1000);
        });

        // * * * * GO THROUGH QUESTIONS - QUESTION FOUR
        $("button.result").on("click", function () {
            const value4 = $("input:radio[name=fourthAnswer]:checked").val();

            if ($("input:radio[name=fourthAnswer]:checked").length === 0) {
                alert("You must pick one!");
                return false;
            };

            // * * * * RESULTS ARRAY
            results.push(parseFloat(value4));

            // * * * * CAN'T FIGURE OUT WHY THE DOUBLE CLICK DOESN'T WORK FOR THE RESULT
            // $(".quizChoicesFour img").on("dblclick", function () {
            //     const value4 = $("input:radio[name=fourthAnswer]:checked").val();

            //     // * * * * RESULTS ARRAY
            //     results.push(parseFloat(value4));

            //     $('.quizContainerFour').hide();
            //     $(".dogBreedResult").fadeIn(1000);
            //     console.log("DO I WORK");
            // });

            // * * * * ON CLICK OF RESULT OPEN RESULTS CONTAINER
            $('.quizContainerFour').hide();
            $(".dogBreedResult").fadeIn(1000);

            // * * * * MAKE 'RESULTS' ARRAY ALL ONE SUM
            let totalResult = results.reduce((acc, cur) => {
                return acc + cur;
            });

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
                if (totalResult >= 6, totalResult <= 9) {
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

        };
        
    $(function () {
        results.init();
    });
        
    }); // * * * * END OF THE DOCUMENT READY