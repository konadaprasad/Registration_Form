import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstFocus: false,
    lastFocus: false,
    result: false,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({firstFocus: true, lastFocus: true, result: false})
    } else if (firstName === '') {
      this.setState({firstFocus: true, result: false})
    } else if (lastName === '') {
      this.setState({lastFocus: true, result: false})
    } else {
      this.setState({firstFocus: false, lastFocus: false, result: true})
    }
  }

  changeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  loseFocusFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstFocus: true})
    } else {
      this.setState({firstFocus: false})
    }
  }

  loseFocusLastName = () => {
    const {lastName, lastFocus} = this.state
    if (lastName === '') {
      this.setState({lastFocus: !lastFocus})
    } else {
      this.setState({lastFocus: false})
    }
  }

  resetForm = () => {
    this.setState({result: false, firstName: '', lastName: ''})
  }

  render() {
    const {firstName, lastName, firstFocus, lastFocus, result} = this.state
    let errMsg
    let errMsg1
    let resultCont
    if (firstFocus) {
      errMsg = <p className="para">Required</p>
    } else {
      errMsg = null
    }
    if (lastFocus) {
      errMsg1 = <p className="para">Required</p>
    } else {
      errMsg1 = null
    }

    if (result) {
      resultCont = (
        <div className="cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="img"
          />
          <p className="head">Submitted Successfully</p>
          <button className="btn1" type="button" onClick={this.resetForm}>
            Submit Another Response
          </button>
        </div>
      )
    } else {
      resultCont = (
        <form className="form-cont" onSubmit={this.submitForm}>
          <label htmlFor="firstId" className="label1">
            FIRST NAME
          </label>
          <input
            className="first-name"
            onChange={this.changeFirstName}
            value={firstName}
            placeholder="FirstName"
            id="firstId"
            onBlur={this.loseFocusFirstName}
          />
          {errMsg}
          <label htmlFor="lastId" className="label1">
            LAST NAME
          </label>
          <input
            className="first-name"
            onChange={this.changeLastName}
            value={lastName}
            placeholder="LastName"
            id="lastId"
            onBlur={this.loseFocusLastName}
          />
          {errMsg1}
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      )
    }
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        <div className="inner-container">{resultCont}</div>
      </div>
    )
  }
}

export default RegistrationForm
