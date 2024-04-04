import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 4.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75V5h3v-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75V5h1.125c.61 0 1.125.516 1.125 1.125V7.25H.25V6.125C.25 5.515.742 5 1.375 5H2.5zM10.75 8v6.375c0 .633-.516 1.125-1.125 1.125h-8.25A1.11 1.11 0 0 1 .25 14.375V8zm-7.5 2.25a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M8.5 14c.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75m-3.75-3.75c0 .328.234.563.563.563h3.375a.555.555 0 0 0 .562-.563.57.57 0 0 0-.562-.562H5.312a.555.555 0 0 0-.562.562m.938 2.438H2.313a.555.555 0 0 0-.563.562c0 .328.234.563.563.563h3.375a.555.555 0 0 0 .562-.563.57.57 0 0 0-.562-.562' />
    </g>
    <defs>
      <clipPath id='819bb948f750b796edc7a5a115f98dd7__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeCaptionFillIcon);
export default ForwardRef;
