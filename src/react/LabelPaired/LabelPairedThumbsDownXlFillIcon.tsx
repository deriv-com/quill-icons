import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.672 28.5c-1.219.234-2.39-.562-2.672-1.781l-.094-.563c-.281-1.547-1.172-2.953-2.39-3.937l-.328-.282C8.108 21.095 7.5 19.829 7.5 18.423v-5.203c0-1.5.75-2.906 1.969-3.75l1.828-1.172c.75-.516 1.594-.797 2.484-.797h4.594c1.219 0 2.25 1.031 2.25 2.25 0 .188-.047.375-.094.516.938.28 1.594 1.125 1.594 2.109 0 .469-.14.844-.328 1.172 1.031.234 1.828 1.125 1.828 2.203 0 .75-.328 1.36-.844 1.781.703.375 1.219 1.125 1.219 1.969a2.25 2.25 0 0 1-2.25 2.25H15c.61 1.125 1.078 2.297 1.313 3.563l.14.515c.235 1.219-.562 2.39-1.781 2.672M1.5 24A1.48 1.48 0 0 1 0 22.5V12c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5v10.5c0 .844-.703 1.5-1.5 1.5z' />
    </g>
    <defs>
      <clipPath id='6dfeea06ae6c3bf518dbc04f96811358__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownXlFillIcon);
export default ForwardRef;
