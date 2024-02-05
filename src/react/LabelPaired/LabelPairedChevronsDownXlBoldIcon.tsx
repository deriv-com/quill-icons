import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownXlBoldIcon = (
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
      <path d='m11.203 27.797-9-9q-.655-.797 0-1.594.797-.655 1.594 0L12 25.406l8.203-8.203q.797-.655 1.594 0 .656.797 0 1.594l-9 9q-.797.656-1.594 0m-9-18q-.655-.797 0-1.594.797-.656 1.594 0L12 16.406l8.203-8.203q.797-.656 1.594 0 .656.797 0 1.594l-9 9q-.797.656-1.594 0z' />
    </g>
    <defs>
      <clipPath id='f97476c4e684f2bbb0f298af281ceefe__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownXlBoldIcon);
export default ForwardRef;
