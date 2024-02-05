import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightXlBoldIcon = (
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
      <path d='M21.797 17.203q.656.797 0 1.594l-9 9q-.797.656-1.594 0-.655-.797 0-1.594L19.406 18l-8.203-8.203q-.655-.797 0-1.594.797-.656 1.594 0zm-18-9 9 9q.656.797 0 1.594l-9 9q-.797.656-1.594 0-.655-.797 0-1.594L10.406 18 2.203 9.797q-.655-.797 0-1.594.797-.656 1.594 0' />
    </g>
    <defs>
      <clipPath id='6514f3f1825c925a098e5f16e31dc0c2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightXlBoldIcon);
export default ForwardRef;
