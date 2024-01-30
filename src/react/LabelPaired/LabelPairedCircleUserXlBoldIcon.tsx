import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserXlBoldIcon = (
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
      <path d='M19.078 24.75q2.579-2.718 2.672-6.75-.093-4.125-2.86-6.89Q16.126 8.343 12 8.25q-4.125.094-6.89 2.86Q2.342 13.874 2.25 18q.094 4.032 2.719 6.75a5.77 5.77 0 0 1 2.156-2.719Q8.578 21.047 10.5 21h3q1.922.047 3.375 1.031a6.06 6.06 0 0 1 2.203 2.719m-1.922 1.5h.047q-.328-1.313-1.312-2.156-.985-.798-2.391-.844h-3q-1.406.047-2.39.844-.985.843-1.266 2.156 2.25 1.454 5.156 1.5 2.907-.046 5.156-1.5M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m0-12.75q1.079-.047 1.64-.937.47-.937 0-1.875-.561-.891-1.64-.938-1.079.047-1.64.938-.47.937 0 1.874.561.891 1.64.938m-4.125-1.875q.094-2.344 2.063-3.562 2.062-1.125 4.124 0 1.969 1.219 2.063 3.562-.094 2.344-2.062 3.563-2.063 1.125-4.126 0-1.969-1.219-2.062-3.563' />
    </g>
    <defs>
      <clipPath id='50e86777a7e591e0dfe08287ba1b1e81__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserXlBoldIcon);
export default ForwardRef;
