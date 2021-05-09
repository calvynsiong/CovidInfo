export const data = {
	AB: {
		province: 'Alberta',
		current: 'Phase 3',
		phases: {
			first: [
				'First Nations, Inuit and Métis persons ages 65+',
				'Healthcare workers in ICUS, operating rooms, surgical units emergency departments and those directly responding to COVID-19',
				'Staff and residents in extended care facilities',
			],
			second: [
				'Staff and residents of seniors supportive living facilities not included in Phase 1',
				'Individuals ages 12+ with high-risk underlying health conditions',
			],
			third: [
				'Teachers, support staff and child care workers',
				'Healthcare professionals who provide in-person, direct patient care and at-risk caregivers',
				'Workers at meatpacking plants (abattoirs for chicken, pork and beef only)',
				'Residents and support staff at eligible congregate living and work settings',
				'Residents of Bow Vallye and the Regional Municipality of Wood Buffalo ages 18+',
			],
			fourth: ['All remaining eligble Albertans'],
		},
	},
	BC: {
		province: 'British Columbia',
		current: 'Phase 4',
		phases: {
			first: [
				'Residents, essential visitors and staff of long-term care facilities and assisted living residences',
				'Individuals assessed for and awaiting long-term care',
				'Hospital health care workers who may provide care for COVID-19 patients in settings like ICUs, emergency departments, paramedics, medical units and surgical units',
				'Remote and isolated Indigenous communities',
			],
			second: [
				'Indigenous (First Nations, Métis and Inuit) people ages 65',
				'Hospital staff, community general practitioners and medical specialists not immunized in Phase 1',
				'Vulnerable populations living and working in select congregated settings',
				'Community home support and nursing services staff',
			],
			third: [
				'Indigenous (First Nations, Métis and Inuit) peoples aged 18+',
				'Clinically extremely vulnerable individuals aged 16+',
			],
			fourth: [
				'All remaining eligible British Columbians in five year increments',
			],
		},
	},
	MB: {
		province: 'Manitoba',
		current: 'Phase 3',
		phases: {
			first: [
				'Heathcare workers who provide direct patient care in critical care units, emergency wards and Covid-19 wards',
			],
			second: [
				'Healthcare workers who procide direct patient care of any age ',
				'All staff in Licensed personal care homes',
				`                All staff 60 + in congrate living facilities
`,
				`Residents of high and moderate risk congrigate living facilities `,
			],
			third: [
				`All staff in acute care, primary care, dental, specialty physician, and diagnostic imaging faciliities`,
				`Staff in outpatient labs and surgical programs,``Elderly day programs and home care
`,
				`All staff in congregate living facilities`,
				`Residents of all congregate living facilities not reached in Phase 1/2`,
			],
			fourth: [
				`All healthcare workers who work in a healthcare facility`,
				`All remaining eligible Manitobans`,
			],
		},
	},
	ON: {
		province: 'Ontario',
		current: 'Phase 2',
		phases: {
			first: [
				`Congregate living for seniors`,
				`Healthcare workers
`,
				`Adults in First Nations, Métis, and Inuit populations`,
				`Adult chronic home care recipents`,
			],
			second: [
				`High-risk congregate settings (such as shelters, group homes)`,
				`Individuals with certain health conditions
`,
				`Certain essential caregivers`,
				`People who live in hot spot communities
`,
				`Those who cannot work from home`,
			],
			third: [`All remaining eligable Ontarians`],
		},
	},
	SK: {
		province: 'Saskatchewan',
		current: 'Phase 2',
		phases: {
			first: [
				`Healthcare workers at high risk of exposure to COVID-19, and those who are directly involved in the pandemic response`,
				`Long-term care residents
`,
				`Vulnerable populations`,
			],
			second: [
				`People with underlying health conditions that are clinically extremely vulnerable`,
				`Additional healthcare workers including physicians`,
				`Staff and grocery workers of participating pharmacies`,
				`Teachers and educational staff
`,
				`First responders`,
				`Youth 12+`,
			],
		},
	},
	NB: {
		province: `New Brunswick`,
		current: `Phase 1`,
		phases: {
			first: [
				`First responders (firefighters & police officers) `,
				`Workers who regularly travel across the border, including regular commuters, truckers, and rotational workers.
`,
				`Healthcare workers and regulated allied health care professionals.`,
				`Individuals with complex medical conditions or pregnant women (Individuals aged 12-15 can only recieve Pfizer with parental/guardian consent)`,
				`First Nations (Individuals aged 12-15 can only recieve Pfizer with parental/guardian consent)``Individuals aged 12+ with two or more select chronic conditions (Individuals aged 12-15 can only recieve Pfizer with parental/guardian consent)`,
			],
			second: `(Individuals aged 12-15 can only recieve Pfizer with parental/guardian consent)`,
		},
	},
	QC: {
		province: `Quebec`,
		current: `Phase 2`,
		phases: {
			first: [
				`Vulnerable people and people with a significant loss of autonomy who live in residential and long-term care centres (CHSLDs) or in intermediate and family-type resources (RI‑RTFs).``Autonomous or semi-autonomous people who live in private seniors' homes (RPAs) or in certain closed residential facilities for older adults.`,
			],
			second: [
				`Workers in the health and social services network who have contact with users.``
Adults under 60 years of age who have a chronic disease or health problem that increases the risk of complications of COVID-19, including those who provide essential services and have contact with users.
Adults ages 35+`,
			],
			third: [
				`Adults aged 35 and under``
Vaccination of children will be determined based on future vaccine studies`,
			],
		},
	},
	NS: {
		province: `Nova Scotia`,
		current: `Phase 3`,
		phases: {
			first: [
				`Healthcare workers who work directly with patients in hospital or their homes  ``
people who work or live in long-term care facilities including designated caregivers``
people who live and work in Department of Community Services facilities`,
			],
			second: [
				`anyone who works in a hospital and may come into contact with patients, starting with those aged 60+``
licensed community healthcare providers who provide in-person patient care and their care assistants``
people who live in large group settings and those who work directly with them``
front-line police officers`,
			],
			third: [`All remaining eligible Nova Scotians`],
		},
	},
	PE: {
		province: `Prince Edward Island`,
		current: `Phase 2`,
		phases: {
			first: [
				`Residents and staff of long-term and community care``
Healthcare workers with direct patient contact at higher risk of COVID-19 exposure``
Seniors aged 80+``
Adults 18+ living in Indigenous communities``
Residents and staff of other residential or shared living facilities
Rotational workers like truck drivers`,
			],
			second: [
				`Those in priority groups remaining from Phase 1``       
First responders including police, firefighters and power utility workers``
Adults aged under 65 in 5 year intervals`,
			],
			third: [
				`Second dose for individuals in Phase 2 (16 weeks after first dose)`,
			],
		},
	},
	YT: {
		province: `Yukon`,
		current: `Phase 3`,
		phases: {
			first: [
				`Long-term care residents and staff at Whistle Bend Place, Thompson Centre and other Continuing Care staff``
Long-term care residents and staff at Copper Ridge, and Birch Lodge``
Homebound home care clients, and other Continuing Care staff``
Long-term care residents and staff at McDonald Lodge and high-risk health care staff in Dawson City ``
High-risk health care staff in Whitehorse, including the General Hospital staff `,
			],
			second: [
				`People living in 
Watson Lake (including Upper Liard and Lower Post residents),
 Beaver Creek,
Old Crow,
Dawson City,
Carcross and Tagish,
Teslin,
Pelly Crossing,
Burwash Landing and Destruction Bay,
Haines Junction ,
Carmacks,
Faro,
Mayo,
Ross River`,
			],
			third: [
				`All remaining eligible Yukoners dependent on vaccine availability `,
			],
		},
	},
	NT: {
		province: `Northwest Territories`,
		current: `Phase 2`,
		phases: {
			first: [
				`Indivduals aged 60+ ``
Indivudals with existing chronic disease and comorbidities``
Individuals with a likelihood of transmitting COVID-19 to those at high risk of severe illness and death``
Resident workers who live in the Northwest Territories but work regularly out of territory or at work camps with out of territory workers``
Living in a remote community `,
			],
			second: [
				`All Northwest Territorians aged 18+ dependant on vaccine availability `,
			],
		},
	},
	NU: {
		province: `Nunavut`,
		current: `Phase 2`,
		phases: {
			first: [
				`Individuals in long term care centers`` 
Individuals in elder centers `,
			],
			second: [`All remaining eligible Nunavummiuts`],
		},
	},
	NL: {
		province: `Newfoundland and Labrador`,
		current: `Phase 2`,
		phases: {
			first: [
				`Healthcare workers at high risk of exposure to COVID-19, and those who are directly involved in the pandemic response``
Seniors residing in congregate living settings``
Adults in remote and isolated Indigenous communities`,
			],
			second: [
				`Adults who identify as First Nations, Inuit or Métis``
Staff, residents and essential visitors at congregate living settings``
Adults in marginalized populations where infection could have disproportionate consequences``
First responders``
Frontline health care workers who were not immunized in Phase 1 and who many come into direct contact with patients``
Clinically extremely vulnerable individuals ages 16 to 59``
Those who regularly travel in and out of the province for work``
Frontline essential workers with direct public contact and cannot work from home`,
			],
			third: [`Anyone else in priority groups remaining from Phase 1 or 2`],
		},
	},
};
