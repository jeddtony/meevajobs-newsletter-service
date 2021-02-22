<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @font-face {
font-family: 'Montserrat';
font-style: normal;

src: local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v7/zhcz-_WihjSQC0oHJ9TCYL3hpw3pgy2gAi-Ip7WPMi0.woff) format('woff');
}

        .container{
            display: flex;
            flex-direction: column;
            margin-left: 50px;
            margin-right: 50px;
            font-family: Helvetica, sans-serif;
            font-weight: lighter; 
            color: #777777;
            
        }
        .center-text{
            text-align: center;
        }
      
        .item{
            text-align: justify;
        }
        .footer{
            background-color: #3a56a6;
            color: white;
            padding: 2%;
            text-align: center
        }
        hr {
            background-color: #DEDEDE;
            height: 3px;
            border: none
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">
            <img src="https://via.placeholder.com/50" alt="Concept Nova Logo"/>
        </div>
        
        <div class="item">
            <hr />

            <p>
                Hello {{$name}}
            </p>

            <p>This is the newsletter for January</p>

            <h4 class="center-text">This is the no longer the title</h4>

            <p style="line-height: 1.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed felis vel ipsum finibus pharetra. 
                Quisque vulputate nulla mi, eget bibendum felis porta eget. Quisque condimentum ipsum eu eleifend ultricies. 
                Mauris bibendum velit in ante vulputate pellentesque malesuada ut neque. Sed ut feugiat felis. Praesent eleifend nibh nunc, porttitor tempor ex fringilla varius. 
                Duis ac diam in mi maximus semper. Ut turpis turpis, tincidunt ut magna eu, elementum luctus lectus. Sed consectetur facilisis ex at lacinia. Mauris lorem libero, tristique vitae molestie in, iaculis eu erat. 
                Suspendisse potenti. Sed nunc felis, vulputate sit amet risus at, porta vehicula purus. Nullam eget arcu nulla. Sed venenatis, sapien sit amet scelerisque semper, augue sem sodales massa, at rhoncus elit mi sed augue.
            </p>

            <p>
                <br /> 
                Sincerely, <br />
            
            The Meevajobs Team
            </p>

        </div>

       
    </div>

    <div class="item footer">
        @ Meevajobs 2021
    </div>
</body>
</html>