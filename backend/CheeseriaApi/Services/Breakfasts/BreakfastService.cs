using CheeseriaApi.Models;
using CheeseriaApi.ServiceErrors;
using ErrorOr;

// manages creating, updating, reading and deleting breakfast items. Breakfast items are stored 
// locally in a dictionary. This service is used by the BreakfastController to interact with the
// breakfast items. This is representitive of something like a database service.

namespace CheeseriaApi.Services.Breakfasts;

public class BreakfastService : IBreakfastService
{
    private static readonly Dictionary<Guid, Breakfast> _breakfasts = new();
    public ErrorOr<Created> CreateBreakfast(Breakfast breakfast)
    {
        _breakfasts.Add(breakfast.Id, breakfast); // args: key, value
        return Result.Created;
    }

    public ErrorOr<Deleted> DeleteBreakfast(Guid id)
    {
        _breakfasts.Remove(id);
        return Result.Deleted;
    }

    public ErrorOr<Breakfast> GetBreakfast(Guid id)
    {
        // TODO: handle case where id does not exist
        if (_breakfasts.TryGetValue(id, out var breakfast))
        {
            return breakfast;
        }
        else
        {
            return Errors.Breakfast.NotFound;
        }

        // implicit conversion for ErrorOr objects done by library
    }

    public ErrorOr<UpsertedBreakfast> UpsertBreakfast(Breakfast breakfast)
    {
        var isNewlyCreated = !_breakfasts.ContainsKey(breakfast.Id);
        _breakfasts[breakfast.Id] = breakfast;

        return new UpsertedBreakfast(isNewlyCreated);
    }
}