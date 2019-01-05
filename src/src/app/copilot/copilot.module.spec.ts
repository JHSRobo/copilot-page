import {CopilotModule} from './copilot.module';

describe('CopilotModule', () => {
    let copilotModule: CopilotModule;

    beforeEach(() => {
        copilotModule = new CopilotModule();
    });

    it('should create an instance', () => {
        expect(copilotModule).toBeTruthy();
    });
});
