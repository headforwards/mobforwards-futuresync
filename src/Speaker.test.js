import {shallow} from "enzyme";
import React from 'react';
import Speaker from './Speaker';

describe("Speaker.js", () => {
    var speakerData = {
        name: "Test"
    };


    it("renders without crashing", () => {
        var speaker = shallow(<Speaker speaker={speakerData}/>);
    })

    it('displays the speaker name', () => {

        var speaker = shallow(<Speaker speaker={speakerData}/>);

        expect(speaker.find("[data-name]").text()).toBe("Test");
    });
});