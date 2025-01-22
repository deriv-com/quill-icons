import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassMinusSmRegularIcon = (
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
      <path d='M5.688 4.625a4.88 4.88 0 0 0-4.184 2.406 4.87 4.87 0 0 0 0 4.813 4.82 4.82 0 0 0 4.184 2.406 4.81 4.81 0 0 0 4.156-2.406 4.87 4.87 0 0 0 0-4.813c-.875-1.476-2.461-2.406-4.156-2.406m0 10.5A5.683 5.683 0 0 1 0 9.438C0 6.32 2.543 3.75 5.688 3.75c3.117 0 5.687 2.57 5.687 5.688 0 1.421-.52 2.707-1.367 3.718l3.855 3.856a.463.463 0 0 1 0 .629.463.463 0 0 1-.629 0L9.38 13.758c-.984.875-2.297 1.367-3.691 1.367M3.063 9h5.25a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-5.25a.43.43 0 0 1-.438-.437A.45.45 0 0 1 3.063 9' />
    </g>
    <defs>
      <clipPath id='1040c7318b4d9fb874b6467e87407096__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassMinusSmRegularIcon);
export default ForwardRef;
