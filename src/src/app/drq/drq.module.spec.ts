import {DrqModule} from './drq.module';

describe('DrqModule', () => {
    let drqModule: DrqModule;

    beforeEach(() => {
        drqModule = new DrqModule();
    });

    it('should create an instance', () => {
        expect(drqModule).toBeTruthy();
    });
});
