(function(){

  // =========================
  // DROPDOWN MENUS
  // =========================

  // =========================
  // DROPDOWN MENUS
  // =========================

  var triggers = document.querySelectorAll('[data-menu]');

  function closeMenus(except){

    triggers.forEach(function(t){

      var panel = document.getElementById(t.dataset.menu);

      if(panel !== except){

        panel.classList.remove('open');

        t.setAttribute('aria-expanded','false');

      }

    });

  }


  triggers.forEach(function(t){

    var panel = document.getElementById(t.dataset.menu);


    t.addEventListener('click', function(e){

      e.stopPropagation();

      var isOpen = panel.classList.contains('open');

      closeMenus();

      if(!isOpen){

        panel.classList.add('open');

        t.setAttribute('aria-expanded','true');

      }

    });

  });


  // Close dropdown when clicking elsewhere

  document.addEventListener('click', function(){

    closeMenus();

  });


  // =========================
  // OVERLAYS
  // =========================

  function openOverlay(id){

    var el = document.getElementById(id);

    if(!el) return;

    el.classList.add('open');

    document.body.style.overflow = 'hidden';

    var input = el.querySelector('input');

    if(input){

      setTimeout(function(){

        input.focus();

      }, 40);

    }

  }


  function closeOverlay(id){

    var el = document.getElementById(id);

    if(!el) return;

    el.classList.remove('open');

    document.body.style.overflow = '';

  }



  // Search button

  var searchButton = document.getElementById('openSearch');

  if(searchButton){

    searchButton.addEventListener('click', function(){

      openOverlay('searchOverlay');

    });

  }



  // Mobile menu button

  var menuButton = document.getElementById('openMenu');

  if(menuButton){

    menuButton.addEventListener('click', function(){

      openOverlay('menuOverlay');

    });

  }



  // Close buttons

  document.querySelectorAll('[data-close]').forEach(function(button){

    button.addEventListener('click', function(){

      closeOverlay(button.dataset.close);

    });

  });



  // =========================
  // KEYBOARD
  // =========================

  document.addEventListener('keydown', function(e){

    if(e.key === 'Escape'){

      [
        'searchOverlay',
        'menuOverlay'
      ].forEach(function(id){

        var el = document.getElementById(id);

        if(el && el.classList.contains('open')){

          closeOverlay(id);

        }

      });

      closeMenus();

    }

  });



  // =========================
  // MOBILE MENU LINKS
  // =========================

  document.querySelectorAll('#menuOverlay a').forEach(function(a){

    a.addEventListener('click', function(){

      closeOverlay('menuOverlay');

    });

  });



  // =========================
  // BACK TO TOP
  // =========================

  var toTop = document.getElementById('toTop');


  if(toTop){

    window.addEventListener('scroll', function(){

      toTop.classList.toggle(
        'show',
        window.scrollY > 700
      );

    }, {passive:true});


    toTop.addEventListener('click', function(){

      window.scrollTo({

        top: 0,

        behavior:
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth'

      });

    });

  }


})();
/* =========================================================
   ARCHIVE RECORD DATA
   ========================================================= */

