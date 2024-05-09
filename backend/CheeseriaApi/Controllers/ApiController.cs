// Base controller for API endpoints related to breakfast items.

using ErrorOr;
using Microsoft.AspNetCore.Mvc;

namespace CheeseriaApi.Controllers;

[ApiController] // This attribute tells ASP.NET Core that this class is an API controller.
[Route("breakfasts")]   // This attribute tells ASP.NET Core that all endpoints in this controller should start with /breakfasts.
public class ApiController : ControllerBase
{
    protected IActionResult Problem(List<Error> errors)
    {
        var firstErorr = errors[0];

        var statusCode = firstErorr.Type switch
        {
            ErrorType.NotFound => StatusCodes.Status404NotFound,
            ErrorType.Validation => StatusCodes.Status400BadRequest,
            ErrorType.Conflict => StatusCodes.Status409Conflict,
            _ => StatusCodes.Status500InternalServerError
        };

        return Problem(statusCode: statusCode, title: firstErorr.Description);
    }
}