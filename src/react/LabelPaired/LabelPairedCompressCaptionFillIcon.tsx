import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressCaptionFillIcon = (
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
      <path d='M4 5v2.25c0 .422-.352.75-.75.75H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h1.5V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-3 6h2.25c.398 0 .75.352.75.75V14c0 .422-.352.75-.75.75A.74.74 0 0 1 2.5 14v-1.5H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75m7.5-6v1.5H10c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H7.75A.74.74 0 0 1 7 7.25V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-.75 6H10c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H8.5V14c0 .422-.352.75-.75.75A.74.74 0 0 1 7 14v-2.25c0-.398.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='1c96d09efa8dc9f9ba70fb51a69291a3__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressCaptionFillIcon);
export default ForwardRef;
