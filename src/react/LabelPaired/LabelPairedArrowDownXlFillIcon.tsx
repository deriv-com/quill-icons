import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.922 28.078-7.5-7.5a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L7.5 23.392V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v14.39l4.922-4.921a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11l-7.5 7.5c-.563.608-1.548.608-2.11 0' />
    </g>
    <defs>
      <clipPath id='aa9cb2820dc8378342dafe8d2e79cbdb__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownXlFillIcon);
export default ForwardRef;
