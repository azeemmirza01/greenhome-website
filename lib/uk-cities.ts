export type UkCity = {
  slug: string
  name: string
  region: string
  county?: string
  population: string
  solarHours: string
  avgSavings: string
  localGrant: string
  intro: string
  whyChoose: string[]
  neighbourhoods: string[]
}

export const ukCities: UkCity[] = [
  {
    slug: 'london',
    name: 'London',
    region: 'Greater London',
    population: '9.0M',
    solarHours: '1,450',
    avgSavings: '£720',
    localGrant: 'Mayor of London Warmer Homes programme and borough-level retrofit schemes',
    intro:
      'London homeowners face rising electricity tariffs and strict planning rules on conservation areas. GREENHOMESNW designs discreet, high-yield solar arrays and battery systems that comply with local authority guidelines while maximising south-facing roof potential across terraces, semis, and new-build flats with landlord consent.',
    whyChoose: [
      'Experience with conservation-area panel layouts and flat-roof ballasted systems',
      'SEG-registered installs for TfL corridor and commuter-belt properties',
      'Coordination with freeholders and managing agents on leasehold blocks',
    ],
    neighbourhoods: ['Westminster', 'Camden', 'Croydon', 'Greenwich', 'Ealing', 'Hackney'],
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    region: 'North West England',
    population: '2.8M',
    solarHours: '1,350',
    avgSavings: '£650',
    localGrant: 'Greater Manchester Combined Authority home energy advice',
    intro:
      'Manchester\'s mix of Victorian terraces and modern developments suits both roof-mounted PV and integrated battery storage. Our North West team handles GMCA-area surveys, helping families cut grid reliance despite the region\'s variable cloud cover through high-efficiency monocrystalline panels.',
    whyChoose: [
      'Fast turnaround for M postcode terraced housing stock',
      'Heat-pump pairing for older solid-wall properties',
      'Local scaffolding partners familiar with narrow Northern streets',
    ],
    neighbourhoods: ['Salford', 'Stockport', 'Trafford', 'Bolton', 'Oldham', 'Rochdale'],
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    population: '2.7M',
    solarHours: '1,380',
    avgSavings: '£640',
    localGrant: 'West Midlands Net Zero Hub homeowner guidance',
    intro:
      'Birmingham homeowners benefit from improving panel economics and strong export tariffs via SEG. We survey semis and detached homes across the West Midlands, sizing systems for typical 3–4 bed consumption profiles and recommending insulation before oversized arrays.',
    whyChoose: [
      'Dedicated West Midlands installation crews',
      'Support with DNO applications to Western Power Distribution',
      'Packages for rental HMO compliance and EPC uplift',
    ],
    neighbourhoods: ['Solihull', 'Sutton Coldfield', 'Edgbaston', 'Harborne', 'Moseley', 'Erdington'],
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    region: 'Yorkshire',
    population: '1.9M',
    solarHours: '1,320',
    avgSavings: '£610',
    localGrant: 'Leeds City Region warm homes advice',
    intro:
      'Leeds properties—from stone terraces in Headingley to new builds at the South Bank—can achieve strong ROI with correctly tilted arrays. Our Yorkshire engineers model shading from chimneys and dormers to protect production forecasts.',
    whyChoose: [
      'Yorkshire-based surveyors with local weather-adjusted yield data',
      'Battery options for evening peak usage after commuter returns',
      'Experience with slate and stone roof mounting systems',
    ],
    neighbourhoods: ['Headingley', 'Roundhay', 'Chapel Allerton', 'Horsforth', 'Morley', 'Otley'],
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Scotland',
    population: '1.7M',
    solarHours: '1,200',
    avgSavings: '£580',
    localGrant: 'Home Energy Scotland interest-free loans',
    intro:
      'Scottish homeowners can access Home Energy Scotland funding alongside UK-wide schemes. Glasgow installs focus on maximising summer generation and pairing with heat pumps for tenement and suburban semi stock under Scottish building standards.',
    whyChoose: [
      'Guidance on Scottish MCS and Building Warrant processes',
      'Loans and cashback navigation for eligible residents',
      'Tenement roof shared-service expertise',
    ],
    neighbourhoods: ['West End', 'Southside', 'Bearsden', 'Milngavie', 'East Kilbride', 'Paisley'],
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    region: 'Scotland',
    population: '1.4M',
    solarHours: '1,250',
    avgSavings: '£590',
    localGrant: 'Home Energy Scotland and City of Edinburgh Council advice',
    intro:
      'Edinburgh\'s UNESCO heritage zones require careful panel placement. We deliver low-profile arrays for Georgian facades and modern systems for New Town conversions, always aligning with planning guidance for listed and conservation areas.',
    whyChoose: [
      'Heritage-sensitive design for Old and New Town properties',
      'Scottish SEG and loan application support',
      'High wind-load mounting for exposed coastal suburbs',
    ],
    neighbourhoods: ['Leith', 'Morningside', 'Corstorphine', 'Portobello', 'Dalkeith', 'Livingston'],
  },
  {
    slug: 'bristol',
    name: 'Bristol',
    region: 'South West England',
    population: '700K',
    solarHours: '1,480',
    avgSavings: '£680',
    localGrant: 'Bristol City Leap community energy programmes',
    intro:
      'Bristol ranks among the UK\'s sunnier urban centres, making solar especially attractive for Victorian terraces and harbour-side apartments with good aspect. Our South West team supports Bristol\'s net-zero 2030 ambitions with monitoring-first installs.',
    whyChoose: [
      'Strong yields from above-average regional irradiance',
      'Community energy scheme coordination where applicable',
      'Marine-climate corrosion-resistant hardware',
    ],
    neighbourhoods: ['Clifton', 'Redland', 'Southville', 'Bedminster', 'Fishponds', 'Filton'],
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside',
    population: '900K',
    solarHours: '1,340',
    avgSavings: '£620',
    localGrant: 'Liverpool City Region retrofit support',
    intro:
      'Liverpool homeowners can offset rising energy costs with right-sized PV and storage. We work across Merseyside terraces and 1930s semis, prioritising self-consumption for families on time-of-use tariffs.',
    whyChoose: [
      'Merseyside installation teams with short lead times',
      'Terraced-house cable routing without disruptive rewires',
      'Export tariff comparison during handover',
    ],
    neighbourhoods: ['Woolton', 'Allerton', 'Crosby', 'Formby', 'Wirral', 'Bootle'],
  },
  {
    slug: 'sheffield',
    name: 'Sheffield',
    region: 'South Yorkshire',
    population: '740K',
    solarHours: '1,310',
    avgSavings: '£600',
    localGrant: 'South Yorkshire Mayoral Combined Authority energy advice',
    intro:
      'Sheffield\'s hilly topography demands careful shading analysis. Our engineers use on-site irradiance checks for properties on slopes across the Peak fringe, delivering realistic generation forecasts and battery sizing.',
    whyChoose: [
      'Shading analysis for hillside and valley plots',
      'Steel-city experience with industrial-to-residential conversions',
      'Heat-pump and solar hybrid packages',
    ],
    neighbourhoods: ['Ecclesall', 'Crookes', 'Hillsborough', 'Dore', 'Kelham Island', 'Rotherham'],
  },
  {
    slug: 'newcastle',
    name: 'Newcastle upon Tyne',
    region: 'North East England',
    population: '800K',
    solarHours: '1,280',
    avgSavings: '£590',
    localGrant: 'North East net-zero hub homeowner resources',
    intro:
      'Newcastle and Gateshead residents benefit from competitive install pricing and growing SEG rates. We serve Tyneside terraces and new riverside developments with MCS-certified systems and long-term monitoring.',
    whyChoose: [
      'North East regional pricing and support',
      'Coastal wind-rated mounting systems',
      'EV charger integration with solar generation',
    ],
    neighbourhoods: ['Jesmond', 'Gosforth', 'Gateshead', 'Tynemouth', 'Durham', 'Sunderland'],
  },
  {
    slug: 'nottingham',
    name: 'Nottingham',
    region: 'East Midlands',
    population: '770K',
    solarHours: '1,360',
    avgSavings: '£630',
    localGrant: 'Nottingham City Homes energy efficiency referrals',
    intro:
      'Nottingham\'s central location and mix of 1930s housing makes it ideal for mid-size 3.6–4 kWp systems. GREENHOMESNW supports EPC improvements ahead of future MEES regulations for landlords.',
    whyChoose: [
      'Landlord EPC uplift packages',
      'East Midlands DNO liaison',
      'Smart tariff setup guidance at commissioning',
    ],
    neighbourhoods: ['West Bridgford', 'Beeston', 'Arnold', 'Mapperley', 'Lenton', 'Mansfield'],
  },
  {
    slug: 'cardiff',
    name: 'Cardiff',
    region: 'Wales',
    population: '490K',
    solarHours: '1,420',
    avgSavings: '£660',
    localGrant: 'Welsh Government Warm Homes Nest (eligibility-based)',
    intro:
      'Cardiff and South Wales benefit from solid solar irradiance and Welsh Government support pathways. We navigate bilingual customer care and Welsh building control requirements for domestic renewables.',
    whyChoose: [
      'Welsh building regulations expertise',
      'Nest and local scheme eligibility screening',
      'Coastal corrosion protection on installations',
    ],
    neighbourhoods: ['Cardiff Bay', 'Pontcanna', 'Penarth', 'Barry', 'Caerphilly', 'Newport'],
  },
  {
    slug: 'belfast',
    name: 'Belfast',
    region: 'Northern Ireland',
    population: '640K',
    solarHours: '1,240',
    avgSavings: '£570',
    localGrant: 'NI Sustainable Energy Programme advice',
    intro:
      'Northern Ireland has distinct microgeneration and export arrangements. Our Belfast team advises on NIEGO tariffs, NIE Networks connections, and ROI for suburban and rural properties across Antrim.',
    whyChoose: [
      'Northern Ireland regulatory and tariff expertise',
      'Rural ground-mount options where roof space is limited',
      'Agricultural building solar for smallholdings',
    ],
    neighbourhoods: ['Holywood', 'Lisburn', 'Bangor', 'Newtownabbey', 'Carryduff', 'Antrim'],
  },
  {
    slug: 'southampton',
    name: 'Southampton',
    region: 'Hampshire',
    population: '480K',
    solarHours: '1,520',
    avgSavings: '£700',
    localGrant: 'Hampshire County Council energy efficiency signposting',
    intro:
      'Southampton\'s south-coast sun hours rank among England\'s highest, supporting shorter payback periods. We install for port-city terraces, Solent new-builds, and commuter villages with EV-ready solar+battery bundles.',
    whyChoose: [
      'Premium coastal hardware specifications',
      'EV charger bundling with solar',
      'Salt-air rated fixings and warranties',
    ],
    neighbourhoods: ['Ocean Village', 'Bassett', 'Eastleigh', 'Winchester', 'Romsey', 'Totton'],
  },
  {
    slug: 'leicester',
    name: 'Leicester',
    region: 'East Midlands',
    population: '560K',
    solarHours: '1,370',
    avgSavings: '£635',
    localGrant: 'Leicestershire warm homes advice',
    intro:
      'Leicester\'s diverse housing—from interwar semis to university rental stock—needs tailored system sizes. We help owner-occupiers and landlords meet efficiency goals with monitored installs and clear handover documentation.',
    whyChoose: [
      'Student rental and HMO compliance experience',
      'Midlands-fast survey scheduling',
      'Transparent generation reporting via app',
    ],
    neighbourhoods: ['Oadby', 'Clarendon Park', 'Loughborough', 'Hinckley', 'Market Harborough', 'Coalville'],
  },
  {
    slug: 'brighton',
    name: 'Brighton',
    region: 'East Sussex',
    population: '620K',
    solarHours: '1,510',
    avgSavings: '£710',
    localGrant: 'Brighton & Hove energy efficiency officer referrals',
    intro:
      'Brighton & Hove offers excellent solar potential for eco-conscious homeowners. We design systems for Regency terraces, seafront flats, and Downs villages with careful attention to Area Character statements.',
    whyChoose: [
      'Conservation-area compliant layouts',
      'High self-consumption tuning for home-office households',
      'Partnership with local eco retrofit contractors',
    ],
    neighbourhoods: ['Hove', 'Kemptown', 'Portslade', 'Lewes', 'Shoreham', 'Worthing'],
  },
  {
    slug: 'reading',
    name: 'Reading',
    region: 'Berkshire',
    population: '470K',
    solarHours: '1,460',
    avgSavings: '£690',
    localGrant: 'Thames Valley energy advice networks',
    intro:
      'Reading\'s Thames Valley tech workforce often pairs solar with home EV charging. We serve Berkshire semis and new estates near the M4 corridor with smart energy hubs integrating panel, battery, and heat-pump controls.',
    whyChoose: [
      'Tech-forward monitoring and API-friendly inverters',
      'M4 corridor rapid scheduling',
      'New-build developer handover packages',
    ],
    neighbourhoods: ['Caversham', 'Woodley', 'Wokingham', 'Bracknell', 'Maidenhead', 'Slough'],
  },
  {
    slug: 'oxford',
    name: 'Oxford',
    region: 'Oxfordshire',
    population: '680K',
    solarHours: '1,440',
    avgSavings: '£680',
    localGrant: 'Oxfordshire retrofit accelerator signposting',
    intro:
      'Oxford\'s academic and professional households prioritise low-carbon upgrades. We deliver discreet installs for college town terraces and Cotswold stone properties, supporting planning queries for conservation villages.',
    whyChoose: [
      'Stone and slate roof specialist mounting',
      'Cotswolds and Chilterns survey coverage',
      'Academic schedule-friendly installation windows',
    ],
    neighbourhoods: ['Headington', 'Summertown', 'Abingdon', 'Didcot', 'Bicester', 'Witney'],
  },
  {
    slug: 'cambridge',
    name: 'Cambridge',
    region: 'Cambridgeshire',
    population: '650K',
    solarHours: '1,450',
    avgSavings: '£685',
    localGrant: 'Cambridgeshire home energy support',
    intro:
      'Cambridge and surrounding science park villages attract sustainability-minded buyers. Our East Anglia team sizes systems for high electricity use from home labs and EVs, with optional three-phase upgrades.',
    whyChoose: [
      'High-load household and three-phase expertise',
      'New-build estate bulk scheduling',
      'Silicon Fen corporate referral discounts',
    ],
    neighbourhoods: ['Chesterton', 'Trumpington', 'Ely', 'Huntingdon', 'St Neots', 'Newmarket'],
  },
  {
    slug: 'aberdeen',
    name: 'Aberdeen',
    region: 'Scotland',
    population: '490K',
    solarHours: '1,180',
    avgSavings: '£560',
    localGrant: 'Home Energy Scotland loans and grants',
    intro:
      'Aberdeen\'s latitude still supports viable solar when systems are correctly specified. We help granite-city homeowners combine PV with heat pumps, leveraging extended summer daylight and Scottish finance schemes.',
    whyChoose: [
      'Granite building fixings and weatherproofing',
      'Scottish finance scheme navigation',
      'Offshore-worker schedule-friendly installs',
    ],
    neighbourhoods: ['Westhill', 'Portlethen', 'Stonehaven', 'Inverurie', 'Dyce', 'Peterhead'],
  },
]

export function getCityBySlug(slug: string): UkCity | undefined {
  return ukCities.find((c) => c.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return ukCities.map((c) => c.slug)
}
