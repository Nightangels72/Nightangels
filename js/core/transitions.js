/* =========================================================
   NIGHTANGELS - TRANSITIONS SYSTEM
   Navigation + Portal FX + Scroll Restore
========================================================= */

const pageTransition =
document.getElementById(
'pageTransition'
);

/* =========================================================
   INTERNAL LINKS
========================================================= */

const pageLinks =
document.querySelectorAll('a');

pageLinks.forEach(link => {

    link.addEventListener('click', e => {

        const href =
        link.getAttribute('href');

        if(

            !href ||

            href.startsWith('#') ||

            href.startsWith('javascript') ||

            href.startsWith('mailto') ||

            href.startsWith('tel') ||

            link.target === '_blank'

        ){

            return;
        }

const isExternal =

link.hostname !==
window.location.hostname;

/* =========================================================
   ALLOW PORTAL LINKS
========================================================= */

if(

    isExternal &&

    !link.classList.contains(
    'portal-link'
    )

){

    return;
}

        e.preventDefault();

        if(pageTransition){

            /* =========================================================
               RESET
            ========================================================= */

            pageTransition.classList.remove(
                'active',
                'portal-open'
            );

            /* =========================================================
               PORTAL TRANSITION
            ========================================================= */

            if(

                link.classList.contains(
                'portal-link'
                )

            ){

                pageTransition
                .classList
                .add('portal-open');

                /* =========================================================
                   OPTIONAL AUDIO FX
                ========================================================= */

/* =========================================================
   PORTAL AUDIO
========================================================= */

const portalSound =
document.getElementById(
'portalSound'
);

if(portalSound){

    portalSound.volume = 0.65;

    portalSound.currentTime = 0;

    portalSound.play().catch(() => {});
}

                setTimeout(() => {

                    window.location.href =
                    href;

                }, 3200);

                return;
            }

            /* =========================================================
               DEFAULT TRANSITION
            ========================================================= */

            pageTransition
            .classList
            .add('active');
        }

        setTimeout(() => {

            window.location.href =
            href;

        }, 850);

    });

});

/* =========================================================
   RESTORE SCROLL
========================================================= */

window.history.scrollRestoration =
'manual';

/* =========================================================
   SCROLL TOP ON LOAD
========================================================= */

window.addEventListener('load', () => {

    window.scrollTo({

        top:0,

        behavior:'instant'

    });

});