import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftLgFillIcon = (
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
      <path d='m17.36 11.398-3.75 3.75a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l1.601-1.641H1.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h11.953l-1.601-1.602a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l3.75 3.75c.508.468.508 1.289 0 1.757M4.351 25.148l-3.75-3.75a1.205 1.205 0 0 1 0-1.757l3.75-3.75a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757L4.508 19.25H16.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H4.508l1.601 1.64c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0' />
    </g>
    <defs>
      <clipPath id='434ace4c3f09e704047a582a5bc830d8__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftLgFillIcon);
export default ForwardRef;
