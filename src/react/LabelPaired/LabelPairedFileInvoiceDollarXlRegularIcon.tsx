import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarXlRegularIcon = (
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
      <path d='M16.5 27V15h-5.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 9 12.75V7.5H3q-.656 0-1.078.422Q1.5 8.343 1.5 9v18q0 .657.422 1.078.421.422 1.078.422h12q.657 0 1.078-.422.422-.421.422-1.078m0-13.5a1.3 1.3 0 0 0-.234-.328l-5.438-5.438a.7.7 0 0 0-.328-.187v5.203q.047.703.75.75zM0 9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.313a2.17 2.17 0 0 1 1.593.656l5.438 5.438q.656.656.656 1.594V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27zm3 .75q.046-.703.75-.75h3q.704.047.75.75-.046.703-.75.75h-3q-.703-.047-.75-.75m0 3q.046-.703.75-.75h3q.704.047.75.75-.046.703-.75.75h-3q-.703-.047-.75-.75m6.75 4.688v.609q.609.093 1.125.234.656.188.563.89-.236.657-.938.563A9 9 0 0 0 9 19.5q-.656 0-1.172.234-.375.235-.328.47-.047.093.328.327.47.235 1.36.422l.046.047a9 9 0 0 1 1.688.563q.937.469 1.078 1.687-.093 1.36-1.125 1.828a3.4 3.4 0 0 1-1.125.375v.656q-.047.657-.75.75-.703-.093-.75-.75v-.703q-.75-.14-1.406-.328a2 2 0 0 1-.235-.094h-.046q-.657-.281-.516-.937.235-.657.937-.516.141.048.329.094.938.329 1.734.375.655 0 1.125-.234.375-.188.328-.47.047-.187-.328-.421-.47-.234-1.36-.469h-.14a7 7 0 0 1-1.547-.562q-.984-.422-1.125-1.64.14-1.36 1.172-1.782a3.4 3.4 0 0 1 1.078-.375v-.61q.095-.702.75-.75.703.048.75.75' />
    </g>
    <defs>
      <clipPath id='069328ae5afc1b3c__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarXlRegularIcon);
export default ForwardRef;
