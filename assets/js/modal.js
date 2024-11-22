// const openModalImg = document.querySelector('.open-modal-img');
//         const closeModalBtn = document.querySelector('.close-modal-btn');
//         const modal = document.getElementById('pdfModal');

//         // Fonction pour ouvrir la modale
//         openModalImg.addEventListener('click', () => {
//             modal.style.display = 'flex';
//         });

//         // Fonction pour fermer la modale
//         closeModalBtn.addEventListener('click', () => {
//             modal.style.display = 'none';
//         });

//         // Fermer la modale en cliquant en dehors du contenu
//         window.addEventListener('click', (event) => {
//             if (event.target === modal) {
//                 modal.style.display = 'none';
//             }
//         });


        
        const modal1 = document.getElementById('modal');
        const pdfViewer = document.getElementById('pdfViewer');
        const closeModal = document.getElementById('closeModal');
        const cert1 = document.getElementById('cert1');

        // Lien vers le PDF (format paysage)
        const pdfUrl = 'assets/images/Certifications/Certification_ANSSI_MOOC_CYBER_Clément_Gontier.pdf'; // Remplace par l'URL ou le chemin de ton fichier PDF

        // Ouvrir la modale avec le PDF
        cert1.addEventListener('click', () => {
            pdfViewer.src = pdfUrl;
            modal1.style.display = 'flex';
            
        });

        // Fermer la modale
        closeModal.addEventListener('click', () => {
            modal1.style.display = 'none';
            pdfViewer.src = ''; // Réinitialise la source du PDF
            

        });

        // Fermer la modale en cliquant en dehors
        window.addEventListener('click', (event) => {
            if (event.target === modal1) {
                modal1.style.display = 'none';
                pdfViewer.src = '';
            }
        });
        const thumbnails = document.querySelectorAll('.pdf-thumbnail');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const pdfUrl = thumbnail.getAttribute('data-pdf'); // Récupère le chemin du PDF
                pdfViewer.src = pdfUrl;
                modal1.style.display = 'flex';
            });
        });