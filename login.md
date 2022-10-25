<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="../css/styleLogin.css">
    
</head>
<body>
    <header>
        <div class="justify-logo">


            <a href="Home.html">
                <div class="header-border-img">
                    <img src="../assets/Logo.png" alt="" height="80">
                </div>
            </a>

            <div class="navigation-block">
                <a href="Home.html">
                    <div class="header-block">
                        Home
                    </div>
                </a>

                <div class="dropdown">
                    <a href="Characters.html">
                        <div>Characters</div>
                    </a>
                    <a href="AboutGame.html">
                        <div>About Game</div>
                    </a>
                    <a href="Gallery.html">
                        <div>Gallery</div>
                    </a>
                </div>

            </div>
        </div>

        <div class="justify-header">
            <a href="Login.html">
                <div class="header-block">
                    Login
                </div>
            </a>
            <a href="Register.html">
                <div class="header-block">
                    Register
                </div>
            </a>
        </div>

    </header>
    <div class="data">
        <header>Login Form</header><br>
        <div class="login-form">
            <form name="form" onsubmit="return validate()" method="POST" action="Home.html">
                <div class="page">
                    <div class="field">
                        <div class="label">Username</div>
                        <input type="text" name="email" autocomplete="off" required>
                        <div id="error1"></div>
                    </div>
                    <br>
                    <div class="field">
                        <div class="label t2">Password</div>
                        <input type="password" name="password" autocomplete="off" required>
                        <div id="error2"></div>
                    </div>

                    <div class="field btn">
                        <button class="submit">Login</button>
                    </div>    
                </div>
            </form>
        </div>
    </div>
    
    <footer>
        <div class="Logo">
            <span class="logoFacebook">
                <a href="https://www.facebook.com" target="_blank">
                    <img src="../assets/Facebook.jpg" height="30" alt="">
                </a>
            </span>
            <a href="https://www.instagram.com" target="_blank">
                <img src="../assets/Instagram.jpg" height="40" alt="">
            </a>
            <span class="logoYoutube">
                <a href="https://www.youtube.com" target="_blank">
                    <img src="../assets/Youtube.jpg" height="40" alt=""></a>
            </span>
        </div>
        <div class="footerCP">
            &#169; Kenshin Impact
        </div>
    </footer>
    <script src="../js/LoginValidation.js"></script>
</body>
</html>
