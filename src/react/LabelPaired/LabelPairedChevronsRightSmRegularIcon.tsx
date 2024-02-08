import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightSmRegularIcon = (
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
      <path d='M2.05 16.3q-.3.274-.6 0-.274-.3 0-.6l4.921-4.95L1.45 5.8q-.273-.3 0-.6.3-.274.602 0l5.25 5.25q.273.3 0 .6zm5.25 0q-.3.274-.6 0-.274-.3 0-.6l4.921-4.95L6.7 5.8q-.273-.3 0-.6.3-.274.602 0l5.25 5.25q.273.3 0 .6z' />
    </g>
    <defs>
      <clipPath id='b730c45a273bc5553c13f65d9ed3504b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightSmRegularIcon);
export default ForwardRef;
