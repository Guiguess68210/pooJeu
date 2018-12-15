    
    class Acteur
    {
        constructor (fichierImage,x ,y)
        {  
            //Création et Initialisation de x et y
            this.x= x;
            this.y= y;
            //Création d'un objet de type HtmlElementImage
            this.img = document.createElement("IMG") ;
            //Spécifie le fichier à utiliser
            this.img.src = fichierImage ;
            //Rend l'image déplaçable et on la positionne sur l'écran
            this.img.style.position = "absolute" ;
            this.img.style.left = this.x ;
            this.img.style.top = this.y ;
            //Inserer l'image dans le terrain de jeu
            var terrain = document.getElementById("TerrainDeJeu") ;
            terrain.appendChild( this.img );
            //Création et initialisation des attributs pour la longueur et la largeur
            this.width = 32;
            this.height = 32; 
        }
        

        
        moveTo(x,y)
        {
            //Mise à jour des attributs
            this.x=x;
            this.y=y;

            //On repositionne l'image
            this.img.style.left= x;
            this.img.style.top= y;
    
        }

        //Cette méthode est appelée par le Timer toutes les 10ms pour permettre à un acteur de s'animer
        onTimer()
        {

        }

        //Méthode appelée à chaque touche du clavier keyCode contient la valeur ASCII de la touche enfoncée
        onKeyDown(keyCode)
        {

        }

        isCollisionWith ( unActeur)
        {
            //Cas où un acteur est à gauche du bord gauche de this
            if (unActeur.x + unActeur.width <=this.width )
                return false; 
            //Cas où un acteur est à droite du bord droite de this    
            if (unActeur.x >= this.x + this.width )
                return false;
            //Cas où un acteur est au dessus du bord supp de this
            if (unActeur.y + unActeur.height <=this.height )
                return false; 
            //Cas où un acteur est en dessous du bord inf de this    
            if (unActeur.y >= this.y + this.height )
                return false;  

            return true;                 
        }

        onRemove() 
        {
            var liste = document.getElementById("TerrainDeJeu");
            liste.removeChild(this.img);
            this.img=null;
        }
    }  