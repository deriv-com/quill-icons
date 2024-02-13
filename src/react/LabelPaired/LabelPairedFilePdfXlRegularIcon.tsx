import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfXlRegularIcon = (
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
      <path d='M3 28.5h1.5V30H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.313a2.17 2.17 0 0 1 1.593.656l5.438 5.438q.656.656.656 1.594V19.5h-1.5V15h-5.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 9 12.75V7.5H3q-.656 0-1.078.422Q1.5 8.343 1.5 9v18q0 .657.422 1.078.421.422 1.078.422m13.5-15a1.3 1.3 0 0 0-.234-.328l-5.438-5.438a.7.7 0 0 0-.328-.187v5.203q.047.703.75.75zm-8.25 9h1.5q1.125.046 1.875.75.703.75.75 1.875-.047 1.125-.75 1.875-.75.704-1.875.75H9v1.5q-.047.704-.75.75-.703-.046-.75-.75v-6q.046-.704.75-.75m1.5 3.75q1.032-.093 1.125-1.125-.093-1.03-1.125-1.125H9v2.25zm4.5-3.75h1.5q.937.047 1.594.656.61.657.656 1.594v3a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 15.75 30h-1.5q-.703-.046-.75-.75v-6q.047-.704.75-.75m1.5 6q.704-.046.75-.75v-3q-.046-.704-.75-.75H15v4.5zm3.75-5.25q.046-.704.75-.75h2.25q.704.046.75.75-.046.704-.75.75H21v1.5h1.5q.704.046.75.75-.046.704-.75.75H21v2.25q-.046.704-.75.75-.704-.046-.75-.75v-6' />
    </g>
    <defs>
      <clipPath id='417b5771ab9530a07614144b5bbcd712__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfXlRegularIcon);
export default ForwardRef;
