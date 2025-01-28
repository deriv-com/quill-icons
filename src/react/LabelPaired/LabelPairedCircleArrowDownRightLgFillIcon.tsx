import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownRightLgFillIcon = (
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
      <path d='M10 5.5c3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5M7.5 19.875h5.898c.547 0 .938-.39.938-.937v-6.25a.925.925 0 0 0-.938-.938.95.95 0 0 0-.937.938v4.023l-5.273-5.273a.856.856 0 0 0-1.29 0 .856.856 0 0 0 0 1.289L11.172 18H7.5a.925.925 0 0 0-.937.938c0 .546.39.937.937.937' />
    </g>
    <defs>
      <clipPath id='6d4a944bf7012eae13e07a03858df0d9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownRightLgFillIcon);
export default ForwardRef;
