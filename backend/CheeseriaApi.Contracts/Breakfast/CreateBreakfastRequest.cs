namespace CheeseriaApi.Contracts.Breakfast;

public record CreateBreakfastRequest(
    string Name,
    string Colour,
    decimal PricePerKg,
    string ImgUrl);