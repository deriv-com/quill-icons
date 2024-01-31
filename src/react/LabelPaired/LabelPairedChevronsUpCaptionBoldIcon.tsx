import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.398 4.602 4.5 4.5q.33.397 0 .796-.397.33-.796 0L6 5.797 1.898 9.898q-.397.33-.796 0-.33-.397 0-.796l4.5-4.5q.397-.33.796 0m4.5 9q.33.397 0 .796-.397.33-.796 0L6 10.297l-4.102 4.101q-.397.33-.796 0-.33-.397 0-.796l4.5-4.5q.397-.33.796 0z' />
    </g>
    <defs>
      <clipPath id='a28646a888505e1d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpCaptionBoldIcon);
export default ForwardRef;
