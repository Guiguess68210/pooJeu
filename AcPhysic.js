
class AcPhysic extends Acteur
{
    constructor(fichierImage,x,y, vx=0,vy=0,ax=0,ay=0)
    {
        //Appel du constructeur de la classe mère
        super(fichierImage,x,y) ;

        //Création + initialisation des attributs vx, vy, ax, ay
        this.vx=vx;
        this.vy=vy;
        this.ax=ax;
        this.ay=ay;
    }

    //La méthode onTimer simule le mouvement d'un point à partir des lois de la mécanique classique du point

    onTimer()
    {
        this.x += this.vx ;
        var collision = scene.whoIsCollisioningWith (this);
        this.x -= this.vx ;
        if (collision.length >0)
        {
            this.vx=0 ;
        }

        this.y += this.vy ;
        var collision = scene.whoIsCollisioningWith (this);
        this.y -= this.vy ;
        if (collision.length >0)
        {
            this.vy=0 ;
        }

        //On incrémente la position à partir de la vitesse
        this.moveTo(this.x + this.vx, this.y+this.vy);
        
        
        //On incrémente la vitesse à partir de l'accélération
        this.vx += this.ax ;
        this.vy += this.ay ;
    }
}