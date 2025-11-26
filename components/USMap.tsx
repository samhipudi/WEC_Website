import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

interface MapPin {
  city: string;
  state: string;
  coordinates: [number, number]; // [longitude, latitude]
}

interface USMapProps {
  pins?: MapPin[];
}

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

export default function USMap({ pins = [] }: USMapProps) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <ComposableMap projection="geoAlbersUsa" height={500}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#e8dcc4"
                stroke="#2a2a2a"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
        {pins.map((pin, index) => (
          <Marker key={index} coordinates={pin.coordinates}>
            <g transform="translate(0, -10)">
              {/* Pin shape - teardrop/location marker */}
              <path
                d="M 0,-10 C -4,-10 -7.5,-6.5 -7.5,-2.5 C -7.5,0 0,10 0,10 C 0,10 7.5,0 7.5,-2.5 C 7.5,-6.5 4,-10 0,-10 Z"
                fill="#c9a961"
                stroke="#2a2a2a"
                strokeWidth={1}
                className="cursor-pointer"
              />
              {/* White circle in the middle of pin */}
              <circle
                cy={-4}
                r={2.5}
                fill="white"
              />
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
