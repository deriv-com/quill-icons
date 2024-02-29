import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpXlBoldIcon = (
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
      <path d='m12.797 8.203 9 9q.656.797 0 1.594-.797.656-1.594 0L12 10.594l-8.203 8.203q-.797.656-1.594 0-.655-.797 0-1.594l9-9q.797-.656 1.594 0m9 18q.656.797 0 1.594-.797.656-1.594 0L12 19.594l-8.203 8.203q-.797.656-1.594 0-.655-.797 0-1.594l9-9q.797-.655 1.594 0z' />
    </g>
    <defs>
      <clipPath id='0db731cf6d3406c0e7163cf2b95cc231__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpXlBoldIcon);
export default ForwardRef;
