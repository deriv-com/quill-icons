import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsLgFillIcon = (
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
      <path d='M.25 9.25C.25 8.586.797 8 1.5 8h15c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-15C.797 10.5.25 9.953.25 9.25m0 6.25c0-.664.547-1.25 1.25-1.25h15c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-15c-.703 0-1.25-.547-1.25-1.25m17.5 6.25c0 .703-.586 1.25-1.25 1.25h-15c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h15c.664 0 1.25.586 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='a30e6540c7a5d172c203cb5b9ad8a864__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsLgFillIcon);
export default ForwardRef;
