import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCirclePlusSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m-.656-4.594c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656v-1.75h1.75a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656h-1.75v-1.75c0-.356-.3-.656-.656-.656-.383 0-.656.3-.656.656v1.75h-1.75c-.383 0-.657.3-.657.656 0 .383.274.656.657.656h1.75z' />
    </g>
    <defs>
      <clipPath id='82043e0d86ae74cd4875b1e45cf1f76a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCirclePlusSmFillIcon);
export default ForwardRef;
