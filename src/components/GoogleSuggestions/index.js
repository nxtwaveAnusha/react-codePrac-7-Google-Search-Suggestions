import {Component} from 'react'

import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInpur: ''}

  onChangeInput = event => {
    this.setState({searchInpur: event.target.value})
  }

  onShowInput = value => {
    this.setState({searchInpur: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInpur} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInpur.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="google-suggestion-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logosize"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="icon-size"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                onChange={this.onChangeInput}
                className="input-ele"
                value={searchInpur}
              />
            </div>
            <ul className="item">
              {searchResults.map(eachSearch => (
                <SuggestionItem
                  suggestionDetails={eachSearch}
                  key={eachSearch.id}
                  onShowInput={this.onShowInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
