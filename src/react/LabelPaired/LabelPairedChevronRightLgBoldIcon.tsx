import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.164 14.836q.548.664 0 1.328l-7.5 7.5q-.664.547-1.328 0-.547-.664 0-1.328l6.836-6.836-6.836-6.836q-.547-.664 0-1.328.664-.548 1.328 0z' />
    </g>
    <defs>
      <clipPath id='a6b89187f055a1bb5ee743fe11a23a1d__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightLgBoldIcon);
export default ForwardRef;
