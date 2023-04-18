using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TodoApi.Controllers
{
    [Route("devise-api/[controller]")] //Route = partie de l'URL
                      //(ici "devise-api/Devise" si cette classe s'appelle DeviseController)
    [ApiController]
    public class DeviseController : ControllerBase
    {
        private List<Devise> _devises;

        public DeviseController()
        {
            this._devises = new List<Devise>();
            //ici , jeux de données rigide , dans vrai appli , récupéré depuis une base de données
            this._devises.Add(new Devise() { Code = "EUR", Nom = "euro", Change = 1 });
            this._devises.Add(new Devise() { Code = "USD", Nom = "dollar", Change = 1.02 });
            this._devises.Add(new Devise() { Code = "GBP", Nom = "livre", Change = 0.9 });
            this._devises.Add(new Devise() { Code = "JPY", Nom = "yen", Change = 123.45 });
        }

        //exemple : https://localhost:7141/devise-api/Devise
        [HttpGet()]
        public List<Devise> GetDevises()
        {
            return this._devises;
        }

        //exemple : https://localhost:7141/devise-api/Devise/USD
        [HttpGet("{id}")]
        public ActionResult<Devise> GetDeviseById(string id){
            Devise? dev = null;
            foreach(Devise d in this._devises)
            {
                if (d.Code == id)
                {
                    dev = d; break;
                }
            }
            return (dev!=null)?dev:NotFound();
        }


        //exemple : https://localhost:7141/devise-api/Devise/ en mode post
        //avec { "code":"MS1" , "nom":"MonnaieSinge1" , "change" : 1234456779 }
        [HttpPost()]
        public ActionResult<Devise> PostDevise(Devise deviseToAdd)
        {
            this._devises.Add(deviseToAdd);
            //améliorable 
            return deviseToAdd; //pas ici, mais dans d'autres cas de figure on renvoie l'objet devise avec clef primaire auto-incrémentée
        }


        //exemple : https://localhost:7141/devise-api/Devise/ en mode put
        //avec { "code":"MS1" , "nom":"MonnaieSingeModifiee" , "change" : 545453 }
        [HttpPut()] //ou bien [HttpPut("{id}")]
        public ActionResult<Devise> PutDevise(Devise deviseToUpdate)
        {
            foreach (Devise d in this._devises)
            {
                if (d.Code == deviseToUpdate.Code)
                {
                    d.Nom = deviseToUpdate.Nom;
                    d.Change = deviseToUpdate.Change;
                    break;
                }
            }
            //améliorable via test et NotFound()
            return deviseToUpdate; //éventuelle variante retournant NoContent();
        }

        //exemple : https://localhost:7141/devise-api/Devise/OLD en mode delete
        [HttpDelete("{id}")]
        public ActionResult DeleteDeviseById(string id)
        {
            Console.WriteLine("id de devise a supprimer=" + id);
            foreach (Devise d in this._devises)
            {
                if (d.Code == id)
                {
                    this._devises.Remove(d);
                    return NoContent();//bien supprimé
                }
            }
            return NotFound();
        }

    }
}
