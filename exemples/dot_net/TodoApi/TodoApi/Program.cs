var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();//Ajouté pour effectuer quelques tests/
                     //NB: il faut également ajouter le dossier wwwroot
                     //puis placer dedans la partie cliente (html,js,css)
                     //NB: pour accéder à wwwroot/index.html
                     //l'url sera https://localhost:7141/index.html

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
