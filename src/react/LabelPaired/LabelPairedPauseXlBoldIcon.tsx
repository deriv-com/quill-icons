import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseXlBoldIcon = (
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
      <path d='M2.25 11.25v13.5H4.5v-13.5zm-2.25 0A2.25 2.25 0 0 1 2.25 9H4.5c1.219 0 2.25 1.031 2.25 2.25v13.5A2.25 2.25 0 0 1 4.5 27H2.25A2.22 2.22 0 0 1 0 24.75zm10.5 0v13.5h2.25v-13.5zm-2.25 0A2.25 2.25 0 0 1 10.5 9h2.25C13.969 9 15 10.031 15 11.25v13.5A2.25 2.25 0 0 1 12.75 27H10.5a2.22 2.22 0 0 1-2.25-2.25z' />
    </g>
    <defs>
      <clipPath id='8b975a89f47e272d7fcdf611b77c87a2__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseXlBoldIcon);
export default ForwardRef;
