import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMinusLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.125 15.5c0 .547-.43.938-.937.938H1.813c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937h14.375a.95.95 0 0 1 .937.937' />
    </g>
    <defs>
      <clipPath id='3f93a1f826c0cd5333fdfafc9b6a7843__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusLgBoldIcon);
export default ForwardRef;
