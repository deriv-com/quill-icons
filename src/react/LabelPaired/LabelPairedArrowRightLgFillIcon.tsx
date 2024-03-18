import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m17.36 16.398-6.25 6.25a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l4.101-4.141H1.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h11.953l-4.101-4.102a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l6.25 6.25c.508.468.508 1.289 0 1.757' />
    </g>
    <defs>
      <clipPath id='40e01e8812f2af146372d01ade18a5d4__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightLgFillIcon);
export default ForwardRef;
