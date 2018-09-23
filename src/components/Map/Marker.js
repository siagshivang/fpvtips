import React from 'react'
import MarkerInfo from './MarkerInfo'

const PIN_SIZE = 32
export default class Marker extends React.Component {
  render() {
    const {
      $hover,
      label,
      description,
      videoLinks,
      isHighlighted,
      zIndex,
    } = this.props

    // Set up hover styles
    const clearHoverStyle = { transform: 'none', zIndex: 1 }
    const hoverStyle = {
      transform: 'scale(1.3)',
      transition: '275ms ease-out',
      zIndex: 9,
    }
    const style = $hover ? hoverStyle : clearHoverStyle

    return (
      <div
        style={{
          width: `${PIN_SIZE}px`,
          height: `${PIN_SIZE}px`,
          ...style,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={PIN_SIZE}
          width={PIN_SIZE}
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx={PIN_SIZE / 2}
            cy={PIN_SIZE / 2}
            r={PIN_SIZE / 2 - 2}
            stroke={$hover ? 'white' : 'black'}
            strokeWidth={isHighlighted == 'true' ? '4' : '2'}
            fill="#0375d8"
          />
        </svg>
        {$hover && (
          <MarkerInfo
            style={{ zIndex: 999 }}
            label={label}
            description={description}
            videoLinks={videoLinks}
            onClick={this.handleInfoExpand}
          />
        )}
      </div>
    )
  }
}
