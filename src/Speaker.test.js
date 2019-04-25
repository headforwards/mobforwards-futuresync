import {shallow} from "enzyme";
import React from 'react';
import Speaker from './Speaker';

describe("Speaker.js", () => {
    var speakerData = {
        name: "Test",
        talk: { title: "Title", description: "Description" }
    };

    var speaker;

    beforeEach(() => {
        speaker = shallow(<Speaker speaker={speakerData}/>);
    })

    it('displays the speaker name', () => {

        expect(speaker.find("[data-name]").text()).toBe("Test");
    });

    it("displays the speaker's talk title", () =>{
        expect(speaker.find("[data-title]").text()).toContain("Title");
    });

    it("displays the speaker's image", () =>{
        expect(speaker.find("[data-image]").length).toBe(1);
    });

    it("displays the talk description", () => {
        expect(speaker.find("[data-description]").text()).toContain("Description");
    });

    it("has an interest button", () => {
        expect(speaker.find("[data-interest]").length).toBe(1);
    });

    // it("clicking the interest button calls updateTalkCount", () => {

    // });
});