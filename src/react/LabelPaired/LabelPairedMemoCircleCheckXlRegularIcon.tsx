import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 7.5H3q-.656 0-1.078.422Q1.5 8.343 1.5 9v18q0 .657.422 1.078.421.422 1.078.422h10.875q.703.844 1.594 1.453A2.4 2.4 0 0 1 15 30H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6h12q1.266.047 2.11.89.843.844.89 2.11v6.328a6.2 6.2 0 0 0-1.5.563V9q0-.656-.422-1.078Q15.657 7.5 15 7.5M3 12.75q.046-.703.75-.75h10.5q.703.047.75.75-.047.703-.75.75H3.75q-.703-.047-.75-.75m.75 3.75h9q.703.046.75.75-.047.704-.75.75h-9q-.703-.046-.75-.75.046-.704.75-.75m0 4.5h6q.703.046.75.75-.047.704-.75.75h-6q-.703-.046-.75-.75.046-.704.75-.75m16.5 7.5q1.407 0 2.625-.703a5.16 5.16 0 0 0 1.922-1.922 5.17 5.17 0 0 0 .703-2.625q0-1.406-.703-2.625a5.16 5.16 0 0 0-1.922-1.922A5.17 5.17 0 0 0 20.25 18q-1.406 0-2.625.703a5.16 5.16 0 0 0-1.922 1.922A5.17 5.17 0 0 0 15 23.25q0 1.407.703 2.625a5.16 5.16 0 0 0 1.922 1.922 5.17 5.17 0 0 0 2.625.703m0-12q1.829 0 3.375.89a6.77 6.77 0 0 1 2.484 2.485A6.8 6.8 0 0 1 27 23.25a6.8 6.8 0 0 1-.89 3.375 6.77 6.77 0 0 1-2.485 2.484A6.65 6.65 0 0 1 20.25 30a6.65 6.65 0 0 1-3.375-.89 6.77 6.77 0 0 1-2.484-2.485 6.8 6.8 0 0 1-.891-3.375q0-1.78.89-3.375a6.77 6.77 0 0 1 2.485-2.484 6.65 6.65 0 0 1 3.375-.891m2.11 4.734q.515-.468 1.03 0 .47.516 0 1.032l-3.374 3.375q-.516.468-1.032 0l-1.875-1.875q-.468-.516 0-1.032.516-.468 1.032 0l1.359 1.313z' />
    </g>
    <defs>
      <clipPath id='b22a73198d84ca8c4d06cccf613f378b__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckXlRegularIcon);
export default ForwardRef;
