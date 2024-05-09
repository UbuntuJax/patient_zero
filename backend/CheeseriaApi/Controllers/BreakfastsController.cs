using Microsoft.AspNetCore.Mvc;
using CheeseriaApi.Contracts.Breakfast;
using CheeseriaApi.Models;
using CheeseriaApi.Services.Breakfasts; // for var breakfast
using Microsoft.VisualBasic;
using ErrorOr;
using CheeseriaApi.ServiceErrors;

namespace CheeseriaApi.Controllers;


public class BreakfastsController : ApiController
{
    // steps: map response to request, get data according to api definition, return response

    // this is a dependency injection
    private readonly IBreakfastService _breakfastService;

    // Creates a new controller
    public BreakfastsController(IBreakfastService breakfastService)
    {
        _breakfastService = breakfastService;
    }

    // creates a new item
    [HttpPost] // This attribute tells ASP.NET Core that this method should be called when a POST request is made to the /breakfasts endpoint.
    public IActionResult CreateBreakfast(CreateBreakfastRequest request)
    {
        var breakfast = new Breakfast(
            Guid.NewGuid(),
            request.Name,
            request.Colour,
            request.PricePerKg,
            request.ImgUrl
        );

        // TODO: save breakfast to database
        ErrorOr<Created> createBreakfastResult = _breakfastService.CreateBreakfast(breakfast);

        if (createBreakfastResult.IsError)
        {
            return Problem(createBreakfastResult.Errors);
        }
        return CreatedAtGetBreakfast(breakfast);

        // args: action the client should call to get the created resource, object id, the created resource
    }

    [HttpGet("{id:guid}")] // This attribute tells ASP.NET Core that this method should be called when a POST request is made to the /breakfasts endpoint.

    // get an item
    public IActionResult GetBreakfast(Guid id)
    {
        ErrorOr<Breakfast> getBreakfastResult = _breakfastService.GetBreakfast(id);

        return getBreakfastResult.Match(
            breakfast => Ok(MapBreakfastResponse(breakfast)),
            errors => Problem(errors));
    }

    // update/create item
    [HttpPut("{id:guid}")] // This attribute tells ASP.NET Core that this method should be called when a POST request is made to the /breakfasts endpoint.
    public IActionResult UpsertBreakfast(Guid id, UpsertBreakfastRequest request)
    {
        var breakfast = new Breakfast(
            id,
            request.Name,
            request.Colour,
            request.PricePerKg,
            request.ImgUrl
        );
        ErrorOr<UpsertedBreakfast> upsertBreakfastResult = _breakfastService.UpsertBreakfast(breakfast);

        // TODO: return 201 if new breakfast created
        return upsertBreakfastResult.Match(
            upserted => upserted.isNewlyCreated ? CreatedAtGetBreakfast(breakfast) : NoContent(),
            errors => Problem(errors)
        );
    }

    // delete item
    [HttpDelete("{id:guid}")] // This attribute tells ASP.NET Core that this method should be called when a POST request is made to the /breakfasts endpoint.
    public IActionResult DeleteBreakfast(Guid id)
    {
        ErrorOr<Deleted> deletedBreakfastResult = _breakfastService.DeleteBreakfast(id);

        return deletedBreakfastResult.Match(
            deleted => NoContent(),
            errors => Problem(errors)
        );
    }

    private static BreakfastResponse MapBreakfastResponse(Breakfast breakfast)
    {
        return new BreakfastResponse(
                    breakfast.Id,
                    breakfast.Name,
                    breakfast.Colour,
                    breakfast.PricePerKg,
                    breakfast.ImgUrl
                );
    }

    private IActionResult CreatedAtGetBreakfast(Breakfast breakfast)
    {
        return CreatedAtAction(
            actionName: nameof(GetBreakfast),
            routeValues: new { id = breakfast.Id },
            value: MapBreakfastResponse(breakfast)
        );
    }
}