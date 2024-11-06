import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M29.156 6.188c.75.375 1.032 1.265.657 2.015l-4.5 9c-.235.516-.75.797-1.313.797h-6.61l-5.578 11.203c-.374.75-1.265 1.031-2.015.656l-9-4.5c-.75-.375-1.031-1.265-.656-2.015s1.265-1.032 2.015-.657l7.64 3.844 5.345-10.687c.234-.516.75-.844 1.359-.844h6.563l4.078-8.156c.375-.75 1.265-1.032 2.015-.657' />
    </g>
    <defs>
      <clipPath id='9c2347ed513d5d6d87722d72bf0192a5__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpXlFillIcon);
export default ForwardRef;
