import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import WeatherIcon from '@material-ui/icons/WbSunny'
import PhotoIcon from '@material-ui/icons/Photo'
import PlaceIcon from '@material-ui/icons/Place'
import VideoIcon from '@material-ui/icons/VideoLibrary'

import WeatherInfo from '../WeatherInfo'
import Video from './Video'

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  min-width: 380px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3, minHeight: '15rem' }}>
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, currentPlaceData } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          centered
          fullWidth
          onChange={this.handleChange}
        >
          <Tab icon={<PlaceIcon />} label="Place" />
          <Tab icon={<WeatherIcon />} label="Weather" />
          <Tab icon={<PhotoIcon />} label="Photos" />
          <Tab icon={<VideoIcon />} label="Videos" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <div>{currentPlaceData.label}</div>
            <div>{currentPlaceData.description}</div>
            <div>
              {currentPlaceData.videoLinks &&
                currentPlaceData.videoLinks.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
            </div>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <WeatherInfo />
          </TabContainer>
        )}
        {value === 2 && <TabContainer>Photos</TabContainer>}
        {value === 3 && (
          <TabContainer>
            <Grid>
              {currentPlaceData.videoLinks.map((video, index) => (
                <Video
                  key={index}
                  src={video}
                  width="560"
                  height="315"
                  title={`Video - ${video}`}
                />
              ))}
            </Grid>
          </TabContainer>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(SimpleTabs)
