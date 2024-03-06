import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoXlRegularIcon = (
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
      <path d='M3 28.5h10.875q.703.844 1.594 1.453A2.4 2.4 0 0 1 15 30H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.313a2.17 2.17 0 0 1 1.593.656l5.438 5.438q.656.656.656 1.594v1.593a8 8 0 0 0-1.5.61V15h-5.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 9 12.75V7.5H3q-.656 0-1.078.422Q1.5 8.343 1.5 9v18q0 .657.422 1.078.421.422 1.078.422m13.5-15a1.3 1.3 0 0 0-.234-.328l-5.438-5.438a.7.7 0 0 0-.328-.187v5.203q.047.703.75.75zm9 9.75q0-1.406-.703-2.625a5.16 5.16 0 0 0-1.922-1.922A5.17 5.17 0 0 0 20.25 18q-1.406 0-2.625.703a5.16 5.16 0 0 0-1.922 1.922A5.17 5.17 0 0 0 15 23.25q0 1.407.703 2.625a5.16 5.16 0 0 0 1.922 1.922 5.17 5.17 0 0 0 2.625.703q1.407 0 2.625-.703a5.16 5.16 0 0 0 1.922-1.922 5.17 5.17 0 0 0 .703-2.625m-12 0q0-1.829.89-3.375a6.77 6.77 0 0 1 2.485-2.484 6.8 6.8 0 0 1 3.375-.891q1.782 0 3.375.89a6.77 6.77 0 0 1 2.484 2.485A6.65 6.65 0 0 1 27 23.25a6.65 6.65 0 0 1-.89 3.375 6.77 6.77 0 0 1-2.485 2.484A6.8 6.8 0 0 1 20.25 30a6.8 6.8 0 0 1-3.375-.89 6.77 6.77 0 0 1-2.484-2.485 6.65 6.65 0 0 1-.891-3.375m6.75-1.5q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125m-1.5 4.5q.046-.704.75-.75V24q-.704-.046-.75-.75.046-.704.75-.75h.75q.704.046.75.75v2.25q.704.046.75.75-.046.704-.75.75h-1.5q-.704-.046-.75-.75' />
    </g>
    <defs>
      <clipPath id='8bb7296009de4a2a0a187c31ceb46509__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoXlRegularIcon);
export default ForwardRef;
