import React from 'react';
import {
  CommonLoading,
  WaveLoading,
  BlockLoading,
  BoxLoading,
  LoopCircleLoading,
  TransverseLoading,
  CircleToBlockLoading,
  DisappearedLoading,
  TouchBallLoading,
  BlockReserveLoading,
  WaveTopBottomLoading,
  CircleLoading,
  NineCellLoading,
  WindMillLoading
} from '~/components';
import './style.scss';
const DemoContainer = () => {

  const style = {
    margin: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }

  return (
    <div className="demo-container">
      <div className="top-container"></div>
      <div className="logo-area">
        <div>LOADINGG<div></div></div>
        <div> <img src={require('./logo.jpeg')} alt="logo" /></div>
        <div><a target="_blank" href="https://github.com/sixiaodong123/react-loading"><img alt="github" src={require('./github.jpeg')} /></a></div>
      </div>
      <div className="title-area">
        <h1>THE LOADING COMPONENT BASE ON REACT</h1>
        <p>
          Our goal is to make waiting more interesting.We only focus on loading.Welcome to our
          team.
          <br />
          Completely open source and MIT licensed.
        </p>
      </div>
      <div className="component">
        <div className="item">
          <CommonLoading style={style} />
        </div>
        <div className="item">
          <NineCellLoading style={style} speed={1.5} />
        </div>
        <div className="item">
          <BlockLoading style={style} />
        </div>
        <div className="item">
          <BoxLoading  style={style} />
        </div>
        <div className="item">
          <CircleToBlockLoading style={style} />
        </div>
        <div className="item">
          <LoopCircleLoading style={style} />
        </div>
        <div className="item">
          <WindMillLoading style={style}  />
        </div>
        <div className="item">
          <BoxLoading style={style} />
        </div>
        <div className="item">
          <DisappearedLoading style={style} />
        </div>
        <div className="item">
          <TouchBallLoading style={style} />
        </div>
        <div className="item">
          <TransverseLoading style={{...style, marginTop: 60}} />
        </div>
        <div className="item">
          <WaveLoading style={style} />
        </div>
        <div className="item">
          <WaveTopBottomLoading style={style} />
        </div>
        <div className="item">
          <CircleLoading style={style} inColor="#090a1e"  />
        </div>
        <div className="item">
          <BlockReserveLoading style={style} />
        </div>
      </div>
    </div>
  );
};

export default DemoContainer;
