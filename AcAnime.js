
class AcAnime extends AcPhysic{

    //fichierImages: tableau contenant des noms de fichier d'image
    //x,y: Position de l'acteur
    //vx,vy: Vitesse
    //ax,ay: Accelération
    //periode: Temps entre chaque changement d'image exprimé en nb d'appel de la méthode onTimer()
    constructor(fichierImages, x,y, vx,vy, ax,ay, periode)
    {
        //Appel du constructeur de la classe mère
        super(fichierImages[0],x,y, vx,vy, ax,ay) ;

        this.fichierImages = fichierImages ;

        this.periode = periode ;

        //Cree et initialise un attribut contenat l'indice de l'image courante
        this.currentIndex = 0 ;
        //Cree et initialise un attribut pour compter le nb d'éxecution de onTimer
        this.nbExecutionDeOnTimer = 0 ;
        //Cree et initialise les attributs perlmettant de border les images des index utilisés
        this.startIndex=0;
        this.endIndex= this.fichierImages.length-1 ;
    }
            




    onTimer()
    {
        //Appel de lma méthode onTimer de la classe AcPhysic afin de récupérer le comportement issu de la classe mère
        AcPhysic.prototype.onTimer.call(this) ;

        //Traitement d'animation
        if(this.nbExecutionDeOnTimer>=this.periode){
            //Remise à 0 du compteur
            this.nbExecutionDeOnTimer = 0;

            //Copie du nom de fichier d'image courant dans la propriété de l'image
            this.img.src = this.fichierImages[this.currentIndex] ;

            //Incrémentation de l'index courrant d'image pour passer à l'image suivante
            this.currentIndex++ ;
            //Remise à 0 de l'index courrant dd'image quand on arrive après la dernière case du tableau
            if(this.currentIndex > this.endIndex){
                this.currentIndex=this.startIndex ;
            }
        }
        
        //Comptage du nb d'exécution
        this.nbExecutionDeOnTimer++;

    }

    setRange(startIndex, endIndex)
    {
        //Mise à jour des attributs
        this.startIndex = startIndex ;
        this.endIndex= endIndex ;
        
        //Mise à jour de currentIndex pour démarrer avec la bonne image
        this.currentIndex = this.startIndex ;

    }


}