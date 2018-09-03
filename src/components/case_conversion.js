<<<<<<< bf33fc89d4d9040efb66d9531ff540b5a963c7a4
import React, { Component } from 'react';


export default class CaseConversion extends Component{
    render(){
        return(
            <div>
               <section className="hero is-primary">
                  <div className="hero-body">
                    <div className="container">
                      <h1 className="title">
                        Convert Away!
                      </h1>
                      <h2 className="subtitle">
                        Let us convert all to one and one to all
                      </h2>
                    </div>
                  </div>
                </section>
                <section style={{"margin":"50px"}}>
                    <div className="columns">
                      <div className="column is-three-fifths">
                        <div className="field">
                          <div className="control">
                            <input className="input is-info" type="text" placeholder="Info input" />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-fifth">
                            <div className="control">
                              <label className="radio">
                                <input type="radio" name="foobar" />
                                camelCased
                              </label>
                              <label className="radio">
                                <input type="radio" name="foobar" />
                                PascalCased
                              </label>
                            </div> 
                            <div className="control">
                             <label className="radio">
                                <input type="radio" name="foobar" />
                                dash-cased
                              </label>
                               <label className="radio">
                                <input type="radio" name="foobar" />
                                snake_cased
                              </label>
                            </div>

                      </div>
                       <button className="button is-danger is-large is-fullwidth">Convert!!</button>
                    </div>
                </section>

            </div>
        );
    }
=======
import React, { Component } from 'react';


export default class CaseConversion extends Component{
    render(){
        return(
            <div>
               <section className="hero is-primary">
                  <div className="hero-body">
                    <div className="container">
                      <h1 className="title">
                        Convert Away!
                      </h1>
                      <h2 className="subtitle">
                        Let us convert all to one and one to all
                      </h2>
                    </div>
                  </div>
                </section>
                <section style={{"margin":"50px"}}>
                    <div className="columns">
                      <div className="column is-three-fifths">
                        <div className="field">
                          <div className="control">
                            <input className="input is-info" type="text" placeholder="Info input" />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-fifth">
                            <div className="control">
                              <label className="radio">
                                <input type="radio" name="foobar" />
                                camelCased
                              </label>
                              <label className="radio">
                                <input type="radio" name="foobar" />
                                PascalCased
                              </label>
                            </div> 
                            <div className="control">
                             <label className="radio">
                                <input type="radio" name="foobar" />
                                dash-cased
                              </label>
                               <label className="radio">
                                <input type="radio" name="foobar" />
                                snake_cased
                              </label>
                            </div>

                      </div>
                       <button className="button is-danger is-large is-fullwidth">Convert!!</button>
                    </div>
                </section>

            </div>
        );
    }
>>>>>>> case conversion ui setup with bulma
}