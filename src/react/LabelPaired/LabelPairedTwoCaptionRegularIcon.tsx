import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.719 5a2.6 2.6 0 0 0-1.805.75l-.656.633q-.258.234-.516 0-.234-.258 0-.516l.633-.656a3.37 3.37 0 0 1 2.344-.961q1.383.024 2.32.96.915.915.961 2.298-.024 1.406-1.031 2.367L1.586 14h5.789q.352.023.375.375-.023.352-.375.375H.625q-.258 0-.352-.234a.42.42 0 0 1 .094-.422l5.086-4.758q.774-.75.797-1.828a2.5 2.5 0 0 0-.75-1.781Q4.797 5.023 3.719 5' />
    </g>
    <defs>
      <clipPath id='2006dca298dd3c94886f47e49847570c__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoCaptionRegularIcon);
export default ForwardRef;
