
class Balle extends AcPhysic{
    constructor(fichierImage,x,y, vx,vy)
    {
        //Appel du constructeur de la classe mère
        super(fichierImage,x=238,y=300, vx=0.1, vy=-0.05, 0.01, 0.01) ;

    }
}