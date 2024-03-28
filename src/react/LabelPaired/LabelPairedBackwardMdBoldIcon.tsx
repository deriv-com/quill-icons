import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 6.938v3.125l5.5-3.876A.85.85 0 0 1 15.031 6c.531 0 .969.438.969.969v10.093a.94.94 0 0 1-.937.938c-.22 0-.407-.031-.563-.156l-5.531-3.875v3.094A.92.92 0 0 1 8.03 18c-.187 0-.375-.062-.531-.156L.281 12.625A.79.79 0 0 1 0 12a.77.77 0 0 1 .281-.594L7.5 6.187A.87.87 0 0 1 8.063 6c.5 0 .937.438.937.938m0 4.937v.281L14.5 16V8.031zM2 12l5.5 3.969V8.063z' />
    </g>
    <defs>
      <clipPath id='f7df6dfc82be6a4cf56e855b57747987__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardMdBoldIcon);
export default ForwardRef;
