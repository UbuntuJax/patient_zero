// list of errors the user could encounter when using the breakfast service

using ErrorOr;

namespace CheeseriaApi.ServiceErrors;

public static class Errors
{
    public static class Breakfast
    {
        public static Error NotFound => Error.NotFound(
            code: "Breakfast not found",
            description: "Breakfast not found"
        );
    }
}