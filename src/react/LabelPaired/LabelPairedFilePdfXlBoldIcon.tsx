import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfXlBoldIcon = (
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
      <path d='M3 27.75h1.5V30H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.781q1.22 0 2.11.89l4.218 4.22Q18 12 18 13.265V19.5h-2.25v-6H12q-.656 0-1.078-.422Q10.5 12.657 10.5 12V8.25H3q-.703.047-.75.75v18q.046.704.75.75m5.25-5.25h1.5q1.125.046 1.875.75.703.75.75 1.875-.047 1.125-.75 1.875-.75.704-1.875.75H9v1.5q-.047.704-.75.75-.703-.046-.75-.75v-6q.046-.704.75-.75m1.5 3.75q1.032-.093 1.125-1.125-.093-1.03-1.125-1.125H9v2.25zm4.5-3.75h1.5q.937.047 1.594.656.61.657.656 1.594v3a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 15.75 30h-1.5q-.703-.046-.75-.75v-6q.047-.704.75-.75m1.5 6q.704-.046.75-.75v-3q-.046-.704-.75-.75H15v4.5zm3.75-5.25q.046-.704.75-.75h2.25q.704.046.75.75-.046.704-.75.75H21v1.5h1.5q.704.046.75.75-.046.704-.75.75H21v2.25q-.046.704-.75.75-.704-.046-.75-.75v-6' />
    </g>
    <defs>
      <clipPath id='fdee1ca784cc964788d6cd5e6ba5f869__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfXlBoldIcon);
export default ForwardRef;
