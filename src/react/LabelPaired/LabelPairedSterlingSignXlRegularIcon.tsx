import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignXlRegularIcon = (
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
      <path d='M3.75 13.125V18h7.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.703A18.7 18.7 0 0 1 1.97 27H14.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75a.82.82 0 0 1-.656-.328.72.72 0 0 1 0-.75l.047-.094A16.8 16.8 0 0 0 2.203 19.5H.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.5v-4.875A5.61 5.61 0 0 1 7.875 7.5h.328c.61 0 1.172.14 1.781.328l3.75 1.219c.375.14.563.562.47.984-.142.375-.563.563-.985.469l-3.75-1.266A3.8 3.8 0 0 0 8.203 9h-.328a4.13 4.13 0 0 0-4.125 4.125' />
    </g>
    <defs>
      <clipPath id='b2ddb6ef1c9ec73424651fa301d53185__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignXlRegularIcon);
export default ForwardRef;
