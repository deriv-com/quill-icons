import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 8.766C1.64 8.063 2.25 7.5 3 7.5h9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H4.219l-.938 5.25h5.344A6.38 6.38 0 0 1 15 22.125 6.35 6.35 0 0 1 8.625 28.5H4.688a4.91 4.91 0 0 1-4.36-2.672l-.187-.375c-.375-.75-.094-1.64.656-2.015s1.64-.094 2.015.656l.188.375A1.87 1.87 0 0 0 4.688 25.5h3.937C10.453 25.5 12 24 12 22.125c0-1.828-1.547-3.375-3.375-3.375H1.5c-.469 0-.89-.187-1.172-.516-.281-.328-.422-.797-.328-1.218z' />
    </g>
    <defs>
      <clipPath id='bff09a1723a0f1117b0819cdbff99603__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveXlFillIcon);
export default ForwardRef;
