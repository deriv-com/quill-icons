import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownCaptionBoldIcon = (
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
      <path d='m5.602 14.398-4.5-4.5q-.33-.397 0-.796.397-.33.796 0L6 13.203l4.102-4.101q.397-.33.796 0 .33.397 0 .796l-4.5 4.5q-.397.33-.796 0m-4.5-9q-.33-.397 0-.796.397-.33.796 0L6 8.703l4.102-4.101q.397-.33.796 0 .33.397 0 .796l-4.5 4.5q-.397.33-.796 0z' />
    </g>
    <defs>
      <clipPath id='fc5d8ef5969f560b49b2861ef62dbf2e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownCaptionBoldIcon);
export default ForwardRef;
