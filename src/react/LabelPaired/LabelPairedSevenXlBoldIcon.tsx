import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.625C0 8.015.469 7.5 1.125 7.5h12.75c.375 0 .75.234.938.61.234.328.234.75 0 1.124l-11.25 18.75a1.13 1.13 0 0 1-1.547.375c-.516-.328-.703-1.03-.375-1.547L11.859 9.75H1.125C.469 9.75 0 9.281 0 8.625' />
    </g>
    <defs>
      <clipPath id='4392c8c35bf87c06117c82a8f84a5053__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenXlBoldIcon);
export default ForwardRef;
