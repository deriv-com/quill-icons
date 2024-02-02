import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileXlBoldIcon = (
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
      <path d='M15 27.75q.703-.046.75-.75V13.5H12q-.656 0-1.078-.422Q10.5 12.657 10.5 12V8.25H3q-.703.047-.75.75v18q.046.704.75.75zM0 9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.781q1.22 0 2.11.89l4.218 4.22Q18 12 18 13.265V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27z' />
    </g>
    <defs>
      <clipPath id='432d49a3e94207ad__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileXlBoldIcon);
export default ForwardRef;
