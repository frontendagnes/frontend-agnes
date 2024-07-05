import React from 'react'
import "./HostingDescription.css";

function HostingDescription() {
  return (
    <>
      <p>
        <strong>Hosting</strong> - udostępnienie miejsca na serwerze (tam
        wgrywane są pliki żeby były widoczne w sieci) - przy wyborze płatnego
        hostingu do ceny usługi zostanie doliczona cena hostingu (na rok)
      </p>
      <p>
        <strong>Domena</strong> - adres strony intrenetowej np:{" "}
        <a
          href="https://frontend-agnes.pl"
          alt="frontend-agnes.pl"
          title="Kodowanie stron internetowych"
        >
          https://frontend-agnes.pl
        </a>{" "}
        - do ceny usuługi zostanie doliczona cena domeny (na rok)
      </p>
    </>
  );
}

export default HostingDescription