import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeLgFillIcon = (
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
      <path d='M1.875 8h16.25C19.141 8 20 8.86 20 9.875c0 .625-.312 1.172-.781 1.523l-8.477 6.368a1.23 1.23 0 0 1-1.523 0L.742 11.398A1.87 1.87 0 0 1 0 9.875C0 8.859.82 8 1.875 8M0 12.375l8.477 6.406a2.52 2.52 0 0 0 3.007 0L20 12.375V20.5c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 0 20.5z' />
    </g>
    <defs>
      <clipPath id='99307ac6280da338e29a26e118570195__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeLgFillIcon);
export default ForwardRef;
