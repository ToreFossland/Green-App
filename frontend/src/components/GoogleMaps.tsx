import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
export const GoogleMaps = () => {
  const [selected, setSelected] = useState<any>({});

  const onSelect = (item: any) => {
    setSelected(item);
  };
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 63.42692,
    lng: 10.395202,
  };

  const locations = [
    {
      name: 'Pick up trash',
      location: {
        lat: 63.427664,
        lng: 10.394891,
      },
    },
    {
      name: 'Bike to work',
      location: {
        lat: 63.43059,
        lng: 10.386,
      },
    },
    {
      name: 'Eat vegeterian',
      location: {
        lat: 63.44,
        lng: 10.4021,
      },
    },
    {
      name: 'Go on a walk',
      location: {
        lat: 63.420643,
        lng: 10.402145,
      },
    },
    {
      name: 'Clean up park',
      location: {
        lat: 63.430597,
        lng: 10.39101,
      },
    },
    {
      name: 'Plant some trees',
      location: {
        lat: 63.433289,
        lng: 10.398756,
      },
    },
    {
      name: 'Donate your old clothes',
      location: {
        lat: 63.43095499043331,
        lng: 10.402535233541014,
      },
    },
  ];
  return (
    <LoadScript googleMapsApiKey="AIzaSyAkELw2NZ93B2RwfK5mvQFI7LSUS1k0uWI">
      <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
