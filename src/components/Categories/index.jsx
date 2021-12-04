import React, { useState } from 'react';

// class Categories extends React.Component {
//     state = {
//         activeItem: 0,
//     }

//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index,
//         })
//     }

//     render() {
//         const {items, onClickItem} = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     {
//                         items.map((item, index) => {
//                             return (
//                                 <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${item}_${index}`}>{item}</li>
//                             )
//                         })
//                     }
//                     {/* <li className="active">Все</li>
//                     <li>Мясные</li>
//                     <li>Вегетарианская</li>
//                     <li>Гриль</li>
//                     <li>Острые</li>
//                     <li>Закрытые</li> */}
//                 </ul>
//             </div>
//         )
//     }
// }

function Categories({items}) {
    const [activeCategory, setActiveCategory] = useState(null);

    const onSelectCategory = index => {
        setActiveCategory(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectCategory(null)} >Все</li>
                {
                    
                    items && items.map((item, index) => {
                        return (
                            <li className={activeCategory === index ? 'active' : ''} onClick={() => onSelectCategory(index)} key={`${item}_${index}`}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Categories;
