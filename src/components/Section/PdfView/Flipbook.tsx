'use client'
import React, { Component } from "react";
import HTMLFlipBook from "react-pageflip";

const PageCover = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>((props, ref) => {
  return (
    <div
      className="page page-cover bg-gray-200 text-gray-900 flex items-center justify-center"
      ref={ref}
      data-density="hard"
    >
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode; number: number; className?: string; }>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

interface FlipBookProps {
  pages: string[]; // array of image URLs
  title?: string; // optional title
  endTitle?: string; // optional end title
  width?: number; // optional width
  height?: number; // optional height
}

interface FlipBookState {
  page: number;
  totalPage: number;
  screeHt: number;
}

export class FlipBook extends Component<FlipBookProps, FlipBookState> {
  private flipBook: any;

  onChangeOrientation = (e: { data: number }) => {
    // Handle orientation change
  };

  onChangeState = (e: { data: string }) => {
    // Handle state change
  };

  constructor(props: FlipBookProps) {
    super(props);
    this.state = {
      page: 0,
      totalPage: 0,
      screeHt: 1,
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e: { data: number }) => {
    this.setState({
      page: e.data,
    });
  };

  componentDidMount() {
    this.setState({
      // totalPage: this.flipBook.getPageFlip().getPageCount(),
    });
    this.setState({
      screeHt: window.innerHeight,
    });
  }

  render() {
    const {
      pages,
      title = "BOOK TITLE",
      endTitle = "THE END",
      width = 550,
      height = 733
    } = this.props;

    return (
      <div>
        <HTMLFlipBook
          width={width}
          height={height}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={false}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={0}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          <PageCover>{title}</PageCover>
          {pages.map((page, index) => (
            <Page key={index} className="page" number={index}>
              <img src={page} alt="" className="page-image" />
            </Page>
          ))}
          <PageCover>{endTitle}</PageCover>
        </HTMLFlipBook>
      </div>
    );
  }
}

export default FlipBook;
