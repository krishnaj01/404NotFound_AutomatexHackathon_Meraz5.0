# Lost and Found Website

A web-based application designed to help students and staff of IIT Bhilai report and search for lost and found items, reducing unnecessary emails in the college domain. The platform allows users to easily submit lost or found items and search for them using various filters.

## Motivation

IIT Bhilai, like many educational institutions, faces challenges with lost and found items. Unreported or misplaced items are often left unclaimed, leading to confusion and lost opportunities. The Lost and Found Website was created to solve this problem by offering a simple, centralized platform for users to report and claim items, ensuring that misplaced items are more likely to be returned to their rightful owners.

## Features

- **Item Submission:** Users can submit lost or found items with details such as name, description, and location. This feature ensures efficient reporting and includes an option to add images.
- **Search Functionality:** Advanced filters for narrowing down search results based on key criteria like location or category.
- **Authentication:** Secure login with OAuth, restricting access to institutional email IDs (@iitbhilai.ac.in).
- **Real-time Updates:** Ensure users see the latest data without manual refresh.
- **User Profile and History:** Dashboard for managing submissions and tracking progress.
- **Item Expiry and Auto-Deletion:** Unclaimed items are automatically removed after a week to keep the database clean.
- **Statistics and Visualization:** Graphical representations of lost and found statistics.
- **Responsive Web Design:** Ensures usability on both desktop and mobile devices.
- **FAQs:** Provides answers to common user questions.

## Tech Stack

### Frontend:
- HTML5, CSS3, JavaScript
- React.js for dynamic and responsive UI
- Shadcn for UI components

### Backend:
- Express.js (Server management)
- Multer (Image handling)
- Firebase (Firestore and Realtime Database)
- OAuth (Authentication)

### Deployment:
- Vercel – Deployment through git repository.

## Live Application and Repository
- GitHub Repository: [404NotFound_AutomatexHackathon_Meraz5.0](https://github.com/krishnaj01/404NotFound_AutomatexHackathon_Meraz5.0)
- Live Application: [Lost and Found Website](https://404-not-found-automatex-hackathon-meraz5-0.vercel.app/)

## User Stories

- As a user, I want to report lost or found items with details such as name, description, and location.
- As a user, I want to search for items by category, description, and location.
- As a user, I would like to clear my lost and found history after a span of 1 week.

## Database Structure

Firebase Firestore contains collections for lost-items and found-items. Each document includes:
- `item_name`: Name of the item
- `description`: Description of the item
- `category`: Category (e.g., Electronics, Clothing)
- `location`: Location where the item was lost or found
- `image_url`: Link to an image of the item
- `status`: Current status (e.g., available, claimed)

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/feature-name`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/feature-name`).
5. Create a pull request.

## Future Enhancements

- Push notifications for updates on lost or found items.
- Geo-location tracking for accurate reporting.
- Enhanced search functionality with advanced filters (e.g., date of report).
