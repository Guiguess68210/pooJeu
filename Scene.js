class Scene 
{
    constructor()
    {
        //Création de l'attribut lesActeurs initialisé à partir d'un tableau
        this.lesActeurs= new Array();
    }

    add(unActeur)
    {
        //Ajout de la référence de l'acteur dans la scène
        this.lesActeurs.push(unActeur) ;

    }

    //La méthode onTimer simule le mouvement d'un point à partir des lois de la mécanique classique du point
    onTimer()
    {
        //Parcours le tableau et appelle pour chacun sa méthode onTimer
        for(var i=0; i<this.lesActeurs.length; i++)
        {
            this.lesActeurs[i].onTimer();
        }
    }

    onKeyDown(keyCode)
    {
        for(var i=0; i<this.lesActeurs.length; i++)
        {
            this.lesActeurs[i].onKeyDown(keyCode);
        }
 
    }

    whoIsCollisioningWith( unActeur )
    {
        var tabCollision = new Array();
        for(var i=0; i<this.lesActeurs.length; i++)
        {
            if (unActeur.isCollisionWith(this.lesActeurs[i])==true && unActeur!=this.lesActeurs[i])
            {
                tabCollision.push(this.lesActeurs[i]);
                
            }
        }
        return tabCollision;
    }

    remove( unActeur ) 
    {
        this.lesActeurs[this.lesActeurs.indexOf(unActeur)].onRemove();
        this.lesActeurs[this.lesActeurs.indexOf(unActeur)]= null;
    }
}