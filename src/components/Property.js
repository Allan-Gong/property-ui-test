import React from "react";
import PropTypes from "prop-types";
import { Card, Image, Button } from "semantic-ui-react";

const Property = ({
  property,
  buttonText,
  buttonAction,
  buttonDisabled = false
}) => {
  const headerStyle = {
    background: property.agency.brandingColors.primary
  };

  return (
    <Card fluid className="property" key={property.id}>
      <Card.Header className="property-header" style={headerStyle}>
        <img
          src={property.agency.logo}
          className="agency-logo"
          alt="Agency logo"
        />
      </Card.Header>
      <Image src={property.mainImage} className="main-image" alt="Main" />
      <Card.Content>
        <p className="left floated price">{property.price}</p>
        <Button
          primary
          disabled={buttonDisabled}
          className="right floated button-action"
          onClick={() => buttonAction(property.id)}
        >
          {buttonText}
        </Button>
      </Card.Content>
    </Card>
  );
};

Property.propTypes = {
  property: PropTypes.shape({
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
    agency: PropTypes.shape({
      brandingColors: PropTypes.shape({
        primary: PropTypes.string.isRequired
      }).isRequired,
      logo: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired
};

export default Property;
