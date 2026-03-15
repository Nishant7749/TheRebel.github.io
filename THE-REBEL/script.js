//BOOKS
        const books = [
            {
                title: "Why I am Atheist",
                author: "Bhagat Singh",
                cover: "https://covers.openlibrary.org/b/isbn/9788123748147-L.jpg",
                readLink: "https://dn720006.ca.archive.org/0/items/why-i-am-an-atheist/Why%20I%20am%20an%20Atheist.pdf"
            },

            {
                title: "The Communist Manifesto",
                author: "Karl Marx",
                cover: "https://covers.openlibrary.org/b/isbn/084620262X-L.jpg",
                readLink: "https://ia800809.us.archive.org/25/items/TextPoliticBooks_20191/Communism/the-communist-manifesto.pdf"
            },

            {
                title: "Civil Disobedience",
                author: "Henry David Thoreau",
                cover: "https://covers.openlibrary.org/b/isbn/1593080263-L.jpg",
                readLink: "https://ia803208.us.archive.org/8/items/civil-disobedience/civil-disobedience.pdf"
            },


            {
                title: "The Myth of Sisyphus",
                author: "Albert Camus",
                cover: "https://covers.openlibrary.org/b/isbn/0679733736-L.jpg",
                readLink: "https://ia800201.us.archive.org/15/items/persepolis_202107/The%20Myth%20of%20Sisyphus%20-%20Albert%20Camus.pdf"
            },

            {
                title: "Civilization and its Discontents",
                author: "Sigmund Frued",
                cover: "https://covers.openlibrary.org/b/isbn/0486282538-L.jpg",
                readLink: "https://dn790007.ca.archive.org/0/items/in.ernet.dli.2015.221667/2015.221667.Civilization-And.pdf"
            },

            {
                title: "The Motorcycle Diaries",
                author: "Che Gurevara",
                cover: "https://covers.openlibrary.org/b/isbn/0007182228-L.jpg",
                readLink: "https://archive.org/details/motorcyclediarie00guev"
            },



            {
                title: "The Demon-haunted World",
                author: "Carl Sagan",
                cover: "https://covers.openlibrary.org/b/isbn/1531888186-L.jpg",
                readLink: "https://dn721807.ca.archive.org/0/items/B-001-001-709/Carl%20Sagan%20-%20The%20Demon%20Haunted%20World.pdf"
            },

            {
                title: "Discipline and Punish",
                author: "Michael Foucoult",
                cover: "https://covers.openlibrary.org/b/isbn/0679752552-L.jpg",
                readLink: "https://ia801704.us.archive.org/9/items/discipline-and-punishment-michael-foucoult/Discipline%20and%20Punishment%20Michael%20Foucoult.pdf"
            },


            {
                title: "State and Revolution",
                author: "Vladimir Lenin",
                cover: "https://covers.openlibrary.org/b/lccn/45028529-L.jpg",
                readLink: "https://dn720004.ca.archive.org/0/items/lenin-the-state-and-revolution/Lenin%20The%20State%20And%20Revolution_text.pdf"
            },

            {
                title: "God and State",
                author: "Mikhail Bakunin",
                cover: "https://covers.openlibrary.org/b/oclc/5625760-L.jpg",    
                readLink: "https://dn790001.ca.archive.org/0/items/Bakunin1920IshGodAndTheState/Bakunin%201920-ish%20God%20and%20the%20State.pdf"
            },

            {
                title: "Reform or Revolution",
                author: "Rosa Luxemborg",
                cover: "https://covers.openlibrary.org/b/isbn/9380118295-L.jpg",
                readLink: "https://dn710003.ca.archive.org/0/items/reform-or-revolution/C03-Reform-or-Revolution.pdf"
                
            }, 

            {
                title: "The Second Sex",
                autor: "Simone de Beauvoir",
                cover: "https://covers.openlibrary.org/b/oclc/651072581-L.jpg",
                readLink: "https://dn721601.ca.archive.org/0/items/the-second-sex/The%20Second%20Sex.pdf"
            }


        ];

        const library = document.getElementById("library");

        books.forEach(book => {
            const card = document.createElement("div");
            card.className = "book";

            card.innerHTML = ` <img src = "${book.cover}">
                           <h3>${book.title}</h3>
                           <p>${book.author}</p>
                           <a href="${book.readLink}" target="_blank" class="read-btn">Read</a> `;
            library.appendChild(card);
        });





        //REVOLUTIONARIES
        const revolts = [
            {
                name: "Bhagat Singh",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Bhagat_Singh_1929.jpg",
                bio: "Indian revolutionay who fought against the British Colonial rule and became a symbol of resistance and sacrifice.",
                link: "https://en.wikipedia.org/wiki/Bhagat_Singh"
            },

            {
                name: "Che Guevara",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Che_Guevara_-_Guerrillero_Heroico_by_Alberto_Korda.jpg",
                bio: "A key figure in the Cuban Revolution and an international icon of rebellion against imperialism. His life embodied the idea of revolutionary commitment beyond borders.",
                link: "https://en.wikipedia.org/wiki/Che_Guevara"
            },

            {
                name: "Vladimir Lenin",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Vladimir_Lenin_in_July_1920_by_Pavel_Zhukov.jpg",
                bio: "The architect of the 1917 Russian Revolution who transformed Marxist theory into political practice and reshaped global revolutionary movements.",
                link: "https://en.wikipedia.org/wiki/Vladimir_Lenin"
            },

            {
                name: "Rose Luxemborg",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rosa_Luxemburg.jpg",
                bio: "A revolutionary socialist thinker who advocated democracy, workers’ rights, and the power of mass movements against authoritarian rule.",
                link: "https://en.wikipedia.org/wiki/Rosa_Luxemburg"
            },

            {
                name: "Nelson Mandela",
                image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Nelson_Mandela_and_the_Congressional_Black_Caucus.jpg",
                bio: "A leader of the fight against apartheid whose long imprisonment became a global symbol of resistance against racial oppression.",
                link: "https://en.wikipedia.org/wiki/Nelson_Mandela"
            }, 

            {
                name: "Mahatma Gandhi",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg",
                bio: "The father of the Indian independence movement who pioneered nonviolent resistance as a powerful tool for social and political change.",
                link: "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
            }, 

            {
                name: "Ho Chi Minh",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/H%E1%BB%93_Ch%C3%AD_Minh_1950s.jpg",
                bio: "The leader of the Vietnamese independence movement who fought against colonialism and imperialism to establish a unified Vietnam.",
                link: "https://en.wikipedia.org/wiki/Ho_Chi_Minh"
            },

        


        ];

        const container = document.getElementById("revolts");

        revolts.forEach(person => {
            const card = document.createElement("div");
            card.className = "rebel-card";

            card.innerHTML = ` <img src="${person.image}">
                           <h3>${person.name}</h3>
                           <p>${person.bio}</p>
                           <a href="${person.link}" target="_blank" class="read-more">Know More </a>
                           `;

            container.appendChild(card);
        });




//CONTACT
        const form = document.getElementById("contact-form");
        const status = document.getElementById("form-status");
        
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            status.style.color = "orange";
            status.textContent = "Sending...";

            setTimeout(() => {
                status.style.color = "ligtgreen";
                status.textContent = "Message Sent!";

                form.reset();
            
            }, 2000);
        });
