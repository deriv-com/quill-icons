import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchSmRegularIcon = (
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
      <path d='M10.5 9.438c0-1.696-.93-3.282-2.406-4.157a4.87 4.87 0 0 0-4.813 0A4.81 4.81 0 0 0 .875 9.438c0 1.722.902 3.308 2.406 4.183a4.87 4.87 0 0 0 4.813 0A4.88 4.88 0 0 0 10.5 9.438m-1.121 4.32c-.984.875-2.297 1.367-3.691 1.367A5.683 5.683 0 0 1 0 9.438C0 6.32 2.543 3.75 5.688 3.75c3.117 0 5.687 2.57 5.687 5.688 0 1.421-.52 2.707-1.367 3.718l3.855 3.856a.463.463 0 0 1 0 .629.463.463 0 0 1-.629 0z' />
    </g>
    <defs>
      <clipPath id='bed3bf38bc4f30fdde68178fb9419863__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchSmRegularIcon);
export default ForwardRef;
