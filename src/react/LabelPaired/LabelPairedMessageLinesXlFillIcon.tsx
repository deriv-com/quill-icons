import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3v13.5c0 1.688-1.36 3-3 3h-6.516l-5.812 4.36c-.235.187-.516.187-.797.093-.234-.14-.375-.375-.375-.703V25.5H3c-1.687 0-3-1.312-3-3zm7.125 3.75A1.11 1.11 0 0 0 6 13.875C6 14.531 6.469 15 7.125 15h9.75A1.11 1.11 0 0 0 18 13.875a1.14 1.14 0 0 0-1.125-1.125zm0 4.5A1.11 1.11 0 0 0 6 18.375c0 .656.469 1.125 1.125 1.125h5.25a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='137450b222825efb9e038b3e3b09fb77__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesXlFillIcon);
export default ForwardRef;
