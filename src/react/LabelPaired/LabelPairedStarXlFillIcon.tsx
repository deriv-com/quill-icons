import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarXlFillIcon = (
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
      <path d='m14.86 6.844 3 6.187 6.75 1.031q.89.14 1.218.985.234.891-.375 1.547l-4.875 4.828 1.125 6.844q.14.89-.61 1.453-.75.515-1.546.093L13.5 26.626l-6 3.188q-.843.421-1.594-.094-.702-.563-.61-1.453l1.173-6.844-4.875-4.828q-.657-.656-.375-1.547.28-.844 1.172-.985l6.75-1.03 3-6.188Q12.609 6.046 13.5 6q.937.047 1.36.844' />
    </g>
    <defs>
      <clipPath id='2687d9e1f8bef0b3__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarXlFillIcon);
export default ForwardRef;
