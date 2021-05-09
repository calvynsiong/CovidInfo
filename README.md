# To Hacks project created by Calvyn Siong, Nathan Lew, Michelle Swolfs and Juneau Lim

Live Site: https://vaccine-info.herokuapp.com/

## Inspiration
The coronavirus pandemic has not only been a global health issue but also has brought upon a mass “infodemic” where hundreds of new articles and resources on COVID-19 are released daily. Not only have the constant updates become more confusing to navigate through the pandemic, but also COVID-19 misinformation has spread exponentially across social media. 

The severity of the virus leaves no room for confusion during the immunization process. As education is the most effective tool in preventing the spread of misinformation, our product aims to clearly guide Canadians towards vaccinations by vetting early concerns and indicating how to take action. 

## What it does
vaccineinfo empowers Canadians to make their own vaccination decisions by providing them with credible information about the COVID-19 vaccines. Website visitors are introduced to a list of common vaccine misconceptions and their corresponding vetted counterclaims; this was to dispel as many uncertainties as possible about vaccinations to prompt Canadians’ inquiries on how to get immunized or their future steps. The site also includes daily and total COVID-19 statistics across Canada and the world. This helps to create an overview for the local case numbers and guides on provincial vaccination plans, indicating how to take action and book their appointment.

## How we built it
During our ideation, we decided to look at the current COVID-19 pandemic and how individuals could **“spring into action”** at this point in time.  As many provinces are currently in the middle of their vaccination plan, we researched general perceptions towards the vaccine and found that similar to the COVID-19 virus, there was a lot of misinformation around the vaccines well. 

![The issue of COVID-19 misinformation across social media and Canada consistently make news headlines](https://i.ibb.co/VHPcnNF/Problem-Space.png)

Continuing through an ad-hoc version of the IDEO design thinking process, we did further research on vaccine conspiracies/misinformation, anti-vaxxers, and the types of people that seek out vaccine information. Additionally, we talked with people we had accessible to us about the vaccine and their opinions on it. From this research, we established a few different user groups.

![Defining our user base: people hesitant about the COVID-19 vaccinations, people seeking to educate
themselves and their peers, and people figuring out the guidelines after they are fully vaccinated](https://i.ibb.co/yYgn1h3/User-Personas.png)

We then moved into brainstorming and ideation where we developed initial features that tackled the idea of vaccine information, while also providing individuals with the opportunity to “spring into action.” Afterwards, wireframe pages were constructed in Figma for the developers to quickly start their hacking. While our designers worked on refining the stylesheet and layouts and parsed information (e.g. provincial vaccination plans or vaccine myths).

![Our initial ideation sketches: defining general features & page layouts early on](https://i.ibb.co/LkNzJnM/Ideation.png)

Once that was all complete, we entered production mode. The mockups were made using Figma by the design team, while the developers began building the website using React & Heroku.

## Challenges we ran into
One of the biggest challenges was developing our designs in React. While we were able to functionally build the gist of our components early on such as our COVID-19 case charts, ensuring responsiveness and closely following the style was difficult throughout the process. Since React was quite new for all of us to work with, these obstacles were great learning opportunities for our team to overcome.

Communication towards the development process was also difficult as we occasionally interpreted the design differently and thus implemented features using incohesive code blocks based on what we knew on hand. Consequently, we started to get into the habit of conducting more middle checks to check and boost morale, while also ensuring that our vision both in design and future development work were aligned to maximize our use of time.

## Accomplishments that we're proud of
The design process was one of the more fun aspects of our project, both in tackling creative problems and seeing our idea come to life. Constant ideation processes were especially important as our designers worked on each page together, frequently checking in with our devs to edit our work for the feasibility of the project within 24 hours and ensuring our solution was intuitive.

The natural language filters we developed to filter through the information was one accomplishment we are proud of because we found that they were a friendlier way to parse through mountain of important vaccination information.

## What we learned
After Googling tons of resources on Canadian vaccination plans and COVID-19 vaccine myths, we had fun exploring many wacky reasons why people are hesitant to get immunized amidst the convoluted vaccine plan information; while all provinces follow a similar multi-phase vaccination model, their priority groups differ from one another along with their booking processes. We also had a fun refresh on Canadian geography.

## What's next for vaccineinfo
A more refined version of our product would likely include a search algorithm to quickly parse through common COVID-19 vaccine myths to focus more on manually editing counterclaim copy instead of Googling and hard coding information. 

On a larger scale, our solution could be implemented globally to display other countries’ vaccination plans. This provides an opportunity to possibly compare the effectiveness of plans between countries and note what global efforts; such information may be useful for public health authorities and governments to monitor and respond to their local COVID-19 situations.





