import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightSmFillIcon = (
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
      <path d='M7 3.75c.355 0 .656.3.656.656v1.75c0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.657v-1.75c0-.355.273-.656.656-.656m0 10.938c.355 0 .656.3.656.656v1.75c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-1.75c0-.356.273-.656.656-.656m6.344-3.282h-1.75a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h1.75c.355 0 .656.3.656.656 0 .383-.3.656-.656.656M3.063 10.75c0 .383-.301.656-.657.656H.656A.63.63 0 0 1 0 10.75c0-.355.273-.656.656-.656h1.75c.356 0 .656.3.656.656m8.886-4.02-1.258 1.258c-.246.246-.656.246-.93 0-.245-.273-.245-.683 0-.93l1.259-1.257c.246-.246.656-.246.93 0 .245.273.245.683 0 .93m-7.738 6.81c.246.273.246.683 0 .929l-1.258 1.23a.6.6 0 0 1-.902 0 .6.6 0 0 1 0-.902l1.23-1.258c.246-.246.656-.246.93 0m6.809 2.16-1.258-1.231c-.246-.246-.246-.656 0-.93.273-.246.683-.246.93 0l1.257 1.258a.644.644 0 0 1 0 .902c-.273.274-.683.274-.93 0M4.21 7.987c-.272.246-.683.246-.929 0L2.051 6.73c-.274-.246-.274-.656 0-.93a.644.644 0 0 1 .902 0L4.211 7.06c.246.246.246.656 0 .93M7 13.813a3.01 3.01 0 0 1-2.652-1.532 2.94 2.94 0 0 1 0-3.062A3.07 3.07 0 0 1 7 7.688c1.094 0 2.078.601 2.625 1.53a2.94 2.94 0 0 1 0 3.063A3 3 0 0 1 7 13.812' />
    </g>
    <defs>
      <clipPath id='36c39bd076bd19c0da6482f1cc0b78eb__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightSmFillIcon);
export default ForwardRef;
