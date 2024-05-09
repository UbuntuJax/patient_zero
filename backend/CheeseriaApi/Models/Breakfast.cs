namespace CheeseriaApi.Models;
// Represents a breakfast item
public class Breakfast
{
    public Guid Id { get; }
    public string Name { get; }
    public string Colour { get; }
    public decimal PricePerKg { get; }
    public string ImgUrl { get; }

    // constructor
    public Breakfast(Guid id, string name, string colour, decimal pricePerKg, string imgUrl)
    {
        // enforce invariants
        Id = id;
        Name = name;
        Colour = colour;
        PricePerKg = pricePerKg;
        ImgUrl = imgUrl;
    }
}

