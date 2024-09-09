import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.477 7.004-8.75 8.75a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l8.75-8.75a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23M3.75 7.25c0 .629-.355 1.203-.875 1.531-.547.301-1.23.301-1.75 0A1.78 1.78 0 0 1 .25 7.25c0-.602.328-1.176.875-1.504.52-.3 1.203-.3 1.75 0 .52.328.875.902.875 1.504m7 7c0 .629-.355 1.203-.875 1.531-.547.301-1.23.301-1.75 0a1.78 1.78 0 0 1-.875-1.531c0-.602.328-1.176.875-1.504.52-.3 1.203-.3 1.75 0 .52.328.875.902.875 1.504' />
    </g>
    <defs>
      <clipPath id='238ffa676d95a4a6105b3eb9e52b4ebe__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentSmFillIcon);
export default ForwardRef;
