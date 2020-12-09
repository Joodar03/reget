import React, {Component} from 'react';
import NewArrivalsItem from "./new-arrivals-item/new-arrivals-item";

class NewArrivals extends Component {
    render() {
        return (
            <section className="new_arrivals_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="popular-products-slides owl-carousel">
                                <NewArrivalsItem/>
                                <NewArrivalsItem/>
                                <NewArrivalsItem/>
                                <NewArrivalsItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NewArrivals;