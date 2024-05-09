namespace CheeseriaApi.Contracts.Breakfast;

public record BreakfastResponse(
    Guid Id,
    string Name,
    string Colour,
    decimal PricePerKg,
    string ImgUrl);