import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownLgFillIcon = (
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
      <path d='M10 5.5c3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5M4.96 16.477l4.376 4.375c.351.39.937.39 1.328 0L15 16.477a.856.856 0 0 0 0-1.29.856.856 0 0 0-1.29 0l-2.773 2.774v-7.148A.95.95 0 0 0 10 9.875a.925.925 0 0 0-.937.938l-.04 7.148-2.773-2.773a.856.856 0 0 0-1.29 0 .856.856 0 0 0 0 1.289' />
    </g>
    <defs>
      <clipPath id='d661c03e931f19ed640780740aab6258__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownLgFillIcon);
export default ForwardRef;
