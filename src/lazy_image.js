import React from 'react';
import classNames from 'classnames/bind';
import styles from './lazy_image.scss';

export default class Lazyload extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      image: this.props.placeholder,
      loaded: false
    };
  }

  componentWillMount(){
    let image = new Image();
    image.src = this.props.src;
    console.log(this.props.src);
    image.onload = ()=>{
      this.setState({
        image: image.src,
        loaded: true
      });
    }
  }

  render() {
    var cx = classNames.bind(styles);

    var imgClass = cx({
      reading_image : true,
      blur : !this.state.loaded
    })

    return (
      <div className={styles.reading_image_container}>
        <img src={this.state.image} className={imgClass}/>
      </div>
    )
  }

}
