import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 6.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V8h5V6.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V8h1.875c1.016 0 1.875.86 1.875 1.875v1.875H.25V9.875C.25 8.859 1.07 8 2.125 8H4zM17.75 13v10.625c0 1.055-.86 1.875-1.875 1.875H2.125A1.85 1.85 0 0 1 .25 23.625V13zm-12.5 3.75c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25M14 23c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25m-6.25-6.25c0 .547.39.938.938.938h5.624c.508 0 .938-.391.938-.938a.95.95 0 0 0-.937-.937H8.686a.925.925 0 0 0-.937.937m1.563 4.063H3.686a.925.925 0 0 0-.937.937c0 .547.39.938.938.938h5.624c.508 0 .938-.391.938-.938a.95.95 0 0 0-.937-.937' />
    </g>
    <defs>
      <clipPath id='e786c044eba97c1bf36e96dfed42714d__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeLgFillIcon);
export default ForwardRef;