var archiveRecords = {

  "MM-001": {
    id: "MM—001",
    title: "Chalo Sansad",
    artist: "Mitali Pankaj Kapure",
    date: "May 2026",
    language: "English",
    region: "Maharashtra",
    platform: "Instagram",
    platformLabel: "Instagram",
    platformLink: "",
    image: "images/cartoons/chalo-sansad.png",

    intro:
      "A political cartoon by Mitali Pankaj Kapure, contributed from Maharashtra and originally circulated on Instagram.",

    translation: "",

    provenance:
      "Artist-Contributed",

    icg:
      "Applied but not selected",

    contextTitle:
      "Public concerns and political attention",

    context: [
      "The cartoon brings together several contemporary public concerns, including the Manipur crisis, environmental destruction, examination and paper-leak controversies, and demands for institutional accountability.",

      "Through protest placards, burning landscapes, leaked examination papers, and political figures depicted with their eyes and mouths covered, the cartoon presents a critique of what the artist portrays as governmental inattention to these issues.",

      "The recurring imagery of blindness and silence suggests a perceived disconnect between public grievances and political responsiveness. The title, Chalo Sansad (“Let us go to Parliament”), further frames these concerns through the idea of taking public demands directly to the central political institution."
    ],

    readingTitle:
      "A composition of interruption",

    reading: [
      "The composition places three political figures at its centre, surrounded by competing forms of public communication. Newspapers, microphones, protest placards and environmental imagery occupy the space around them.",

      "The repeated gestures of covering the ears, mouth and eyes become a visual structure within the cartoon. Rather than presenting a single isolated issue, the image gathers several concerns into one crowded political scene."
    ]
  },


  "MM-002": {
    id: "MM—002",
    title: "महाराष्ट्र निवडणूक",
    englishTitle: "Maharashtra Election",
    artist: "Nayan Kale",
    date: "January 2026",
    language: "Marathi",
    region: "Maharashtra",
    platform: "Instagram",
    platformLabel: "Instagram",
    platformLink: "https://www.instagram.com/p/DTMy8O0Df6n/?stkn=MTVyNnY3Nzhzd3Z1Mw==",
    publication: "Hindustan Times",
    image: "images/cartoons/maharashtra-election-nayan-kale.jpeg",

    intro:
      "A Marathi political cartoon by Nayan Kale, contributed from Maharashtra and circulated through Instagram and Hindustan Times.",

    translation:
      "“Mom, the uncle who came five years ago has come again.”",

    provenance:
      "Artist-Contributed",

    icg:
      "Part of the February 2026 exhibition in Bengaluru.",

    contextTitle:
      "The return of the political visitor",

    context: [
      "The cartoon engages with the recurring visibility of political representatives during election periods in Maharashtra. Its central scene depicts a group of politicians arriving at what appears to be an ordinary household, while a child observes them from a distance. The accompanying speech bubble refers to a familiar figure who has returned after five years, transforming the electoral cycle into a moment of recognition.",

      "The cartoon's humour emerges from the contrast between the apparent familiarity of these political visitors and the long interval between their appearances. The repeated reference to “five years” frames the encounter around the electoral cycle and suggests, through satire, that political attention to ordinary citizens may become particularly visible around elections.",

      "Rather than focusing on a particular political party, the cartoon constructs a broader commentary on the relationship between political representatives and the ordinary citizen during elections. Its use of a child's perspective makes the recurrence of political visits appear almost routine, turning the phrase “five years” into the central visual and textual joke."
    ],

    readingTitle:
      "An election remembered",

    reading: [
      "The cartoon constructs its satire through repetition and recognition. A group of political figures occupies the foreground while a child, positioned at the edge of the scene, provides the seemingly ordinary observation that gives the image its punchline.",

      "The politicians' presence is therefore not presented as an extraordinary event but as something familiar enough to be remembered across an electoral cycle. The crowd, flags and placards establish the larger atmosphere of political mobilisation.",

      "At the same time, the speech bubble shifts the scale of the cartoon from public political spectacle to an intimate exchange within a household. This movement between the public and domestic spaces creates much of the cartoon's irony."
    ]
  },


  "MM-003": {
    id: "MM—003",
    title: "On the draw",
    artist: "Soumyadip Sinha",
    date: "July 2026",
    language: "English",
    region: "West Bengal",
    platform: "The Hindu",
    platformLabel: "The Hindu",
    platformLink: "https://www.thehindu.com/opinion/cartoon/on-the-draw-july-2-2026/article71175422.ece",
    image: "images/cartoons/on-the-draw.jpeg",

    intro:
      "A political cartoon by Soumyadip Sinha, published in The Hindu and contributed to the archive from West Bengal.",

    translation: "",

    provenance:
      "Artist-Contributed",

    icg:
      "Submitted but not selected.",

    contextTitle:
      "Food, schooling and political decision-making",

    context: [
      "The cartoon responds to a controversy surrounding the provision of cooked meals in schools within the Kolkata Municipal Corporation area. The state government partnered with the International Society for Krishna Consciousness (ISKCON) in relation to the school meal programme.",

      "The controversy included criticism from opposition politicians and other critics, who argued that the arrangement could affect the provision of eggs and move school meals towards a strictly vegetarian model. These concerns form the political context through which the cartoon can be read.",

      "Within the cartoon, two schoolchildren stand with empty plates while their books lie scattered around them. The contrast between the educational setting and the absence of food places the experience of the children at the centre of the composition.",

      "The political figure's expression introduces another layer to the scene. The apparent smirk, when read alongside the children's empty plates, creates an ironic contrast between political authority and the immediate material concerns represented by the children."
    ],

    readingTitle:
      "Empty plates, scattered books",

    reading: [
      "The cartoon places the schoolchildren and their empty plates in the foreground, making the absence of food immediately visible. Their expressions and posture establish a mood of disappointment and neglect.",

      "The scattered books create a visual connection between food and education. Rather than treating the school meal as an isolated administrative question, the composition places it alongside the children's everyday educational environment.",

      "The political figure is visually positioned against this scene of absence. The contrast between the children's empty plates and the figure's expression produces the cartoon's satirical tension, allowing the image to question whose concerns are being foregrounded within a political debate over school meals."
    ]
  },
  "MM-004": {
    id: "MM—004",
    title: "Freedom Of Speech",
    artist: "Tushar Madaan",
    date: "July 2026",
    language: "English",
    region: "Bangalore",
    platform: "Instagram",
    platformLabel: "Instagram",
    platformLink: "https://www.instagram.com/p/Da92Eocsgc2/?stkn=ZGZ1dDlnMDM4OXJu",
    image: "images/cartoons/freedom-of-speech.jpeg",

    intro:
      "A political cartoon by Tushar Madaan, contributed from Bangalore and circulated through Instagram.",

    translation: "",

    provenance:
      "Artist-Contributed",

    icg:
      "Member of ICG Exhibition Panel",

    contextTitle:
      "Freedom of speech and student protest",

    context: [
      "The cartoon engages with student protests and public demonstrations concerning freedom of speech, including protests associated with Citizens for Justice and Peace (CJP) and demonstrations at Jantar Mantar. The image places these concerns within a broader context of student participation in public and political discourse.",
      "At the centre of the composition, cockroaches appear across a pair of hands. This visual metaphor constructs an association between the suppression or restriction of speech and the presence of forces perceived as threatening to public expression. The hands themselves become a symbolic surface through which the cartoon explores the relationship between individual expression and institutional or political power.",
      "Behind the central hands, a blurred crowd suggests a much larger collective presence. The indistinct figures can be read as representing students and other members of the public whose experiences remain part of a broader educational and political environment. Rather than focusing on one identifiable individual, the composition shifts attention towards the collective nature of student concerns."
    ],

    readingTitle:
      "Hands, insects and the blurred crowd",

    reading: [
      "The hands form the immediate visual focus of the cartoon. The placement of cockroaches across them creates an unsettling image, using the insect as a metaphorical device rather than as a literal element of the scene.",
      "The blurred crowd in the background creates a contrast with the sharply defined foreground. While the hands and cockroaches are visually prominent, the people behind them remain indistinct, suggesting a larger collective whose individual identities are absorbed into the crowd.",
      "The composition therefore moves between the individual and the collective. The foreground represents the symbolic encounter with restrictions on expression, while the background expands the scene towards the wider population of students and protesters implicated in debates surrounding freedom of speech."
    ]
  },
    "MM-005": {
    id: "MM—005",
    title: "NA",
    artist: "Subhash Babu",
    date: "June 2026",
    language: "Malayalam",
    region: "Kerala",
    platform: "Instagram",
    platformLabel: "Instagram",
    platformLink: "https://www.instagram.com/p/DYoRll2FNu2/?stkn=MXA4cjNiaDI2cGZuNA==",
    image: "images/cartoons/bjp.jpeg",

    intro:
      "A political cartoon by Subhash Babu, contributed from Kerala and circulated through Instagram.",

    translation: "",

    provenance:
      "Artist-Contributed",

    icg:
      "3rd Prize — June Edition",

    contextTitle:
      "Religious claims and political satire",

    context: [
      "The cartoon engages with political and public debates surrounding claims that Hindu religious structures, including Shivlings, have been found beneath or at sites associated with mosques. Such claims have appeared in several mosque–temple disputes in India, including the long-running Gyanvapi dispute, where a structure identified by the Hindu side as a Shivling has been disputed by the mosque committee as part of a fountain. :contentReference[oaicite:1]{index=1}",

      "The composition uses the BJP's visual identity as its central framing device and places handwritten speech bubbles alongside it. Through this combination, the cartoon presents a satirical criticism of the political use of claims surrounding the discovery or identification of Hindu religious symbols at mosque sites.",

      "The exaggerated scale of the speech bubbles and the handwritten Malayalam text contribute to the cartoon's satirical tone. Rather than presenting the archaeological or legal status of any particular site as settled, the image focuses on how such claims can become part of political communication, public controversy and competing interpretations of religious history."
    ],

    readingTitle:
      "The BJP frame and the language of satire",

    reading: [
      "The large BJP lettering occupies much of the left side of the composition, immediately establishing the political frame through which the cartoon is to be read. The adjacent speech bubbles contain extended handwritten text, creating the impression of an ongoing public argument.",

      "The contrast between the large, simplified political lettering and the dense handwritten text is central to the visual structure. The political symbol is highly legible at a glance, while the surrounding text requires closer attention, creating a movement between immediate political recognition and detailed commentary.",

      "The cartoon's satire therefore operates through juxtaposition. Religious claims, political identity and public discourse are brought into the same visual field, allowing the artist to question the political significance attached to narratives about what may or may not lie beneath religious sites."
    ]
  },
    "MM-006": {
    id: "MM—006",
    title: "I apologize To your Soul, Maybe That's where the healing begins",
    artist: "Yogesh Ramakrishna",
    date: "November 2023",
    language: "Hindi",
    region: "India",
    platform: "Public Exhibition / Own Site",
    platformLabel: "Artist's Website",
    platformLink: "https://www.yogeshramkrishna.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRzdgUcVQtwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp9y64cJ-wZtS17aBE3At7R483ZAMw2vjkpxds1HQeXLeGcbwicUUAK4liXBk_aem_fmFlIcx3MKZmmuQqy_PHDA",
    image: "images/cartoons/soul.jpeg",

    intro:
      "An illustration by Yogesh Ramakrishna, contributed to the archive from a public exhibition and the artist's own website.",

    translation: "",

    provenance:
      "Artist-Contributed",

    icg:
      "2nd Prize — December 2023",

    contextTitle:
      "Media, consumption and manufactured information",

    context: [
      "The illustration examines the contemporary media environment through the metaphor of a factory producing and distributing packaged news. Its central conceit compares the circulation of news to the production of churan, a packaged digestive product, transforming information into something manufactured, processed and prepared for consumption.",

      "Through this metaphor, the illustration presents news as something that can be packaged according to particular audiences and modes of consumption. The factory-like structure suggests a system in which information is produced and circulated through an organised process rather than encountered as a neutral or unmediated representation of events.",

      "The work further develops this metaphor through its concern with audience segmentation and the repetition of particular forms of information. The artist's framing suggests that personalised or selectively presented news can contribute to audiences encountering similar narratives repeatedly, potentially narrowing the range of perspectives available to them.",

      "The title, “I apologize To your Soul, Maybe That's where the healing begins,” introduces a contrasting reflective dimension to the satire. Placed alongside the image of manufactured information, it shifts the work from a critique of media production towards a question of how individuals respond to the information they repeatedly consume."
    ],

    readingTitle:
      "The factory of packaged news",

    reading: [
      "The factory functions as the central visual metaphor of the illustration. By presenting news through the imagery of production and packaging, the composition turns an otherwise abstract question about media circulation into a recognisable material process.",

      "The reference to churan is particularly significant to the visual metaphor because it associates information with a product that is prepared, packaged and consumed. News consequently appears not simply as information but as something shaped for particular forms of consumption.",

      "The illustration's satire emerges from this transformation of information into a consumable commodity. The factory suggests repetition and standardisation, while the surrounding imagery draws attention to the relationship between media production and the ways audiences encounter political and social information.",

      "The title adds a final layer to the composition by introducing the language of healing. The contrast between the manufactured nature of the media product and the idea of healing creates a tension between external information systems and individual reflection."
    ]
  },
    "MM-007": {
    id: "MM—007",
    title: "Satyameva Jayate",
    artist: "Rushali Patel",
    date: "May 2026",
    language: "Hindi",
    region: "Gujarat",
    platform: "Instagram",
    platformLabel: "Instagram",
    platformLink: "https://www.instagram.com/p/DYEXaMsATUE/?stkn=MXBldjN1cDZ6OXJyNQ==",
    image: "images/cartoons/satya.jpeg",

    intro:
      "A political cartoon by Rushali Patel, contributed from Gujarat and circulated through Instagram.",

    translation:
      "Satyameva Jayate — Truth Alone Triumphs",

    provenance:
      "Artist-Contributed",

    icg:
      "Applied — May edition; shortlisted but not awarded",

    contextTitle:
      "Truth, political power and corruption",

    context: [
      "The cartoon uses the national motto “Satyameva Jayate” (“Truth Alone Triumphs”) to construct a satirical contrast between ideals associated with public life and the accumulation of political wealth. The motto appears above a safe filled with stacks of cash, while a question mark interrupts its otherwise declarative form.",

      "Framed portraits of revered national figures, including Mahatma Gandhi, appear in the background above the money. Their presence places ideas associated with the nation's political and ethical traditions alongside the cartoon's depiction of financial accumulation, creating a deliberate contrast between symbolic ideals and material wealth.",

      "On the right, a politician wearing a Nehru jacket and cap observes the scene alongside a companion wearing a saffron-and-green scarf. The companion's folded hands and the politician's expression contribute to the cartoon's satirical depiction of political conduct. On the left, a bald figure wearing glasses and carrying a brown sack participates in the exchange surrounding the accumulated wealth.",

      "The composition therefore brings together national symbolism, political figures and money within a single visual field. By placing the question-marked motto directly above the cash-filled safe, the cartoon frames its central irony around the relationship between the ideal of truth and the corruption represented by the accumulation and exchange of wealth."
    ],

    readingTitle:
      "The motto above the money",

    reading: [
      "The strongest visual contrast is created by the placement of “Satyameva Jayate” above the safe. The motto normally functions as an affirmation of truth, but the question mark transforms it into a visual question. Its position above the money makes the relationship between the national ideal and the scene below immediately apparent.",

      "The portraits in the background extend this contrast. Figures associated with India's political and ethical history are placed above a scene dominated by cash and political actors, creating a layered composition in which ideals, memory and contemporary political conduct occupy the same space.",

      "The characters surrounding the safe provide the cartoon with its satirical action. Their gestures and expressions suggest an exchange taking place around the accumulated wealth, while the political clothing and visual symbols establish the broader political setting.",

      "The cartoon ultimately relies on juxtaposition rather than a literal narrative. The question-marked national motto, portraits of revered leaders and overflowing cash collectively create the irony through which the cartoon comments on corruption and the distance between political ideals and political conduct."
    ]
  },
  "MM-008": {
    id: "MM—008",
    title: "The Silent Treatment",
    artist: "Gaurav Sarjerao",
    date: "April 2024",
    language: "Marathi",
    region: "Maharashtra",
    platform: "Instagram",
    platformLabel: "Instagram",
    platformLink: "https://www.instagram.com/p/DDBbc3WIFvN/?stkn=OGxmY2prZGhoemwy",
    image: "images/cartoons/TheSilent.jpeg",

    intro:
      "A political cartoon by Gaurav Sarjerao, contributed from Maharashtra and originally circulated on Instagram.",

    translation:
      "“एक माणूस... आमच्यावर रुसलाय जणू... हं हं हं हं हं...” — “It seems a certain man is upset with us... ha ha ha ha ha...”",

    provenance:
      "Artist Contributed",

    icg:
      "Not Applied",

    contextTitle:
      "Political tension and mockery",

    context: [
      "The cartoon depicts two prominent figures resembling Maharashtra politicians, caricatured to highlight a tense political dynamic. The figure on the left, labelled “मिंधे” (Minde), stands with his arms tightly crossed and a visibly upset, brooding expression. The figure on the right, labelled “फडणवीस” (Fadnavis), wears a traditional pheta and laughs while pointing towards the other figure.",

      "A speech bubble above the two figures reads in Marathi: “एक माणूस... आमच्यावर रुसलाय जणू... हं हं हं हं हं...” which translates to “It seems a certain man is upset with us... ha ha ha ha ha...” The contrast between the crossed arms and brooding expression of the figure on the left and the laughter and pointing gesture of the figure on the right establishes the cartoon's central interaction.",

      "The pink-tinted background keeps the visual focus on the two figures and their exchange. Through caricature, gesture, expression and the Marathi dialogue, the cartoon frames the relationship between the two political figures through a scene of apparent disagreement and mockery."
    ]
  },
"MM-009": {
  id: "MM—009",
  title: "Unchecked Urbanization",
  artist: "Alok S.",
  date: "May 2025",
  language: "English",
  region: "India",
  platform: "Instagram",
  platformLabel: "Instagram",
  platformLink: "https://www.instagram.com/p/DIOZzaUMpSs/?stkn=MXB3ZnZ2MG10Y3p6cg==",
  image: "images/cartoons/urban.jpeg",

  intro:
    "A political cartoon by Alok S. examining the relationship between rapid urbanization, environmental destruction and rising temperatures.",

  provenance:
    "Artist Contributed",

  icg:
    "Exhibited in May 2025 (Shortlisted)",

  contextTitle:
    "Urbanization and environmental consequences",

  context: [
    "This cartoon highlights the direct cause-and-effect relationship between rapid urbanization and worsening global warming. The illustration is split into two contrasting yet deeply interconnected panels to deliver an environmental critique.",

    "On the left side, a laborer is seen aggressively clearing a forest with a chainsaw to make way for high-rise buildings under the banner of “development.” On the right side, the consequences of this destruction manifest as a man heavily sweating in the suffocating heat of the summer sun, completely bewildered by the rising temperatures.",

    "By placing these two scenes side by side, the artist presents a contrast between the process of urban development and its environmental consequences, connecting forest clearance and construction with increasing heat."
  ]
},
"MM-010": {
  id: "MM—010",
  title: "The Longest Revolution",
  artist: "SmishDesigns (Real name protected)",
  date: "2022",
  language: "Not specified",
  region: "Uttar Pradesh",
  platform: "Instagram",
  platformLabel: "Instagram",
  platformLink: "https://www.instagram.com/p/ClNQJJ7IQio/?stkn=MTBlZDl1MHcxaGU4bA==",
  image: "images/cartoons/woman.jpeg",

  intro:
    "An illustration by SmishDesigns depicting a mother's aspirations for her daughter's education and the role of care, labour and sacrifice in creating opportunities for the next generation.",

  provenance:
    "Artist Contributed",

  icg:
    "Applied but not shortlisted (2022)",

  contextTitle:
    "Education, motherhood and aspiration",

  context: [
    "This poignant illustration highlights a mother's aspirations for her daughter's education amid her daily household chores. Standing in a kitchen with a rolling pin, roti, and steaming pot, the mother wears a traditional saree while launching a yellow paper airplane.",

    "Seated upon this paper plane is her young daughter, dressed in a school uniform and carrying a backpack, smiling as she is lifted upward. The image symbolically presents the mother’s love, hard work and sacrifice as a launching point for her child's future.",

    "By balancing her domestic responsibilities with her dreams for her daughter, the illustration presents the mother as the driving force behind the girl's opportunity to pursue education. The artwork therefore connects education with female empowerment and the possibility of breaking generational cycles."
  ]
},
};
/* =========================================================
   RECORD PAGE RENDERER
   ========================================================= */

