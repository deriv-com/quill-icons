import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.531 5.469 14.5 11.5a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-5.5-5.469-5.469 5.47a.684.684 0 0 1-1.031 0c-.313-.282-.313-.75 0-1.063l6-6c.281-.282.75-.282 1.062 0m6 12-.031.031a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-5.5-5.468L2.5 18.53a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062l6-6c.281-.281.75-.281 1.062 0z' />
    </g>
    <defs>
      <clipPath id='42bb20b95c78696910fa7bb6daf72f1b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpMdBoldIcon);
export default ForwardRef;
