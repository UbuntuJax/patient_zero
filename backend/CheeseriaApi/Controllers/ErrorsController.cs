using Microsoft.AspNetCore.Mvc;
namespace CheeseriaApi.Controllers;

public class ErrorsController : ControllerBase
{
    [Route("/error")]
    public IActionResult Error()
    {
        // error handling logic
        return Problem();
    }
}