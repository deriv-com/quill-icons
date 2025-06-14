import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18 4a.76.76 0 0 1 .75.75v14.5A.74.74 0 0 1 18 20a.72.72 0 0 1-.75-.75V4.75A.74.74 0 0 1 18 4m-4 3a.76.76 0 0 1 .75.75v11.5A.74.74 0 0 1 14 20a.72.72 0 0 1-.75-.75V7.75A.74.74 0 0 1 14 7m-4 3a.76.76 0 0 1 .75.75v8.5A.74.74 0 0 1 10 20a.72.72 0 0 1-.75-.75v-8.5A.74.74 0 0 1 10 10m-4 3a.76.76 0 0 1 .75.75v5.5A.74.74 0 0 1 6 20a.72.72 0 0 1-.75-.75v-5.5A.74.74 0 0 1 6 13m-4 3a.76.76 0 0 1 .75.75v2.5A.74.74 0 0 1 2 20a.72.72 0 0 1-.75-.75v-2.5A.74.74 0 0 1 2 16' />
    </g>
    <defs>
      <clipPath id='f11e68c9df54761f5d357a391d26852d__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalMdBoldIcon);
export default ForwardRef;
