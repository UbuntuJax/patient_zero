// dependency injection
using CheeseriaApi.Services.Breakfasts;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers();
    builder.Services.AddScoped<IBreakfastService, BreakfastService>();
}
// anytime a IBreakfastService is requested, the existing breakfast service will be returned.
// The 1st time the service is requested, the service will be created and added to the service collection.
// this service is only created once and then used repeatedly

// declare middleware
var app = builder.Build();
{
    app.UseExceptionHandler("/error");
    app.UseHttpsRedirection();
    app.MapControllers();
    app.Run();

}
