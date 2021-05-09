import React, { useState } from 'react';
import { Col, Container, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';

import FactCards from './FactCards';

const data = [
  {
    category: "Publication",
    myth: "The COVID vaccine was rushed and isn’t safe",
    title: "COVID vaccines are thoroughly tested to be safe for administration",
    content: ["The “Rushed” suggests that researchers weren’t following their usual rigorous standards and that corners were cut. That isn’t the case. Rapid development and testing of vaccines isn’t common practice - but that doesn’t mean to say it isn’t safe. Vaccine development is usually slowed thanks to the bureaucracy, funding issues, and waiting for assessment panel dates. Due to the emergency situation, Covid vaccines haven’t been faced with these usual delays.",
  "The Covid-19 vaccines have had to meet all the expected robust clinical milestones with no safety shortcuts. None of the usual steps were left out in the reported vaccine development. The independent medicines regulator (MHRA) has strict quality, safety, and effectiveness metrics that all medications (including vaccines) must pass. All the vaccines licensed within the UK have passed their strict processes."],
    img: "https://www.fnha.ca/AboutSite/NewsAndEventsSite/NewsSite/PublishingImages/about/news-and-events/news/what-you-need-to-know-about-the-covid-19-vaccine/daniel-schludi-mAGZNECMcUg-unsplash.jpg",
    provider: "Reuters",
    url: "https://www.reuters.com/article/health-coronavirus-variant-idUSKBN28W1P5",
    icon: "🦠"
  },
  {
    category: "Effectiveness",
    myth: "The COVID vaccine gives you COVID-19",
    title: "None of the vaccines contain a live virus, so they can’t infect you",
    content: ["None of the approved vaccines contain a live virus. Vaccines don’t give you the disease. Instead, they provide your body with the ability to recognise and fight the infection they are designed to protect against. ",
  "The Oxford/AstraZeneca vaccine, for example, uses a harmless virus that has been altered to replicate the Covid-19 virus. This teaches your body how to generate the right immune response."],
    img: "https://post.healthline.com/wp-content/uploads/2020/08/732x549_THUMBNAIL_Cherney_Clinical_Allergy-Shots.jpg",
    provider: "Mayo Clinic",
    url: "https://www.mayoclinic.org/coronavirus-covid-19/vaccine",
    icon: "💉"
  },
  {
    category: "Side Effects",
    myth: "The COVID vaccine alters your DNA",
    title: "Vaccines do not interact with your DNA",
    content: ["The types of vaccine licensed for use against Covid-19 don’t interact with or alter your DNA. The Pfizer-Biotech and Moderna vaccines are based on Messenger RNA or mRNA. mRNA is a small molecule that’s made naturally by your cells, as well as bacteria and viruses. It provides a blueprint for protein manufacture. In vaccine form, they act as chemical negotiators within the body to teach it how to develop an immune response against Covid-19.",
      "mRNA never enters the nucleus of the cell (which is where our DNA is kept) and therefore doesn’t interact with our DNA in any way. To genetically modify your DNA, you’d need to insert a foreign DNA into the nucleus of a human cell and vaccines can’t do that. "],
    img: "https://www.publicdomainpictures.net/pictures/40000/nahled/--1359709322C31.jpg",
    provider: "Reuters",
    url: "https://www.reuters.com/article/factcheck-mrna-megamix-idUSL1N2M61HW",
    icon: "🧬"
  },
  {
    category: "Publication",
    myth: "The COVID vaccine can cause fertility issues",
    title: "There is no evidence to suggest COVID-19 vaccines affect fertility",
    content: ["The Covid-19 virus has spike proteins, which allows the virus to bind with host cells. Antibodies to the spike protein haven’t been linked to infertility after Covid-19 infection. Otherwise, we would have seen a trend of infertility, miscarriage, and stillbirth in people who’ve had Covid-19, but this hasn’t happened.",
  "There’s no evidence to suggest the vaccine affects fertility (especially because the vaccines don’t contain the live virus).",
"The vaccine trials (as with most medication and vaccine trials) didn’t contain any children or pregnant subjects. However, post-trial data suggests that after you’re vaccinated you can still breastfeed, with no risk to your baby.  "],
    img: "https://images.theconversation.com/files/324019/original/file-20200330-146683-1cvrccs.jpg",
    provider: "WebMD",
    url: "https://www.webmd.com/vaccines/covid-19-vaccine/news/20210112/why-covid-vaccines-are-falsely-linked-to-infertility#:~:text=12%2C%202021%20%2D%2D%20There's%20no,line%20to%20get%20the%20shots",
    icon: "🚼"
  },
  {
    category: "Effectiveness",
    myth: "The COVID vaccine won’t work against new strains",
    title: "Researchers are continuing to investigate this, but vaccines can mitigate the effects",
    content: ["All viruses – including Covid-19 - mutate, that’s how they survive. This is a natural, normal process. When we discuss the ‘variants’, we’re talking about mutated versions of Covid-19.",
  "Vaccine effectiveness is always being assessed. We may find that the efficacy could lessen as more variants emerge over time. Currently, scientists expect the licensed vaccines to protect against the existing known variants. The ongoing research in vaccine development and efficacy will lead the way in how we manage ongoing immunity against existing and new strains.",
"Early vaccination will cut virus spread and therefore reduce the presence of the original strain and any new variants.   "],
    img: "https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-03/blue-covid-19-1400x693_0.jpg?h=96546727&itok=Wr-p2p5u",
    provider: "John Hopkins Medicine",
    url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/a-new-strain-of-coronavirus-what-you-should-know",
    icon: "🔬"
  },
  {
    category: "Side Effects",
    myth: "The COVID vaccine causes severe side effects",
    title: "Severe reactions are extremely rare",
    content: ["If you’ve had a vaccine in the past, you might have experienced some side effects. All vaccines have the potential to cause side effects as they’re engineering an immune response within your body. For most, the vaccine causes mild side effects which feel better within a few days, such as a sore arm where the needle went in, feeling tired, achy or sick, or headaches.",
  "If you have a history of allergic reactions, tell healthcare staff before getting the vaccine. Serious allergic reactions are rare. The current data tells us that eleven people in every million (or 0.0011%) will have a moderate to severe reaction.",
"Staff giving the vaccine are trained to deal with serious reactions. The reactions have been found to occur within fifteen minutes of receiving the vaccine. Because of this, most vaccination sites are asking recipients to wait to monitor any reactions.",
"Currently the MHRA recommends that anyone with a history of significant allergic reactions shouldn’t have the Pfizer vaccine."],
    img: "https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/media-library/covid_sickleave.jpg",
    provider: "WHO",
    url: "https://www.who.int/news-room/feature-stories/detail/side-effects-of-covid-19-vaccines",
    icon: "🤒"
  },
  {
    category: "Side Effects",
    myth: "Scientists claim Pfizer causes brain damage",
    title: "There is no grounded scientific proof to show such side effects of Pfizer",
    content: ['This paper was published by an anti-vaccine activist who believes that the U.S. government may have created COVID-19 and preemptively vaccinated some people through the unrelated MMR vaccine. It was published in a journal widely viewed to be predatory, which means it likely went through little to no peer review. “The paper does not serve as an evaluation of the Pfizer COVID-19 vaccine to induce prion-based disease in vaccine recipients,” Garry told us, “It is nonscientific speculation and fear-mongering by a known anti-vaccine campaigner.”',
  'The study itself is a series of problematic assertions presented without evidence. As such the claim that scientists have “confirmed” that the Pfizer vaccine causes neurological damage from prion diseases is “False.”'],
    img: "https://compote.slate.com/images/fb3403a0-6ffc-471a-8568-b0f01fa3bd6b.jpg",
    provider: "Snopes",
    url: "https://www.snopes.com/fact-check/pfizer-neurological-damage/",
    icon: "🧠"
  },
  {
    category: "Effectiveness",
    myth: "The single dose J&J vaccine is more effective.",
    title: "The J&J vaccine works differently than other available vaccines, but all combat COVID-19",
    content: ["None of the approved vaccines contain a live virus. Vaccines don’t give you the disease. Instead, they provide your body with the ability to recognise and fight the infection they are designed to protect against. ",
  "The Oxford/AstraZeneca vaccine, for example, uses a harmless virus that has been altered to replicate the Covid-19 virus. This teaches your body how to generate the right immune response."],
    img: "https://media.npr.org/assets/img/2021/04/23/gettyimages-1232291997-e430e6dd75a3ab6676c30979c09e6f3dfddfcdaf-s800-c85.jpg",
    provider: "MSU Today",
    url: "https://msutoday.msu.edu/news/2021/vaccine-myths-and-scientific-facts",
    icon: "💪"
  },
  {
    category: "Side Effects",
    myth: "The Oxford/Astra Zeneca vaccine is dangerous",
    title: "There is a small risk of developing blood clots",
    content: ["Some people are concerned about the risk of blood clots from the Oxford/Astra Zeneca vaccine. There have been a very small number of reports of an extremely rare form of blood clot in the cerebral veins occurring soon after vaccination. This type of blood clot is called sinus vein thrombosis. They can occur in people who haven’t been vaccinated. 5 per 10,000 of people will get a blood clot with the oral contraceptive pill. The risk of developing a blood clot from a long-haul flight is about 1 per 1,000. On the other hand, the risk of getting a blood clot after having the vaccine is just four per million. With that in mind, the risk from the vaccine is comparatively small.",
  "Researchers found that someone who’s been vaccinated is no more likely to have one of these blood clots than the general population. The Joint Committee on Vaccination and Immunisation (JCVI) has advised that anyone under the age of 40 should be offered an alternative vaccine. This weighs up the risk of being seriously ill with COVID-19 or the extremely small risk of a serious adverse event."],
    img: "https://www.sciencenews.org/wp-content/uploads/2021/04/040721_EG_astrazeneca_feat.jpg",
    provider: "European Medicines Agency",
    url: "https://www.ema.europa.eu/en/news/astrazenecas-covid-19-vaccine-ema-finds-possible-link-very-rare-cases-unusual-blood-clots-low-blood",
    icon: "💀"
  },
  {
    category: "Production",
    myth: "COVID-19 vaccines have dangerous ingredients",
    title: "All COVID-19 vaccines have been ethically made with safe ingredients",
    content: ["There have been many claims around the ingredients of the Covid-19 vaccine - from foetal cells to microchips. Many of these claims are misleading. The vaccine was originally developed through utilising replicated human kidney cells which are filtered out of the final product.",
  "The claim around microchips refers to an interview with Bill Gates. He said that ‘we will have some digital certificates’. He was talking about the infrastructure for safe, home-based testing – not the vaccine itself. The vaccines also don’t contain any egg proteins so is safe to give to anyone with egg allergies. The British Islamic Medical Association urge anyone who’s eligible to have the vaccine. It doesn’t contain pork gelatine and has negligible alcohol."],
    img: "https://www.fda.gov/files/styles/main_image_medium/public/iStock-157317886.jpg",
    provider: "Reuters",
    url: "https://www.reuters.com/article/uk-factcheck-covid-vaccine-ingredients-idUSKBN2AQ2SW",
    icon: "☢️"
  },
  {
    category: "Effectiveness",
    myth: "J & J isn’t as strong as the other vaccines like Pfizer",
    title: "The Johnson & Johnson vaccine is still as strong as other alternatives and will combat COVID-19",
    content: ['The Johnson & Johnson vaccine is the first of the three authorized COVID-19 vaccines that is offered in a single dose. The vaccine does not need to be kept frozen. The Johnson & Johnson vaccine is an adenovirus (or viral) vector vaccine while both the Pfizer and Moderna vaccines use mRNA technology. "Adenovirus" is the term for common viruses that cause a range of illnesses. ',
  'Ultimately, the Johnson & Johnson vaccine is made differently and administered on a different timeline than the Pfizer and Moderna vaccines, but stimulates the same kind of immune response to protect you against SARS-CoV-2 infection.'],
    img: "https://www.universityofcalifornia.edu/sites/default/files/jj-covid-1.jpg",
    provider: "University of California",
    url: "https://www.universityofcalifornia.edu/news/how-effective-johnson-johnson-covid-19-vaccine-here-s-what-you-should-know",
    icon: "👎"
  },
  {
    category: "Effectiveness",
    myth: "Natural herd immunity is better than vaccinating",
    title: "Herd immunity requires a high percentage of the population to be vaccinated for complete effectiveness",
    content: ["The amount of natural immunity a person gets after an infection varies from person to person. Early evidence suggests that natural immunity may not last very long, according to the Centers for Disease Control and Prevention (CDC). Developing immunity from the vaccine is less risky than developing immunity naturally because there’s no way to predict the severity of your symptoms if you get COVID-19.",
  "We expect that when 70% of the population has either received the vaccine or been infected, we will reach what is called “herd immunity,” meaning the chances of the virus still circulating are very low. Waiting until this number is reached naturally — without vaccinating the public — will keep COVID-19 around for much longer."],
    img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/05/GettyImages-110883335_header-1024x575.jpg",
    provider: "Mayo Clinic",
    url: "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/herd-immunity-and-coronavirus/art-20486808",
    icon: "🐄"
  },
]

const categories = new Set();
categories.add("All")
data.forEach(f => {
  categories.add(f.category);
});

const Fact = () => {
  const [ searchTerm, setSearchTerm ] = useState();
  const [ selectedCategory, setSelectedCategory ] = useState("All");
  const [ filteredFacts, setFilteredFacts ] = useState(data);
  
  const handleChange = e => {
    setSearchTerm(e.target.value);
    filter(e.target.value, selectedCategory);
  }

  const filter = (term, category) => {
    console.log("term", term);
    console.log("category", category);
    const newFacts = data.filter(f => 
      (term ? (f.category.toLowerCase().includes(term.toLowerCase()) ||
      f.myth.toLowerCase().includes(term.toLowerCase()) ||
      f.title.toLowerCase().includes(term.toLowerCase()) ||
      f.content.join().toLowerCase().includes(term.toLowerCase())) : true) &&
      (category!=="All" ? f.category === category : true));
    console.log(newFacts)
    setFilteredFacts(newFacts);
  }

  const handleFilterSelect = e => {
    setSelectedCategory(e);
    filter(searchTerm, e);
  }


  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="10">
          <Row className="mt-5">
            <Col>
              <Form.Control type="text" value={searchTerm} onChange={handleChange} />
            </Col>
            <Col xs="2" sm="2">
              <DropdownButton 
                title="Filter" 
                onSelect={handleFilterSelect}
                variant="secondary">
                {Array.from(categories).map(c => (<Dropdown.Item eventKey={c}>{c}</Dropdown.Item>))}
              </DropdownButton>
            </Col>
          </Row>
          <Row className="mt-4 mb-5">
            <h6><strong>Concerns about the COVID-19 vaccines? <span className="accent-text">Make sure you have the facts.</span></strong></h6>
            <p>VaccineInfo helps you gather the facts about the available COVID-19 vaccines in Canada from reputable sources. Use this tool to learn about the vaccines and how to get vaccinated.</p>
          </Row>
        </Col>
      </Row>
      <Row>
        <FactCards facts={filteredFacts} />
      </Row>
    </Container>
  )
}

export default Fact;