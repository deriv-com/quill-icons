import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.86 9.188 2.952 20.25h9.797v-7.125c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v7.125h1.875c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H15v4.875a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125V22.5H1.125c-.422 0-.797-.187-.984-.516a1.19 1.19 0 0 1-.047-1.125l6.75-12.75c.328-.515.984-.75 1.547-.468.515.28.75.984.468 1.547' />
    </g>
    <defs>
      <clipPath id='a48554efb00ef5b42c93baa6b9211bdb__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourXlBoldIcon);
export default ForwardRef;
