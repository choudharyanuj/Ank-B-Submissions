import React, { Component } from 'react'

export default class Crousal extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/pexels-photo-710743.webp" class="d-block w-100" style={{maxHeight:"600px"}} alt="1st-img"></img>
                        </div>
                        <div class="carousel-item">
                            <img src="/pexels-photo-1153976.webp" class="d-block w-100" style={{maxHeight:"600px"}} alt="2nd-img"></img>
                        </div>
                        <div class="carousel-item">
                            <img src="/school-children-happy-food-159632.webp" class="d-block w-100" style={{maxHeight:"600px"}} alt="3rd-img"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
