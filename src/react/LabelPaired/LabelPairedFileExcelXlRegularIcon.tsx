import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelXlRegularIcon = (
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
      <path d='M15 28.5q.657 0 1.078-.422.422-.421.422-1.078V15h-5.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 9 12.75V7.5H3q-.656 0-1.078.422Q1.5 8.343 1.5 9v18q0 .657.422 1.078.421.422 1.078.422zm-3.75-15h5.25a1.3 1.3 0 0 0-.234-.328l-5.438-5.438a.7.7 0 0 0-.328-.187v5.203q.047.703.75.75M3 6h7.313a2.17 2.17 0 0 1 1.593.656l5.438 5.438q.656.656.656 1.594V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6m3.984 11.578L9 20.438l2.016-2.86q.421-.516 1.03-.187.517.421.188 1.03L9.938 21.75l2.296 3.328q.33.61-.187 1.031-.61.33-1.031-.187L9 23.062l-2.016 2.86q-.421.516-1.03.187-.517-.421-.188-1.03l2.343-3.329-2.343-3.328q-.33-.61.187-1.031.61-.33 1.031.187' />
    </g>
    <defs>
      <clipPath id='bb2414f33409344e50b655fdf63f9653__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelXlRegularIcon);
export default ForwardRef;