(function(){

  var recordPage = document.querySelector('.record-page');

  if(!recordPage) return;

  var params = new URLSearchParams(window.location.search);
  var recordId = params.get('id');

  var record = archiveRecords[recordId];

  if(!record){
    document.title = 'Record not found — Margins Of Memory';

    var missing = document.getElementById('recordContent');

    if(missing){
      missing.innerHTML = `
        <section class="record-body wrap">
          <article class="record-text">
            <p class="record-section-label">Archive record</p>
            <h2>Record not found</h2>
            <p>
              The requested archive record could not be found.
            </p>
          </article>
        </section>
      `;
    }

    return;
  }


  /* ---------- page title ---------- */

  document.title =
    record.title + ' — Margins Of Memory';


  /* ---------- basic information ---------- */

  document.getElementById('recordId').textContent =
    record.id;

  document.getElementById('recordTitle').textContent =
    record.title;

  document.getElementById('recordArtist').textContent =
    record.artist;

  document.getElementById('recordDate').textContent =
    record.date;

  document.getElementById('recordIntro').textContent =
    record.intro;


  /* ---------- artwork ---------- */

  var artwork = document.getElementById('recordImage');

  artwork.src = record.image;

  artwork.alt =
    record.title + ' by ' + record.artist;


  /* ---------- caption ---------- */

  document.getElementById('recordCaption').textContent =
    record.title + ' · ' +
    record.artist + ' · ' +
    record.date;


  /* ---------- metadata ---------- */

  document.getElementById('recordArtistMeta').textContent =
    record.artist;

  document.getElementById('recordDateMeta').textContent =
    record.date;

  document.getElementById('recordLanguageMeta').textContent =
    record.language;

  document.getElementById('recordRegionMeta').textContent =
    record.region;


  /* ---------- platform ---------- */

  var platformContainer =
    document.getElementById('recordPlatformMeta');

  if(record.platformLink){

    platformContainer.innerHTML =
      '<a href="' +
      record.platformLink +
      '" target="_blank" rel="noopener noreferrer">' +
      record.platformLabel +
      ' ↗</a>';

  } else {

    platformContainer.textContent =
      record.platformLabel;

  }


  /* ---------- publication ---------- */

  var publicationRow =
    document.getElementById('publicationRow');

  var publicationMeta =
    document.getElementById('recordPublicationMeta');

  if(record.publication){

    publicationMeta.textContent =
      record.publication;

    publicationRow.style.display = '';

  } else {

    publicationRow.style.display = 'none';

  }


  /* ---------- translation ---------- */

  var translationBlock =
    document.getElementById('translationBlock');

  var translationText =
    document.getElementById('recordTranslation');

  if(record.translation){

    translationText.textContent =
      record.translation;

    translationBlock.style.display = '';

  } else {

    translationBlock.style.display = 'none';

  }


  /* ---------- provenance ---------- */

  document.getElementById('recordProvenance').textContent =
    record.provenance;


  /* ---------- ICG ---------- */

  document.getElementById('recordICG').textContent =
    record.icg;


  /* ---------- context ---------- */

  document.getElementById('contextTitle').textContent =
    record.contextTitle;

  var contextContainer =
    document.getElementById('contextContent');

  contextContainer.innerHTML = '';

  record.context.forEach(function(paragraph){

    var p = document.createElement('p');

    p.textContent = paragraph;

    contextContainer.appendChild(p);

  });


  /* ---------- visual reading ---------- */

  document.getElementById('readingTitle').textContent =
    record.readingTitle;

  var readingContainer =
    document.getElementById('readingContent');

  readingContainer.innerHTML = '';

  record.reading.forEach(function(paragraph){

    var p = document.createElement('p');

    p.textContent = paragraph;

    readingContainer.appendChild(p);

  });

})();
/* =========================================
   OPENING SEQUENCE
   ========================================= */

(function(){

  var openingSequence =
    document.getElementById('openingSequence');

  if(!openingSequence) return;

  setTimeout(function(){

    openingSequence.remove();

  }, 5500);

})();