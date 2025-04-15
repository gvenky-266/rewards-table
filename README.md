# Rewards Program

## Project Description

The Customer Rewards Program Management System is a React.js application designed to calculate and display reward points for retail customers based on their purchase transactions. The system implements a straightforward points calculation algorithm, awarding 2 points for every dollar spent over $100 and 1 point for each dollar spent between $50 and $100.

## Key features include:

* **State Management:** Utilizes React's useState and useEffect hooks for efficient data handling without Redux, ensuring a clean component structure and improved performance.
* **Asynchronous Data Simulation:** Simulates API calls to fetch transaction data, incorporating loading states and error handling to enhance user experience.
* **Data Processing:** Aggregates reward points by month and year, leveraging JavaScript's Date object for precise time-based reporting.
* **User Interface:** Presents an intuitive and responsive UI using modular components, enabling users to easily navigate through their reward points and transaction history.
* **Month and Year Filters:** Provides dropdowns to filter transactions based on months (January to December) and years (2025+). Displays "No transactions" when no data matches the selected filters.
* **Testing:** Includes unit tests for core functionalities with Git, ensuring maintainability and collaboration efficiency.

This project demonstrates proficiency in React.js and robust application design principles, making it a valuable tool for retailers aiming to enhance customer engagement through a structured rewards program.

## Setup and Execution Steps

1. **Clone the Repository:**

   * **git clone https://github.com/gvenky-266/rewards-table.git**
   * **cd rewards-table**

2. **Install Dependencies:** Run the following command to install all required packages:

   * **npm install**

3. **Start the Development Server:** Launch the application locally:

   * **npm start**

   The app will be accessible at http://localhost:3000/.

4. **Simulate API Data Fetch:** The application simulates fetching transaction data from an API using useEffect. The mock data is displayed once the asynchronous call is completed.

5. **Points Calculation:** Transactions are processed based on the business logic, awarding points according to customer purchases. The points are aggregated by month and displayed for each customer.

6. **Run Tests:** To ensure the correctness of the implementation, run the provided test cases:
   * **npm test**

7. **Build the Application:** For production, create a build of the project:
   * **npm run build**
 
   