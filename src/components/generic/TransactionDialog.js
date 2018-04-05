import React, { Component } from 'react';
import { Button, DialogContainer, CircularProgress } from 'react-md';
import styled from 'styled-components';
import _ from 'lodash';

export default class TransactionDialog extends Component {
  renderSteps(){
    const StyledStep = styled.div`
      color: #B6B6B6;
      text-transform: uppercase;
      margin-right:24px;
      font-size: 13px;
      font-weight:500;

      &.active{
        color: #2e3192;
      }

      &:last-child{
        margin:0;
      }
    `;

    const steps = _.map(this.props.steps, (step) => {
      return (
        <StyledStep className={(step.id === this.props.stepIndex)?"active":""} key={step.id}>
          {step.description}
        </StyledStep>
      );
    });

    return steps;
  }

  render(){
    const dialogStyle = {width:"780px",position:"relative",top:"33%",padding:"20px 20px 12px 20px"};

    const StyledStepsContainer = styled.div`
      display: flex;
      justify-content: center;
      margin-bottom: 48px;
    `;

    const StyledContentContainer = styled.div`
      h1 {
        text-align: center;
        margin-bottom: 24px;
      }

      p {
        text-align:center;
        padding: 0 5%;
        line-height: 1.7;
        font-size:15px;
      }
    `;

    const StyledButtonContainer = styled.div`
      margin-top: 60px;
      display: flex;
      justify-content:flex-end;
      align-items:center;
    `;

    const StyledCircularProgress = styled(CircularProgress)`
      margin: 0 24px 0 0;
    `;

    return(
      <DialogContainer
        id="transaction-dialog"
        visible={this.props.visible}
        onHide={this.props.onHide}
        focusOnMount={false}
        dialogStyle={dialogStyle}
        aria-labelledby="Transaction dialog"
        modal={this.props.modal}
      >
        <StyledStepsContainer>
          {this.renderSteps()}
        </StyledStepsContainer>
        <StyledContentContainer>
          {this.props.children}
        </StyledContentContainer>
        {(this.props.showContinueButton) && (
          <StyledButtonContainer>
            {(this.props.loading) && (
                <StyledCircularProgress
                  centered={false}
                  id="transaction-in-progress"
                />
            )}
            <Button flat primary disabled={this.props.loading} className={this.props.loading?"disabled-button":""} swapTheming onClick={event => this.props.nextStepHandler(this.props.stepIndex)}>Continue</Button>
          </StyledButtonContainer>
        )}
      </DialogContainer>
    );
  }
}