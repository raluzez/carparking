import React, { Component } from 'react';

import BackgroundHome from '../../components/UI/Background/BackgroundHome/BackgroundHome';
import Header from '../../components/UI/Header/Header';
import Menu from '../../components/UI/Menu/webMenu';

class Layout extends Component {

    render (){
        return(
            <>
                <BackgroundHome/>
                <Header
                    openMenu={this.openMenuHandler}
                    closeMenu={this.closeMenuHandler}/>
        
                <div className="container-fluid mainheight">
                    <div className="row h-100">
                        <Menu user={this.props.user}/>
                        <div className="col-12 col-md-8 col-lg-9 h-100">
                            <div className="h-100">    
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Layout;