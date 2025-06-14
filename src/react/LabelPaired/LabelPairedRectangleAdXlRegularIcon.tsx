import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9c-.844 0-1.5.703-1.5 1.5v15c0 .844.656 1.5 1.5 1.5h21c.797 0 1.5-.656 1.5-1.5v-15c0-.797-.703-1.5-1.5-1.5zm-3 1.5c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm10.031 3.469 3.375 7.5c.188.375 0 .797-.375.984-.375.188-.797 0-.984-.375L11.578 21H7.125l-.469 1.078c-.187.375-.61.563-.984.375-.375-.187-.563-.61-.375-.984l3.375-7.5a.705.705 0 0 1 .656-.469c.328 0 .563.188.703.469m-.656 2.11L7.828 19.5h3.047zm8.25 1.171a1.89 1.89 0 0 0-1.64.938c-.329.609-.329 1.312 0 1.875.328.609.937.937 1.64.937.656 0 1.266-.328 1.594-.937.328-.563.328-1.266 0-1.875-.328-.563-.938-.938-1.594-.938m1.875-.89v-2.11c0-.375.328-.75.75-.75.375 0 .75.375.75.75v7.5c0 .422-.375.75-.75.75a.76.76 0 0 1-.75-.562 3.27 3.27 0 0 1-1.875.562 3.36 3.36 0 0 1-3.375-3.375c0-1.828 1.5-3.375 3.375-3.375.656 0 1.313.234 1.875.61' />
    </g>
    <defs>
      <clipPath id='48822b2661ae3acc735b2649d8643c9e__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdXlRegularIcon);
export default ForwardRef;
