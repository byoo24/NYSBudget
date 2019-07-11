import * as d3 from 'd3';





export const parseDescription = () => {
    return {
        "Aging, Office for the": "The New York State Office for the Aging's (NYSOFA's) home and community-based programs provide older persons access to a well-planned, coordinated package of in-home and other supportive services designed to support and supplement informal care. The NYSOFA's overall goal is to improve access to, and availability of, appropriate and cost-effective non-medical support services for older individuals to maximize their ability to age in their community and avoid higher levels of care and publicly financed care. NYSOFA achieves this through their network of 59 local Offices for the Aging.",
        "Medicaid Inspector General, Office of the": "To enhance the integrity of the New York State Medicaid program by preventing and detecting fraudulent, abusive, and wasteful practices within the Medicaid program and recovering improperly expended Medicaid funds while promoting a high quality of patient care.",
        "Education Department, State": "The New York State Education Department is part of the University of the State of New York (USNY), one of the most complete, interconnected systems of educational services in the United States. SED's mission is to raise the knowledge, skill, and opportunity of all the people in New York. Our vision is to provide leadership for a system that yields the best educated people in the world.",
        "Arts, Council on the": "The New York State Council on the Arts is dedicated to preserving and expanding the rich and diverse cultural resources that are and will become the heritage of New York's citizens.",
        "State University of New York": "The State University of New York is the largest comprehensive university system in the United States. Our impact in New York State and across the globe begins with our 64 institutions, including research universities, academic medical centers, liberal arts colleges, community colleges, colleges of technology and an online learning network. We educate approximately 463,000 students in more than 7,500 degree and certificate programs, and nearly 2 million in workforce and professional development programs. Our nearly 3 million SUNY alumni are located around the globe, each making their own unique impact.",
        "City University of New York": "The City University of New York provides high-quality, accessible education for more than 269,000 degree-credit students and 247,000 adult, continuing and professional education students at 24 campuses across New York City.",
        "Higher Education Services Corporation, New York State": "The Higher Education Services Corporation (HESC) is New York State's student financial aid agency that helps people pay for college and is a national leader in providing need-based grant and scholarship award money to college-going students. At HESC's core are programs like the Tuition Assistance Program (TAP), numerous state scholarships, federal college access grants and a highly successful College Savings program. HESC puts college within the reach of hundreds of thousands of New Yorkers each year through programs like these and through the guidance it provides to students, families and counselors.",
        "Temporary and Disability Assistance, Office of": "The Office of Temporary and Disability Assistance (OTDA) is responsible for supervising programs that provide assistance and support to eligible low-income families and individuals. OTDA's functions include: Providing temporary cash assistance; providing assistance in paying for food; providing heating assistance; overseeing New York State's child support enforcement program; determining certain aspects of eligibility for Social Security Disability benefits; supervising homeless housing and services programs; and providing assistance to certain immigrant populations.",
        "Children and Family Services, Office of": "The Office of Children and Family Services (OCFS) promotes the safety and well being of children and adults through a system of family support, juvenile justice that includes youth facilities and community services for youth, child care, and child welfare services. The agency's major program responsibilities include the juvenile justice system, foster care, adoption, child protective services including operating the Statewide Central Register for Child Abuse and Maltreatment, preventive services to keep children in their homes and out of foster care, protective programs for vulnerable adults, services to legally blind residents through the Commission for the Blind, and operation of the Human Services Contact Center.",
        "Housing and Community Renewal, Division of": "The Division of Housing and Community Renewal is responsible for the supervision, maintenance, and development of affordable low- and moderate-income housing in New York State. The Division currently performs a number of activities in fulfillment of this mission, including oversight and regulation of the State's public and publically assisted rental housing; administration of the State's rent regulations; and administration of housing development and community preservation programs, including State and Federal grants, loans and tax credits to housing developers to finance construction and renovation of affordable housing. DHCR was merged into New York Homes and Community Renewal in 2010 with all of the State's other major housing and community renewal agencies.",
        "Labor, Department of": "The Department of Labor administers New York's Unemployment Insurance, Workforce Development Employment and Training, and Worker Protection programs. DOL also enforces safety and health regulations in the public sector, State labor laws and Federal statutes related to working conditions, wages and hours, and laws related to public works.",
        "Human Rights, Division of": "The Division of Human Rights is the State agency charged with enforcing the Human Rights Law and protecting the civil rights of New Yorkers. To fulfill these responsibilities, the Division: prosecutes unlawful discriminatory practices, investigates and resolves individual complaints of illegal discrimination, advances policies and legislation that expand and/or better protect the civil rights of New Yorkers, and promotes human rights awareness through education and outreach.",
        "Metropolitan Transportation Authority": "The Metropolitan Transportation Authority is North America's largest transportation network, serving a population of 15.1 million people in the 5,000-square-mile area fanning out from New York City through Long Island, southeastern New York State, and Connecticut.",
        "Motor Vehicles, Department of": "DMV issues secure identity documents, delivers essential motor vehicle and driver related services, and administers motor vehicle laws enacted to promote safety and protect consumers.",
        "Corrections and Community Supervision, Department of": "To improve public safety by providing a continuity of appropriate treatment services in safe and secure facilities where offenders' needs are addressed and they are prepared for release, followed by supportive services under community supervision to facilitate a successful completion of their sentence.",
        "Homeland Security and Emergency Services, Division of": "The Division of Homeland Security and Emergency Services (DHSES) is dedicated to the preparation and protection of the State's citizens, communities, resources, economy, and infrastructure from threats and acts of terrorism, natural disasters, and other emergencies. DHSES is comprised of the Office of Counter-Terrorism, the Office of Emergency Management, the Office of Fire Prevention and Control, and the Office of Interoperable and Emergency Communications",
        "State Police, Division of": "The primary mission of the Division of State Police is to protect the citizens of the State, prevent and detect crime and other violations of law and promote highway safety. The Division's many responsibilities include patrolling roads and highways outside major urban areas, providing specialty and investigative police services, conducting sophisticated investigations of criminal activities such as drug trafficking and child endangerment, and working cooperatively with various levels of law enforcement throughout the State.",
        "Criminal Justice Services, Division of": "At DCJS, our core agency functions include criminal history checks, fingerprint operations, coordination of grant funds, providing timely information, public safety, law enforcement training, breathalyzer and speed enforcement equipment repair, accreditation of police departments and forensic laboratories, Uniform Crime Reporting, research, hosting criminal justice boards and commissions, providing information to criminal justice agencies and institutions, and hosting other criminal justice agencies. Much of our contact with the public involves the Sex Offender Registry, where anyone can check for the presence of high and medium risk sex offenders in their neighborhood (information on Level 1 or low level offenders can be obtained by calling 518-457-5837 or 1-800-262-3257 if you have a name you would like to check. You will need the individual's name and another identifying fact, such as date of birth). We also support Operation IMPACT, an initiative where we provide special assistance to the 17 counties upstate and on Long Island that account for nearly 80 percent of the crime outside of New York City.",
        "Indigent Legal Services, Office of": "The purpose of the Office of Indigent Legal Services is 'to monitor, study and make efforts to improve the quality of services provided pursuant to article eighteen-B of the county law.' Executive Law Article 30, Section 832(1). The Office does not provide legal assistance or lawyer referrals to individuals. Rather, it operates under the direction and pursuant to policies established by the Board to assist county governments and indigent legal services providers in the exercise of their responsibility under County Law Article 18-B to provide the effective assistance of counsel to those persons who are legally entitled to counsel, but cannot afford to hire an attorney.",
        "Victim Services, Office of": "OVS has a three-tiered mission to: provide compensation to innocent victims of crime in a timely, efficient and compassionate manner; fund direct services to crime victims via a network of community-based programs; and advocate for the rights and benefits of all innocent victims of crime.",
        "Judicial Conduct, Commission on": "The New York State Commission on Judicial Conduct is the state agency responsible for investigating complaints of misconduct against judges of the state unified court system and, where appropriate, determining to admonish, censure or remove from office those judges found to have engaged in unethical behavior.",
        "Correction, Commission of": "The New York State Commission of Correction has a mission to provide for a SAFE, STABLE and HUMANE correctional system in New York State. Promulgates minimum standards for the management of correctional facilities. Evaluates, investigates and oversees correctional facilities. Assists in developing new correctional facilities. Provides technical assistance.",
        "Judicial Screening Committees, New York State": "The Governor's Judicial Screening Committees are established by Executive Order to evaluate the qualifications of candidates and make recommendations to the Governor for appointment to judgeships other than those on the Court of Appeals. The Committees are located throughout the State.",
        "Judicial Nomination, Commission on": "The State Constitution established the Commission on Judicial Nomination to evaluate candidates and make recommendations to the Governor for appointment to the Court of Appeals, the State highest court. The Commission on Judicial Nomination has 12 members appointed by the Governor, the Chief Judge of the Court of Appeals and the Legislature. These members serve without pay and conduct the search for qualified candidates upon formal notification of a vacancy on the Court of Appeals.",
        "Mental Health, Office of": "New York State has a large, multi-faceted mental health system that serves more than 700,000 individuals each year. The Office of Mental Health (OMH) operates psychiatric centers across the State, and also regulates, certifies and oversees more than 4,500 programs, which are operated by local governments and nonprofit agencies. These programs include various inpatient and outpatient programs, emergency, community support, residential and family care programs.",
        "People with Developmental Disabilities, Office for": "The New York State Office for People With Developmental Disabilities (OPWDD) is responsible for coordinating services for more than 128,000 New Yorkers with developmental disabilities, including intellectual disabilities, cerebral palsy, Down syndrome, autism spectrum disorders, and other neurological impairments. OPWDD provides services directly and through a network of nearly 800 non-profit service providers.",
        "Alcoholism and Substance Abuse Services, Office of": "The New York State Office of Alcoholism and Substance Abuse Services (NYS OASAS) oversees one of the nation's largest addiction services systems with nearly 1,600 prevention, treatment and recovery programs. NYS OASAS chemical dependence treatment programs assist about 100,000 people a day and approximately 240,000 individuals every year. Individuals battling addiction issues can get help by calling New York State's toll-free, 24-hour 7 days a week HOPEline at 1-877-8-HOPENY; individuals and families battling heroin issues can also find assistance at combatheroin.ny.gov.",
        "Justice Center for the Protection of People with Special Needs": "The Justice Center is committed to supporting and protecting the health, safety, and dignity of all people with special needs and disabilities through advocacy of their civil rights, prevention of mistreatment, and investigation of all allegations of abuse and neglect so that appropriate actions are taken.",
        "Developmental Disabilities Planning Council": "The New York State Developmental Disabilities Planning Council (DDPC) in collaboration with individuals with developmental disabilities, their families, caregivers and policymakers provides capacity building by promoting policies, plans and best practices.",
        "Judiciary": "The Judiciary is one of the three branches of New York State government. The mission of the Judiciary is to provide a forum for the fair and prompt resolution of civil and family disputes, criminal charges, disputes between citizens and the state, and challenges to government action. Other matters within the jurisdiction of the Judiciary are the administration of decedents' estates, presiding over adoptions and proceedings to protect children and incapacitated persons, and regulation of the admission of lawyers to the Bar and their conduct and discipline. Each year close to four million new cases are filed in the New York State Courts.",
        "Law, Department of": "The Department of Law is responsible for protecting the legal rights of New York State and its citizens by representing the State in litigation and in other legal affairs. In implementing its constitutional responsibilities, the Department performs a wide range of functions including prosecuting or defending actions and proceedings for or against the State and its departments; prosecuting certain criminal violations of the Labor, Workers' Compensation and Unemployment Insurance laws; investigating and prosecuting other criminal cases at the request of the Governor or the commissioners of State departments; investigating the activities of organized crime; bringing civil and/or criminal actions against polluters, violators of antitrust laws and those who defraud consumers or investors; mediating consumer complaints; and investigating and prosecuting cases of Medicaid fraud.",
        "Audit and Control, Department of": "The Department of Audit and Control (A&C) was created in 1926 and is headed by the State Comptroller, who is elected by the citizens of New York State. The Department is responsible for paying the State's bills and payrolls; verifying all financial transactions of the State; reviewing the financial and management practices of State agencies; supervising the fiscal affairs of local governments; investing State funds and issuing bonds and notes; and administering the retirement program for State and most local government employees.",
        "Executive Chamber": "The Executive Chamber is the Office of the Governor and includes the immediate staff that assists the Governor in managing State government.",
        "Lieutenant Governor, Office of the": "The Office of the Lieutenant Governor, in addition to other projects, is responsible for assisting the Governor in leading the Regional Economic Development Councils that will coordinate and integrate State agency responses with local government and business activities to create jobs.",
        "Empire State Development Corporation": "The mission of Empire State Development is to promote a vigorous and growing state economy, encourage business investment and job creation, and support diverse, prosperous local economies across New York State through the efficient use of loans, grants, tax credits, real estate development, marketing and other forms of assistance.",
        "Financial Services, Department of": "Legislation enacted with the 2011-12 Budget established the Department of Financial Services, integrating the New York Banking Department and Insurance Department into a modern, consolidated regulator of financial services in New York. The Department oversees the rapid and dynamic evolution of these industries, to guard against financial crises and to protect consumers and markets from fraud.",
        "Agriculture and Markets, Department of": "The Department of Agriculture and Markets' mission is to foster a competitive food and agriculture industry that benefits producers and consumers alike. Agriculture makes up one-quarter of the State's land area and contributes immensely to the quality of life in New York State by generating economic activity and producing wholesome products to nourish families. The Department works diligently to promote a viable agricultural industry, foster agricultural environmental stewardship, and safeguard our food supply.",
        "Public Service Department": "The primary mission of the New York State Department of Public Service is to ensure affordable, safe, secure, and reliable access to electric, gas, steam, telecommunications, and water services for New York State's residential and business consumers, while protecting the natural environment. The Department also seeks to stimulate effective competitive markets that benefit New York consumers through strategic investments, as well as product and service innovations.",
        "Olympic Regional Development Authority": "The New York State Olympic Regional Development Authority (ORDA) was originally created by the State of New York to manage the facilities used during the 1980 Olympic Winter Games at Lake Placid. Today, ORDA operates Whiteface Mountain ski area located in the Town of Wilmington, just 15 minutes outside the Village of Lake Placid; Gore Mountain ski area located in North Creek, New York - 80 miles north of Albany; Belleayre Mountain located in Highmount, NY - 80 miles south of Albany; as well as the Olympic Center, the Olympic Jumping Complex and Olympic Sports Complex - all located in Lake Placid.",
        "Economic Development, Department of": "The mission of Empire State Development is to promote a vigorous and growing state economy, encourage business investment and job creation, and support diverse, prosperous local economies across New York State through the efficient use of loans, grants, tax credits, real estate development, marketing and other forms of assistance.",
        "Energy Research and Development Authority, New York State": "The New York State Energy Research and Development Authority (NYSERDA), a public benefit corporation, offers objective information and analysis, innovative programs, technical expertise, and funding to help New Yorkers increase energy efficiency, save money, use renewable energy, and reduce reliance on fossil fuels. NYSERDA professionals work to protect the environment and create clean energy jobs. NYSERDA has been developing partnerships to advance innovative energy solutions in New York State since 1975.",
        "Alcoholic Beverage Control, Division of": "The State Liquor Authority has two main functions: 1) issuing licenses and permits; and 2) ensuring compliance with the Alcoholic Beverage Control Law. The Authority's licensing activities focus on the timely processing of licenses and permits. The Authority's enforcement activities focus on the protection of the public by working with local law enforcement agencies and local communities to bring administrative actions against licensees who violate the law.",
        "Information Technology Services, Office of": "The Enterprise Information Security Office (EISO) is led by Michael Weisberg, Chief Information Security Officer and Deborah Snyder, Deputy Chief Information Security Officer. The EISO is responsible for protecting the state government's cyber security infrastructure and providing statewide coordination of policies, standards, and programs relating to cyber security. The EISO provides cyber security leadership, governance and vision for the Office of Information Technology Services and the State.",
        "Taxation and Finance, Department of": "To efficiently collect tax revenues in support of State services and programs while acting with integrity and fairness in the administration of the tax laws of New York State.",
        "General Services, Office of": "OGS manages and leases real property, designs and builds facilities, contracts for goods, services, and technology, and delivers a wide array of support services.",
        "Gaming Commission, New York State": "The New York State Gaming Commission's mission is to ensure that all lawful gaming and horse racing activity conducted in this State is of the highest integrity, credibility and quality. Operating in the most efficient and transparent manner, the Commission conducts the New York Lottery and serves the best interests of the public by providing responsive and effective state gaming regulation. The Commission strives to ensure that all stakeholders in the gaming and horse racing industries, including the consumers who wager on activities regulated or operated by the Commission, are treated in an equitable and responsible manner and to promote the health and safety of horses and all participants in racing. By consolidating various regulatory functions into one oversight body with broad powers, the Commission seeks to ensure fair and strict regulation of all gaming activity while reducing costs and regulatory burdens to the gaming industry. The Commission aspires to provide the regulatory structure necessary for New York gaming activity to operate effectively in a global, evolving and increasingly competitive marketplace to generate revenue for aid to education and for the support of government, and to contribute to overall economic development and job creation in New York.",
        "Workers' Compensation Board": "The New York State Workers' Compensation Board protects the rights of employees and employers by ensuring the proper delivery of benefits to those who are injured or ill, and by promoting compliance with the law.",
        "State, Department of": "Established in 1778, the Department of State is the oldest and perhaps most diverse Department in New York State government. Long known as the 'keeper of records,' it continues today to serve as the official compiler of state agency rules and regulations and publisher of information on the State Constitution, the Great Seal of New York and other official state documents. But, today, the Department has been re-imagined in the Cuomo Administration as a vehicle to help reinvigorate the State's economy and make our communities more livable.",
        "Budget, Division of the": "The Division of the Budget is responsible for assisting the Governor in the development of the Executive Budget and executes the budget as adopted by the Legislature. The Division also serves as one of the Governor's primary advisors on such fiscal matters as local government and public authority finances.",
        "Elections, State Board of": "The State Board of Elections is a bipartisan agency vested with the responsibility for administration and enforcement of all laws relating to elections in New York State. The Board is also responsible for regulating disclosure and limitations of a Fair Campaign Code intended to govern campaign practices. In conducting these wide-ranging responsibilities, the Board offers assistance to local election boards and investigates complaints of possible statutory violations.",
        "Veterans' Affairs, Division of": "The New York State Division of Veterans' Affairs (DVA or Division) connects veterans, members of the armed forces, and their families and dependents to various economic, medical and social benefits and services as the result of active military service. DVA also advocates on behalf of New York's veterans and their families, as individuals and as a group, to ensure they receive benefits granted by law for service in the United States Armed Forces.",
        "Civil Service, Department of": "The Department of Civil Service is charged with providing human resource management services to State and local governments. The Department assists State agencies with personnel recruitment and placement services, administers tests, oversees job classifications, and administers benefits.",
        "Employee Relations, Office of": "To advance the performance of state government through collaborative labor relations, workforce training, education, and benefits. in addition OER represents the Governor in negotiating collective bargaining agreements.",
        "Inspector General, Office of the": "The Inspector General's Office is entrusted with the responsibility of ensuring that State government, its employees and those who work with the state meet the highest standards of honesty, accountability, and efficiency.",
        "Public Ethics, Joint Commission on": "The Joint Commission on Public Ethics (JCOPE) promotes public trust in government by ensuring compliance with the State's ethics and lobbying laws. JCOPE provides information, education and guidance regarding current ethics and lobbying laws, and ensures compliance with these laws through audits, investigations and enforcement proceedings.",
        "Prevention of Domestic Violence, Office for": "To improve New York State's response to and prevention of domestic violence with the goal of enhancing the safety of all New Yorkers in their intimate and family relationships.",
        "Tax Appeals, Division of": "The Division of Tax Appeals was created by the Legislature in 1986 as an independent and impartial body for the resolution of tax and licensing disputes. It is headed by the Tax Appeals Tribunal which is comprised of three commissioners appointed by the Governor and confirmed by the State Senate. The commissioners are appointed for nine-year terms. One of the Commissioners is designated the President of the Tribunal by the Governor and is responsible for the administration of the Tribunal and the Division of Tax Appeals as a whole.",
        "Deferred Compensation Board": "The three member Deferred Compensation Board is the regulatory authority for all public sector 457 plans in the State of New York, including the State Plan and deferred compensation plans that are approved by the Board but are not a part of the State Plan.",
        "Welfare Inspector General, Office of": "The Office of the Welfare Inspector General is commissioned to protect the integrity of social/human services programs, benefits and funds throughout the State of New York.",
        "Environmental Conservation, Department of": "The mission of the Department of Environmental Conservation is to conserve, improve and protect New York's natural resources and environment and to prevent, abate and control water, land and air pollution, in order to enhance the health, safety and welfare of the people of the state and their overall economic and social well-being.",
        "Adirondack Park Agency": "The APA is a New York State government agency, consisting of approximately 54 staff and an eleven-member board. In 1971 the APA was created by the State Legislature to develop long-range land use plans for both public and private lands within the Park.",
        "Hudson River Park Trust": "Hudson River Park, the longest waterfront park in the United States, has transformed four miles of decaying piers and parking lots along Manhattan's West side into a beloved, urban recreational paradise. Attracting 17 million visits each year, the Park offers a myriad of recreational and educational activities for local residents and visitors alike, and plays a critical role in protecting the Hudson River environment itself.",
        






        "General Fund": "This is the major operating fund of the State. It receives all State income not earmarked for a particular program or activity and not specified by law to be deposited in another fund. State income for Financial Plan purposes consists of moneys (taxes, fees, and miscellaneous receipts including certain repayments of State advances) deposited to the credit of the General Fund during the fiscal year and transfers from other funds from current revenues.",
        "Special Revenue Funds - Federal": "This a major fund that accounts for most federal revenues and expenditures. The Federal Special Revenue Fund is divided into several accounts. The Fund accounts for federal grants received by the State that are earmarked for specific programs. The need to satisfy federal accounting and reporting requirements dictates that federal grants be accounted for in a number of separate accounts. These accounts include the Federal USDA - Food and Nutrition Services Accounts, the Federal Health and Human Services Account, the Federal Education Account, the Federal Operating Grants Account, the Unemployment Insurance Ammonization Account, the Federal Unemployment Insurance Occupational Training Account and the Federal Employment and Training Grants Account.",
        "Special Revenue Funds - Other": "These funds account for State receipts from specific non-Federal revenue sources and are legally restricted to disbursement for specified purposes.",
        "Capital Projects Funds - Other": "These funds are used to account for the non-Federal financial resources used for the acquisition or construction of major State-owned capital facilities and for capital assistance grants to local governments and public authorities.",
        "Debt Service Funds": "All tax-financed State debt service on long-term debt and payments on certain lease-purchase or other contractual obligations are paid from Debt Service funds. These account for the accumulation of money for, and the payment of principal and interest on, general long-term debt. Lease-purchase payments for State University, Health and Mental Hygiene facilities under contractual agreements with public authorities are also paid from funds classified as Debt Service funds. Debt service on highway bonds supported by dedicated highway revenues is also reflected in this fund type. Sources of revenue for this fund type include transfers from the General Fund, dedicated taxes, and other revenues.",
        "Capital Projects Funds - Federal": "These funds are used to account for the Federal financial resources used for the acquisition or construction of major State-owned capital facilities and for capital assistance grants to local governments and public authorities.",
        "Local Assistance Account": "To account for General Fund expenditures for local assistance.",
        "State Operations Account": "To account for General Fund expenditures for state purposes.",
        "Community Projects Fund": "To account for various grants, awards and contracts with local governments, not for profit organizations and community groups sponsored by individual Legislators and the Governor. These are often referred to as member items.",
        "Federal Health and Human Services Fund": "To account for Federal grants administered by the Department of Health and Human Services.",
        "Federal Education Fund": "To account for Federal grants administered by the U.S. Department of Education.",
        "Federal USDA / Food and Nutrition Services Fund": "To account for Federal grants administered by the U.S. Department of Agriculture.",
        "Federal Miscellaneous Operating Grants Fund": "To account for miscellaneous Federal grants that are each earmarked for specific purposes.",
        "Unemployment Insurance Administration Fund": "To account for services and expenses of administering unemployment insurance and other miscellaneous employment service programs.",
        "Unemployment Insurance Occupational Training Fund": "To account for Federal grants for various employment and training programs.",
        






        
        
        "Grants to Local Gov.": "Includes payments to counties, cities, towns, villages, school districts and other local entities, as well as certain financial assistance to, or on behalf of, individuals and nonprofit organizations.",
        "Personal Service": "Includes the payment of salaries and compensation for State employees.",
        "Capital Projects": "Include payments made for the acquisition or construction of the State's capital facilities. Included in this category are planning, land acquisition, design, construction, engineering services, and equipment costs attributable to highway, parkway and rail preservation projects; outdoor recreation and environmental conservation projects; payments to local government units and public authorities to help finance highways, parkways, bridges, mass transportation, aviation, economic development, port development, community colleges, community and State mental hygiene buildings, outdoor recreational parks, correctional facilities and State-assisted housing as well as environmental quality projects. Advances are made for capital construction costs reimbursable by public authorities, the Federal or local governments, or from the proceeds of State bond and note sales.",
        "General State Charges": "Includes costs mandated by statute, collective bargaining agreements or court order. Charges in this category can be further subdivided into: fringe benefits or fixed costs.",
        "Non-Personal Service": "Includes payments for miscellaneous contractual obligations, supplies and materials, travel, rentals and repairs, utilities, postage and shipping, printing, telephone, and other operating costs.",
        "Debt Service": "Includes payments made for tax-financed State debt service on long-term debt; contractual-obligation and lease-purchase arrangements with several public authorities and municipalities; and lease-purchase payments for Health and Mental Hygiene facilities.",
        "Fringe Benefits": "Includes contributions to pension systems, the employer's share of Social Security contributions, employer contributions toward the cost of health insurance, workers compensation and unemployment insurance, and contributions to union employee benefit funds which provide vision care and other services.",
        "Indirect Costs": "Includes agency or central service agency costs that cannot be directly associated with the administration of a particular program and therefore cannot be charged as a direct program expense. Indirect costs include, but are not limited to, physical overhead, space occupancy, utilities, information technology and central service agency costs."
    }
}