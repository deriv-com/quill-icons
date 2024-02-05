import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankXlRegularIcon = (
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
      <path d='M12.375 6.094 23.25 12.28q.704.422.75 1.266 0 .61-.422 1.031a1.4 1.4 0 0 1-1.031.422H1.453q-.61 0-1.031-.422A1.4 1.4 0 0 1 0 13.547q.047-.844.75-1.266l10.875-6.187q.375-.187.75 0m2.016 7.406h8.015L12 7.594 1.594 13.5h8.015a2.7 2.7 0 0 1-.234-1.125q.047-1.125.75-1.875.75-.703 1.875-.75 1.125.047 1.875.75.703.75.75 1.875 0 .609-.234 1.125M12 11.25q-1.03.095-1.125 1.125Q10.97 13.407 12 13.5q1.032-.093 1.125-1.125-.093-1.03-1.125-1.125M3 22.5v-6h1.5v6h3.75v-6h1.5v6h4.5v-6h1.5v6h3.75v-6H21v6q.704.046.75.75-.046.704-.75.75H3q-.703-.046-.75-.75.046-.704.75-.75m-1.125 3h20.25q.704.046.75.75-.046.704-.75.75H1.875q-.703-.046-.75-.75.046-.704.75-.75m-1.125 3h22.5q.704.046.75.75-.046.704-.75.75H.75q-.703-.046-.75-.75.047-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='730d43fa004b137b05740748b8eb8ba9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankXlRegularIcon);
export default ForwardRef;
