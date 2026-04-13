// Copyright 2021 The Casdoor Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import {Card, Col, Tag} from "antd";
import * as Setting from "../Setting";
import {withRouter} from "react-router-dom";

class SingleCard extends React.Component {
  wrappedAsSilentSigninLink(link) {
    if (link.startsWith("http")) {
      link += link.includes("?") ? "&silentSignin=1" : "?silentSignin=1";
    }
    return link;
  }

  renderCardMobile(logo, link, title, desc, tags) {
    const silentSigninLink = this.wrappedAsSilentSigninLink(link);

    return (
      <Card
        hoverable
        onClick={() => Setting.goToLinkSoft(this, silentSigninLink)}
        style={{width: "100%", borderRadius: "8px", marginBottom: "12px"}}
        styles={{body: {padding: "12px 14px"}}}
      >
        <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
          <img alt="logo" src={logo} style={{width: "34px", height: "34px", objectFit: "contain", flexShrink: 0}} />
          <div style={{minWidth: 0}}>
            <div style={{fontSize: "11px", color: "#8a8a8a", textTransform: "uppercase", lineHeight: "16px"}}>
              {desc || "Application"}
            </div>
            <div style={{fontSize: "15px", fontWeight: 600, color: "#1f2d6b", lineHeight: "20px"}}>
              {title}
            </div>
          </div>
        </div>
        {this.renderTags(tags)}
      </Card>
    );
  }

  renderTags(tags) {
    if (!tags || !Array.isArray(tags) || tags.length === 0) {
      return null;
    }

    return (
      <div style={{marginTop: "8px"}}>
        {tags.map(tag => (
          <Tag key={tag.name} color={tag.color} style={{marginRight: "4px"}}>
            {tag.name}
          </Tag>
        ))}
      </div>
    );
  }

  renderCard(logo, link, title, desc) {
    const silentSigninLink = this.wrappedAsSilentSigninLink(link);

    return (
      <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6} style={{padding: "8px"}}>
        <Card
          hoverable
          onClick={() => Setting.goToLinkSoft(this, silentSigninLink)}
          style={{width: "100%", borderRadius: "8px", border: "1px solid #e6e8ef", height: "100%"}}
          styles={{body: {padding: "24px", backgroundColor: "#f5f5f5"}}}
        >
          <div style={{display: "grid", gridTemplateColumns: "1fr 3fr", alignItems: "center", gap: "12px"}}>
            <img alt="logo" src={logo} style={{width: "100%", height: "auto", aspectRatio: "1/1", objectFit: "contain", flexShrink: 0}} />
            <div style={{minWidth: 0, display: "flex", flexDirection: "column", gap: "16px"}}>
              <div style={{fontSize: "16px", color: "#8a8a8a", textTransform: "uppercase", lineHeight: "16px"}}>
                {desc || "Quản lý"}
              </div>
              <div style={{fontSize: "24px", fontWeight: 600, color: "#1f2d6b", lineHeight: "20px"}}>
                {title}
              </div>
            </div>
          </div>
        </Card>
      </Col>
    );
  }

  render() {
    if (Setting.isMobile()) {
      return this.renderCardMobile(this.props.logo, this.props.link, this.props.title, this.props.desc, this.props.tags);
    } else {
      return this.renderCard(this.props.logo, this.props.link, this.props.title, this.props.desc);
    }
  }
}

export default withRouter(SingleCard);
