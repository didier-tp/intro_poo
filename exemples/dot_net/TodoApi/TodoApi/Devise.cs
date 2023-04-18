namespace TodoApi
{
    public class Devise
    {
        public string Code { get; set; } //ex: "EUR" , "USD" (id/pk)
        public string Nom { get; set; } //ex: "euro" , "dollar"

        public double Change { get; set; } //nb unités pour 1 euro
    }
}
