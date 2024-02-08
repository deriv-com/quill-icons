import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftSmRegularIcon = (
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
      <path d='M1.45 10.45 6.7 5.2q.3-.274.6 0 .274.3 0 .6L2.38 10.75 7.3 15.7q.273.3 0 .6-.3.274-.602 0l-5.25-5.25q-.273-.3 0-.6m10.5-5.25q.3-.274.6 0 .274.3 0 .6L7.63 10.75l4.922 4.95q.273.3 0 .6-.3.274-.602 0L6.7 11.05q-.273-.3 0-.6z' />
    </g>
    <defs>
      <clipPath id='53594b3c81188284b1aee5b8908d4dfe__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftSmRegularIcon);
export default ForwardRef;
