import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletXlRegularIcon = (
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
      <path d='M3.75 7.5h18q.704.046.75.75-.046.703-.75.75h-18a2.45 2.45 0 0 0-1.594.656A2.45 2.45 0 0 0 1.5 11.25v13.5q.047.937.656 1.594.657.61 1.594.656h16.5a2.45 2.45 0 0 0 1.594-.656q.61-.657.656-1.594v-10.5a2.45 2.45 0 0 0-.656-1.594A2.45 2.45 0 0 0 20.25 12h-15q-.703-.047-.75-.75.046-.703.75-.75h15q1.594.046 2.672 1.078Q23.953 12.657 24 14.25v10.5q-.046 1.594-1.078 2.672-1.079 1.031-2.672 1.078H3.75q-1.593-.046-2.672-1.078Q.047 26.343 0 24.75v-13.5q.046-1.593 1.078-2.672Q2.157 7.547 3.75 7.5M18 20.625q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='75b74ff49356edffa013dc017d399e84__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletXlRegularIcon);
export default ForwardRef;
