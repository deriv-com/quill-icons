import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 6.75v2.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m0 15v2.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25M0 15.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5C.547 16.75 0 16.203 0 15.5m16.25-1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25M2.93 8.43c.468-.47 1.25-.47 1.757 0l1.758 1.797a1.205 1.205 0 0 1 0 1.757 1.205 1.205 0 0 1-1.758 0L2.93 10.227a1.25 1.25 0 0 1 0-1.797m12.343 10.625 1.797 1.758c.47.507.47 1.289 0 1.757a1.25 1.25 0 0 1-1.797 0l-1.757-1.758c-.47-.468-.47-1.289 0-1.757.507-.508 1.289-.508 1.757 0M2.93 22.57v.04a1.25 1.25 0 0 1 0-1.797l1.757-1.758a1.205 1.205 0 0 1 1.758 0c.508.468.508 1.289 0 1.758L4.687 22.57c-.507.508-1.289.508-1.757 0m10.586-12.343 1.757-1.797a1.324 1.324 0 0 1 1.797 0c.47.508.47 1.289 0 1.797l-1.797 1.757c-.468.47-1.25.47-1.757 0-.47-.507-.47-1.289 0-1.757' />
    </g>
    <defs>
      <clipPath id='8899e19ab560138890ed9305a88a6b59__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderLgFillIcon);
export default ForwardRef;
