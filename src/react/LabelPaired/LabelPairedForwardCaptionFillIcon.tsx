import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.242 13.836q-.375.281-.82.094-.398-.21-.422-.68v-7.5q.023-.469.422-.68.445-.187.82.094L5.25 8.516v1.968zM6 11.75v-6q.024-.469.422-.68.445-.187.82.094l4.5 3.75A.76.76 0 0 1 12 9.5q0 .351-.258.586l-4.5 3.75q-.375.281-.82.094-.399-.21-.422-.68z' />
    </g>
    <defs>
      <clipPath id='c1fc3e85f40a7431f99096aa891a1809__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionFillIcon);
export default ForwardRef;
