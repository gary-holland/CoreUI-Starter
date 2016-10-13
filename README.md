# CoreUI-Starter

This is a clone of the [CoreUI](https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template) integrated into the [.Net Core Angular2Spa starter template](https://github.com/aspnet/JavaScriptServices/tree/dev/templates/Angular2Spa).

To use this template open a command prompt and run the following:
```
mkdir <any directory>
git clone https://github.com/gary-holland/CoreUI-Starter
cd CoreUI-Starter\CoreUI-Starter
cd CoreUI-Starter
npm install
webpack --config webpack.config.js
webpack --config webpack.config.vendor.js
dotnet restore
dotnet run
```
Open browser to "http://localhost:5000" to view the application.

Issues:
* Server side rendering isn't functional yet.  If anyone want to try and get it working, uncomment out the asp-prerender-module line in the Index.chtml.  It's output an error that it can't find the app element.

Any contributions are welcome. 
