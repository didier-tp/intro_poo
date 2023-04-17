using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class CalculXpuissanceN
    {
    public double X { get; set; }

    public double N { get; set; }

    public double Xpn { get; set; }

    public CalculXpuissanceN(int x,int n)
        {
            this.X = x;
            this.N = n;
            this.Xpn =  Math.Pow(x, n);
        }
    }

    public class calculModel : PageModel
    {
        [BindProperty(SupportsGet = true)]  //ou bien Request.Form["N"] au sein de OnGet() ou OnPost()
        public int N { get; set; } = 3; //  3 par défaut

        private List<CalculXpuissanceN> listePuissances = new List<CalculXpuissanceN>();
        public void OnGet()
        {
            for(int i = 1; i < 5; i++)
            {
                CalculXpuissanceN calculXpn = new CalculXpuissanceN(i,this.N);
                listePuissances.Add(calculXpn);
                ViewData["N"] = this.N;
                ViewData["listePuissances"] = listePuissances;
            }
        }
    }
}
