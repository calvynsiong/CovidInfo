import React, { useState } from 'react';
import { Col, Container, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';

// import '../scss/_fact.scss';
import FactCards from './FactCards';

const data = [
  {
    category: "Publication",
    myth: "The COVID vaccine was rushed and isn’t safe",
    title: "title",
    content: ["content"],
    img: "https://via.placeholder.com/350x150",
    provider: "",
    url: "",
    icon: "🦠"
  },
  {
    category: "Effectiveness",
    myth: "The COVID vaccine gives you COVID-19",
    title: "title",
    content: [""],
    img: "https://via.placeholder.com/350x150",
    provider: "",
    url: "",
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
    title: "title",
    content: ["content"],
    img: "https://via.placeholder.com/350x150",
    provider: "",
    url: "",
    icon: "🚼"
  },
  {
    category: "Effectiveness",
    myth: "The COVID vaccine won’t work against new strains",
    title: "title",
    content: ["content"],
    img: "https://via.placeholder.com/350x150",
    provider: "",
    url: "",
    icon: "🔬"
  },
  {
    category: "Side Effects",
    myth: "The COVID vaccine causes severe side effects",
    title: "title",
    content: ["content"],
    img: "https://via.placeholder.com/350x150",
    provider: "",
    url: "",
    icon: "🤒"
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
      f.content.toLowerCase().includes(term.toLowerCase())) : true) &&
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
          <Row>
            <Col>
              <Form.Control type="text" value={searchTerm} onChange={handleChange} />
            </Col>
            <Col xs="2" sm="2">
              <DropdownButton 
                title="filter" 
                onSelect={handleFilterSelect}
                variant="secondary">
                {Array.from(categories).map(c => (<Dropdown.Item eventKey={c}>{c}</Dropdown.Item>))}
              </DropdownButton>
            </Col>
          </Row>
          <Row>
            <h6>Concerns about the COVID-19 vaccines? <span className="accent-text">Make sure you have the facts.</span></h6>
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