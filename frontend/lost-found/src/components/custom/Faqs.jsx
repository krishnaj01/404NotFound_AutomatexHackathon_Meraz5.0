import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <>
      <section>
        <h1 className="font-bold text-3xl text-purple-900 text-center mb-10 mt-10 mx-5">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="mx-12 sm:mx-24 lg:mx-96 mb-20">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="mb-3 pb-3 ">
              <AccordionTrigger className="hover:text-purple-600">
                How do I search for a lost item?
              </AccordionTrigger>
              <AccordionContent>
                Use the search bar or browse categories on the "Lost Items" page to look for your item. You can filter by date, category to narrow down results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mb-3 pb-3 ">
              <AccordionTrigger className="hover:text-purple-600">How do I report a lost item?</AccordionTrigger>
              <AccordionContent>
                Go to the "Report Lost Item" page, fill out the required details (e.g., item description, location), and submit the report. This will be publicly listed to help others identify the item.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="mb-3 pb-3 ">
              <AccordionTrigger className="hover:text-purple-600">
                How do I report an item I found?
              </AccordionTrigger>
              <AccordionContent>
                Go to the "Report Found Item" page and fill out details like item description, where and when you found it, and any contact information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="mb-3 pb-3 ">
              <AccordionTrigger className="hover:text-purple-600">
                What happens if I list something incorrectly?
              </AccordionTrigger>
              <AccordionContent>
                You can update or delete your listing at any time by going to your account dashboard.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="mb-3 pb-3 ">
              <AccordionTrigger className="hover:text-purple-600">What items can't be listed here?</AccordionTrigger>
              <AccordionContent>
                Avoid listing highly sensitive or prohibited items, such as official college documents (unless they're common items like IDs) or hazardous materials.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="mb-3 pb-3 ">
              <AccordionTrigger className="hover:text-purple-600">How long do listings stay up?</AccordionTrigger>
              <AccordionContent>
                Listings are visible for 7 days, after which they can be renewed if the item is still lost or unclaimed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="mb-3 pb-3 ">
              <AccordionTrigger className="hover:text-purple-600">What should I do if I suspect misuse of the platform?</AccordionTrigger>
              <AccordionContent>
                Report any suspicious activity to the site admin through the "Contact Us" section on the "About" page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section>
        <h1 className="font-bold text-3xl text-purple-900 text-center mb-10 mt-10">
          Guidelines
        </h1>
        <div className="mx-12 sm:mx-24 lg:mx-96 mb-20">
          <ul className="list-disc">
            <li className="mb-5"><strong>Be Accurate and Specific:</strong> When submitting a lost or found item, provide clear descriptions and specific details to help with accurate matches.</li>
            <li className="mb-5"><strong>Verify Matches Carefully:</strong> Before handing over or claiming an item, verify the description and, if needed, ask for proof of ownership (such as a unique identifier or serial number).</li>
            <li className="mb-5"><strong>Keep Listings Updated:</strong> If you've recovered your item or handed over a found item, promptly update the status of your listing to "Returned" or delete it.</li>
            <li className="mb-5"><strong>Contact Admins for Issues:</strong> If you experience technical difficulties, need to report an error, or suspect misuse, reach out to the admin for assistance.</li>
            <li className="mb-5"><strong>Be Courteous and Professional:</strong> This platform is for mutual assistance. Respect fellow users and approach interactions with courtesy.</li>
            <li className="mb-5"><strong>Report Sensitive or Prohibited Items Properly:</strong> For items like keys to restricted areas or sensitive documents, follow the college's designated protocol for returning these items.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Faqs;
