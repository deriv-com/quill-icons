import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.164 7.14q.136.63.219 1.45.055.847.082 1.504v1.34q-.027.656-.082 1.476a13 13 0 0 1-.219 1.477q-.328 1.011-1.34 1.312-.656.136-2.023.219-1.368.054-2.543.082H6.742q-1.176-.027-2.543-.082-1.367-.082-2.023-.219-1.012-.3-1.34-1.312-.137-.63-.219-1.477a60 60 0 0 1-.082-1.476v-1.34q.028-.657.082-1.504.083-.82.219-1.45.328-1.01 1.34-1.34.656-.135 2.023-.218 1.368-.054 2.543-.082h2.516q1.176.027 2.543.082 1.367.082 2.023.219 1.012.328 1.34 1.34M6.47 12.993l3.91-2.242-3.91-2.215z' />
    </g>
    <defs>
      <clipPath id='02c60a040069c1868633c43f995ea45f__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeSmIcon);
export default ForwardRef;
