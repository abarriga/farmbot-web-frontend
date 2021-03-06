import * as React from "react";
import { t } from "i18next";
import { BlurableInput, Row } from "../../ui";
import { DeleteAccountPropTypes } from "../interfaces";

export class DeleteAccount extends React.Component<DeleteAccountPropTypes, {}> {
    render() {
        let { set, deletion_confirmation } = this.props;
        return (
            <Row>
                <div className={`col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 
                    col-md-offset-2`}>
                    <div className="widget-wrapper">
                        <Row>
                            <div className="col-sm-12">
                                <div className="widget-header">
                                    <h5>{t("Delete Account")}</h5>
                                </div>
                                <div className="widget-content">
                                    WARNING! Deleting your account will
                                        permanently delete all of your Sequences
                                        , Regimens, Events, and Farm Designer
                                        data.Upon deleting your account, FarmBot
                                        will cease to function and become
                                        inaccessible until it is paired with
                                        another web app account. To do this, you
                                        will need to reboot your FarmBot so that
                                        is goes back into configuration mode for
                                        pairing with another user account. When
                                        this happens, all of the data on your
                                        FarmBot will be overwritten with the new
                                        account's data. If the account is brand
                                        new, then FarmBot will become a blank
                                        slate.
                                        <br /><br />
                                    If you are sure you want to delete your
                                        account, type in your password below
                                        to continue.
                                    </div>
                            </div>
                        </Row>
                        <Row>
                            <form>
                                <div className="col-sm-12">
                                    <div className="widget-content">
                                        <div className="form-group row">
                                            <label className="col-sm-3">
                                                {t("Enter Password")}
                                            </label>
                                            <div className="col-sm-9">
                                                <BlurableInput
                                                    onCommit={set}
                                                    name="deletion_confirmation"
                                                    allowEmpty={true}
                                                    value={deletion_confirmation
                                                        || ""}
                                                    type="password" />
                                            </div>
                                            <button onClick={this.props.save}
                                                className={`red button-like 
                                                    widget-control`}
                                                type="button">
                                                {t("DELETE ACCOUNT")}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Row>
                    </div>
                </div>
            </Row>
        );
    }
}
