import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m2.203 17.203 9-9q.797-.656 1.594 0 .656.797 0 1.594L4.594 18l8.203 8.203q.656.797 0 1.594-.797.656-1.594 0l-9-9q-.655-.797 0-1.594m18-9q.797-.656 1.594 0 .656.797 0 1.594L13.594 18l8.203 8.203q.656.797 0 1.594-.797.656-1.594 0l-9-9q-.655-.797 0-1.594z' />
    </g>
    <defs>
      <clipPath id='2b53c6e9ad52b090__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftXlBoldIcon);
export default ForwardRef;
