import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 6c.61 0 1.125.516 1.125 1.125V9H18c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 18 11.25h-1.875v14.625A1.11 1.11 0 0 1 15 27c-.656 0-1.125-.469-1.125-1.125V24H12c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h1.875V7.125C13.875 6.515 14.344 6 15 6m9.75 3c.61 0 1.125.516 1.125 1.125v8.625h1.875c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 27.75 21h-1.875v1.875A1.11 1.11 0 0 1 24.75 24c-.656 0-1.125-.469-1.125-1.125V14.25H21.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h1.875v-1.875c0-.61.469-1.125 1.125-1.125m-19.5 6c.61 0 1.125.516 1.125 1.125v8.625H8.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 8.25 27H6.375v1.875A1.11 1.11 0 0 1 5.25 30c-.656 0-1.125-.469-1.125-1.125V20.25H2.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h1.875v-1.875c0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='fc9043a28bb30cc2228453faa66c3540__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcXlBoldIcon);
export default ForwardRef;
