import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightSmBoldIcon = (
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
      <path d='M12.715 10.285q.383.465 0 .93l-5.25 5.25q-.465.382-.93 0-.383-.465 0-.93l4.785-4.785-4.785-4.785q-.383-.465 0-.93.465-.382.93 0zm-10.5-5.25 5.25 5.25q.383.465 0 .93l-5.25 5.25q-.465.382-.93 0-.383-.465 0-.93L6.07 10.75 1.285 5.965q-.382-.465 0-.93.465-.382.93 0' />
    </g>
    <defs>
      <clipPath id='0e22f08fc337dd1108073718932e3c72__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightSmBoldIcon);
export default ForwardRef;
