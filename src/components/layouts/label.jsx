var mixins = require( './../../../mixins' );

module.exports = function ( React, tools ) {
    return React.createClass({
        mixins: [ mixins.LayoutAccessors ],

        /* =========================================================== */
        /* ======================== Renders ========================== */
        /* =========================================================== */

        render : function () {
            var css       = this._css()
              , fieldConf = this._field();

            return (
                <div className={css.wrapper} key={this.props.key}>
                    <label>{this._spec().text}</label>
                </div>
            );
        }
    });
};
