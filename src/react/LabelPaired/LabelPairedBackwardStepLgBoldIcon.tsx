import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 8.938v4.14l6.875-4.844A1.06 1.06 0 0 1 10.914 8c.664 0 1.211.547 1.211 1.21v12.618c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.04-.703-.195L3.375 17.96v4.102c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V8.937c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938m0 6.757L10.25 20.5v-9.96l-6.875 4.804z' />
    </g>
    <defs>
      <clipPath id='69be7b7b782723858f2710b44196270f__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepLgBoldIcon);
export default ForwardRef;
