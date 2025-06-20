import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 4c.875 0 1.688.5 2.156 1.25.438.781.438 1.75 0 2.5C6.188 8.531 5.375 9 4.5 9a2.53 2.53 0 0 1-2.187-1.25c-.438-.75-.438-1.719 0-2.5C2.78 4.5 3.593 4 4.5 4M16 4c.875 0 1.688.5 2.156 1.25.438.781.438 1.75 0 2.5C17.688 8.531 16.875 9 16 9a2.53 2.53 0 0 1-2.187-1.25c-.438-.75-.438-1.719 0-2.5C14.28 4.5 15.093 4 16 4M0 13.344C0 11.5 1.469 10 3.313 10h1.343c.5 0 .969.125 1.407.313C6 10.53 6 10.78 6 11c0 1.219.5 2.281 1.344 3H.656A.64.64 0 0 1 0 13.344M12.656 14h-.031c.844-.719 1.344-1.781 1.344-3 0-.219 0-.469-.031-.687A3.3 3.3 0 0 1 15.312 10h1.344C18.5 10 20 11.5 20 13.344c0 .375-.312.656-.687.656zM7 11c0-1.062.563-2.031 1.5-2.594.906-.531 2.063-.531 3 0C12.406 8.97 13 9.937 13 11c0 1.094-.594 2.063-1.5 2.625-.937.531-2.094.531-3 0A3.03 3.03 0 0 1 7 11m-3 8.188C4 16.875 5.844 15 8.156 15h3.656A4.19 4.19 0 0 1 16 19.188c0 .437-.375.812-.844.812H4.813A.807.807 0 0 1 4 19.188' />
    </g>
    <defs>
      <clipPath id='b7d051b0cd32679adf606be5e7befdf3__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersMdFillIcon);
export default ForwardRef;
