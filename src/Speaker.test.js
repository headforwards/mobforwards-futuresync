import {shallow} from "enzyme";
import React from 'react';
import Speaker from './Speaker';

describe("Speaker.js", () => {
    var speakerData = {
        name: "Test",
        talk: { title: "Title" }
    };

    var speaker;

    beforeEach(() => {
        speaker = shallow(<Speaker speaker={speakerData}/>);
    })

    it('displays the speaker name', () => {

        expect(speaker.find("[data-name]").text()).toBe("Test");
    });

    it("displays the speaker's talk title", () =>{
        expect(speaker.find("[data-title]").text()).toBe("Title");
    })

    it("displays the speaker's image", () =>{
        expect(speaker.find("[data-image]").length).toBe(1);
    })
});