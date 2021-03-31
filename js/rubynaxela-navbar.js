const navbar = `
    <div id="rubynaxela-navbar">
        <div id="rubynaxela-navbar-wrapper">
            <div id="rubynaxela-navbar-left">
                <a href="./">
                    << Powrót do listy instrukcji
                </a>
            </div>
            <div id="rubynaxela-navbar-right">
                Dark mode by <em>Jacek Pawelski</em> a.k.a. <em>RubyNaxela</em>
            </div>
        </div>
    </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = navbar + document.body.innerHTML;
});