# Asian Countries Info

This project is a React application that fetches data from the REST Countries API and displays information about countries in the Asia region.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/)
- [.NET Core SDK](https://dotnet.microsoft.com/download)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/ruttynext/AsianCountriesInfo.git
    cd asiancountriesinfo
    ```

2. Install the dependencies for the client:

    ```sh
    cd asiancountriesinfo.client
    npm install
    ```

3. Restore the dependencies for the server:

    ```sh
    cd ../asiancountriesinfo.server
    dotnet restore
    ```

### Running the Project

#### Running the Server

To start the .NET Core API server, run:

```sh
cd asiancountriesinfo.server
dotnet run

To start the Vite development server, open a new terminal and run:
cd asiancountriesinfo.client
npm run dev


