import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateXlRegularIcon = (
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
      <path d='M1.5 9c0-1.64 1.313-3 3-3h9c1.64 0 3 1.36 3 3v6.938c-.14.046-.234.093-.328.14A2.56 2.56 0 0 0 15 15.141V9c0-.797-.703-1.5-1.5-1.5H12v.75c0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 6 8.25V7.5H4.5C3.656 7.5 3 8.203 3 9v18c0 .844.656 1.5 1.5 1.5h9.328c.328.375.703.797 1.125 1.125a3.1 3.1 0 0 1-1.5.375H4.5c-1.687 0-3-1.312-3-3zm6-1.5v.75h3V7.5zm6 9.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v1.781a6.62 6.62 0 0 1 5.25-2.531c2.813 0 5.25 1.781 6.234 4.219.141.422-.047.843-.422.984-.375.188-.796 0-.984-.422A5.17 5.17 0 0 0 20.25 18a5.24 5.24 0 0 0-4.312 2.25H18c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-3.75a.74.74 0 0 1-.75-.75zm.469 8.531a.73.73 0 0 1 .422-.937c.375-.188.797 0 .984.375.75 1.968 2.672 3.281 4.875 3.281 1.781 0 3.328-.89 4.266-2.25H22.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h3.75c.375 0 .75.375.75.75v3.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-1.734A6.72 6.72 0 0 1 20.25 30c-2.86 0-5.297-1.734-6.281-4.219' />
    </g>
    <defs>
      <clipPath id='2375f144068f8662514739d63bcd7d79__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateXlRegularIcon);
export default ForwardRef;
