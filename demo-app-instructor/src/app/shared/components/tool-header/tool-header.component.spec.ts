import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToolHeaderComponent } from './tool-header.component';

describe('ToolHeaderComponent', () => {
  let component: ToolHeaderComponent;
  let fixture: ComponentFixture<ToolHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolHeaderComponent);
    component = fixture.componentInstance;
    component.headerText = 'My Tool';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('header h1 populated', () => {

    const h1Element = fixture.debugElement
      .query(By.css('h1')).nativeElement;

    expect(h1Element.innerText).toEqual('My Tool');


    // fixture.debugElement.queryAll()
    

  });
});
