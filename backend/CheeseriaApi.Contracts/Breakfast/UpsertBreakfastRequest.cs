namespace CheeseriaApi.Contracts.Breakfast;

public record UpsertBreakfastRequest(
    string Name,
    string Colour,
    decimal PricePerKg,
    string ImgUrl);