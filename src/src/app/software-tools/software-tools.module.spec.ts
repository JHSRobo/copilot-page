import { SoftwareToolsModule } from './software-tools.module';

describe('SoftwareToolsModule', () => {
  let softwareToolsModule: SoftwareToolsModule;

  beforeEach(() => {
    softwareToolsModule = new SoftwareToolsModule();
  });

  it('should create an instance', () => {
    expect(softwareToolsModule).toBeTruthy();
  });
});
