import '../index.css'
const Buttons = ({setUrl}) => {
    return (
        <div className="btn-container">
            <button type="button" className="filter-btn" onClick={() => {setUrl('http://localhost:3000/menu')}}>All</button>

            <button type="button" className="filter-btn" onClick={() => {setUrl('http://localhost:3000/menu?category=breakfast')}}>BreakFast</button>

            <button type="button" className="filter-btn" onClick={() => {setUrl('http://localhost:3000/menu?category=lunch')}}>Lunch</button>

            <button type="button" className="filter-btn" onClick={() => {setUrl('http://localhost:3000/menu?category=shakes')}}>Shakes</button>
        </div>
    )
}

export default Buttons