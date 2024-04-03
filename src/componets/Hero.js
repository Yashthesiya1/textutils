import React from "react";
import PropTypes from 'prop-types';
export default function Hero(props) {
    return (
        <>
            <p className="text-info text-bg-dark  ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book <br />{props.title}.</p>
        </>
    );
}
Hero.propTypes = { title: PropTypes.string.isRequired }
Hero.defaultProps ={
    title:"Set Default Props"
}