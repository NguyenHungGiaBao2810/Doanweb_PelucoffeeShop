import React, { Component } from "react";

class Gmap extends Component {
    render() {
        return (
            <div className="align-center">
                <h2 className="text-center">MY LOCATION</h2>
                <iframe
                    title="gmap"
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15675.414698607303!2d106.6880955!3d10.8225079!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1701075483542!5m2!1svi!2s"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        );
    }
}
export default Gmap;
