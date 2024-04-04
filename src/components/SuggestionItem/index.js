import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onShowInput} = props

  const {suggestion} = suggestionDetails

  const onChangeClick = () => {
    onShowInput(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestionItem">{suggestion}</p>
      <button type="button" className="btn" onClick={onChangeClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="img-size"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
